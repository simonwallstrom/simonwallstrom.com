import { useState, useRef, useEffect } from 'react';
import { MoreHorizontal, Plus } from 'react-feather';
import { useForm } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import { Listbox } from '@headlessui/react';
import { categories } from '../../data/kitty';

export default function BudgetList({ handleData, data, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const name = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState();

  const onSubmit = (data, e) => {
    handleData(data);
    e.target.reset();
    setSelectedCategory('');
  };

  const showAddForm = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (name.current) {
      name.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="min-w-full divide-y divide-gray-100 dark:divide-gray-800">
      <div className="flex items-center justify-between px-6 py-5">
        <h2 className="text-xl">Your {type}</h2>
        <button
          type="button"
          onClick={showAddForm}
          className={`flex items-center focus:outline-none focus:ring-1 focus:ring-blue-600 justify-center w-8 h-8 text-blue-600 transition-transform transform bg-gray-100 rounded-full hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-blue-400 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
          <Plus size={16} strokeWidth={3} />
        </button>
      </div>
      <div className="flex items-center">
        <div className="w-4/12 px-6 py-3 font-mono text-sm tracking-wide text-left text-gray-500 uppercase">
          Name
        </div>
        <div className="w-4/12 px-6 py-3 font-mono text-sm tracking-wide text-left text-gray-500 uppercase">
          Category
        </div>
        <div className="w-3/12 px-6 py-3 font-mono text-sm tracking-wide text-left text-gray-500 uppercase">
          Amount
        </div>
      </div>

      {data?.map((type) => (
        <div className="flex items-center" key={type.name}>
          <div className="w-4/12 px-6 py-3">{type.name}</div>
          <div className="flex items-center w-4/12 px-6 py-3 space-x-1.5">
            <span
              className={`px-3 bg-gray-100 font-medium dark:bg-gray-800 text-sm py-0.5 rounded-full ${type.category.color}`}
            >
              {type.category.name}
            </span>
          </div>
          <div className="w-3/12 px-6 py-3">
            <NumberFormat
              value={type.amount}
              displayType={'text'}
              thousandSeparator={' '}
              suffix={':-'}
            />
          </div>
          <div className="w-1/12 px-6 py-3 text-right">
            <div className="flex justify-end">
              <button className="text-gray-400 hover:text-gray-900" href="#">
                <MoreHorizontal size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}

      {isOpen && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center">
            <div className="w-4/12">
              <Input
                id="name"
                inputRef={(e) => {
                  register(e, { required: true });
                  name.current = e;
                }}
                name="name"
                placeholder="Name..."
              />
            </div>
            <div className="w-4/12">
              <Dropdown
                options={categories}
                type={type}
                category={selectedCategory}
                handleCategory={setSelectedCategory}
                name="category.name"
                inputRef={register({ required: true })}
              />
              <input
                type="hidden"
                ref={register}
                value={selectedCategory?.category?.color || ''}
                name="category.color"
              />
            </div>
            <div className="w-3/12">
              <Input
                type="number"
                inputRef={register({ valueAsNumber: true, required: true })}
                name="amount"
                placeholder="Amount..."
              />
            </div>
            <div className="flex w-1/12">
              <button
                className="flex items-center justify-center w-full py-3 font-medium bg-gray-100 hover:text-blue-600 dark:bg-gray-800 dark:hover:text-blue-400 focus:outline-none focus:relative focus:ring-1 focus:ring-blue-600"
                type="submit"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      )}

      <div className="flex font-semibold rounded-b-lg">
        <div className="w-8/12 px-6 py-4">Total {type}</div>
        <div className="w-4/12 px-6 py-4">
          <NumberFormat
            value={data?.reduce((acc, type) => acc + type.amount, 0)}
            displayType={'text'}
            thousandSeparator={' '}
            suffix={':-'}
          />
        </div>
      </div>
    </div>
  );
}

const Input = ({ name, placeholder, inputRef, type = 'text' }) => {
  return (
    <input
      className="w-full px-6 py-3 outline-none dark:focus:bg-gray-800 dark:bg-gray-900 focus:bg-gray-50 focus:relative focus:ring-1 focus:ring-blue-600"
      type={type}
      name={name}
      placeholder={placeholder}
      ref={inputRef}
    />
  );
};

function Dropdown({ options, name, inputRef, category, handleCategory, type }) {
  return (
    <Listbox
      as="div"
      className="relative"
      value={category}
      onChange={handleCategory}
    >
      <Listbox.Button
        className="w-full px-6 py-3 text-left focus:outline-none focus:relative focus:ring-1 focus:ring-blue-600"
        value={category?.category?.name}
        name={name}
        ref={inputRef}
      >
        <div className="flex items-center justify-between">
          {!category ? (
            <span className="text-gray-400">Category...</span>
          ) : (
            <span>{category?.category?.name}</span>
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
              key={option.category.name}
              value={option}
            >
              {({ active }) => (
                <div
                  className={`${
                    active ? 'text-white dark:bg-gray-700' : 'text-gray-400'
                  } cursor-pointer focus:outline-none dark:hover:bg-gray-700 px-6 py-2.5`}
                >
                  {option.category.name}
                </div>
              )}
            </Listbox.Option>
          ))}
      </Listbox.Options>
    </Listbox>
  );
}
