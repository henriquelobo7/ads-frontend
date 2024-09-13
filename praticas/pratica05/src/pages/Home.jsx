import Content from "../components/Content"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Panel from "../components/Panel"
import Section from "../components/Section"
import "./Home.css"

function Home() {
    return (
        <>
            <Header></Header>
            <Content>
                <Menu />
                <Section text="Página Inicial">
                    <div className="card-grid">
                        <Panel text="Mural de Aviso" itens={["Inscrições para Cursos de Extensão", "Evento Maratona de Programação", "Palestra sobre Inteligência Artificial"]}/>
                        <Panel text="Agenda Acadêmica" itens={["Semana de Provas P1", "Entrega de Trabalhos", "Apresentação de TCC"]}/>
                        <Panel text="Histórico de Notas" itens={["Lógica de Programação - 5,5", "Banco de Dados - 7,8", "Engenharia de Software - 5,3"]}/>
                        <Panel text="Histórico de Faltas" itens={["Lógica de Programação - 4", "Banco de Dados - 0", "Engenharia de Software - 1"]}/>
                    </div>
                </Section>
            </Content>
        </>
    )
}

export default Home