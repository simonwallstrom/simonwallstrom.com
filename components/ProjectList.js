import ProjectCard from './ProjectCard';
import projects from '../data/projects';

export default function ProjectList() {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </>
  );
}
