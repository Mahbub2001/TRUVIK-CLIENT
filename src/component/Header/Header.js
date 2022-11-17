import React from "react";
import "./Header.Module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../assets/slider/image-1.jpg";
import img2 from "../../assets/slider/image-2.jpg";

import { Pagination, Autoplay, Navigation } from "swiper";

const Header = () => {
  return (
    <div className="header-swiper">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div className="relative">
            <div className="banner">
              <img className="" src={img1} alt="" />
            </div>
            <div className="absolute insider font-bold text-white">
              <p className="text-2xl">
                Grab the{" "}
                <span className="text-red-600 italic">Golden Opportunity </span>
                to
              </p>
              <h2 className="mt-2 text-6xl">
                Study in <span className="text-red-600 italic">Abroad</span>
                <br />
                Universities
              </h2>
              <button className="rounded px-8 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-black hover:bg-gray-800 mt-4 border-blue-900 text-white">
                Pay Fee After Visa
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="banner">
              <img className="" src={img2} alt="" />
            </div>
            <div className="absolute insider font-bold text-white ">
              <p className="text-2xl mb-2">
                Simple steps to your{" "}
                <span className="text-red-600 italic">Dream Destination!</span>
              </p>
              <h2 className="text-6xl">
                Start Planning <br /> Your{" "}
                <span className="text-red-600 italic">#NextTrip!</span>
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
