
  
const FavoritesList = ({ favorites, toggleFavorite }) => {
    return (
      <div className="w-full max-w-2xl mt-5 p-4 bg-gray-800 rounded-lg">
        <h2 className="text-white text-xl mb-3">Favorites</h2>
        {favorites.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {favorites.map((movie) => (
              <div key={movie.id} className="flex flex-col w-[180px] h-[200px] cursor-pointer">
                <img src={movie.thumbnail.regular.small} alt={movie.title} />
                <h3 className="text-white text-center mt-2">{movie.title}</h3>
                <button
                  className="mt-2 p-1 bg-red-500 rounded"
                  onClick={() => toggleFavorite(movie)} // Remove from favorites
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No favorites added</p>
        )}
      </div>
    );
  };
  
  export default FavoritesList;
  