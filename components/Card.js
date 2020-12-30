export default function Card({ children, ...restProps }) {
  return (
    <div
      className={`flex flex-col p-6 md:p-8 border border-gray-200 rounded-lg shadow-sm`}
      {...restProps}
    >
      {children}
    </div>
  );
}
