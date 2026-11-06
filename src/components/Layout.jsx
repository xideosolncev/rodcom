import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';

/** Shared page frame: sticky glass navbar, friendly hero, routed content, footer. */
export default function Layout() {
  const { pathname } = useLocation();

  // Start every section at the top when navigating.
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Hero />
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">
        Made with 💛 by the parent committee · {new Date().getFullYear()}
      </footer>
    </>
  );
}
