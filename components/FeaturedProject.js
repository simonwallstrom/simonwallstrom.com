import Link from 'next/link';
import { ArrowUpRight, Sun, Moon, Zap } from 'react-feather';
import Card from './Card';
import ExternalLink from './ExternalLink';

const FeaturedProject = ({
  category,
  title,
  text,
  moreLink,
  visitLink,
  children,
}) => {
  const colors = {
    yellow: 'text-yellow-700',
    blue: 'text-blue-600',
    red: 'text-red-600',
    black: 'text-black',
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
      color = 'blue';
      Icon = Star;
  }

  return (
    <Card>
      <div className="flex-1">
        <div className={`flex items-center ${colors[color]}`}>
          <div className="mr-2">
            <Icon size={16} />
          </div>
          <div className="text-xs font-medium tracking-widest uppercase">
            {name}
          </div>
        </div>
        <h2 className="mt-2">{title}</h2>
        <div className="mt-2 text-gray-900">{text}</div>
      </div>
      {children}
      {moreLink ? (
        <div className="flex mt-6 space-x-4">
          <Link href={`/projects#${moreLink}`}>
            <a className="flex-1 text-center btn btn--light">Learn more</a>
          </Link>
          <ExternalLink
            href={visitLink}
            className="flex items-center justify-center flex-1 btn btn--outline"
          >
            Visit site
            <ArrowUpRight size="16" className="ml-1 text-gray-500" />
          </ExternalLink>
        </div>
      ) : (
        <div className="mt-6 text-center btn btn--outline btn--disabled">
          Coming soon...
        </div>
      )}
    </Card>
  );
};

export default FeaturedProject;
