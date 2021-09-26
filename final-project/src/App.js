import logo from "./logo.svg";
import "./App.css";
import Routes from "./Routes";
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
