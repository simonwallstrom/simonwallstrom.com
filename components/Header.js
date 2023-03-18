import Link from 'next/link';
import NavLink from './NavLink';

export default function Header({ favicon }) {
  return (
    <header className="site-header">
      <div className="flex items-center justify-between max-w-2xl mx-auto sm:flex-row">
        <div className="hidden font-medium sm:block">
          <Link className="flex items-center" href="/">
            <span className="mr-2 text-xl">{favicon}</span>
            <span className="dark:text-white">Simon Wallström</span>
          </Link>
        </div>
        <nav className="flex items-center justify-center flex-1 space-x-4 sm:space-x-7 sm:justify-end">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/bookmarks">Bookmarks</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
