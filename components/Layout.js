import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { RoughNotation } from 'react-rough-notation';
import Footer from './Footer';

export default function Layout({ children, favicon }) {
  const siteHeader = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle('shadow', e.intersectionRatio < 1),
      { threshold: [1] }
    );
    observer.observe(siteHeader.current);
  }, [siteHeader]);

  return (
    <>
      <Head>
        <title>Simon Wallström</title>
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text fill=%22%23FFD03D%22 y=%22.85em%22 font-size=%22100%22>${favicon}</text></svg>`}
        />
      </Head>
      <header
        ref={siteHeader}
        style={{
          backdropFilter: 'saturate(180%) blur(20px)',
        }}
        className="fixed top-0 z-10 w-full px-4 bg-gray-200 md:bg-white md:-top-px md:px-8 md:sticky md:mt-8 bg-opacity-60 md:bg-opacity-60"
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
      <div className="h-14 md:h-0"></div>
      <main className="px-4 py-10 md:py-16 lg:py-24 md:px-8">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
}

function NavLink({ children, href }) {
  const router = useRouter();
  const classNames =
    router.pathname === href ? 'cursor-default' : 'hover:text-gray-700';

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href).then(() => window.scrollTo(0, 0));
  };

  return (
    <a href={href} onClick={handleClick} className={classNames}>
      <RoughNotation
        type="highlight"
        color="#FDE68A"
        animationDuration={400}
        show={router.pathname === href ? true : false}
      >
        {children}
      </RoughNotation>
    </a>
  );
}
