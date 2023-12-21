import { useState, useEffect } from "react";
import { FETCH_MENU_URL, PROXY_URL } from "../contants";

const useRestaurant = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(PROXY_URL + FETCH_MENU_URL + resId);
      const json = await data.json();

      setRestauraunt(json.data);
    } catch (err) {
      console.log("error ", err);
    }
  }

  return restaurant;
};

export default useRestaurant;
