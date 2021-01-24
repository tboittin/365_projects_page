import React, { useState } from 'react'

const SwitchComponent = ({ projects, componentName }) => {
  const [component, setComponent] = useState()
  projects.forEach((project) => {
    if (!component && project.name === componentName) {
      setComponent(project.component)
    }
  })
  return component
}

export default SwitchComponent
