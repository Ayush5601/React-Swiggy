import { useState, useContext } from "react";
import Logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// SPA - Single Page Application???
// Client Side Routing

const Title = () => (
  <a href="/">
    <img
      data-testid="logo"
      className="h-28 p-2 rounded-lg"
      alt="logo"
      src={Logo}
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-wrap justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-2" data-testid="cart">
              Cart- {cartItems.length} items
            </li>
          </Link>
        </ul>
      </div>
      <h1 className="mt-10" data-testid="online-status">
        OnlineStatus : {isOnline ? "✅" : "🔴"}
      </h1>
      {isLoggedIn ? (
        <button
          type="button"
          className="mr-10 pb-2"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button
          type="button"
          className="mr-10 pb-2"
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      )}
      <span className="p-10 font-bold text-red-900">{user.name}</span>
    </div>
  );
};

export default Header;
