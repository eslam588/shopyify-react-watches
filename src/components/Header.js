import React,{useState , useContext} from "react";
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import Cart from "./svg/shopping-cart-solid.svg";
import { Link } from "react-router-dom";
import { DataContext } from "./DataProvider";


export default function Header(){
    
    const [menu , setMenu] = useState(false);
    const value = useContext(DataContext);
    const [cart] = value.cart

    const toggleMenu = () => {
        setMenu(!menu)
    }
    const styleMenu = {
        top : menu ? 0 :"-100%"
    }
   

    return(
        <div>
            <header>
                <div className="logo">
                    <h1><Link to="/Products">Shopyify</Link></h1>
                </div>
                <ul style={styleMenu}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Products">Products</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/">Login / Register</Link></li>
                    <li>
                    <img src={Close} alt="" width="30" className="menu" onClick={toggleMenu}/>
                    </li>
                </ul>
                <div className="menu">
                    <img src={Menu} alt="" width="30" onClick={toggleMenu}/>
                </div>
                <div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                          <img src={Cart} alt="" width="30" />
                    </Link>
                    
                </div>

            </header>
        </div>
    )
}