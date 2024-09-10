import Menu from "../components/Menu";

function Home(props) {
    return (
        <>
            <h1>Página Inicial</h1>
            <Menu navTo={props.navTo} />
        </>
    )
}

export default Home