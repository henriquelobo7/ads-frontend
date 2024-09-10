import FormLogin from "./FormLogin"

function Login(props) {
    return (
        <>
            <h1>Login</h1>
            <FormLogin navTo={props.navTo}/>
        </>
    )
}

export default Login