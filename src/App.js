import React from "react";
import navigations from "./components/navigations";
//npm install react-router-dom, a strong lib for managing in app routing.
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';
//import componants as they are created.
import Layout from "./components/layout/components/Layout";
import { AboutMe, Contact, LandingPage, Portfolio, Resume } from "./components/Pages";



function App() {
  return (
    //return everything out of a div.
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route path={'/' } component={LandingPage}></Route>
            <Route path={'/contact' } component={Contact}></Route>
            <Route path={'/portfolio' } component={Portfolio}></Route>
            <Route path={'/resume' } component={Resume}></Route>
            <Route path={'/about' } component={AboutMe}></Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
