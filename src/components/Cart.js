import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen">
      <span className="font-bold text-3xl m-3">
        {" "}
        Cart Items - {cartItems.length}
      </span>
      <button
        className="bg-green-100 p-2 m-3 rounded-lg"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>

      <div className="flex flex-wrap flex-auto grow ml-14">
        {cartItems.map((item) => (
          <FoodItem key={item.card.info.id} {...item.card.info} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
