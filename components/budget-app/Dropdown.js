import { Listbox } from '@headlessui/react';

export default function Dropdown({ options, category, handleCategory, type }) {
  return (
    <Listbox
      as="div"
      className="relative"
      value={category}
      onChange={handleCategory}
    >
      <Listbox.Button className="w-full px-4 py-3 text-left sm:px-6 focus:outline-none focus:relative focus:ring-1 focus:ring-blue-600">
        <div className="flex items-center justify-between">
          {!category?.name ? (
            <span className="text-gray-400 clamp-1">Category...</span>
          ) : (
            <span>{category?.name}</span>
          )}
          <svg
            className="w-5 h-5 mt-px text-gray-400"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M7 7l3-3 3 3m0 6l-3 3-3-3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Listbox.Button>
      <Listbox.Options className="absolute w-full mt-1 bg-white border border-gray-100 divide-y divide-gray-100 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none dark:divide-gray-700">
        {options
          .filter((option) => option.type == type)
          .map((option) => (
            <Listbox.Option
              className="focus:outline-none"
              key={option.name}
              value={option}
            >
              {({ active }) => (
                <div
                  className={`${
                    active
                      ? 'dark:text-white text-black bg-gray-100 dark:bg-gray-700'
                      : 'text-gray-500 dark:text-gray-400'
                  } cursor-pointer focus:outline-none px-6 py-2.5`}
                >
                  {option.name}
                </div>
              )}
            </Listbox.Option>
          ))}
      </Listbox.Options>
    </Listbox>
  );
}
