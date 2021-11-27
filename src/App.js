import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import { DataProvider } from "./components/DataProvider";
import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom';
import Details from "./components/Details";
import Cart from "./components/Cart";
import Home from "./components/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <DataProvider>
        <div className="App">
          <Router>
              <Header />
              <section>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="products" element={<Products />} />
                  <Route path="products/:id" element={<Details />} />
                  <Route path="cart" element={<Cart />} />
                </Routes>
              </section>
          </Router>
        </div>
    </DataProvider>
  );
}

export default App;
