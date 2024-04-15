import Header from './containers/Header';
import Counter from './containers/counter/counter-neg';
import Game from './containers/Games/Game';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './containers/Interest/home';
import ProductsPage from './containers/Shop/products';
import ProductDetails from './containers/Shop/product-details';
import users from "./users.json"
import EditorPage from './containers/editor/editor';

function App() {
  console.log("Users", users)
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game' element={<Game />} />
          <Route path="/counter" element={<Counter />} />
          <Route path='/shop' element={<ProductsPage />} />
          <Route path='/editor' element={<EditorPage />} />
          <Route path='/shop/:productId' element={<ProductDetails />} />

          <Route>404 Page Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
