function RestaurantCard({ restaurant }) {
  // App will destructure the restaurant input and break down the object into individual components
  return (
    <div className='restaurant-card'>
      <h3 className='name'>{restaurant.name}</h3>
      <p className='category'></p>
      <p className='location'>{restaurant.location}</p>
      <p className='neighbourhood'>{restaurant.neighbourhood}</p>
      <p className='address'>{restaurant.address}</p>
      <p className='phone'>{restaurant.phone}</p>
      <p className='website'>{restaurant.website}</p>
      <p className='price'>{restaurant.price}</p>  
      <div className='recs'>
        <p className='rec'>{restaurant.recOne}</p>
        <p className='rec'>{restaurant.recTwo}</p>
      </div>
      <p className='notes'>{restaurant.notes}</p>
    </div>
  );
}

export default RestaurantCard;
