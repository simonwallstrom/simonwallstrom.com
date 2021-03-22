import { Listbox } from '@headlessui/react';

export default function Dropdown({
  options,
  name,
  inputRef,
  category,
  handleCategory,
  type,
}) {
  return (
    <Listbox
      as="div"
      className="relative"
      value={category}
      onChange={handleCategory}
    >
      <Listbox.Button
        className="w-full px-4 py-3 text-left sm:px-6 focus:outline-none focus:relative focus:ring-1 focus:ring-blue-600"
        value={category?.name}
        name={name}
        ref={inputRef}
      >
        <div className="flex items-center justify-between">
          {!category ? (
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
      <Listbox.Options className="absolute w-full mt-1 bg-gray-800 border border-gray-700 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none dark:divide-gray-700">
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
                    active ? 'text-white dark:bg-gray-700' : 'text-gray-400'
                  } cursor-pointer focus:outline-none dark:hover:bg-gray-700 px-6 py-2.5`}
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
