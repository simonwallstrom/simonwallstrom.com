const PageHeader = ({ title, text }) => {
  return (
    <div className="max-w-xl pt-1 mx-auto my-10 text-center md:my-16 lg:my-20">
      <h1>{title}</h1>
      <p className="mt-4 text-lg leading-snug sm:leading-snug sm:text-2xl">
        {text}
      </p>
    </div>
  );
};

export default PageHeader;
