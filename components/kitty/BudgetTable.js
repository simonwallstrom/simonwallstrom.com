import { useState } from 'react';
import { Plus, X } from 'react-feather';
import NumberFormat from 'react-number-format';
import Form from './Form';

export default function BudgetTable({ handleData, handleDelete, data, type }) {
  const [isOpen, setIsOpen] = useState(false);

  const showAddForm = () => {
    setIsOpen(!isOpen);
  };

  const categoryColor = (category) => {
    let color;

    switch (category) {
      case 'Active':
        color = 'text-teal-600 dark:text-teal-400';
        break;
      case 'Passive':
        color = 'text-indigo-600 dark:text-indigo-400';
        break;
      case 'Housing':
        color = 'text-yellow-600 dark:text-yellow-400';
        break;
      case 'Transport':
        color = 'text-red-600 dark:text-red-400';
        break;
      case 'Savings':
        color = 'text-blue-600 dark:text-blue-400';
        break;
      case 'Utilities':
        color = 'text-green-600 dark:text-green-400';
        break;
      case 'Entertainment':
        color = 'text-pink-600 dark:text-pink-400';
    }
    return color;
  };

  return (
    <div className="min-w-full text-sm divide-y divide-gray-100 sm:text-base dark:divide-gray-800">
      <div className="flex items-center justify-between p-4 sm:py-5 sm:px-6">
        <h2 className="text-lg sm:text-xl">Your {type}</h2>
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
        <div className="w-4/12 px-4 py-3 font-mono text-xs tracking-wide text-left text-gray-500 uppercase sm:text-sm sm:px-6">
          Name
        </div>
        <div className="w-4/12 px-4 py-3 font-mono text-xs tracking-wide text-left text-gray-500 uppercase sm:text-sm sm:px-6">
          Category
        </div>
        <div className="w-3/12 px-4 py-3 font-mono text-xs tracking-wide text-left text-gray-500 uppercase sm:text-sm sm:px-6">
          Amount
        </div>
      </div>

      {data?.map((type) => (
        <div className="flex items-center" key={type.id}>
          <div className="w-4/12 px-4 py-3 sm:px-6">
            <div className="clamp-1">{type.name}</div>
          </div>
          <div className="flex items-center w-4/12 px-4 sm:px-6 py-3 space-x-1.5">
            <span
              className={`px-2.5 bg-gray-100 font-medium dark:bg-gray-800 text-xs sm:text-sm py-0.5 rounded-full ${categoryColor(
                type.category
              )}`}
            >
              {type.category}
            </span>
          </div>
          <div className="w-3/12 px-4 py-3 sm:px-6">
            <NumberFormat
              value={type.amount}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'€'}
            />
          </div>
          <div className="w-1/12 py-3 pr-4 text-right sm:px-6">
            <div className="flex justify-end">
              <button
                onClick={() => handleDelete(type.id)}
                className="text-gray-500 dark:hover:text-white hover:text-gray-900"
                href="#"
              >
                <X strokeWidth={3} size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}

      {isOpen && (
        <Form
          id={data.length}
          showForm={isOpen}
          type={type}
          handleData={handleData}
        />
      )}

      <div className="flex font-semibold rounded-b-lg">
        <div className="w-8/12 px-4 py-4 sm:px-6">Total {type}</div>
        <div className="w-4/12 px-4 py-4 sm:px-6">
          <NumberFormat
            value={data?.reduce((acc, type) => acc + type.amount, 0)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'€'}
          />
        </div>
      </div>
    </div>
  );
}
