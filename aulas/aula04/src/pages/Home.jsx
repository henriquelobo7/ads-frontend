import Header from "../components/Header"
import Content from "../components/Content"
import Menu from "../components/Menu"

function Home() {
    return (
        <>
            <Header/>
            <Content>
                <Menu />
            </Content>
        </>
    )
}

export default Home