import { useSelector } from "react-redux";
import { AuthContext } from "./contex/AuthContext";
import { useAuth } from "./hooks/auth.hook";
import { useRoutes } from "./pages";
import "./App.scss";
import Modals from "./components/Modals";

function App() {
  const { user } = useSelector((state) => state.authReducer);
  const { token, login, logout, userId } = useAuth();
  const routes = useRoutes(user && !!user.token);
  return (
    <div className="App">
      <AuthContext.Provider value={{ token, login, logout, userId }}>
        {routes}
      </AuthContext.Provider>
      <div>
      <Modals/>
      </div>
    </div>
  );
}

export default App;
