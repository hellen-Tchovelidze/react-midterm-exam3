import React from "react";
import searchIcone from '../../../assets/images/search.svg'
export default function SearchComponent({ searchTerm, setSearchTerm }) {
  return (
    <div className=" flex cursor-pointer">
<img src={searchIcone} alt="searchIcone"  className=" h-[32px] w-[32px] "/>
      <input
        type="text"
        placeholder="Search for movies or TV series"
        className=" p-2 w-full text-white cursor-text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
    </div>
  );
}
