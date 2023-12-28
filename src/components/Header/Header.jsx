import './Header.css'

const Header = ({title, about, button, about2}) => {
  return (
    <>
    <header>
        <h1>{title}</h1>
        <h3>{about}</h3>
        <h3>{about2}</h3>
        <button>{button}</button>
    </header>
    </>
  )
}

export default Header