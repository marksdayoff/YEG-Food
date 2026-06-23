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
    notes:
      "Arguably the best bakery in the city. Come early, it's often lined up, popular items can sell out quickly.",
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
    notes:
      'Best BBQ place in Edmonton. Large portions meant for sharing with groups.',
  },

  // Breakfast

  {
    name: "Barb & Ernie's",
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
    notes:
      'Food menu is very limited. OS location has a much bigger menu, but I live downtown.',
  },

  // Burgers

  {
    name: 'Fox Burger Highlands',
    cuisine: 'Burgers',
    location: 'North',
    address: '6423 112 Ave NW, Edmonton, AB T5W 0N9',
    phone: '(780) 250-0369',
    website: 'foxburger.ca',
    recOne: FILL,
    // recTwo: ,
    notes:
      "There are locations in Westmount and Leduc as well, but I've only been to the OG in Highlands.",
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
    // cuisine: ,
    // location: ,
    // address: ,
    // phone: ,
    // website: ,
    // recOne: ,
    // recTwo: ,
    // notes: ,
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
    notes:
      "<ul><li>The cinnamon bun is on another level. It blows every other cinnamon bun I've ever had out of the water.</li><li>Banger matcha latte as well.</li></ul>",
  },

  {
    name: 'The Colombian',
    cuisine: 'Cafe',
    location: ['West', 'OS', 'South'],
    locations: [
      {
        location: 'WM',
        neighbourhood: 'Glenora',
        address: '#1, 10340-134 Street NW',
        phone: '780-757-9195',
      },
      {
        location: 'South',
        neighbourhood: 'Mill Creek',
        address: '8816-92 Street NW',
        phone: '825-480-1787',
      },
      {
        location: 'South',
        neighbourhood: 'Parkallen',
        address: '6529 111 Street NW',
        phone: '587-520-4300',
      },
    ],
    // phone: null,
    website: 'https://thecolombian.ca/',
    recOne: 'Coffee',
    // recTwo: ,
    notes:
      'Best coffee in the city. Colombia is the country that made me fall in love with coffee. The owner is Colombian and imports beans directly from farms back home.',
  },

  {
    name: 'Square 1',
    cuisine: 'Cafe',
    location: ['West', 'South'],
    address: [
      {
        location: 'West',
        neighbourhood: 'Glenora',
        address: '14055 West Block Dr NW Unit 140, Edmonton, AB T5N 1L8',
        phone: '780-452-8511',
      },
      {
        location: 'South',
        neighbourhood: 'Fairway',
        address: '15 Fairway Dr NW, Edmonton, AB T6J 2S6',
        phone: '780-452-8511',
      },
    ],
    // phone: null,
    website: 'https://www.square1coffee.ca/',
    recOne: 'Coffee',
    // recTwo: ,
    notes:
      "<ul><li>Great Coffee.</li><li>Several other locations that I haven't visited.</li><li>South (Fairway) Location has a lot of cool stuff to buy.</li><li>Glenora location is my favourite office away from the office.</li></ul>",
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
    notes:
      "An Edmonton institution &mdash; 1950's style diner serving Cajun cuisine.",
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
    notes:
      'Great high-end spot overlooking the High Level Bridge. Strangely, not talked about often.',
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
    notes:
      '<ul><li>Rotating menu, changing regularly.</li><li>Seating at the bar is often available for walk-ins.</li></ul> ',
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
    notes: "As far as Canadian-Chinese food goes, this is where it's at.",
  },

  // Dessert

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
    notes:
      'Dutch specialty store. Lots of cheese, pastries, and other imported snacks.',
  },

  // Fillipino

  // {name:'',cuisine:'',location:'',address:'',phone:'',website:'',recOne:'',recTwo:'',notes:'',},

  // Gastropub

  {
    name: 'The Common',
    cuisine: 'Gastropub',
    location: 'Downtown',
    address: '9910 109 St NW',
    phone: '780-452-7333',
    website: 'https://www.thecommon.ca/',
    // recOne:'',
    // recTwo:'',
    notes:
      'Solid downtown spot for lunch and dinner with a phenomenal vibe. Lots of good DJs in the evenings.',
  },

  {
    name: 'Otto',
    cuisine: 'Gastropub',
    cuisineAlt: 'German',
    location: 'North',
    neighbourhood: 'FILL',
    address: '11405 95 St',
    phone: '-780-477-6244',
    website: 'https://www.ottofoodanddrink.com/',
    price: '$$',
    recOne: 'FILL',
    // recTwo:'',
    notes: '',
  },

  {
    name: 'Three Vikings',
    cuisine: 'Gastropub',
    cuisineAlt: 'Danish',
    location: 'Downtown',
    neighbourhood: 'OW',
    address: '10713 124 St',
    phone: '780-249-6302',
    website: 'https://www.threevikings.ca/',
    price: '$$',
    recOne: 'FILL',
    recTwo: 'FILL',
    notes: 'Underrated spot on 124th, one of the best food pubs in town.',
  },

  {
    name: 'Red Star',
    cuisine: 'Gastropub',
    location: 'Downtown',
    neighbourhood: 'Downtown',
    address: '10534 Jasper Ave',
    phone: '780-428-0825',
    website: 'https://redstarpub.ca/',
    price: '$$',
    recOne: '',
    recTwo: '',
    notes: '',
  },

  // Indian
  {
    name: 'Remedy Cafe',
    cuisine: 'Indian',
    location: ['Central', 'South'],
    locations: [
      {
        location: 'South',
        neighbourhood: 'OS',
        address: '8631 – 109 Street',
        phone: '780-433-3096',
      },
      {
        location: 'West',
        neighbourhood: 'OW',
        address: '10310 – 124 Street',
        phone: '780-705-4464',
      },
    ],
    website: 'https://www.remedycafe.ca/',
    price: '$$',
    recOne: 'Chicken Chana Wrap',
    recTwo: 'Chai Latte',
    notes:
      '<ul><li>Hipster cafe thats serves modern Indian food.</li><li>There are several other locations but these are my top picks.</li></ul>',
  },

  {
    name: 'Nosh Cafe',
    cuisine: 'Indian',
    location: 'Central',
    neighbourhood: 'OW',
    address: '8708 109 St NW',
    phone: '587-988-2894',
    website: 'https://noshcafeedmonton.com',
    price: '$$',
    recOne: 'Dosa',
    recTwo: 'Shahi Paneer',
    notes:
      '<ul><li>Low-Key Indian spot with incredible food and an extensive menu.</li></ul>',
  },

  // Indonesian
  {
    name: 'Padmanadi',
    cuisine: 'Indonesian',
    location: 'Central',
    neighbourhood: 'Central McDougal',
    address: '10740 101 St NW',
    phone: '780-428-8899',
    website: 'https://www.padmanadi.com/',
    price: '$$',
    recOne: '',
    recTwo: '',
    notes:
      '<ul><li>Indonesian vegan food. Even as a non-vegan, I love this place.</li></ul>',
  },

  // Italian
  {
    name: 'Bar Bricco',
    cuisine: 'Italian',
    location: 'Central',
    neighbourhood: 'Downtown',
    address: '10347 Jasper Ave',
    phone: '780-424-5588',
    website: 'https://www.barbricco.com/',
    price: '$$$',
    recOne: '',
    recTwo: '',
    notes:
      '<ul><li>When Daniel Costa opens an Italian restaurant, you go. Home runs all day long.</li></ul>',
  },

  {
    name: 'Va!',
    cuisine: 'Italian',
    location: 'Central',
    neighbourhood: 'OW',
    address: '12024 Jasper Ave',
    phone: '-q780-249-2445',
    website: 'https://www.va-yeg.ca/',
    price: '$$',
    recOne: 'Breakfast Panino',
    recTwo: 'Mortadella Panini',
    notes:
      '<ul><li>Tiny cafe with a small menu of phenomenal Italian snacks.</li></ul>',
  },

  {
    name: 'Olia',
    cuisine: 'Italian',
    location: 'Central',
    neighbourhood: 'OW',
    address: '12016 Jasper Avenue',
    phone: '780-244-5156',
    website: 'https://www.olia-ristorante.ca/',
    price: '$$$$',
    recOne: '',
    recTwo: '',
    notes:
      '<ul><li>Another Daniel Costa masterpiece. Arguably the best Italian restaurant in the city.</li></ul>',
  },

  {
    name: 'Italian Centre',
    cuisine: 'Italian',
    location: ['Central', 'South'],
    locations: [
      {
        location: 'Central',
        neighbourhood: 'Little Italy',
        address: '10878 95 Street',
        phone: '587-687-3977',
      },
      {
        location: 'South',
        neighbourhood: 'Empire Park',
        address: '5028 104a Street',
        phone: '587 687 3977',
      },
    ],
    website: 'https://www.italiancentre.ca/',
    price: '$',
    recOne: 'Panino',
    recTwo: '',
    notes:
      '<ul><li>The panino is a right of passage for Edmontonians. This sandwich is ledgendary.</li><li>Produce is high quality and it has the best deli counter in town.</li><li>Other locations in Sherwood Park and the West End.</li></ul>',
  },

  // Japanese
  {
    name: 'Izakaya Tomo',
    cuisine: 'Japanese',
    location: 'South',
    neighbourhood: 'Strathcona Industrial Park',
    address: '3739 99st Edmonton, AB',
    phone: '780-440-9152',
    website: 'https://izakayatomo.net/',
    price: '$$',
    recOne: 'Tsukemono',
    recTwo: '',
    notes:
      '<ul><li>Inconveniently located, but worth the visit for high-quality sushi.</li><li>Very few places offer tsukemono (Japanese pickles), so they have a leg up for that alone.</li></ul>',
  },

  {
    name: 'Dorinku Tokyo',
    cuisine: 'Japanese',
    location: 'South',
    neighbourhood: 'OS',
    address: '10205 82 ave',
    phone: '780-988-9760',
    website: 'https://tokyo.dorinku.ca/',
    price: '$$',
    recOne: 'Ramen',
    recTwo: 'Shaka Shaka Fries',
    notes:
      '<ul><li>Lots of interesting lunch specials and feature items.</li><li>Impressive collection of sake.</li></ul>',
  },

  {
    name: 'Japonais',
    cuisine: 'Japanese',
    location: 'Central',
    locations: [
      {
        location: 'Central',
        neighbourhood: 'OW',
        address: '11806 Jasper Ave',
        phone: '780-760-1616',
      },
      {
        location: 'West',
        neighbourhood: 'Windermere',
        address: '6138 Currents Dr NW',
        phone: '780-334-1717',
      },
    ],
    website: 'https://japonaisbistro.ca/',
    price: '$$-$$$',
    recOne: 'Bento Box',
    recTwo: 'Sashimi',
    notes:
      '<ul><li>One of the top spots for higher end sushi.</li><li>Lunch Bentos are a killer deal.</li></ul>',
  },

  // Korean
  {
    name: 'Seoul Fried Chicken',
    cuisine: 'Korean',
    location: ['Central', 'South'],
    locations: [
      {
        location: 'Central',
        neighbourhood: 'Downtown',
        address: '#101 10145 104 St',
        phone: '780-249-2096',
      },
      {
        location: 'South',
        neighbourhood: 'OS',
        address: '7904b 104 St',
        phone: '780-761-3616',
      },
    ],
    website: 'https://seoulfried.com/',
    price: '$$',
    recOne: 'Garlic Soy Chicken',
    recTwo: 'Gochujang Caramel Chicken',
    notes:
      '<ul><li>This place will change the way you think about fried chicken.</li></ul>',
  },

  {
    name: 'Buok',
    cuisine: 'Koren',
    location: 'Central',
    neighbourhood: 'Downtown',
    address: '10707 100 Ave NW',
    phone: '780.244.2865',
    website: 'https://www.buokfresh.ca/',
    price: '$',
    recOne: 'Bibimbaap',
    recTwo: '',
    notes: '<ul><li>Best bang for your buck Korean.</li></ul>',
  },

  // Latin & Meixcan
  {
    name: 'Paraiso',
    cuisine: 'Latin & Mexican',
    location: ['Central', 'South'],
    locations: [
      {
        location: 'Central',
        neighbourhood: 'OW',
        address: '9136-118 Avenue NW',
        phone: '780-479-6000',
      },
      {
        location: 'South',
        neighbourhood: 'Allendale',
        address: '6926-104 Street NW',
        phone: '780-705-9711',
      },
    ],
    website: 'paraisotropical.ca/',
    price: '$',
    recOne: 'Pozole',
    recTwo: 'Yuca con Chicharron',
    notes:
      "<ul><li>Incredible Latin grocery store with a small takeout kitchen.</li>It's the only place in town to find Mexican Pozole</ul>",
  },

  {
    name: 'Avila Arepa',
    cuisine: 'Latin & Mexican',
    location: 'South',
    neighbourhood: 'OS',
    address: '10760 82 Ave NW,',
    phone: '780-249-9436',
    website: 'https://www.avilaarepa.ca/',
    price: '$',
    recOne: 'Pabellón Arepa',
    recTwo: 'Yuca Frita',
    notes:
      "<ul><li>Venezuelan joint on Whyte ave. I adore arepas and ate them all the time when I lived in Colombia. I don't know anywhere else in town that does them.</li></ul>",
  },

  // Middle Eastern & Persian

  {
    name: 'Al Salam Bakery',
    cuisine: 'Middle Eastern & Persian',
    location: 'South',
    neighbourhood: 'Strathcona Industrial Park',
    address: '10141 34 Ave NW',
    phone: '780-944-0000',
    website: 'https://www.alsalampita.ca/',
    price: '$',
    recOne: 'Chicken Shawarma',
    recTwo: '',
    notes: '<ul><li>Middle Eastern groceries and restaurant.</li></ul>',
  },

  {
    name: 'Sunbake Pita',
    cuisine: 'Middle Eastern & Persian',
    location: 'North',
    neighbourhood: 'Rosslyn',
    address: '10728 134 Ave NW',
    phone: '780-472-8405',
    website: 'https://www.sunbakepita.ca/',
    price: '$',
    recOne: 'Chicken Shawarma Saj',
    recTwo: "Za'atar and Cheese Pie",
    notes:
      '<ul><li>They bake thousands of pitas daily. If you want pitas, buy them here, the quality is superb.</li></ul>',
  },

  {
    name: 'Shaheen Grocery',
    cuisine: 'Middle Eastern & Iranian',
    location: 'South',
    neighbourhood: 'Ermineskin',
    address: '2830 Calgary Trail NW',
    phone: '780-760-2830',
    website: 'http://shaheengrocery.ca/',
    price: '$',
    recOne: 'Sesame Naan',
    recTwo: '',
    notes:
      "<ul><li>Grocery store specializing in Afghan and Iranian items. Lots of cool stuff here.</li><li>Top pick for me is the naan, but this isn't like Indian naan, this is huge and fluffy &mdash; almost like focaccia.</li></ul>",
  },
  // Pizza

  // Portuguese

  // Vegan

  // Vietnamese
];
