import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../contants";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prvIndex) => (prvIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return images.map((image, index) => (
    <div key={index}>
      <img
        className={`pb-2 mt-2 w-full h-full rounded-3xl ${
          activeIndex === index ? "block" : "hidden"
        }`}
        src={IMG_CDN_URL + image}
        alt="restaurantFoodImage"
      />
    </div>
  ));
};

export default Carousel;

/*
here previously we were updating activeIndex and taking images[activeIndex] to take the image url and display
on the page. But problem with this was that an extra network call was made each time this happened.
 
so we are painting the dom will all the images and just manipulating their hide/show behaviour using classes.
This causes only the size of image array network calls

we could have used setTimeOut() and passed activeIndex state variable inside dependency array so that the index
is changed and a new timeOut is generated which again changes the activeIndex

we used setInterval since we had to change image every 4 seconds, and instead of causing multiple setTimeOuts
we fire setInterval only once.

also setTimeOut takes the initial value of all the variables, hence we had to use (prvIndex) as a callback
https://eight-bites.blog/en/2021/05/setinterval-setstate/ refer this article for depth
*/
