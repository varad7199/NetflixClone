import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes'
function App() {
  return (
    <Router>
     <Route exact path={ROUTES.HOME}>
      <Home/>
     </Route>
    </Router>
  );
}

export default App;
