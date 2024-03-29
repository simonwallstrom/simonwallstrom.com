import Link from 'next/link';

const CustomLink = (props) => {
  const { href, className } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return <Link className={className} {...props} href={href}></Link>;
  }

  return (
    <a
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};

export default CustomLink;
