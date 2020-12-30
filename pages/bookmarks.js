import { Info } from 'react-feather';
import PageHeader from '../components/PageHeader';

Bookmarks.Favicon = '📚️';

export default function Bookmarks() {
  return (
    <>
      <PageHeader
        title="Bookmarks"
        text="Interesting things I'm saving for later."
      />
      <div className="max-w-2xl mx-auto mt-10 md:mt-16 lg:mt-20">
        <div className="flex p-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-lg md:text-base">
          <Info className="mr-3" size={20} />
          <div className="flex-1 md:leading-tight">
            This page is under construction. Check back soon for some actual
            content.
          </div>
        </div>
      </div>
    </>
  );
}
