import Link from "./Link"
import "./Menu.css"

function Menu() {
    const options = ["Home", "Perfil", "Sair"]

    return (
        <nav>
            <ul>
                {options.map((option, index) => <li key={index}><Link text={option}/></li>)}
            </ul>
        </nav>
    )
}

export default Menu