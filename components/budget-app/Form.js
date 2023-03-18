import { useState, useRef, useEffect } from 'react';
import { categories } from '../../data/budget-app';
import Input from './Input';
import Dropdown from './Dropdown';

const Form = ({ handleData, showForm, type, id }) => {
  const nameRef = useRef(null);

  const [name, setName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState({});
  const [amount, setAmount] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    handleData({
      name: name,
      id: id + 1,
      amount: Number(amount),
      category: selectedCategory?.name,
    });
    setName('');
    setSelectedCategory({});
    setAmount(0);
    nameRef.current.focus();
  }

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, [showForm]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center divide-y divide-gray-800 sm:divide-y-0 sm:flex-row">
        <div className="w-full sm:w-4/12">
          <Input
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            name="name"
            ref={nameRef}
            placeholder="Name..."
          />
        </div>
        <div className="w-full sm:w-4/12">
          <Dropdown
            options={categories}
            type={type}
            category={selectedCategory}
            handleCategory={setSelectedCategory}
          />
        </div>
        <div className="w-full sm:w-3/12">
          <Input
            type="number"
            name="amount"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            placeholder="Amount..."
          />
        </div>
        <div className="flex w-full sm:w-1/12">
          <button
            className="flex items-center justify-center w-full py-3 font-medium bg-gray-100 hover:text-blue-600 dark:bg-gray-800 dark:hover:text-blue-400 focus:outline-none focus:relative focus:ring-1 focus:ring-blue-600"
            type="submit"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
