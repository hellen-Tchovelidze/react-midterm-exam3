
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import data from "../../../data.json";
import { useFavorites } from "../../__atoms/Favorites/Favorites"; 
import NotMarked from "../../../assets/images/NotMarked.png";
import IsMarked from "../../../assets/images/IsMarked.png";
import playIcone from '../../../assets/images/playIcone.svg'

function Trending() {
    const { favorites, handleFavoriteToggle } = useFavorites(); 

    return (
        <div className="flex flex-col scroll-auto">
            <h1 className="text-2xl text-white">Trending</h1>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={2.5} 
                loop={true}
                className="w-full"
                breakpoints={{
                    508: { 
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    480: { 
                        slidesPerView: 1.5,
                        spaceBetween: 0,
                    }
                }}
            >
                {data
                    .filter(movie => movie.isTrending === true)
                    .map((movie, i) => (
                        <SwiperSlide key={i} className="flex-shrink-0 w-[470px]">
                            <div className="group flex flex-col w-[470px] h-[230px] cursor-pointer relative max-md:w-[240px] max-md:h-[140px]">
                                
                                <div className="relative w-full h-full">
                                    <img 
                                        src={movie.thumbnail.regular.small} 
                                        alt={movie.title} 
                                        className="rounded-lg w-full h-full"
                                    />
                                    
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
                                        <button className="flex justify-around items-center w-[117px] h-[48px] bg-white/50 rounded-[28px]">
                                        <img src={playIcone} alt="" />
                                        <h1 className=" text-white text-[18px]">Play</h1>
                                        </button>
                                    </div>
                                </div>

                               
                                <button 
                                    onClick={() => handleFavoriteToggle(movie.title)} 
                                    className="absolute top-3 right-3"
                                >
                                    {favorites.includes(movie.title) ? <img src={IsMarked} alt="mark" /> : <img src={NotMarked} alt="mark" />}
                                </button>

                              
                                <p className="text-xl text-white mt-2 absolute left-0 bottom-0 p-4">{movie.title}</p>
                                <div className="flex w-[156px] justify-between items-start absolute left-0 bottom-10 p-4">
                                    <p className="text-white">{movie.year}</p>
                                    <p className="text-white">{movie.category}</p>
                                    <p className="text-white">{movie.rating}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default Trending;
