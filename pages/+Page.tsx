/**
 * Root route '/' – Fallback wenn nginx-Redirect ausnahmsweise nicht greift.
 * Rendert die EN-HomeView als Default-Sprache.
 */
import { HomeView } from '../src/components/HomeView';
import '../src/index.css';

export default function Page() {
  return <HomeView />;
}
