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
    category: ['Bakery'],
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
    category: ['Bakery'],
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
    category: ['BBQ'],
    location: 'OS',
    address: '8216 104 St NW, Edmonton, AB T6E 4E5',
    phone: '(587) 520-6338',
    website: 'meatfordinner.com',
    // recOne: rec,
    // recTwo: rec,
    notes:
      'Best BBQ place in Edmonton. Large portions meant for sharing with groups.',
  },

  // Breakfast/Brunch

  {
    name: "Barb & Ernie's",
    category: ['Breakfast', 'Brunch', 'German'],
    location: 'OS',
    address: '9906 72 Ave NW, Edmonton, AB T6E 0Z3',
    phone: '(780) 433-3242',
    website: 'oldcountryinnedmonton.com',
    recOne: 'Bratwurst Benny',
    // recTwo: rec,
    notes: 'German food and incredible breakfast. An Edmonton institution.',
  },

  {
    name: 'Dogpatch',
    category: ['Brunch', 'Pub'],
    location: 'Central',
    neighbourhood: 'Riverdale',
    address:
      '<a href="https://www.google.com/maps/place/@53.544668,-113.4737124,697m/data=!3m2!1e3!4b1!4m6!3m5!1s0x53a023f6604bc969:0xcf847540df051ba2!8m2!3d53.5446648!4d-113.4711375!16s%2Fg%2F11r7sx39_c?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D">#101, 10158 90 St NW</a>',
    phone: '780-761-8700',
    website: '<a href="https://www.dogpatchyeg.ca/">Website</a>',
    price: '$$',
    recOne: '',
    recTwo: '',
    notes: '<ul><li></li></ul>',
  },

  // Breweries

  {
    name: 'Odd Company OG',
    category: ['Brewery', 'Burger'],
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
    name: 'Fox Burger',
    category: ['Burgers'],
    location: 'North',
    address: '6423 112 Ave NW, Edmonton, AB T5W 0N9',
    phone: '(780) 250-0369',
    website: 'foxburger.ca',
    recOne: FILL,
    // recTwo: ,
    notes:
      "There are locations in Westmount and Leduc as well, but I've only been to the OG in Highlands.",
  },

  {
    name: 'Flat Boy',
    // category: ,
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
    category: ['Cafe'],
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
    category: ['Cafe'],
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
    category: ['Cafe'],
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

  {
    name: 'Little Brick',
    category: ['Cafe'],
    location: 'Central',
    neighbourhood: 'Riverdale',
    address:
      '<a href="https://www.google.com/maps/place/@53.5421187,-113.4696022,697m/data=!3m2!1e3!4b1!4m6!3m5!1s0x53a0225f2a3698f1:0x25146da93bec151c!8m2!3d53.5421187!4d-113.4696022!16s%2Fg%2F11b7hkc0c2?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D">10004 90 St NW</a>',
    phone: '780-705-1230',
    website: '<a href="https://littlebrick.ca/">Website</a>',
    price: '$-$$',
    recOne: '',
    recTwo: '',
    notes: '<ul><li></li></ul>',
  },

  //Cajun
  {
    name: 'Da De O',
    category: ['Cajun'],
    location: 'OS',
    address: '10548 A 82 Ave NW, Edmonton, AB T6E 2A4',
    phone: '780-433-0930',
    website: 'http://dadeo.ca',
    recOne: 'Pulled Pork Po Boy',
    recTwo: 'Sweet Potato Fries',
    notes:
      "An Edmonton institution &mdash; 1950's style diner serving Cajun category.",
  },

  // Canadian

  {
    name: 'Butternut Tree',
    category: ['Canadian', 'Bougie', 'Date Night'],
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
    category: ['Canadian', 'Bougie', 'Date Night'],
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
    category: ['Chinese'],
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
    category: ['Dutch', 'Groceries'],
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

  // {name:'',category:'',location:'',address:'',phone:'',website:'',recOne:'',recTwo:'',notes:'',},

  // Gastropub

  {
    name: 'The Common',
    category: ['Gastropub'],
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
    category: ['Gastropub', 'German'],
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
    category: ['Gastropub', 'Danish'],
    categoryAlt: 'Danish',
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
    category: ['Gastropub'],
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
    category: ['Indian', 'Cafe'],
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
    category: ['Indian'],
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
    category: ['Indonesian', 'Vegan'],
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
    category: ['Italian', 'Bougie', 'Date Night'],
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
    category: ['Italian', 'Cafe'],
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
    category: ['Italian', 'Bougie', 'Date Night'],
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
    category: ['Italian', 'Cafe'],
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
    category: ['Japanese'],
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
    category: ['Japanese'],
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
    category: ['Japanese'],
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

  {
    name: 'Tokiwa',
    category: ['Japanese'],
    location: 'Central',
    neighbourhood: 'OW',
    address:
      '<a href="https://www.google.com/maps/place/Tokiwa+Ramen/@53.547453,-113.5305568,17z/data=!4m6!3m5!1s0x53a023d2b2dc5fbb:0xb44423113114b408!8m2!3d53.5474322!4d-113.5279032!16s%2Fg%2F11g6_5kz67?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D">11978 104 Ave NW</a>',
    phone: '+17807611400',
    website: '<a href="https://tokiwaramen.ca/">Website</a>',
    price: '$$',
    recOne: 'Black Garlic Ramen',
    recTwo: 'Spicy Goma Ramen',
    notes:
      '<ul><li>Hands down the best ramen in the city.</li><li>Line-ups on the weekend, expect to wait.</li><li>Closing hours vary, only open until broth runs out.</li></ul>',
  },

  {
    name: '',
    category: [''],
    location: '',
    neighbourhood: '',
    address: '<a href=""></a>',
    phone: '',
    website: '<a href="">Website</a>',
    price: '',
    recOne: '',
    recTwo: '',
    notes: '<ul><li></li></ul>',
  },

  // Korean
  {
    name: 'Seoul Fried Chicken',
    category: ['Korean'],
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
    category: ['Korean'],
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
    category: [
      'Latin',
      'Venezuelan',
      'Colombian',
      'Salvadorian',
      'Guatelmalan',
      'Mexican',
    ],
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
    category: ['Latin', 'Guatemalan'],
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
    category: ['Middle Eastern'],
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
    category: 'Middle Eastern',
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
    category: ['Afghan', 'Iranian'],
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
  {
    name: 'Capital Pizza',
    category: ['Pizza', 'Italian'],
    location: 'North',
    neighbourhood: 'Londonderry',
    address:
      '<a href="https://www.google.com/maps/place/Capital+Pizza/@53.6071769,-113.4624638,17z/data=!4m6!3m5!1s0x53a023561b72218d:0x5535e0de6f74afbc!8m2!3d53.6071737!4d-113.4598835!16s%2Fg%2F1tgdhp3b?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D">7640 144 Ave NW</a>',
    phone: '780-476-1281',
    website: '<a href="https://capitalpizza.ca">Website</a>',
    price: '$$',
    recOne: 'Pizza.',
    // recTwo: '',
    notes:
      '<ul><li>Old school "Steak and Pizza" joint. I\'ve been eating this pizza since I was a child.</li></ul>',
  },
  {
    name: 'Dallas Pizza',
    category: ['Pizza'],
    location: 'East',
    neighbourhood: 'Forest Heights',
    address:
      '<a href="https://www.google.com/maps/place/Dallas+Pizza+%26+Steak+House/@53.5496871,-113.4513673,17z/data=!3m1!4b1!4m6!3m5!1s0x53a022ee5348d73b:0xb589267c5dacd44b!8m2!3d53.5496839!4d-113.448787!16s%2Fg%2F1tdfhchb?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D">7834 106 Ave NW</a>',
    phone: '780-466-1112',
    website: '<a href="https://dallas-pizza.com">Website</a>',
    price: '$$',
    recOne: 'Pizza',
    recTwo: '',
    notes:
      '<ul><li>Solid quality pizza from a typical "Steak and Pizza" restaurant. Second to Capital Pizza in this style of pie.</li></ul>',
  },
  {
    name: 'High Dough',
    category: ['Pizza'],
    location: 'South',
    neighbourhood: 'OS',
    address:
      '<a href="https://www.google.com/maps/place/High+Dough/@53.5104311,-113.5000197,17z/data=!3m1!4b1!4m6!3m5!1s0x53a023c7db24dced:0x505e0a66d5d60fe8!8m2!3d53.5104279!4d-113.4974394!16s%2Fg%2F11smrgdq_2?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D">7341 104 St NW</a>',
    phone: '(780) 757-4460',
    website: '<a href="https://www.thehighdough.ca">Website</a>',
    price: '$$',
    recOne: 'Donair Pizza',
    recTwo: '',
    notes:
      '<ul><li>Detroit style. Thick, fluffy and chewy crust, sauce on top.</li></ul>',
  },

  {
    name: "Fn'Za",
    category: ['Pizza'],
    location: 'Central',
    neighbourhood: 'OW',
    address:
      '<a href="https://www.google.com/maps/place/Fn%E2%80%99za/@53.5407579,-113.5306729,17z/data=!3m1!4b1!4m6!3m5!1s0x53a023554f9325f7:0xd87cdfc89d5721f9!8m2!3d53.5407547!4d-113.5280926!16s%2Fg%2F11t_ygw7y6?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D">11939 Jasper Ave</a>',
    phone: '587-900-9666',
    website: '<a href="http://fnza.wtf">Website</a>',
    price: '$',
    recOne: 'LA Dip',
    recTwo: 'Venice Bitch',
    notes:
      '<ul><li>These beauties run the best pizza shop in town. Top shelf ingredients, sourdough crust, fermented tomato sauce... You can get a 10" for under $20 and the price to quality is unmatched. Tip and tax included in the price. Absolute banger spot. If I did ratings on this site, i\'d give it 11/10.</li></ul>',
  },
  // Portuguese
  {
    name: 'Sabor',
    category: ['Portuguese', 'Seafood', 'Mediterranean'],
    location: 'Central',
    neighbourhood: 'Downtown',
    address:
      '<a href="https://www.google.com/maps/place/sabor/data=!4m2!3m1!1s0x53a0224890edca61:0xcb4267c543d4e2de?sa=X&ved=1t:242&ictx=111">#109, 10220 103 St NW</a>',
    phone: '',
    website: '<a href="https://www.sabor.ca/">Website</a>',
    price: '$$$',
    recOne: '',
    recTwo: '',
    notes: '<ul><li>Best seafood in the city.</li></ul>',
  },

  // Pub

  {
    name: 'Sherlock Holmes',
    category: ['Pub'],
    location: 'Central',
    neighbourhood: 'Downtown',
    address:
      '<a href="https://www.google.com/maps/place/The+Sherlock+Holmes+Pub+Downtown/@53.5424491,-113.4913599,17z/data=!3m1!4b1!4m6!3m5!1s0x53a0224596254607:0x82ea31f8d983f5e7!8m2!3d53.5424491!4d-113.4913599!16s%2Fg%2F1tfv4tdw?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D">10012 101A Ave</a>',
    phone: '178-0426-7784',
    website: '<a href="https://www.sherlockshospitality.com/">Website</a>',
    price: '$$',
    recOne: '',
    recTwo: '',
    notes:
      "<ul><li>Proper English pub that's been around for almost 20 years. One of the best spots for a pint in the city.</li><li>Several locations exist, but downtown is the best.</li></ul>",
  },

  // Sandwiches

  {
    name: 'Farrow',
    category: ['Sandwiches'],
    location: ['South', 'Central'],
    locations: [
      {
        location: 'South',
        neighbourhood: 'Garneau',
        address:
          '<a href="https://www.google.com/maps/place/Farrow+Garneau/@53.5206409,-113.5514175,14z/data=!3m1!5s0x53a0221c0cee119d:0x4ae1ea34ea82a9ac!4m10!1m2!2m1!1sfarrow!3m6!1s0x53a021ff97bfffff:0x418cfe15f6adaa0c!8m2!3d53.5206409!4d-113.5123616!15sCgZmYXJyb3ciA4gBAVoIIgZmYXJyb3eSAQ1zYW5kd2ljaF9zaG9w4AEA!16s%2Fg%2F1pzsyx8vc?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D">8422 109 St NW</a>',
        phone: '+17807574160',
      },

      {
        location: 'Central',
        neighbourhood: 'OW',
        address:
          '<a href="https://www.google.com/maps/place/Farrow+Garneau/@53.5206409,-113.5514175,14z/data=!3m1!5s0x53a0221c0cee119d:0x4ae1ea34ea82a9ac!4m10!1m2!2m1!1sfarrow!3m6!1s0x53a021ff97bfffff:0x418cfe15f6adaa0c!8m2!3d53.5206409!4d-113.5123616!15sCgZmYXJyb3ciA4gBAVoIIgZmYXJyb3eSAQ1zYW5kd2ljaF9zaG9w4AEA!16s%2Fg%2F1pzsyx8vc?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D">#6, 10240 124 St</a>',
        phone: '+17807574160',
      },
    ],

    website: '<a href="https://farrowsandwiches.ca/">Website</a>',
    price: '$',
    recOne: 'The Grick',
    recTwo: '',
    notes:
      "<ul><li>You won't find a better breakfast sandwich than the Grick.</li><li>Other locations downtown and in Ritchie</li></ul>",
  },

  {
    name: 'Pals',
    category: ['Sandwiches'],
    location: 'Sotuh',
    neighbourhood: 'OS',
    address:
      '<a href="https://www.google.com/maps/place/Pals+Sandwiches/@53.5363462,-113.6022164,13z/data=!4m10!1m2!2m1!1spals!3m6!1s0x53a02332884b2667:0xb19d88b1de2a6ad3!8m2!3d53.5189834!4d-113.4971178!15sCgRwYWxzWgYiBHBhbHOSAQ1zYW5kd2ljaF9zaG9wmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJvYTJWMlpHWjNFQUXgAQD6AQQITRA2!16s%2Fg%2F11t9cft2nk?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D">10335 83 Ave NW</a>',
    phone: '825-480-5300',
    website: '<a href="https://www.palsyeg.com/">Website</a>',
    price: '$$',
    recOne: 'Cubano',
    recTwo: '',
    notes:
      '<ul><li>The Cubano is &#x1f525 (When they have it on the menu, at least)</li></ul>',
  },
  {
    name: "Wilfred's",
    category: ['Brunch', 'Sandwiches'],
    location: 'Central',
    neighbourhood: 'OW',
    address:
      '<a href="https://www.google.com/maps/place/wilfreds/data=!4m2!3m1!1s0x53a023d2d37c3fd1:0x2faede03ffbe5f4b?sa=X&ved=1t:242&ictx=111">10429 121 St NW,</a>',
    phone: '780-250-2056',
    website: '<a href="https://www.wilfreds.co/">Website</a>',
    price: '$$',
    recOne: 'Lobster Roll',
    recTwo: '',
    notes:
      '<ul><li>Not wheelchair accessable due to being housed in a heritage building.</li></ul>',
  },

  {
    name: 'Fifendekel',
    category: ['Sandwiches'],
    location: 'South',
    neighbourhood: 'Mayfield',
    address:
      '<a href="https://www.google.com/maps/place/Fifendekel/@53.5598168,-113.6540309,13.59z/data=!4m10!1m2!2m1!1sfifendekel!3m6!1s0x53a02118aac5c2ab:0x9386e9734969ba49!8m2!3d53.5520175!4d-113.6161127!15sCgpmaWZlbmRla2VsIgOIAQFaDCIKZmlmZW5kZWtlbJIBDXNhbmR3aWNoX3Nob3DgAQA!16s%2Fg%2F1td1v3k2?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D">10646 170 St NW</a>',
    phone: '780-489-6436',
    website: '<a href="https://www.fifendekel.ca/">Website</a>',
    price: '$',
    recOne: 'Chicken Salad Sandwich',
    recTwo: '',
    notes:
      "<ul><li>Multiple locations, but I've only been to the 170 St one.</li></ul>",
  },

  // Spanish
  {
    name: 'Bodega',
    category: ['Spanish'],
    location: ['North', 'Central'],
    locations: [
      {
        location: 'North',
        neighbourhood: 'Highlands',
        address:
          '<a href=-"https://www.google.com/maps/place/Bodega+Highlands/@53.5379317,-113.515406,11151m/data=!3m1!1e3!4m10!1m2!2m1!1sbodega!3m6!1s0x53a022d8b5660b1d:0x5739e7f250d88ab9!8m2!3d53.564646!4d-113.4381348!15sCgZib2RlZ2FaCCIGYm9kZWdhkgEJdGFwYXNfYmFymgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJzNVYyTXpSbEpVVjBaYVZsWTVWMU5GV25OVFZVNWhUVEJzVTJGV1JSQULgAQD6AQQIGBBH!16s%2Fg%2F11c4bg6yx8?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D">6509 112 Ave NW</a>',
        phone: '780-757-0137',
      },
      {
        location: 'Central',
        neighbourhood: 'Downtown',
        address:
          '<a href="https://www.google.com/maps/place/@53.5379317,-113.515406,11151m/data=!3m2!1e3!5s0x53a022489237a1df:0x454a1ed829979579!4m10!1m2!2m1!1sbodega!3m6!1s0x53a0224890f2d03b:0xa701382f02a061a6!8m2!3d53.5434186!4d-113.497686!15sCgZib2RlZ2FaCCIGYm9kZWdhkgEJdGFwYXNfYmFymgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJwV2JrNUlaSE5WVkVJeFZtcG9NVnB1VlRSV2FsWjBXbFZTVkZGWVl4QULgAQD6AQQIABAx!16s%2Fg%2F11b6q8z78s?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D">10220 103 St NW</a>',
        phone: '780-757-1114',
      },
      {
        location: 'Central',
        neighbourhood: 'OW',
        address:
          '<a href="https://www.google.com/maps/place/Bodega+124+Street/@53.5468056,-113.6131899,11149m/data=!3m1!1e3!4m10!1m2!2m1!1sbodega!3m6!1s0x53a023d4bd68259f:0xc17e09eacf95536!8m2!3d53.5468056!4d-113.5369722!15sCgZib2RlZ2FaCCIGYm9kZWdhkgEKcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOQ1owd3RNVTluRUFF4AEA-gEFCKwEEC0!16s%2Fg%2F11f48js5bn?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D">12417 Stony Plain Rd</a>',
        phone: '780-250-6066',
      },
    ],
    website: '<a href="https://www.bodegabysabor.ca/">Website</a>',
    price: '$$$',
    recOne: '',
    recTwo: '',
    notes:
      '<ul><li>Spanish tapas. Small plates, best shared by a group of people.</li></ul>',
  },

  // Thai

  {
    name: 'Numchok Wilai',
    category: ['Thai'],
    location: 'Central',
    neighbourhood: 'OW',
    address:
      '<a href="https://www.google.com/maps/place/Numchok+Wilai+Restaurant/@53.5504793,-113.5383814,16.72z/data=!4m10!1m3!11m2!2shQLWEvrj8-nEq6P77NxI7Q3beqahCw!3e3!3m5!1s0x53a023d3bf9df11f:0xf4aaaa55b079bf85!8m2!3d53.5500993!4d-113.5357209!16s%2Fg%2F1v76zbbz?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D">10623 124 St NW</a>',
    phone: '780-488-7897',
    website: '<a href="https://numchokwilai.ca/">Website</a>',
    price: '$$',
    recOne: '',
    recTwo: '',
    notes: '<ul><li></li></ul>',
  },

  // Vegan

  // Vietnamese
];
