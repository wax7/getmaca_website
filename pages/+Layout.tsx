import type { ReactNode } from 'react';
import { RootLayout } from '../src/layouts/RootLayout';

export default function Layout({ children }: { children: ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
