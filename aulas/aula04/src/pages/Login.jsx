import Footer from '../components/Footer'
import Logo from '../components/Logo'
import Title from '../components/Title'
import InputEmail from '../components/InputEmail'
import InputPassword from '../components/InputPassword'
import Button from '../components/Button'
import Link from '../components/Link'

function Login() {
    return (
        <>
            <main>
                <Logo/>
                <Title/>
                <InputEmail/>
                <InputPassword/>
                <Button/>
                <Link/>
            </main>
            <Footer/>
        </>
    )
}

export default Login