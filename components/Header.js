import Link from 'next/link';
import NavLink from './NavLink';

export default function Header({ favicon }) {
  return (
    <header className="site-header">
      <div className="flex items-center justify-between max-w-2xl mx-auto sm:flex-row">
        <div className="hidden font-medium sm:block">
          <Link href="/">
            <a className="flex items-center">
              <span className="mr-2 text-xl">{favicon}</span>
              <span>Simon Wallström</span>
            </a>
          </Link>
        </div>
        <nav className="flex items-center justify-center flex-1 space-x-4 sm:space-x-7 sm:justify-end">
          <NavLink href="/">Dashboard</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/notes">Notes</NavLink>
        </nav>
      </div>
    </header>
  );
}
