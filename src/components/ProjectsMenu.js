import SwitchComponent from './SwitchComponent'
import style from './ProjectsMenu.module.css'
import { useState } from 'react'

const ProjectsMenu = ({ projects }) => {
  const [value, setValue] = useState()

  const handleValueChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <div className={style.projectsMenu}>
        <h1>Choose a project</h1>
        <ul onChange={(e) => handleValueChange(e)}>
          {projects.map((project) => (
            <li key={project.id}>
              <input
                type="radio"
                name={project.name}
                value={project.name}
                checked={value === project.name}
              />
              {project.name}
            </li>
          ))}
        </ul>
      </div>
      {value && <SwitchComponent projects={projects} componentName={value} />}
      {!value && <h1>Hello World!</h1>}
    </>
  )
}

export default ProjectsMenu
