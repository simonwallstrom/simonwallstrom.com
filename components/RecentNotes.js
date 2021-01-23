import Link from 'next/link';
import { Card, CardContent, CardHeader } from './Card';
import { BookOpen } from 'react-feather';

const posts = [
  {
    id: 1,
    date: 'Jan 5, 2021',
    title: 'This section is under construction',
    text:
      'In order to avoid infinite procrastination I decided to ship fast and build in the open. Check back soon for some actual content.',
  },
  {
    id: 2,
    date: 'Jan 10, 2021',
    title:
      'Just trying out the layout for the notes and hope it looks good on two lines?',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nihil facere nulla ullam sed fugit sequi numquam nostrum voluptates dolor sit amet.',
  },
];

const RecentNotes = () => {
  return (
    <Card>
      <CardContent>
        <CardHeader
          text="Recent notes"
          icon={<BookOpen size={18} />}
          className="text-yellow-700 dark:text-yellow-400"
        />
        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {posts.map((post) => (
            <div key={post.id} className="py-4 sm:py-6">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {post.date}
              </div>
              <h3 className="mt-1 leading-tight">{post.title}</h3>
              <p className="mt-1.5 clamp-3 text-gray-600 dark:text-gray-400">
                {post.text}
              </p>
            </div>
          ))}
        </div>
        <div className="">
          <Link href="/notes">
            <a className="block text-center btn btn--outline">See all notes</a>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentNotes;
