'use strict';

// Key:
// OS = Old Strathcona
// OW = Oliver/Wîhkwêntôwin
// WM = Westmount
// MC




const restaurants = [
  // Bakeries

  {
    name: 'Brio',
    cuisine: 'Bakery',
    location: 'Oliver/Wîhkwêntôwin',
    address: '12021 102 Ave \#104, Edmonton, AB T5K 0R8',
    phone: '(780) 424-2131',
    website: 'https://briobakery.com/',
    recOne: 'Olive Sourdough',
    recTwo: 'Cinnamon Bun',
    notes: 'Arguably the best bakery in the city. Come early, it\'s often lined up, popular items can sell out quickly.',
  },

  {
    name: 'Lift Me Up Bakery',
    cuisine: 'Bakery',
    location: 'Oliver/Wîhkwêntôwin',
    address: '10750 124 St, Edmonton, AB T5M 0H1',
    phone: '(780) 452-3393',
    website: 'https://www.tiramisubistro.ca/',
    recOne: 'Cinnamon Buns',
    recTwo: null,
    notes: null,
  },

  // Barbeque

  {
    name: 'Meat',
    cuisine: 'BBQ',
    location: 'OS',
    address: '8216 104 St NW, Edmonton, AB T6E 4E5',
    phone: '(587) 520-6338',
    website: 'meatfordinner.com',
    // recOne: rec,
    // recTwo: rec,
    notes: 'Best BBQ place in Edmonton. Large portions meant for sharing with groups.',
  },

  // Breakfast

  {
    name: 'Barb & Ernie\'s',
    cuisine: 'Breakfast',
    location: 'OS',
    address: '9906 72 Ave NW, Edmonton, AB T6E 0Z3',
    phone: '(780) 433-3242',
    website: 'oldcountryinnedmonton.com',
    recOne: 'Bratwurst Benny',
    // recTwo: rec,
    notes: 'German food and incredible breakfast. An Edmonton institution.',
  },

  // Breweries 

  {
    name: 'Odd Company OG',
    cuisine: 'Brewery',
    location: 'OW',
    address: '12021 102 Ave #105, Edmonton, AB T5K 0R8',
    phone: '(587) 590-9973',
    website: 'https://www.oddcompany.ca/',
    recOne: 'Coconut Passionfruit Sour',
    recTwo: 'Cheeseburger',
    notes: 'Food menu is very limited. OS location has a much bigger menu, but I live downtown.',
  },

  // Burgers

  {
    name: 'Fox Burger Highlands',
    cuisine: 'Burgers',
    location: 'North',
    address: '6423 112 Ave NW, Edmonton, AB T5W 0N9',
    phone: '(780) 250-0369',
    website: 'foxburger.ca',
    recOne: ,
    recTwo: ,
    notes: 'There are locations in Westmount and Leduc as well, but I\'ve only been to the OG in Highlands.',
  },

  // {
  //   name: 'Fox Burger Westmount',
  //   cuisine: ,
  //   location: 'Westmount',
  //   address: ,
  //   phone: ,
  //   website: ,
  //   recOne: ,
  //   recTwo: ,
  //   notes: ,
  // },

  {
    name: 'Flat Boy',
    cuisine: ,
    location: ,
    address: ,
    phone: ,
    website: ,
    recOne: ,
    recTwo: ,
    notes: ,
  },

  // Cafe

  {
    name: 'Brown Butter Cafe',
    cuisine: 'Cafe',
    location: 'South',
    address: '1528 91 St SW, Edmonton, AB T6X 1M5',
    phone: '(780) 752-9900',
    website: 'https://brownbuttercafe.com/',
    recOne: 'Cinnamon Bun',
    // recTwo: ,
    notes: "<ul><li>The cinnamon bun is on another level. It blows every other cinnamon bun I've ever had out of the water.</li><li>Banger matcha latte as well.</li></ul>",
  },

  {
    name: 'The Colombian',
    cuisine: 'Cafe',
    location: ['West', 'OS', 'South'],
    locations: [
      {location: 'WM', neighbourhood: 'Glenora', address: '#1, 10340-134 Street NW', phone: '780-757-9195'},
      {location: 'South', neighbourhood: 'Mill Creek', address: '8816-92 Street NW', phone: '825-480-1787'},
      {location: 'South', neighbourhood: 'Parkallen', address: '6529 111 Street NW', phone: '587-520-4300'}
    ],
    // phone: null,
    website: 'https://thecolombian.ca/',
    recOne: 'Coffee',
    // recTwo: ,
    notes: 'Best coffee in the city. Colombia is the country that made me fall in love with coffee. The owner is Colombian and imports beans directly from farms back home.',
  },

   {
    name: 'Square 1',
    cuisine: 'Cafe',
    location: ['West', 'South'],
    address: [
      {location: 'West', neighbourhood: 'Glenora', address: '14055 West Block Dr NW Unit 140, Edmonton, AB T5N 1L8', phone: '780-452-8511'},
      {location: 'South', neighbourhood: 'Fairway', address: '15 Fairway Dr NW, Edmonton, AB T6J 2S6', phone: '780-452-8511'}
    ],
    // phone: null,
    website: 'https://www.square1coffee.ca/',
    recOne: 'Coffee',
    // recTwo: ,
    notes: '<ul><li>Great Coffee.</li><li>Several other locations that I haven\'t visited.</li><li>South (Fairway) Location has a lot of cool stuff to buy.</li><li>Glenora location is my favourite office away from the office.</li></ul>',
  },

  //Cajun
   {
    name: 'Da De O',
    cuisine: 'Cajun',
    location: 'OS',
    address: '10548 A 82 Ave NW, Edmonton, AB T6E 2A4',
    phone: '780-433-0930',
    website: 'http://dadeo.ca',
    recOne: 'Pulled Pork Po Boy',
    recTwo: 'Sweet Potato Fries',
    notes: 'An Edmonton institution &mdash; 1950\'s style diner serving Cajun cuisine.',
  },
 

  // Canadian

  {
    name: 'Butternut Tree',
    cuisine: 'Canadian',
    location: 'Central',
    address: '9707 110 St NW #101, Edmonton, AB T5K 2L9',
    phone: '780-760-2271',
    website: 'https://thebutternuttree.ca/',
    // recOne: ,
    // recTwo: ,
    notes: 'Great high-end spot overlooking the High Level Bridge. Strangely, not talked about often.',
  },

    {
    name: 'Rge Rd',
    cuisine: 'Canadian',
    location: 'OW',
    address: '10643 123 St NW, Edmonton, AB T5N 1P2',
    phone: '780-447-4577',
    website: 'https://www.rgerd.ca/',
    // recOne: ,
    // recTwo: ,
    notes: '<ul><li>Rotating menu, changing regularly.</li><li>Seating at the bar is often available for walk-ins.</li></ul> ',
  },

  // Chinese

  {
    name: 'Lingnan',
    cuisine: 'Chinese',
    location: 'Downtown',
    address: '10582 104 St NW, Edmonton, AB T5H 2W1',
    phone: '780-426-3975',
    website: 'https://thelingnan.com/',
    // recOne: ,
    // recTwo: ,
    notes: 'As far as Canadian-Chinese food goes, this is where it\'s at.',
  },

  // Dessert

  {
    name: ,
    cuisine: ,
    location: ,
    address: ,
    phone: ,
    website: ,
    recOne: ,
    recTwo: ,
    notes: ,
  },

  // Dutch

   {
    name: 'Dutch Delicious',
    cuisine: 'Dutch',
    location: 'West',
    address: '13232 118 Ave NW',
    phone: '780-455-2323',
    website: 'https://dutchdeliciousbakery.com/',
    // recOne: ,
    // recTwo: ,
    notes: 'Dutch specialty store. Lots of cheese, pastries, and other imported snacks.',
  },

  // Fillipino

  // {name:'',cuisine:'',location:'',address:'',phone:'',website:'',recOne:'',recTwo:'',notes:'',},

  // Gastropub

  {name:'The Common',cuisine:'Gastropub',location:'Downtown',address:'9910 109 St NW',phone:'780-452-7333',website:'https://www.thecommon.ca/',
    // recOne:'',
    // recTwo:'',
    notes:'Solid downtown spot for lunch and dinner with a phenomenal vibe. Lots of good DJs in the evenings.',},

{name:'Otto',cuisine:'Gastropub',cuisineAlt:'German',location:'North',neighbourhood:'FILL',address:'11405 95 St',phone:'-780-477-6244',website:'https://www.ottofoodanddrink.com/', price:'$$',recOne:'FILL',
  // recTwo:'',
  notes:'',},

  {name:'Three Vikings',cuisine:'Gastropub', cuisineAlt:'Danish',location:'Downtown',neighbourhood:'OW',address:'10713 124 St',phone:'780-249-6302',website:'https://www.threevikings.ca/', price:'$$',recOne:'FILL',recTwo:'FILL',notes:'Underrated spot on 124th, one of the best food pubs in town.',},
  // Indian
  
  {name:'',cuisine:'',location:'',address:'',phone:'',website:'',recOne:'',recTwo:'',notes:'',},

  // Italian

  {
    name: ,
    cuisine: ,
    location: ,
    address: ,
    phone: ,
    website: ,
    recOne: ,
    recTwo: ,
    notes: ,
  },

  // Japanese

  {
    name: ,
    cuisine: ,
    location: ,
    address: ,
    phone: ,
    website: ,
    recOne: ,
    recTwo: ,
    notes: ,
  },

  // Korean

  {
    name: ,
    cuisine: ,
    location: ,
    address: ,
    phone: ,
    website: ,
    recOne: ,
    recTwo: ,
    notes: ,
  },

// Latin & Meixcan

{
    name: ,
    cuisine: ,
    location: ,
    address: ,
    phone: ,
    website: ,
    recOne: ,
    recTwo: ,
    notes: ,
  },

  // Middle Eastern & Persian

  {
    name: ,
    cuisine: ,
    location: ,
    address: ,
    phone: ,
    website: ,
    recOne: ,
    recTwo: ,
    notes: ,
  },

  // Pizza

  {
    name: ,
    cuisine: ,
    location: ,
    address: ,
    phone: ,
    website: ,
    recOne: ,
    recTwo: ,
    notes: ,
  },

  // Portuguese 

  {
    name: ,
    cuisine: ,
    location: ,
    address: ,
    phone: ,
    website: ,
    recOne: ,
    recTwo: ,
    notes: ,
  },
  
  // Vegan

  {
    name: ,
    cuisine: ,
    location: ,
    address: ,
    phone: ,
    website: ,
    recOne: ,
    recTwo: ,
    notes: ,
  },

  // Vietnamese

  {
    name: ,
    cuisine: ,
    location: ,
    address: ,
    phone: ,
    website: ,
    recOne: ,
    recTwo: ,
    notes: ,
  },


];
