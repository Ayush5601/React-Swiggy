import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../contants";

const useRestaurant = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch("https://corsproxy.io/?" + FETCH_MENU_URL + resId);
    const json = await data.json();

    // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    setRestauraunt(json?.data?.cards);
  }

  return restaurant;
};

export default useRestaurant;
