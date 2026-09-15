// Restaurant filters function
export function getFilteredRestaurants(restaurants, filters) {
  return restaurants.filter((restaurant) => {
    const matchesCategory =
      filters.category === '' ||
      restaurant.category?.includes(filters.category);
    const matchesCuisine =
      filters.cuisine === '' || restaurant.cuisine?.includes(filters.cuisine);
    const matchesPrice =
      filters.price === '' || restaurant.price?.includes(filters.price);
    const matchesLocation =
      filters.location === '' || restaurant.location.includes(filters.location);

    return matchesCategory && matchesCuisine && matchesPrice && matchesLocation;
  });
}

// Randomizer function
export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Price order function
