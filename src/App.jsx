import { useState } from 'react';
import Filters from './components/Filters';
import RestaurantList from './components/RestaurantList';
import restaurants from './js/restaurants';
import { getFilteredRestaurants } from './js/utils';

function App() {
  const [filters, setFilters] = useState({
    cuisine: '',
    price: '',
    location: '',
  });

  function handleFilterChange(field, value) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  }

  const cuisineOptions = [...new Set(restaurants.map((r) => r.cuisine))];
  const priceOptions = [...new Set(restaurants.map((r) => r.price))];
  const locationOptions = [...new Set(restaurants.map((r) => r.location))];

  const filteredRestaurants = getFilteredRestaurants(restaurants, filters);

  return (
    <div className='app'>
      <Filters
        filters={filters}
        onFilterChange={handleFilterChange}
        cuisineOptions={cuisineOptions}
        priceOptions={priceOptions}
        locationOptions={locationOptions}
      ></Filters>
    </div>
  );
}

export default App;
