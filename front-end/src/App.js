import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Checkout from './Components/Checkout/Checkout';
import Header from './Components/Header/Header';
import Home from './Components/Header/Home/Home';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
