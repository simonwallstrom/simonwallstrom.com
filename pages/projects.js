import Card from '../components/Card';
import PageHeader from '../components/PageHeader';

Projects.Favicon = '👨‍💻';

export default function Projects() {
  return (
    <>
      <PageHeader
        title="Projects"
        text="Some of the things i've been working on over the years – both my
          professional work and the odd side project."
      />
      <div className="max-w-4xl mx-auto mt-10 md:mt-16 lg:mt-24">
        <div className="flex items-center bg-gray-100 rounded-xl">
          <div className="w-5/12 pb-72 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-xl">
            &nbsp;
          </div>
          <div className="flex-1 p-8">
            <h2>Example project one</h2>
            <p className="mt-2 text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio accusantium voluptate tenetur fugiat ipsam labs
              officiis debitis ratione voluptates aspernatur.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-10 md:mt-16 lg:mt-24">
        <div className="flex items-center bg-gray-100 rounded-xl">
          <div className="w-5/12 pb-72 bg-gradient-to-tr from-red-500 to-yellow-500 rounded-xl">
            &nbsp;
          </div>
          <div className="flex-1 p-8">
            <h2>Example project two</h2>
            <p className="mt-2 text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio accusantium voluptate tenetur fugiat ipsam labs
              officiis debitis ratione voluptates aspernatur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
