import { useState } from 'react';
import Filters from './components/Filters';
import RestaurantList from './components/RestaurantList';
import restaurants from './js/restaurants';

function App() {
  const [filters, setFilters] = useState({
    cuisine: '',
    price: '',
    location: '',
  });

  return <div className='app'></div>;
}

export default App;
