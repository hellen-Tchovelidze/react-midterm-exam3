

import React, { useState } from "react";
import { useFavorites } from "../../__atoms/Favorites/Favorites"; 
import data from "../../../data.json";
import SearchComponent from "../../__moleculos/serch/Serch";
import Trending from "../../__moleculos/Trending/Trending";
import Tabs from "../Table/Table";
import NotMarked from "../../../assets/images/NotMarked.png";
import IsMarked from "../../../assets/images/IsMarked.png";
import playIcone from '../../../assets/images/playIcone.svg'


const MovieList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const { favorites, handleFavoriteToggle } = useFavorites();

  const filteredMovies = data.filter((movie) => {
    const matchesSearchTerm = movie.title.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeTab === "all") return matchesSearchTerm;
    if (activeTab === "Movie") return matchesSearchTerm && movie.category === "Movie";
    if (activeTab === "TV Series") return matchesSearchTerm && movie.category === "TV Series";
    if (activeTab === "favorites") return matchesSearchTerm && favorites.includes(movie.title);

    return false;
  });

  return (
    <div className="flex justify-between flex-col w-screen p-5">
      <div className="flex justify-between gap-5 max-md:flex-col max-w-[1500px]">
        <Tabs activeTab={activeTab} onTabClick={setActiveTab} />
        <div className="w-[95%] ml-12 max-sm:ml-0">
          <SearchComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          
          <Trending />
          <div>
            <h1 className="text-white text-[32px] mt-1.5 mb-1.5">Recommended for you</h1>
            <p className="text-white text-[32px]">
              Found {filteredMovies.length} results for `{searchTerm}` 
            </p>
          </div>
          <div className="flex flex-wrap justify-start items-start gap-10 max-sm:justify-center">
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <div 
                  key={movie.id || movie.title} 
                  className="group flex flex-col w-[280px] h-[250px] cursor-pointer relative"
                >
                  
                  <div className="relative w-full h-full">
                    <img 
                      src={movie.thumbnail.regular.small} 
                      alt={movie.title} 
                      className="object-cover rounded-lg w-full h-full"
                    />
                   
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
                      <button className=" flex justify-around items-center w-[117px] h-[48px] bg-white/50 rounded-[28px]">
                        <img src={playIcone} alt="" />
                        <h1 className=" text-white text-[18px]">Play</h1>
                      </button>
                    </div>
                  </div>
                  
                 
                  <button onClick={() => handleFavoriteToggle(movie.title)} className="absolute top-3 right-3">
                    {favorites.includes(movie.title) ? (
                      <img src={IsMarked} alt="mark" />
                    ) : (
                      <img src={NotMarked} alt="mark" />
                    )}
                  </button>

                  
                  <div className="flex w-[156px] justify-between items-start">
                    <p className="text-white">{movie.year}</p>
              
                    <p className="text-white">{movie.category}</p>
                    <p className="text-white">{movie.rating}</p>
                  </div>
                  <h1 className="text-white">{movie.title}</h1>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No results found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
