import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

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
    <div className="flex justify-center">
      <div className="m-2">
        <span className="text-4xl pb-4 font-semibold mr-2">
          {restaurant[0]?.card?.card?.info?.name} -
        </span>
        <span className="text-xl mb-4 font-semibold">
          {
            restaurant[0]?.card?.card?.info?.aggregatedDiscountInfoV2
              .descriptionList[0].meta
          }
        </span>
        <img
          className="pb-2 mt-2"
          src={IMG_CDN_URL + restaurant[0]?.card?.card?.info?.cloudinaryImageId}
        />
        <span>{restaurant[0]?.card?.card?.info?.areaName}, </span>
        <span>{restaurant[0]?.card?.card?.info?.city}</span>
        <h3 className="font-bold pt-2">
          {restaurant[0]?.card?.card?.info?.costForTwoMessage}
        </h3>
        <h3 className="text-2xl pt-2">
          {restaurant[0]?.card?.card?.info?.avgRatingString}⭐ [
          {restaurant[0]?.card?.card?.info?.totalRatingsString}]
        </h3>
      </div>
      <div className="p-5">
        <h1 className="text-xl font-semibold">Menu</h1>
        <ul data-testid="menu">
          {restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
            (item) => {
              return (
                <li key={item?.card?.info?.id}>
                  {item?.card?.info?.name} - {" ₹"}{" "}
                  {(item?.card?.info?.defaultPrice || item?.card?.info?.price) /
                    100}
                  <button
                    data-testid="addBtn"
                    className="p-1 font-bold bg-green-50 italic ml-4"
                    onClick={() => addFoodItem(item)}
                  >
                    Add
                  </button>
                </li>
              );
              {
                /* {Object.values(restaurant?.card?.info).map((item) => (
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
          ))} */
              }
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
