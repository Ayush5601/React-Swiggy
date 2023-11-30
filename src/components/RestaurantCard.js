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
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50 h-72 relative">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
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

export default RestrauntCard;
