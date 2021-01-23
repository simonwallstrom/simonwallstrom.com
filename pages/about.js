import { Card, CardContent } from '../components/Card';
import PageHeader from '../components/PageHeader';

About.Favicon = '🧐';

export default function About() {
  return (
    <>
      <PageHeader
        title="About me"
        text="Product designer at Get&nbsp;a&nbsp;Newsletter and cofounder of
          Craftmade. Currently living in Stockholm, Sweden."
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
