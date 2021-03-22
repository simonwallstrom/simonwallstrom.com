import CustomLink from '../components/CustomLink';
import PageHeader from '../components/PageHeader';

NotFound.Favicon = '😅';

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-full">
        <h1 className="mt-10 md:mt-16 lg:mt-24">Page not found</h1>
        <p className="mt-4 text-center sm:text-lg">
          I'm sorry, but I can't seem to find the page you're looking for.
        </p>
        <CustomLink href="/" className="mt-8 btn btn--primary">
          Return to startpage
        </CustomLink>
      </div>
    </>
  );
}
