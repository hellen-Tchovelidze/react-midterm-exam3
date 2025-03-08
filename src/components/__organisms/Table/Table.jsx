
  

import { useState } from "react";
import AllIcone from "../../../assets/images/all.png";
import AllIconeActive from "../../../assets/images/AllIcone.png";
import MovieIcone from "../../../assets/images/MovieIcone.png";
import MovieIconeActive from "../../../assets/images/actmove.png";
import SaveIcone from "../../../assets/images/SaveIcone.png";
import SaveIconeActive from "../../../assets/images/Bookmark.png";
import TVicone from "../../../assets/images/TVicone.png";
import TViconeActive from "../../../assets/images/tv.png";
import ButtonIcone from "../../__atoms/ButtonIcone/ButtonIcone";
import Movie from "../../../assets/images/Movie.png";

const Tabs = ({ activeTab, onTabClick }) => {
  return (
    <div className="flex justify-between p-5 flex-col items-center h-[990px] w-[96px] bg-[#161D2F] rounded-[20px] max-md:w-full max-md:h-[70px] max-md:flex-row">
      <div className="flex flex-col justify-between items-center gap-[50px] max-md:flex-row max-md:justify-between max-md:items-center">
        <div className="flex flex-col justify-center items-center w-[32px]">
          <img src={Movie} alt="" />
        </div>
        <div className="flex flex-col w-[20px] h-[200px] justify-between items-center mt-6 max-md:flex-row max-md:w-[200px] max-md:h-[20px] max-md:mb-5 max-sm:w-[150px]">
          <button onClick={() => onTabClick("all")}>
            <img src={activeTab === "all" ? AllIconeActive : AllIcone} alt="" />
          </button>
          <button onClick={() => onTabClick("Movie")}>
            <img
              src={activeTab === "Movie" ? MovieIconeActive : MovieIcone}
              alt=""
            />
          </button>
          <button onClick={() => onTabClick("TV Series")}>
            <img
              src={activeTab === "TV Series" ? TViconeActive : TVicone}
              alt=""
            />
          </button>
          <button onClick={() => onTabClick("favorites")}>
            <img
              src={activeTab === "favorites" ? SaveIconeActive : SaveIcone}
              alt=""
            />
          </button>
        </div>
      </div>
      <ButtonIcone />
    </div>
  );
};

export default Tabs;
