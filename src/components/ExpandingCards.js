import { useState } from 'react'
import style from './ExpandingCards.module.css'

const ExpandingCards = () => {
  const [panels, setPanels] = useState([
    {
      id: '1',
      title: 'Taste the wine',
      class: style.active,
      backgroundImage:
        "url('https://images.unsplash.com/photo-1611182777143-de57eb164209?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')",
    },
    {
      id: '2',
      title: 'Furniture',
      class: '',
      backgroundImage:
        "url('https://images.unsplash.com/photo-1611149974482-764b0c2a211a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
    },
    {
      id: '3',
      title: 'Give some love',
      class: '',
      backgroundImage:
        "url('https://images.unsplash.com/photo-1611197132670-f2884a5e62de?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80')",
    },
    {
      id: '4',
      title: 'Good advice',
      class: '',
      backgroundImage:
        "url('https://images.unsplash.com/photo-1611019445010-ea3ae4393810?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80')",
    },
    {
      id: '5',
      title: 'Keep on paddling',
      class: '',
      backgroundImage:
        "url('https://images.unsplash.com/photo-1611012376839-d49a817b86c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
    },
  ])

  const handleClick = (e) => {
    resetClass()
    setActive(e.target.id) // Set Class to appropriate element
  }

  const resetClass = () => {
    let newPanels = [...panels]
    newPanels.forEach((p) => {
      p.class = ''
    })
    setPanels(newPanels)
  }

  const setActive = (id) => {
    let newPanels = [...panels]
    newPanels.forEach((p) => {
      if (p.id === id) {
        p.class = style.active
      }
    })
    setPanels(newPanels)
  }

  return (
    <div className={style.container}>
      {panels.map((p) => (
        <div
          className={`${style.panel} ${p.class}`}
          style={{
            backgroundImage: p.backgroundImage,
          }}
          onClick={handleClick}
          key={p.id}
          id={p.id}
        >
          <h3>{p.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default ExpandingCards
