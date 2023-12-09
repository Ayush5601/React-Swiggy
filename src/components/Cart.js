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
    <div className="text-center min-h-screen m-4">
      <h1 className="font-bold text-2xl"> Cart Items - {cartItems.length}</h1>
      <button
        className="bg-green-100 p-2 m-3 rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems?.length === 0 && (
        <h1> Cart is empty. Add Items to the cart!</h1>
      )}
      <div className="flex flex-wrap flex-auto grow ml-14">
        {cartItems.map((item) => (
          <FoodItem key={item.card.info.id} {...item.card.info} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
