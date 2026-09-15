function RestaurantCard({ restaurant }) {
  // App will destructure the restaurant input and break down the object into individual components
  return (
    <div className='restaurant-card'>
      <h3 className='name'>{restaurant.name}</h3>

      <div className='second'>
        <div className='location'>
          <span className='mappin'>
            <svg
              fill='#000000'
              version='1.1'
              id='Capa_1'
              xmlns='http://www.w3.org/2000/svg'
              xmlns:xlink='http://www.w3.org/1999/xlink'
              width='100%'
              height='100%'
              viewBox='79 0 268 426'
              xml:space='preserve'
            >
              <g>
                <path
                  d='M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081
		c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002
		c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482
		C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884
		c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z'
                />
              </g>
            </svg>
          </span>
          <div className='location-details'>
            <a href={restaurant.mapUrl} className='address'>
              {restaurant.address}
            </a>
            <p className='neighbourhood'>{restaurant.neighbourhood}</p>
          </div>
        </div>

        {restaurant.price && restaurant.price.length > 0 && (
          <div className='price'>
            <ul>
              {restaurant.price.map((price, index) => (
                <li key={index}>{price}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className='details'>
        {/* <p className='category'>{restaurant.category}</p> */}
        <div className='details-styles'>
          {restaurant.cuisine && restaurant.cuisine.length > 0 && (
            <div className='cuisine'>
              <ul>
                {restaurant.cuisine.map((cuisine, index) => (
                  <li key={index}>{cuisine}</li>
                ))}
              </ul>
            </div>
          )}

          {restaurant.category && restaurant.category.length > 0 && (
            <div className='categories'>
              <ul>
                {restaurant.category.map((category, index) => (
                  <li key={index}>{category}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className='details-inner'>
          <a href={restaurant.tel} className='phone'>
            {restaurant.phone}
          </a>

          <p>|</p>

          <a href={restaurant.website} className='website'>
            Website
          </a>
          <p>|</p>
          <a className href='{restaurant.instagram}'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 22'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
                <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
              </svg>
            </span>
          </a>
        </div>
      </div>

      {restaurant.recs && restaurant.recs.length > 0 && (
        <div className='recs'>
          <h4>Highlights:</h4>
          <ul>
            {restaurant.recs.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>
      )}

      {restaurant.notes && restaurant.notes.length > 0 && (
        <div className='notes'>
          <h4>Notes:</h4>
          <ul>
            {restaurant.notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RestaurantCard;
