import { useState } from "react"
import InputEmail from "../components/InputEmail"
import InputPassword from "../components/InputPassword"
import Button from "../components/Button"

function FormLogin(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onClick = (e) => {
        e.preventDefault()
        props.navTo("/home")
    }

    return (
        <>
            <InputEmail value={email} changeValue={setEmail} />
            <InputPassword value={password} changeValue={setPassword} />
            <Button text="Entrar" onClick={onClick} />
        </>
    )
}

export default FormLogin