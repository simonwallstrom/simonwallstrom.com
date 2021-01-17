const ExternalLink = ({ href, className, children, ...rest }) => {
  return (
    <a
      href={href}
      className={`cursor-pointer ${className}`}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
