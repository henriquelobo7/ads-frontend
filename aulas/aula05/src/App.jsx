import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  const [route, setRoute] = useState("/login")

  return (
    <>
      {route === '/login' && <Login navTo={setRoute}/>}
      {route === '/home' && <Home navTo={setRoute}/>}
      {route === '/profile' && <Profile navTo={setRoute}/>}
    </>
  )
}

export default App
