import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import "./styles.css";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

export default function App() {
  const [login, setLogin] = useState(true);

  return (
    <Router>
      <div className="App">
        <Header btn={login} btn1={setLogin} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about">
            {!login ? <About /> : <Redirect to="/" />}
          </Route>
          <Route path="/profile">
            {!login ? <Profile /> : <Redirect to="/" />}
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
