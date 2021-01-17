import PageHeader from '../components/PageHeader';
import ProjectList from '../components/ProjectList';

Projects.Favicon = '👨‍💻';

export default function Projects() {
  return (
    <>
      <PageHeader
        title="Projects"
        text="Some of the things i've been working on over the years, both my
          professional work and the odd side project."
      />
      <div className="space-y-4 sm:space-y-8">
        <ProjectList />
      </div>
    </>
  );
}
