 MACA Local Control API — Developer Guide

> Control per-app audio on macOS programmatically from any language.

**Base URL:** `http://127.0.0.1:59622/v1`  
**Transport:** HTTP/1.1 over TCP (loopback only)  
**Content-Type:** `application/json`

> Current rollout model: the API is intentionally open for local development. Read requests are open. For all write requests, use the shared General Access Token shown in `Settings -> System -> API`. The token expires on the date shown there and can be extended by a newer MACA release.

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Quick Start](#quick-start)
  - [1. Check if MACA is running](#1-check-if-maca-is-running)
  - [2. List apps with audio](#2-list-apps-with-audio)
  - [3. Change volume](#3-change-volume)
- [Authentication](#authentication)
  - [Scopes](#scopes)
  - [What happens without a token?](#what-happens-without-a-token)
  - [What happens with an invalid token?](#what-happens-with-an-invalid-token)
- [Endpoints](#endpoints)
  - [GET /v1/status](#get-v1status)
  - [GET /v1/apps](#get-v1apps)
  - [GET /v1/apps/{bundleID}](#get-v1appsbundleid)
  - [GET /v1/output-devices](#get-v1output-devices)
  - [GET /v1/default-output-device](#get-v1default-output-device)
  - [GET /v1/focus-mode](#get-v1focus-mode)
  - [PUT /v1/apps/{bundleID}/volume](#put-v1appsbundleidvolume)
  - [PUT /v1/apps/{bundleID}/mute](#put-v1appsbundleidmute)
  - [PUT /v1/apps/{bundleID}/output-device](#put-v1appsbundleidoutput-device)
  - [PUT /v1/default-output-device](#put-v1default-output-device)
  - [PUT /v1/focus-mode](#put-v1focus-mode)
- [Smooth Volume Control](#smooth-volume-control)
  - [Preview Mode](#preview-mode)
  - [Commit Mode](#commit-mode)
  - [Recommended Pattern](#recommended-pattern)
- [Error Handling](#error-handling)
  - [Error Code Reference](#error-code-reference)
- [Pairing Flow](#pairing-flow)
  - [Step 1: Open the pairing URL](#step-1-open-the-pairing-url)
  - [Step 2: User approves in MACA](#step-2-user-approves-in-maca)
  - [Step 3: Receive the token](#step-3-receive-the-token)
  - [Step 4: Store the token](#step-4-store-the-token)
- [Code Examples](#code-examples)
  - [Python](#python)
  - [Swift](#swift)
  - [JavaScript (Node.js)](#javascript-nodejs)
  - [curl](#curl)
- [Integrations](#integrations)
- [Limits \& Notes](#limits--notes)

---

## Quick Start

### 1. Check if MACA is running

```bash
curl http://127.0.0.1:59622/v1/status
```

```json
{
  "app": "MACA",
  "version": "1.0.675",
  "build": "083",
  "apiVersion": "1",
  "features": {
    "perAppVolume": true,
    "perAppMute": true,
    "perAppRouting": true,
    "focusMode": true,
    "volumePreview": true
  }
}
```

### 2. List apps with audio

```bash
curl http://127.0.0.1:59622/v1/apps
```

### 3. Change volume

```bash
curl -X PUT http://127.0.0.1:59622/v1/apps/com.spotify.client/volume \
  -H "Authorization: Bearer YOUR_GENERAL_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"volume": 0.5}'
```

---

## Authentication

**Read endpoints** (GET) require no authentication.  
**Write endpoints** currently require a Bearer token. For the current rollout, the shared General Access Token shown in MACA Settings is the easiest option.

General control token:

```
Authorization: Bearer <general-access-token>
```

Where to find it:

- Open `Settings -> System -> API`
- Copy the current token from the `General Access Token` section
- Check the expiry date shown next to it

### Scopes

| Mode | GET | PUT per-app | PUT global |
|-------|-----|-------------|------------|
| No token | ✅ | ❌ | ❌ |
| General Access Token | ✅ | ✅ | ✅ |

- The shared General Access Token currently maps to full local write access.
- More granular per-app restrictions may be introduced in a later release.

### What happens without a token?

Without a token, only read endpoints work. All write endpoints return `401 Unauthorized`.

### What happens with an invalid token?

```
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer error="invalid_token"

{"error": {"code": "UNAUTHORIZED", "message": "The provided token is invalid or does not grant access to this endpoint."}}
```

---

## Endpoints

### GET /v1/status

Returns MACA version, API version, and available features.

```bash
curl http://127.0.0.1:59622/v1/status
```

**Response (200):**
```json
{
  "app": "MACA",
  "version": "1.0.675",
  "build": "083",
  "apiVersion": "1",
  "features": {
    "perAppVolume": true,
    "perAppMute": true,
    "perAppRouting": true,
    "focusMode": true,
    "volumePreview": true
  }
}
```

---

### GET /v1/apps

Returns all apps that currently have audio output.

```bash
curl http://127.0.0.1:59622/v1/apps
```

**Response (200):**
```json
[
  {
    "bundleID": "com.spotify.client",
    "name": "Spotify",
    "volume": 0.72,
    "isMuted": false,
    "outputDeviceUID": "BuiltInSpeakerDevice",
    "outputDeviceName": "MacBook Pro Speakers",
    "isRunning": true,
    "isPlaying": true,
    "pid": 1234
  },
  {
    "bundleID": "com.brave.Browser",
    "name": "Brave Browser",
    "volume": 1.0,
    "isMuted": false,
    "outputDeviceUID": null,
    "outputDeviceName": null,
    "isRunning": true,
    "isPlaying": false,
    "pid": 5678
  }
]
```

> **Note:** The response is a JSON array, not wrapped in `{"apps": [...]}`.

---

### GET /v1/apps/{bundleID}

Returns details for a specific app.

```bash
curl http://127.0.0.1:59622/v1/apps/com.spotify.client
```

**Response (200):**
```json
{
  "bundleID": "com.spotify.client",
  "name": "Spotify",
  "volume": 0.72,
  "isMuted": false,
  "outputDeviceUID": "BuiltInSpeakerDevice",
  "outputDeviceName": "MacBook Pro Speakers",
  "isRunning": true,
  "isPlaying": true,
  "pid": 1234
}
```

**Response (404):**
```json
{
  "error": {
    "code": "APP_NOT_FOUND",
    "message": "No running audio app found for bundle identifier com.spotify.client."
  }
}
```

---

### GET /v1/output-devices

Returns all available audio output devices.

```bash
curl http://127.0.0.1:59622/v1/output-devices
```

**Response (200):**
```json
[
  {
    "id": 67,
    "uid": "BuiltInSpeakerDevice",
    "name": "MacBook Pro Speakers",
    "icon": "speaker.fill",
    "isDefault": true,
    "isAirPlay": false,
    "isVirtual": false,
    "isBluetooth": false,
    "channelCount": 2
  },
  {
    "id": 82,
    "uid": "F8-FF-C2-01-99-00:output",
    "name": "AirPods Pro",
    "icon": "airpodspro",
    "isDefault": false,
    "isAirPlay": false,
    "isVirtual": false,
    "isBluetooth": true,
    "channelCount": 2
  }
]
```

---

### GET /v1/default-output-device

Returns the current system default output device.

```bash
curl http://127.0.0.1:59622/v1/default-output-device
```

**Response (200):**
```json
{
  "id": 67,
  "uid": "BuiltInSpeakerDevice",
  "name": "MacBook Pro Speakers",
  "icon": "speaker.fill",
  "isDefault": true,
  "isAirPlay": false,
  "isVirtual": false,
  "isBluetooth": false,
  "channelCount": 2
}
```

---

### GET /v1/focus-mode

Returns the current MACA Focus Mode status.

```bash
curl http://127.0.0.1:59622/v1/focus-mode
```

**Response (200):**
```json
{
  "active": false
}
```

---

### PUT /v1/apps/{bundleID}/volume

Set the volume for a specific app.

```bash
curl -X PUT http://127.0.0.1:59622/v1/apps/com.spotify.client/volume \
  -H "Authorization: Bearer YOUR_GENERAL_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"volume": 0.5}'
```

**Request body:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `volume` | Double | ✅ | 0.0 (silent) to 1.0 (full) |
| `mode` | String | ❌ | `"preview"` or `"commit"` (default: `"commit"`) |

**Response (200):** Returns the updated app DTO (same structure as GET /v1/apps/{bundleID}).

**Response (400):**
```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Volume 1.5 is outside the supported range of 0.0...1.0."
  }
}
```

---

### PUT /v1/apps/{bundleID}/mute

Mute or unmute a specific app.

```bash
curl -X PUT http://127.0.0.1:59622/v1/apps/com.spotify.client/mute \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"muted": true}'
```

**Request body:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `muted` | Boolean | ✅ | `true` to mute, `false` to unmute |

**Response (200):** Updated app DTO.

---

### PUT /v1/apps/{bundleID}/output-device

Route an app's audio to a specific output device.

```bash
curl -X PUT http://127.0.0.1:59622/v1/apps/com.spotify.client/output-device \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"deviceUID": "F8-FF-C2-01-99-00:output"}'
```

**Request body:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `deviceUID` | String | ✅ | UID of the target device (from GET /v1/output-devices) |

Set to `null` to reset to system default:
```json
{"deviceUID": null}
```

**Response (200):** Updated app DTO.

---

### PUT /v1/default-output-device

Change the system default output device.

```bash
curl -X PUT http://127.0.0.1:59622/v1/default-output-device \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"deviceUID": "BuiltInSpeakerDevice"}'
```

**Request body:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `deviceUID` | String | ✅ | UID of the device to set as default |

**Response (200):** Updated device DTO.

---

### PUT /v1/focus-mode

Toggle MACA Focus Mode.

```bash
curl -X PUT http://127.0.0.1:59622/v1/focus-mode \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"active": true}'
```

**Request body:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `active` | Boolean | ✅ | `true` to enable, `false` to disable |

**Response (200):**
```json
{"active": true}
```

---

## Smooth Volume Control

For building hardware controllers or software sliders, MACA supports two volume modes:

### Preview Mode

Use during slider dragging. Changes volume instantly but does **not** persist.

```json
{"volume": 0.45, "mode": "preview"}
```

- No disk write — very fast
- If MACA restarts, the old (committed) value is restored
- Send as many preview updates as you need

### Commit Mode

Use when the user releases the slider. Persists the volume.

```json
{"volume": 0.45, "mode": "commit"}
```

- Writes to disk — survives restarts
- Default if `mode` is omitted

### Recommended Pattern

```
User starts dragging  → PUT volume (mode: "preview") on each change
User releases slider  → PUT volume (mode: "commit") with final value
```

---

## Error Handling

All errors follow this format:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable description."
  }
}
```

### Error Code Reference

| HTTP | Code | When |
|------|------|------|
| 400 | `INVALID_REQUEST` | Bad JSON, missing fields, volume out of range |
| 401 | `UNAUTHORIZED` | Missing or invalid Bearer token on write endpoints |
| 403 | `FORBIDDEN` | Connection from non-loopback address |
| 403 | `TARGET_NOT_ALLOWED` | Token cannot control this app |
| 403 | `GLOBAL_CONTROL_NOT_ALLOWED` | Token lacks `writeAll` scope |
| 404 | `NOT_FOUND` | Unknown endpoint |
| 404 | `APP_NOT_FOUND` | No audio app with this bundle ID |
| 404 | `DEVICE_NOT_FOUND` | No device with this UID |
| 413 | `REQUEST_TOO_LARGE` | Request body > 64 KB |
| 500 | `INTERNAL_ERROR` | Unexpected server error |
| 503 | `SERVICE_UNAVAILABLE` | MACA is still starting up |

---

## Pairing Flow

Pairing still exists for future per-app or app-bound integrations. For the current rollout, most integrations can simply use the visible shared token from the settings.

To obtain a Bearer token, your app initiates a pairing request via URL scheme.

### Step 1: Open the pairing URL

```
maca://pair?client_name=My%20App&callback=myapp%3A%2F%2Fpaired&scopes=read%2Cwrite&bundle_id=com.example.myapp
```

| Parameter | Required | Description |
|-----------|----------|-------------|
| `client_name` | ✅ | Display name shown in consent dialog |
| `callback` | ✅ | URL where MACA sends the token |
| `scopes` | ✅ | Comma-separated: `read`, `write`, `writeAll` |
| `bundle_id` | ❌ | Your app's bundle ID (required if scope is `write`) |
| `helper_bundle_ids` | ❌ | Comma-separated helper app bundle IDs |

### Step 2: User approves in MACA

MACA shows a consent dialog. The user can approve or deny.

### Step 3: Receive the token

**On approval**, MACA opens your callback URL with:

```
myapp://paired?status=approved&token=a4Bx_kL9-Zm2pQ8n...&client_id=550e8400-...&port=59622&scopes=read,write
```

**On denial:**

```
myapp://paired?status=denied&error=access_denied
```

### Step 4: Store the token

Save the token securely (Keychain, credential store). It will not be shown again. Use it in the `Authorization: Bearer` header for all write requests.

---

## Code Examples

### Python

```python
import http.client
import json

HOST = "127.0.0.1"
PORT = 59622
TOKEN = "your-token-here"

def maca_get(path):
    conn = http.client.HTTPConnection(HOST, PORT, timeout=5)
    conn.request("GET", path)
    resp = conn.getresponse()
    data = json.loads(resp.read())
    conn.close()
    return resp.status, data

def maca_put(path, body):
    conn = http.client.HTTPConnection(HOST, PORT, timeout=5)
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {TOKEN}"
    }
    conn.request("PUT", path, json.dumps(body), headers)
    resp = conn.getresponse()
    data = json.loads(resp.read())
    conn.close()
    return resp.status, data

# Check if MACA is running
status_code, info = maca_get("/v1/status")
print(f"MACA {info['version']} (Build {info['build']})")

# List all audio apps
_, apps = maca_get("/v1/apps")
for app in apps:
    icon = "🔇" if app["isMuted"] else "🔊"
    print(f"  {icon} {app['name']}: {int(app['volume'] * 100)}%")

# Set Spotify to 50% volume
status, result = maca_put("/v1/apps/com.spotify.client/volume", {
    "volume": 0.5
})
if status == 200:
    print(f"Spotify volume → {int(result['volume'] * 100)}%")

# Mute Brave
maca_put("/v1/apps/com.brave.Browser/mute", {"muted": True})
```

---

### Swift

```swift
import Foundation

struct MACAClient {
    let baseURL = "http://127.0.0.1:59622/v1"
    let token: String
    
    func getApps() async throws -> [[String: Any]] {
        let url = URL(string: "\(baseURL)/apps")!
        let (data, _) = try await URLSession.shared.data(from: url)
        return try JSONSerialization.jsonObject(with: data) as? [[String: Any]] ?? []
    }
    
    func setVolume(bundleID: String, volume: Double, mode: String = "commit") async throws {
        let url = URL(string: "\(baseURL)/apps/\(bundleID)/volume")!
        var request = URLRequest(url: url)
        request.httpMethod = "PUT"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        request.httpBody = try JSONSerialization.data(withJSONObject: [
            "volume": volume,
            "mode": mode
        ])
        let (_, response) = try await URLSession.shared.data(for: request)
        guard let http = response as? HTTPURLResponse, http.statusCode == 200 else {
            throw URLError(.badServerResponse)
        }
    }
    
    func setMute(bundleID: String, muted: Bool) async throws {
        let url = URL(string: "\(baseURL)/apps/\(bundleID)/mute")!
        var request = URLRequest(url: url)
        request.httpMethod = "PUT"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        request.httpBody = try JSONSerialization.data(withJSONObject: ["muted": muted])
        let (_, response) = try await URLSession.shared.data(for: request)
        guard let http = response as? HTTPURLResponse, http.statusCode == 200 else {
            throw URLError(.badServerResponse)
        }
    }
}

// Usage
let client = MACAClient(token: "your-token-here")
let apps = try await client.getApps()
for app in apps {
    print("\(app["name"] ?? "?") — \(app["volume"] ?? 0)")
}
try await client.setVolume(bundleID: "com.spotify.client", volume: 0.5)
```

---

### JavaScript (Node.js)

```javascript
const http = require("http");

const MACA = {
  host: "127.0.0.1",
  port: 59622,
  token: "your-token-here",

  request(method, path, body = null) {
    return new Promise((resolve, reject) => {
      const headers = { Accept: "application/json" };
      if (body) headers["Content-Type"] = "application/json";
      if (method === "PUT") headers["Authorization"] = `Bearer ${this.token}`;

      const req = http.request(
        { hostname: this.host, port: this.port, path, method, headers },
        (res) => {
          let data = "";
          res.on("data", (chunk) => (data += chunk));
          res.on("end", () => resolve({ status: res.statusCode, data: JSON.parse(data) }));
        }
      );
      req.on("error", reject);
      if (body) req.write(JSON.stringify(body));
      req.end();
    });
  },

  getStatus()  { return this.request("GET", "/v1/status"); },
  getApps()    { return this.request("GET", "/v1/apps"); },
  getDevices() { return this.request("GET", "/v1/output-devices"); },

  setVolume(bundleID, volume, mode = "commit") {
    return this.request("PUT", `/v1/apps/${bundleID}/volume`, { volume, mode });
  },
  setMute(bundleID, muted) {
    return this.request("PUT", `/v1/apps/${bundleID}/mute`, { muted });
  },
};

// Usage
(async () => {
  const { data: status } = await MACA.getStatus();
  console.log(`MACA ${status.version}`);

  const { data: apps } = await MACA.getApps();
  apps.forEach((app) => console.log(`  ${app.name}: ${Math.round(app.volume * 100)}%`));

  await MACA.setVolume("com.spotify.client", 0.5);
  console.log("Spotify → 50%");
})();
```

---

### curl

```bash
# Status
curl -s http://127.0.0.1:59622/v1/status | python3 -m json.tool

# List apps
curl -s http://127.0.0.1:59622/v1/apps | python3 -m json.tool

# Get single app
curl -s http://127.0.0.1:59622/v1/apps/com.spotify.client | python3 -m json.tool

# List output devices
curl -s http://127.0.0.1:59622/v1/output-devices | python3 -m json.tool

# Set volume (needs token)
curl -X PUT http://127.0.0.1:59622/v1/apps/com.spotify.client/volume \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"volume": 0.5}'

# Mute an app
curl -X PUT http://127.0.0.1:59622/v1/apps/com.spotify.client/mute \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"muted": true}'

# Change default output device (needs writeAll token)
curl -X PUT http://127.0.0.1:59622/v1/default-output-device \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"deviceUID": "BuiltInSpeakerDevice"}'

# Toggle focus mode (needs writeAll token)
curl -X PUT http://127.0.0.1:59622/v1/focus-mode \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"active": true}'
```

---

## Integrations

MACA's API works with any tool that can send HTTP requests:

| Tool | How to use |
|------|------------|
| **Stream Deck** | HTTP Request plugin → set URL, method, headers, body |
| **Raycast** | Script Command (Bash/Python/Node) using curl or http.client |
| **Keyboard Maestro** | "Execute Shell Script" action with curl |
| **BetterTouchTool** | "Execute Terminal Command" trigger with curl |
| **Home Assistant** | REST command integration |
| **Shortcuts.app** | "Get Contents of URL" action |

---

## Limits & Notes

- **Loopback only.** The API only accepts connections from `127.0.0.1` / `::1`. Remote access is not supported.
- **MACA must be running.** The API is only available while MACA is active.
- **Local API must be enabled.** The user must enable the API in MACA Settings.
- **Max request size:** 64 KB body, 16 KB headers.
- **Port:** Default `59622`, configurable in MACA Settings.
- **One connection per request.** The server closes the connection after each response (`Connection: close`).
