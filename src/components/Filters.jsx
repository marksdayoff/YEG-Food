function Filters({
  filters,
  onFilterChange,
  categoryOptions,
  priceOptions,
  locationOptions,
}) {
  return (
    <div className='filters'>
      {/* category Filter */}
      <select
        value={filters.category}
        onChange={(e) => onFilterChange('category', e.target.value)}
      >
        <option value=''>All Categorys</option>
        {categoryOptions.map((category) => (
          <option key={category} value={category}>
            {category}
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
          <option key={price} value={price}>
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
