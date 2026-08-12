function Filters({
  filters,
  onFilterChange,
  cuisineOptions,
  priceOptions,
  locationOptions,
}) {
  return (
    <div className='filters'>
      {/* Cuisine Filter */}
      <select
        value={filters.cuisine}
        onChange={(e) => onFilterChange('cuisine', e.target.value)}
      >
        <option value=''>All Cuisines</option>
        {cuisineOptions.map((cuisine) => (
          <option key={cuisine} value={cuisine}>
            {cuisine}
          </option>
        ))}
      </select>

      {/* Price Filter */}
      <select
        value={filters.price}
        onChange={(e) => onFilterChange('price', e.target.value)}
      >
        <option value=''>All Prices</option>
        {priceOptions.map((price) => (
          <option ley={price} value={price}>
            {price}
          </option>
        ))}
      </select>

      {/* Location Filter */}
      <select
        value={filters.location}
        onChange={(e) => onFilterChange('location', e.target.value)}
      >
        <option value=''>All Locations</option>
        {locationOptions.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
