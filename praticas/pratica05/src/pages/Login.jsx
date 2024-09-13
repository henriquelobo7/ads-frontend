import Button from "../components/Button";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Icon from "../components/Icon";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import Link from "../components/Link";
import Title from "../components/Title";
import "./Login.css"

function Login() {
  return (
    <>
      <Content style="login-container">
        <Icon image="" text="Logo da Aplicação"/>
        <Title text="Aluno Online"/>
        <InputEmail />
        <InputPassword />
        <Button text="Entrar"/>
        <Link text="Esqueceu a senha?"/>
      </Content>
      <Footer text="Copyright (C) 2024" />
    </>
  );
}

export default Login;
