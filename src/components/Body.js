import { restaurantList } from "../contants";
import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { FETCH_RESTAURANT_URL } from "../contants";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch("https://corsproxy.io/?" + FETCH_RESTAURANT_URL);
    const json = await data.json();

    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          data-testid="search-input"
          type="text"
          className="focus:bg-purple-300-200 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              //need to filter the data
              const data = filterData(searchText, allRestaurants);
              // update the state - restaurants
              setFilteredRestaurants(data);
            }
          }}
        />
        <button
          data-testid="search-btn"
          className="p-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          className="ml-10"
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>
      </div>
      <div className="flex flex-wrap " data-testid="res-list">
        {/* You have to write logic for NO restraunt fount here */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              {restaurant?.info.promoted ? (
                <RestaurantCardPromoted {...restaurant?.info} />
              ) : (
                <RestaurantCard {...restaurant?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
