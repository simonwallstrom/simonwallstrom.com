import { useRouter } from 'next/router';

export default function NavLink({ children, href }) {
  const router = useRouter();
  const classNames =
    router.pathname === href
      ? 'border-blue-600 text-blue-600'
      : 'hover:text-blue-600';

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href).then(() => window.scrollTo(0, 0));
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`border-b-2 border-transparent pt-5 py-4 -mt-0.5 ${classNames}`}
    >
      {children}
    </a>
  );
}
