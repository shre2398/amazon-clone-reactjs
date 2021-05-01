import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import './App.css';
import Checkout from './Components/Checkout/Checkout';
import Header from './Components/Header/Header';
import Home from './Components/Header/Home/Home';
import Login from './Components/Login/Login';
import Payment from './Components/Payment/Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Orders from './Components/Orders/Orders';

const promise = loadStripe(
  'pk_test_51IjizaSIO4J0W0rFIQErAzDBLoZLco1qzsSzfFNntaXFXdnzLXR4lLzNo3qrrrRIupeH8aMy627BCivYW2IHTnvv00K877qrdL'
);

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('User is ===>', authUser);

      if (authUser) {
        // the user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
