import { useState } from 'react'
import { TbChevronDown } from 'react-icons/tb'
import styles from './Collapse.module.css'

// Hacer un componente Collapse, que tome children y una prop label. Inicialmente debe mostrar la label con algún ícono o emoji que indique que puede abrirse (+, 👉, ▶). Cuando se lo cliquea, debe renderizar el children y cambiar el ícono o emoji a algo que indique puede cerrarse (-, 👇, ▼). Al clickearlo nuevamente, debe expandirse (como un toggle). Ejemplo

const Collapse = ({ label, children }) => {
  const [show, setShow] = useState(false)
  const { container, header, title } = styles

  return (
    <div className={container}>
      <div
        className={header}
        onClick={() => {
          setShow(!show)
        }}
      >
        <p className={title}>{label}</p>
        <TbChevronDown
          size={25}
          style={{
            transition: 'transform .4s ease',
            transform: show ? 'rotateZ(180deg)' : 'rotateZ(0deg)',
          }}
        />
      </div>
      {show && <div className="content">{children}</div>}
    </div>
  )
}

export { Collapse }
