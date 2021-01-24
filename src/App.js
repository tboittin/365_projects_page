import ProjectsMenu from './components/ProjectsMenu'
import ExpandingCards from './components/ExpandingCards'

function App() {
  const projects = [
    {
      name: 'Expanding Cards',
      component: <ExpandingCards />,
      id: 1,
    },
    {
      name: 'Hidden Search',
      component: '',
      id: 2,
    },
    {
      name: 'Progress Steps',
      component: '',
      id: 3,
    },
    {
      name: 'Rotating Navigation',
      component: '',
      id: 4,
    },
    {
      name: 'Scroll Animation',
      component: '',
      id: 5,
    },
  ]
  return (
    <div className="App">
      <ProjectsMenu projects={projects} />
    </div>
  )
}

export default App
