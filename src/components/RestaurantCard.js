import { IMG_CDN_URL } from "../contants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRatingString,
}) => {
  if (cuisines) cuisines = cuisines.slice(0, 5);
  const { user } = useContext(UserContext);
  return (
    <div className="w-56 p-3 m-2 shadow-lg bg-pink-50 h-80 relative hover:bg-gray-200 rounded-lg">
      <img
        className="rounded-lg w-52 h-36"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h2 className="font-bold text-xl mt-2">
        {name.length > 30 ? name.substring(0, 30) + "..." : name}
      </h2>
      <h3>{cuisines.join(", ")}...</h3>
      <h4 className="absolute bottom-2">{avgRatingString}⭐</h4>
      {/* <h5 className="font-bold">
        {user.name} - {user.email}
      </h5> */}
    </div>
  );
};

export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestrauntCard;
