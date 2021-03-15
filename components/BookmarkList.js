import { Calendar, Link } from 'react-feather';
import CustomLink from '../components/CustomLink';

export default function BookmarkList({ data, error }) {
  if (error)
    return (
      <div className="p-6 sm:px-12 sm:py-10">
        <h3>Bookmarks could not be loaded</h3>
        <p className="mt-2">
          There was an error fetching the bookmarks. Please try again later.
        </p>
      </div>
    );

  if (!data)
    return (
      <div className="p-6 sm:px-12 sm:py-8">
        <div className="bg-gray-200 rounded-md dark:bg-gray-800 animate-pulse h-7 w-44"></div>
        <div className="w-full h-3.5 mt-4 rounded-sm bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
        <div className="w-full h-3.5 mt-1 rounded-sm bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
        <div className="w-1/2 h-3.5 mt-1 rounded-sm bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
        <div className="flex space-x-6">
          <div className="w-32 h-3.5 mt-4 bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse"></div>
          <div className="w-32 h-3.5 mt-4 bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse"></div>
        </div>
      </div>
    );

  return (
    <>
      {data?.map((bookmark) => (
        <CustomLink
          href={bookmark.link}
          key={bookmark.id}
          className="block p-6 focus:bg-gray-50 dark:focus:bg-gray-800 focus:outline-none sm:px-12 sm:pt-7 hover:bg-gray-50 dark:hover:bg-gray-800 sm:pb-8 group"
        >
          <h3>{bookmark.title}</h3>
          <p className="mt-3">{bookmark.description}</p>
          <div className="flex flex-col mt-3 space-y-1 sm:space-x-6 sm:space-y-0 sm:flex-row">
            <div className="flex items-center space-x-2 text-sm font-semibold text-gray-500">
              <Calendar size={16} />
              <span>
                {new Intl.DateTimeFormat('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                }).format(new Date(bookmark.created))}
              </span>
            </div>
            <span className="flex items-center space-x-2 text-sm font-semibold text-gray-500 group-hover:text-blue-600">
              <Link size={16} />
              <span>{bookmark.domain}</span>
            </span>
          </div>
        </CustomLink>
      ))}
    </>
  );
}
