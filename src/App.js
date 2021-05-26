/** @jsxImportSource @emotion/react */
import "twin.macro";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavBar } from "./components/common/NavBar";
import { Home } from "./components/home/Home";
import { SocialIcons } from "./components/common/SocialIcons";
import { Contact } from "./components/contact/Contact";

function App() {
  return (
    <div
      className="main"
      tw="overflow-x-hidden block"
    >
      <Router>
        <div>
          <NavBar />
        </div>
        <div>
          <SocialIcons />
        </div>

        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/contacts">
          <Contact/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
