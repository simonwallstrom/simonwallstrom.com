import ProjectCard from './ProjectCard';
import projects from '../data/projects';

export default function ProjectList(props) {
  const isFeatured = props.isFeatured;
  if (isFeatured) {
    return (
      <>
        {projects
          .filter((project) => project.featured === 'true')
          .map((featuredProject) => (
            <ProjectCard
              isFeatured={true}
              key={featuredProject.slug}
              project={featuredProject}
            />
          ))}
      </>
    );
  }
  return (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </>
  );
}
