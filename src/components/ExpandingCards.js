import style from './ExpandingCards.module.css'

const ExpandingCards = () => {
  return (
    <div className={style.container}>
      <div
        className={`${style.panel} ${style.active}`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611182777143-de57eb164209?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')`,
        }}
      >
        <h3>Taste the wine</h3>
      </div>
      <div
        className={style.panel}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611149974482-764b0c2a211a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')`,
        }}
      >
        <h3>Furniture</h3>
      </div>
      <div
        className={style.panel}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611197132670-f2884a5e62de?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80')`,
        }}
      >
        <h3>Give some love</h3>
      </div>
      <div
        className={style.panel}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611019445010-ea3ae4393810?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80')`,
        }}
      >
        <h3>Good advice</h3>
      </div>
      <div
        className={style.panel}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611012376839-d49a817b86c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')`,
        }}
      >
        <h3>Keep on paddling</h3>
      </div>
    </div>
  )
}

export default ExpandingCards
