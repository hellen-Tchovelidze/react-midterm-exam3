import React from "react";
import data from "../../../data.json";

const MovieList = () => {
  return (
    <div className=" flex flex-wrap">
      {data.map((movie, index) => (
        <div key={index} className=" flex flex-col w-[280px] h-[226px]">
          <img src={movie.thumbnail.regular.small} alt={movie.title} />

          <div className=" flex w-[156px] justify-between items-start">
            <p className=" text-white">{movie.year}</p>
            <p className=" text-white">{movie.category}</p>
            <p className=" text-white">{movie.rating}</p>
          </div>
          <h1 className=" text-white">{movie.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
