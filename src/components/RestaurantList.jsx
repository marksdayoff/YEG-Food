import RestaurantCard from './RestaurantCard';

function RestaurantList({ restaurants }) {
  if (restaurants.length === 0) {
    return <p>No restaurants match your filters.</p>;
  }

  return (
    <div className='restaurant-list'>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantList;
