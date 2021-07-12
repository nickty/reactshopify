import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/product/:handle" exact>
            <Product />
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
