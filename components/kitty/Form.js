import { useState, useRef, useEffect } from 'react';
import { categories } from '../../data/kitty';
import Input from './Input';
import Dropdown from './Dropdown';
import { useForm } from 'react-hook-form';

const Form = ({ handleData, showForm, type, id }) => {
  const { register, handleSubmit } = useForm();
  const name = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState();

  const onSubmit = (data, e) => {
    handleData(data);
    e.target.reset();
    setSelectedCategory('');
  };

  useEffect(() => {
    if (name.current) {
      name.current.focus();
    }
  }, [showForm]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center divide-y divide-gray-800 sm:divide-y-0 sm:flex-row">
        <div className="w-full sm:w-4/12">
          <input
            ref={register({ valueAsNumber: true })}
            name="id"
            value={id + 1}
            type="hidden"
          />
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
        <div className="w-full sm:w-4/12">
          <Dropdown
            options={categories}
            type={type}
            category={selectedCategory}
            handleCategory={setSelectedCategory}
            name="category"
            inputRef={register({ required: true })}
          />
        </div>
        <div className="w-full sm:w-3/12">
          <Input
            type="number"
            inputRef={register({ valueAsNumber: true, required: true })}
            name="amount"
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
