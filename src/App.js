import ProjectsMenu from './components/ProjectsMenu'

function App() {
  const projects = [
    {
      name: 'Expanding Cards',
      id: 1,
    },
    {
      name: 'Expanding Cards',
      id: 2,
    },
    {
      name: 'Expanding Cards',
      id: 3,
    },
  ]
  return (
    <div className="App">
      <ProjectsMenu projects={projects} />
    </div>
  )
}

export default App
