import CustomLink from '../components/CustomLink';
import { ArrowUpRight, Sun, Moon, Zap, Star } from 'react-feather';
import { Card, CardContent, CardHeader } from './Card';
import Image from 'next/image';

export default function ProjectCard(props) {
  const {
    project: { image, category, title, text, link, linkText },
  } = props;

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

  return (
    <Card>
      <div className="flex rounded-t-lg bg-gray-50 dark:bg-gray-800">
        <Image
          className="rounded-t-lg"
          src={image}
          quality={100}
          width="1000px"
          height="500px"
        />
      </div>
      <CardContent>
        <CardHeader
          text={name}
          icon={<Icon size={18} />}
          className={`${colors[color]}`}
        />
        <h2 className="mt-2">{title}</h2>
        <p className="mt-2 sm:mt-3">{text}</p>
        <div className="flex flex-col mt-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row sm:mt-6">
          <CustomLink
            href={link}
            className="flex items-center justify-center pr-5 space-x-2 btn btn--primary"
          >
            <span>{linkText}</span>
            <ArrowUpRight size="16" className="text-blue-200" />
          </CustomLink>
        </div>
      </CardContent>
    </Card>
  );
}
