import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/HomePage/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SingleCategory from './Pages/SingleCategory/SingleCategory';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Payment from './Pages/Payment/Payment';
import Login from './Pages/Login/Login';
import AddToCart from './Pages/AddToCart/AddToCart';



function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/category">
          <SingleCategory></SingleCategory>
        </Route>

        <Route path="/product">
          <ProductDetails></ProductDetails>
        </Route>

        <Route path="/payment">
          <Payment></Payment>
        </Route>

        <Route path="/add-to-cart">
          <AddToCart></AddToCart>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
