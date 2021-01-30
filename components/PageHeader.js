const PageHeader = ({ title, text }) => {
  return (
    <div className="max-w-xl pt-1 mx-auto my-10 text-center md:my-16 lg:my-20">
      <h1>{title}</h1>
      <p className="mt-4 text-lg leading-normal sm:leading-snug sm:text-2xl dark:text-white">
        {text}
      </p>
    </div>
  );
};

export default PageHeader;
