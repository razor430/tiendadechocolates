import Nav from "./Nav";
import estilo from "./Header.module.css"

const Header = () => {
  return (
    <div className={estilo.header}>
      <Nav/>
    </div>
  )
}

export default Header;