import Image from 'next/image';
import Link from 'next/link';
import ExternalLink from '../components/ExternalLink';
import { ArrowUpRight, Sun, Moon, Zap, Star } from 'react-feather';
import { Card, CardContent, CardHeader } from './Card';

export default function ProjectCard(props) {
  const {
    project: { image, category, title, text, link, linkText },
  } = props;

  const isFeatured = props.isFeatured || false;

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
        <div className="flex">
          <Image
            className="rounded-t-lg"
            src={image}
            width="1500"
            height="700"
          />
        </div>
      ) : null}
      <CardContent>
        <CardHeader
          text={name}
          icon={<Icon size={18} />}
          className={`${colors[color]}`}
        />
        <h2 className="mt-2">{title}</h2>
        <div className="mt-3 text-gray-600">{text}</div>
        <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:mt-6">
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
