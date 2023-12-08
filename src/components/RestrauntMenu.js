import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import Carousel from "./Carousel";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    areaName,
    cloudinaryImageId,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    city,
    aggregatedDiscountInfoV2,
  } = resInfo?.cards[0]?.card?.card?.info;

  const categoryCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = categoryCards.filter(
    (c) =>
      c.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const recommendedCategory = categories[0];

  const foodImages = [];
  recommendedCategory?.card?.card?.itemCards.map((foodItem) => {
    const imgId = foodItem.card.info.imageId;
    foodImages.push(imgId);
  });

  return (
    <div className="m-2 min-h-screen">
      <div className="text-center">
        <span className="text-4xl pb-4 font-semibold mr-2">{name} -</span>
        <span className="text-xl mb-4 font-semibold">
          {aggregatedDiscountInfoV2.descriptionList[0].meta}
        </span>
      </div>
      <div className="flex justify-center">
        <div className="p-5">
          {/* <Carousel images={foodImages} /> */}
          <div className="w-[500px] mt-2">
            <Carousel>
              {foodImages.map((s) => (
                <img
                  className="mb-2"
                  src={IMG_CDN_URL + s}
                  alt="restaurantFoodImage"
                />
              ))}
            </Carousel>
          </div>
          <div className="text-center">
            <span>{areaName}, </span>
            <span>{city}</span>
            <h3 className="font-bold pt-2 italic">{costForTwoMessage}</h3>
            <h3 className="text-xl pt-2 font-light">
              {avgRatingString}⭐ [{totalRatingsString}]
            </h3>
          </div>
        </div>
        <div className="p-5">
          <h1 className="text-xl font-semibold">Menu: (Recommended)</h1>
          <ul data-testid="menu">
            {recommendedCategory?.card?.card?.itemCards?.map((item) => {
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
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

/*{Object.values(restaurant?.card?.info).map((item) => (
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
