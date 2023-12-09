import { IMG_CDN_URL } from "../contants";

const FoodItem = ({ name, description, imageId, price, defaultPrice }) => {
  return (
    <div className="w-52 p-2 m-4 h-[22rem] shadow-lg bg-pink-50 rounded-lg cursor-pointer relative hover:bg-gray-200">
      <img className="rounded-lg" src={IMG_CDN_URL + imageId} alt="cartItem" />
      <h2 className="font-bold text-xl">
        {name.substring(0, Math.min(name.length, 20))}...
      </h2>
      <p className="italic m-2 text-justify">
        {description?.length > 70
          ? description.substring(0, 100) + "..."
          : description}
      </p>
      <p className="font-bold absolute bottom-1 ">
        ₹ {(defaultPrice || price) / 100}
      </p>
    </div>
  );
};

export default FoodItem;
