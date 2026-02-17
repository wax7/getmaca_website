import { Outlet } from 'react-router';
import { ScrollToTop } from '../components/ScrollToTop';
import { ScrollToTopButton } from '../components/ScrollToTopButton';
import { DocumentHead } from '../components/DocumentHead';

export function RootLayout() {
  return (
    <>
      <DocumentHead />
      <ScrollToTop />
      <ScrollToTopButton />
      <Outlet />
    </>
  );
}