import { useState } from 'react';
import Filters from './components/Filters';
import RestaurantList from './components/RestaurantList';
import restaurants from './js/restaurants';
import { getFilteredRestaurants } from './js/utils';

function App() {
  const [filters, setFilters] = useState({
    category: '',
    price: '',
    location: '',
  });

  function handleFilterChange(field, value) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  }

  const categoryOptions = [...new Set(restaurants.flatMap((r) => r.category))];

  // const priceOptions = [...new Set(restaurants.map((r) => r.price))];
  const priceOptions = [
    ...new Set(restaurants.map((r) => r.price).filter(Boolean)),
  ];

  const locationOptions = [...new Set(restaurants.flatMap((r) => r.location))];

  const filteredRestaurants = getFilteredRestaurants(restaurants, filters);

  console.log('restaurants:', restaurants);
  console.log('restaurants.length:', restaurants.length);
  console.log('filters:', filters);
  console.log('filteredRestaurants:', filteredRestaurants);

  return (
    <div className='app'>
      <Filters
        filters={filters}
        onFilterChange={handleFilterChange}
        categoryOptions={categoryOptions}
        priceOptions={priceOptions}
        locationOptions={locationOptions}
      />

      <RestaurantList restaurants={filteredRestaurants} />
    </div>
  );
}

export default App;
