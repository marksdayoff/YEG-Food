export function getFilteredRestaurants(restaurants, filters) {
  return restaurants.filter((restaurant) => {
    const matchesCategory =
      filters.category === '' || restaurant.category === filters.category;
    const matchesPrice =
      filters.price === '' || restaurant.price === filters.price;
    const matchesLocation =
      filters.location === '' || restaurant.location === filters.location;

    return matchesCategory && matchesPrice && matchesLocation;
  });
}
