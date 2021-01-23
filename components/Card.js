const Card = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={`bg-white dark:bg-gray-950 shadow-3xl rounded-lg ${
        className || ''
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};

const CardContent = ({ children, padding = 'md' }) => {
  const styles = {
    sm: 'p-6 md:p-8',
    md: 'p-6 sm:px-12 sm:py-10',
  };
  return <div className={`${styles[padding]}`}>{children}</div>;
};

const CardHeader = ({ className, icon, text }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="mr-2">{icon}</div>
      <div className="text-xs font-medium tracking-wider uppercase sm:text-sm">
        {text}
      </div>
    </div>
  );
};

export { Card, CardContent, CardHeader };
