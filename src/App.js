import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Product, About, Cart, SingleProduct, Error } from './pages';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/products'>
            <Product />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route path='/products/:id' children={<SingleProduct />} />
          <Route exact path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
