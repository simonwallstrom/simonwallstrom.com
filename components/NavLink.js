import { useRouter } from 'next/router';
import { RoughNotation } from 'react-rough-notation';

export default function NavLink({ children, href }) {
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
