import Link from 'next/link';
import ExternalLink from '../components/ExternalLink';
import { ArrowUpRight, Sun, Moon, Zap, Star } from 'react-feather';
import { Card, CardContent, CardHeader } from './Card';
import useDarkMode from '../hooks/useDarkMode';

export default function ProjectCard(props) {
  const {
    project: { image, imageDark, category, title, text, link, linkText },
  } = props;

  const isFeatured = props.isFeatured || false;
  const isDark = useDarkMode();

  const colors = {
    yellow: 'text-yellow-700 dark:text-yellow-400',
    blue: 'text-blue-600 dark:text-blue-400',
    red: 'text-red-600 dark:text-red-400',
    black: 'text-black dark:text-white',
  };

  let name;
  let color;
  let Icon;
  switch (category) {
    case 'Day job':
      name = 'Day Job';
      color = 'yellow';
      Icon = Sun;
      break;
    case 'Night job':
      name = 'Night job';
      color = 'blue';
      Icon = Moon;
      break;
    case 'Side project':
      name = 'Side project';
      color = 'red';
      Icon = Zap;
      break;
    default:
      name = 'Default';
      color = 'black';
      Icon = Star;
  }

  if (isFeatured) {
    name = 'My latest project';
    Icon = Star;
  }

  return (
    <Card>
      {!isFeatured && image ? (
        <div className="flex items-center justify-center rounded-t-lg h-52 sm:h-72 bg-gradient-to-b from-white dark:from-gray-950 via-white to-gray-100 dark:to-gray-900">
          <img src={isDark ? imageDark : image} />
        </div>
      ) : null}
      <CardContent>
        <CardHeader
          text={name}
          icon={<Icon size={18} />}
          className={`${colors[color]}`}
        />
        <h2 className="mt-2">{title}</h2>
        <div className="mt-2 text-gray-600 sm:mt-3 dark:text-gray-400">
          {text}
        </div>
        <div className="flex flex-col mt-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row sm:mt-6">
          <ExternalLink
            href={link}
            className="flex items-center justify-center pr-5 space-x-2 btn btn--primary"
          >
            <span>{linkText}</span>
            <ArrowUpRight size="16" className="text-blue-200" />
          </ExternalLink>
          {isFeatured ? (
            <Link href="/projects">
              <a className="flex justify-center btn btn--outline">
                See all projects
              </a>
            </Link>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
