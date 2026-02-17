import { Outlet } from 'react-router';
import { ScrollToTop } from '../components/ScrollToTop';
import { ScrollToTopButton } from '../components/ScrollToTopButton';

export function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <ScrollToTopButton />
      <Outlet />
    </>
  );
}
