import Icon from "./Icon"
import InputSearch from "./InputSearch"
import Title from "./Title"
import "./Header.css"

function Header() {
    return (
        <header>
            <div>
                <Icon image="" text="Logo da Aplicação"/>
                <Title text="Aluno Online"/>
            </div>
            <div>
                <InputSearch />
                <Icon image="" text="Ícone Pesquisar"/>
            </div>
        </header>
    )
}

export default Header