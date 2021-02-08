import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import First from './components/First';
import Second from './components/Second';
function App() {
  
  return (
    <Router>

      <h2>My App</h2>
      <React.Fragment>
        <Link  to='/'>First Component</Link>
        <Link to='/second'>Second Component</Link>
        <Route exact path='/' component={First}></Route>
        {/* exact matches path exactly perfectly */}
        <Route exact path='/second' component={Second}></Route>
        <Route  path='/second/:name' component={Second}></Route>
      </React.Fragment>
    </Router>
  );
}

export default App;
