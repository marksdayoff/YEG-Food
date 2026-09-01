function RestaurantCard({ restaurant }) {
  // App will destructure the restaurant input and break down the object into individual components
  return (
    <div className='restaurant-card'>
      <h3 className='name'>{restaurant.name}</h3>
      <a href='{restaurant.mapUrl}' className='address'>
        {restaurant.address}
      </a>
      <p className='price'>{restaurant.price}</p>
      <div className='details'>
        <p className='category'></p>
        <p className='neighbourhood'>{restaurant.neighbourhood}</p>
        <a href='{restaurant.tel}' className='phone'>
          {restaurant.phone}
        </a>
        <a href='{restaurant.website}' className='website'>
          Website
        </a>
        <a className href='{restaurant.instagram}'>
          <span></span>
        </a>
      </div>

      <div className='recs'>
        <p className='rec'>{restaurant.recs}</p>
      </div>
      <p className='notes'>{restaurant.notes}</p>
    </div>
  );
}

export default RestaurantCard;
