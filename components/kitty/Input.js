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

export default Input;
