import Button from "../components/Button"
import Content from "../components/Content"
import Header from "../components/Header"
import InputEmail from "../components/InputEmail"
import InputPassword from "../components/InputPassword"
import Menu from "../components/Menu"
import Section from "../components/Section"

function Profile() {
    return (
        <>
            <Header></Header>
            <Content>
                <Menu />
                <Section>
                    <InputEmail />
                    <InputPassword />
                    <Button text="Salvar"/>
                </Section>
            </Content>
        </>
    )
}

export default Profile