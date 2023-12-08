import { IMG_CDN_URL } from "../contants";

const FoodItem = ({ name, description, imageId, price, defaultPrice }) => {
  return (
    <div className="w-52 p-2 m-4 h-80 shadow-lg bg-pink-50 rounded-lg cursor-pointer relative hover:bg-gray-200">
      <img className="rounded-lg" src={IMG_CDN_URL + imageId} />
      <h2 className="font-bold text-xl">
        {name.substring(0, Math.min(name.length, 20))}
      </h2>
      <h3 className="italic my-2 overflow-y-autoo">
        {description?.length > 70
          ? description.substring(0, 100) + "..."
          : description}
      </h3>
      <h4 className="font-bold absolute bottom-2">
        ₹ : {(defaultPrice || price) / 100}
      </h4>
    </div>
  );
};

export default FoodItem;
