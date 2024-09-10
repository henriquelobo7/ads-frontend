import Menu from "../components/Menu";

function Profile(props) {
    return (
        <>
            <h1>Perfil do Usuário</h1>
            <Menu navTo={props.navTo} />
        </>
    )
}

export default Profile