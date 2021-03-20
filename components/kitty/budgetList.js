import { useState } from 'react';
import { MoreHorizontal, Plus } from 'react-feather';
import NumberFormat from 'react-number-format';
import Form from './Form';

export default function BudgetList({ handleData, handleEdit, data, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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
      case 'Transportation':
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
        <div className="flex items-center" key={type.id}>
          <div className="w-4/12 px-6 py-3">{type.name}</div>
          <div className="flex items-center w-4/12 px-6 py-3 space-x-1.5">
            <span
              className={`px-2.5 bg-gray-100 font-medium dark:bg-gray-800 text-sm py-0.5 rounded-full ${categoryColor(
                type.category
              )}`}
            >
              {type.category}
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
              <button
                onClick={handleEdit}
                className="text-gray-400 hover:text-gray-900"
                href="#"
              >
                <MoreHorizontal size={20} />
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
