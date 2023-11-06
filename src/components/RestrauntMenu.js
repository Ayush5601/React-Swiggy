import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
// import Menu from "../assets/img/dummyMenu.jpg";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Restraunt id: {resId}</h1>
        {/* <img data-testid="menuLogo" className="h-65 p-2" alt="logo" src={Menu} /> */}
        <h2>{restaurant[0]?.card?.card?.info?.name}</h2>
        <img src={IMG_CDN_URL + restaurant[0]?.card?.card?.info?.cloudinaryImageId} />
        <h3>{restaurant[0]?.card?.card?.info?.area}</h3>
        <h3>{restaurant[0]?.card?.card?.info?.city}</h3>
        <h3>{restaurant[0]?.card?.card?.info?.avgRating} stars</h3>
        <h3>{restaurant[0]?.card?.card?.info?.costForTwoMsg}</h3>
      </div>
      <div className="p-5">
        <h1>Menu</h1>
        <ul data-testid="menu">
          {restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - {" "} {item?.card?.info?.price/100}
              <button
                data-testid="addBtn"
                className="p-1 font-bold bg-green-50"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </li>
          );
          {/* {Object.values(restaurant?.card?.info).map((item) => (
            <li key={item.id}>
              {item.name} -{" "}
              <button
                data-testid="addBtn"
                className="p-1 bg-green-50"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </li>
          ))} */}
        })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
