import { useState } from 'react';
import useSWR from 'swr';
import BookmarkList from '../components/BookmarkList';
import { Card } from '../components/Card';
import PageHeader from '../components/PageHeader';
import Fetcher from '../lib/fetcher';

Bookmarks.Favicon = '📚️';

const bookmarkCollections = [
  {
    collectionId: '15713991',
    name: 'Design',
  },
  {
    collectionId: '15714010',
    name: 'Development',
  },
  {
    collectionId: '15714017',
    name: 'Inspiration',
  },
];

export default function Bookmarks() {
  const [activeTab, setActiveTab] = useState(
    bookmarkCollections[0].collectionId
  );

  const { data, error } = useSWR(
    `/api/bookmarks?collection=${activeTab}`,
    Fetcher
  );

  return (
    <>
      <PageHeader
        title="Bookmarks"
        text="Design tools, development resources and inspiring websites I come back to on a regular basis."
      />
      <Card className="flex overflow-hidden divide-x divide-gray-100 dark:divide-gray-800">
        {bookmarkCollections.map((bookmarkCollection) => (
          <div
            key={bookmarkCollection.collectionId}
            className="flex-auto sm:flex-1"
          >
            <button
              onClick={() => setActiveTab(bookmarkCollection.collectionId)}
              className={`w-full pb-4 pt-5 px-2  border-b-2 dark:focus:border-blue-400 focus:border-blue-600 focus:outline-none dark:active:bg-gray-800 active:bg-gray-100 border-transparent  ${
                activeTab === bookmarkCollection.collectionId
                  ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 cursor-default'
                  : 'hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {bookmarkCollection.name}
            </button>
          </div>
        ))}
      </Card>
      <Card className="mt-6 overflow-hidden divide-y divide-gray-100 dark:divide-gray-800">
        <BookmarkList data={data} error={error} />
      </Card>
    </>
  );
}
