import { Card, CardContent } from '../components/Card';
import PageHeader from '../components/PageHeader';

Notes.Favicon = '✍️';

export default function Notes() {
  return (
    <>
      <PageHeader
        title="Notes"
        text="My thoughts on design and frontend development."
      />
      <Card>
        <CardContent>
          <h2>Nothing to see yet...</h2>
          <div className="mt-3 text-gray-500 dark:text-gray-400">
            <span className="font-medium text-black dark:text-white">
              This page is under construction.
            </span>{' '}
            In order to avoid infinite procrastination I decided to ship fast
            and build in the open. Check back soon for some actual content.
          </div>
        </CardContent>
      </Card>
    </>
  );
}
