const ExternalLink = ({ href, className, children }) => {
  return (
    <a
      href={href}
      className={className}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
