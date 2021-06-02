/** @jsxImportSource @emotion/react */
import "twin.macro";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavBar } from "./components/common/NavBar";
import { Home } from "./components/home/Home";
import { SocialIcons } from "./components/common/SocialIcons";
import { Contact } from "./components/contact/Contact";
import { About } from "./components/about/About";
import { CheckAlive } from "./components/common/CheckAlive";
import { ProjectList } from "./components/projects/ProjectList";
import { Articles } from "./components/articles/Articles";

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
        <div>
          <CheckAlive/>
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

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/projects">
          <ProjectList />
        </Route>

        <Route exact path="/articles">
          <Articles />
        </Route>
      </Router>
    </div>
  );
}

export default App;
