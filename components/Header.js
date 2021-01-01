import { useEffect, useRef } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';

export default function Header({ favicon }) {
  const siteHeader = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle('md:shadow', e.intersectionRatio < 1),
      { threshold: [1] }
    );
    observer.observe(siteHeader.current);
  }, []);
  return (
    <header
      ref={siteHeader}
      className="sticky top-0 z-10 w-full px-4 bg-white border-b border-gray-200 md:border-none site-header md:-top-px md:px-8 md:mt-8 bg-opacity-60"
    >
      <div className="flex items-center justify-between max-w-4xl py-4 mx-auto md:flex-row">
        <div className="hidden font-medium md:block">
          <Link href="/">
            <a>
              <span className="mr-1">{favicon}</span> Simon Wallström
            </a>
          </Link>
        </div>
        <nav className="flex items-center justify-center flex-1 space-x-3 text-sm md:text-base md:space-x-6 md:justify-end">
          <NavLink href="/">Dashboard</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/notes">Notes</NavLink>
          <NavLink href="/bookmarks">Bookmarks</NavLink>
        </nav>
      </div>
    </header>
  );
}
