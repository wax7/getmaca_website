/**
 * router-adapter.tsx
 * ─────────────────────────────────────────────────────────────────────
 * Drop-in-Replacement für die `react-router` API mit Vike-Backend.
 *
 * Statt 21 Files einzeln umzubauen ändern wir nur den Import-Pfad
 *   from 'react-router'  →  from '@/utils/router-adapter'
 * und alle Hooks, Links, Outlets funktionieren über Vike weiter.
 *
 * Vike-Konfiguration (siehe pages/+config.ts):
 *   - ssr: true
 *   - clientRouting: true  → Vike übernimmt SPA-Navigation für <a href>
 *
 * Daher reicht ein einfaches <a href="..."> als Link – Vike fängt
 * den Klick ab und macht Client-side-Navigation, sofern aktiv.
 * ─────────────────────────────────────────────────────────────────────
 */
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import React, { useEffect } from 'react';
import { usePageContext } from 'vike-react/usePageContext';

// ─── Hooks ────────────────────────────────────────────────────────────

export function useParams<T extends Record<string, string | undefined> = Record<string, string | undefined>>(): T {
  const ctx = usePageContext();
  return (ctx.routeParams ?? {}) as T;
}

export function useLocation() {
  const ctx = usePageContext();
  const path = (ctx.urlPathname ?? '/') as string;
  // ctx.urlParsed available in Vike runtime; fall back gracefully.
  const parsed: any = (ctx as any).urlParsed ?? {};
  const searchObj = parsed.search ?? {};
  const searchStr =
    searchObj && typeof searchObj === 'object' && Object.keys(searchObj).length
      ? '?' + new URLSearchParams(searchObj).toString()
      : '';
  const hash = parsed.hash ? `#${parsed.hash}` : '';
  return {
    pathname: path,
    search: searchStr,
    hash,
    state: null as unknown,
    key: 'default',
  };
}

type NavigateFn = (
  to: string | number,
  options?: { replace?: boolean; state?: unknown },
) => void;

export function useNavigate(): NavigateFn {
  return (to, options) => {
    if (typeof window === 'undefined') return; // SSR-No-Op
    if (typeof to === 'number') {
      window.history.go(to);
      return;
    }
    // Lazy-Import um Build/SSR-Probleme zu vermeiden
    import('vike/client/router')
      .then(({ navigate }) => {
        void navigate(to, { overwriteLastHistoryEntry: !!options?.replace });
      })
      .catch(() => {
        // Fallback: Hard-Reload falls clientRouting aus
        if (options?.replace) window.location.replace(to);
        else window.location.assign(to);
      });
  };
}

// ─── Components ───────────────────────────────────────────────────────

type LinkProps = {
  to: string;
  replace?: boolean;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

/**
 * <Link to="/de/faq"> – Vike client-routing übernimmt automatisch,
 * sofern clientRouting:true gesetzt ist. Sonst Standard-Anchor.
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function Link({ to, replace: _replace, children, ...rest }, ref) {
    return (
      <a ref={ref} href={to} {...rest}>
        {children}
      </a>
    );
  },
);

type NavigateProps = { to: string; replace?: boolean };

/**
 * <Navigate to="/x" /> – führt im Browser eine Client-Side-Navigation aus.
 * Während des SSR rendert es nichts; clientseitig (useEffect) navigiert es.
 */
export function Navigate({ to, replace }: NavigateProps): null {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    import('vike/client/router')
      .then(({ navigate }) => {
        void navigate(to, { overwriteLastHistoryEntry: !!replace });
      })
      .catch(() => {
        if (replace) window.location.replace(to);
        else window.location.assign(to);
      });
  }, [to, replace]);
  return null;
}

/**
 * <Outlet /> – im React-Router war das der Slot fürs Child-Routing.
 * In Vike ist das Layout-Pattern: pages/+Layout.tsx erhält {children},
 * sodass <Outlet/> hier praktisch ein No-Op ist.
 *
 * Wir rendern absichtlich children = undefined, damit alte Outlet-Stellen
 * unschädlich werden, ohne das DOM zu ändern.
 */
export function Outlet(): null {
  return null;
}

// ─── Re-Exports für Drop-in-Kompatibilität ────────────────────────────
// Falls irgendwo `import { createBrowserRouter, RouterProvider } from 'react-router'`
// genutzt wurde (App.tsx), exportieren wir dummy-Versionen, sodass Builds
// nicht crashen, falls solche Importe übrig bleiben.

export function createBrowserRouter(_routes: unknown): unknown {
  return null;
}
export function RouterProvider(_props: unknown): null {
  return null;
}
