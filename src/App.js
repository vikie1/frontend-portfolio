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
import { Article } from "./components/articles/Article";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
      <div className="main" tw="overflow-x-hidden block font-family[-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif]">
        <Router>
          <div>
            <NavBar />
          </div>
          <div>
            <SocialIcons />
          </div>
          <div>
            <CheckAlive />
          </div>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/contacts">
            <Contact />
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

          <Route path="/article/:name">
            <Article />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Router>
      </div>
    </CookiesProvider>
  );
}

export default App;
