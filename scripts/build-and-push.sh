#!/bin/bash

set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m'

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"

REGISTRY="ghcr.io"
REPO_OWNER="wax7"
IMAGE_NAME="getmaca_website"
IMAGE_FULL_NAME="$REGISTRY/$REPO_OWNER/$IMAGE_NAME"
MULTIARCH_PLATFORMS="linux/amd64,linux/arm64"

TAG="${1:-latest}"
TIMESTAMP=$(date -u +'%Y-%m-%dT%H:%M:%SZ')
GIT_SHA=$(cd "$REPO_DIR" && git rev-parse --short HEAD 2>/dev/null || echo "unknown")
GIT_BRANCH=$(cd "$REPO_DIR" && git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "main")

echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}  🐳 GetMaca Website Build & Push${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}\n"

echo -e "${BLUE}Configuration:${NC}"
echo -e "  Image: $IMAGE_FULL_NAME:$TAG"
echo -e "  Git: $GIT_BRANCH@$GIT_SHA"
echo -e "  Built: $TIMESTAMP"
echo -e "  Multi-Arch: $MULTIARCH_PLATFORMS"
echo -e "  Repo: $REPO_DIR\n"

cd "$REPO_DIR"

echo -e "${BLUE}▶ Step 1: Prepare SEO artifacts${NC}"
if [ -x scripts/prepare_seo_artifacts.sh ]; then
  bash scripts/prepare_seo_artifacts.sh
else
  echo -e "${YELLOW}  → scripts/prepare_seo_artifacts.sh not executable, skipping${NC}"
fi
echo ""

echo -e "${BLUE}▶ Step 2: Build local image for test${NC}"
docker build \
  --tag "$IMAGE_FULL_NAME:$TAG" \
  --tag "$IMAGE_FULL_NAME:latest" \
  --label "org.opencontainers.image.source=https://github.com/$REPO_OWNER/Multilingualmarketingwebsite" \
  --label "org.opencontainers.image.revision=$GIT_SHA" \
  --label "org.opencontainers.image.created=$TIMESTAMP" \
  --label "build.branch=$GIT_BRANCH" \
  .
echo -e "${GREEN}✓ Local image built successfully${NC}\n"

echo -e "${BLUE}▶ Step 3: Optional local runtime test${NC}"
echo -e "  ${BLUE}docker run --rm -p 18080:80 $IMAGE_FULL_NAME:$TAG${NC}"
echo ""

read -p "Push multi-arch image to GHCR? (y/n) " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo -e "${BLUE}▶ Step 4: Multi-arch push via buildx${NC}\n"

  if ! docker buildx version >/dev/null 2>&1; then
    echo -e "${RED}✗ docker buildx is not available.${NC}"
    exit 1
  fi

  if ! docker info | grep -q "Username:"; then
    echo -e "${YELLOW}▶ Not logged in to GHCR${NC}"
    docker login "$REGISTRY"
  fi

  if ! docker buildx inspect multiarch-builder >/dev/null 2>&1; then
    echo -e "${BLUE}  → Creating buildx builder: multiarch-builder${NC}"
    docker buildx create --name multiarch-builder --use >/dev/null
  else
    docker buildx use multiarch-builder >/dev/null
  fi

  docker buildx inspect --bootstrap >/dev/null

  BUILD_TAG_ARGS=(--tag "$IMAGE_FULL_NAME:$TAG")
  if [ "$TAG" != "latest" ]; then
    BUILD_TAG_ARGS+=(--tag "$IMAGE_FULL_NAME:latest")
  fi

  docker buildx build \
    --platform "$MULTIARCH_PLATFORMS" \
    "${BUILD_TAG_ARGS[@]}" \
    --label "org.opencontainers.image.source=https://github.com/$REPO_OWNER/Multilingualmarketingwebsite" \
    --label "org.opencontainers.image.revision=$GIT_SHA" \
    --label "org.opencontainers.image.created=$TIMESTAMP" \
    --label "build.branch=$GIT_BRANCH" \
    --push \
    .

  echo -e "\n${GREEN}✓ Multi-arch image pushed successfully${NC}"
  echo -e "${GREEN}✓ Watchtower can now pull the new image${NC}\n"
else
  echo -e "${YELLOW}Skipped push.${NC}"
  echo -e "${BLUE}To push later:${NC}"
  echo -e "  ${BLUE}./scripts/build-and-push.sh $TAG${NC}\n"
fi

echo -e "${GREEN}═══════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}  ✓ Done${NC}"
echo -e "${GREEN}═══════════════════════════════════════════════════════${NC}\n"