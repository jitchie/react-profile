import React from "react";
//npm install react-router-dom, a strong lib for managing in app routing.
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';
//import componants as they are created.
import Layout from "./components/layout/Layout";



function App() {
  return (
    //return everything out of a div.
    <div>
      <Router>
        <Layout>
          <Switch>


          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
