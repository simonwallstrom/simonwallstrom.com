const PageHeader = ({ title, text }) => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1>{title}</h1>
      <p className="mt-4 text-lg md:text-xl lg:leading-snug lg:text-2xl">
        {text}
      </p>
    </div>
  );
};

export default PageHeader;
