
import styles from "./styles.module.css"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
function Navbar() {
  return (

    <div className={styles.navbar}>
        <img className={styles.logo} src={logo} alt="Logo Jack Experts" />
        <div>
         <ul className={styles.containerMenu}>
          <Link to="/">
          <li className={styles.itemMenu}>Home</li>
          </Link>
          <Link to="/register">
          <li className={styles.itemMenu}>Cadastrar</li>
          </Link>
          

         </ul>
        </div>
    </div>
  )
}

export default Navbar