import Footer from '../components/Footer'
import Logo from '../components/Logo'
import Title from '../components/Title'
import InputEmail from '../components/InputEmail'
import InputPassword from '../components/InputPassword'
import Button from '../components/Button'
import Link from '../components/Link'
import Content from '../components/Content'

function Login() {
    return (
        <>
            <Content>
                <Logo image="https://www.svgrepo.com/show/411955/learn.svg" text="Logo da Aplicação"/>
                <Title text="Aluno Online"/>
                <InputEmail/>
                <InputPassword/>
                <Button text="Entrar"/>
                <Link text="Esqueceu a senha?"/>
            </Content>
            <Footer/>
        </>
    )
}

export default Login