import style from './ProjectsMenu.module.css'
import ExpandingCards from './ExpandingCards'

const ProjectsMenu = ({ projects }) => {
  console.log(projects)
  return (
    <>
      <div className={style.projectsMenu}>
        <h1>Choose a project</h1>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <input
                type="radio"
                id={project.name}
                name={project.name}
                value={project.name}
              />
              {project.name}
            </li>
          ))}
        </ul>
      </div>
      <ExpandingCards />
    </>
  )
}

export default ProjectsMenu
