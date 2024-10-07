import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  const index = 3;

  return (
    <>
      {index == 1 && <Login />}
      {index == 2 && <Home />}
      {index == 3 && <Profile />}
    </>
  );
}

export default App;
