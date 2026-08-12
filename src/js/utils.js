export function getFilteredRestaurants(restaurants, filters) {
  return restaurants.filter((restaurant) => {
    const matchesCuisine =
      filters.cuisine === '' || restaurant.cuisine === filters.cuisine;
    const matchesPrice =
      filters.price === '' || restaurant.price === filters.price;
    const matchesLocation =
      filters.location === '' || restaurant.location === filters.location;
  });
}
