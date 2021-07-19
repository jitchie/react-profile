import React from "react";

//npm install react-router-dom, a strong lib for managing in app routing.
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';
//import componants as they are created.
import Layout from "./layout/index";
import { AboutMe, Contact, LandingPage, Portfolio, Resume } from "./pages";






function App() {
  return (
    //return everything out of a div.
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route exact path={'/' } component={LandingPage}></Route>
            <Route exact path={'/contact' } component={Contact}></Route>
            <Route exact path={'/portfolio' } component={Portfolio}></Route>
            <Route exact path={'/resume' } component={Resume}></Route>
            <Route exact path={'/about' } component={AboutMe}></Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
