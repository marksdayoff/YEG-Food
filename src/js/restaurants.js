export const restaurants = [
  // Bakeries

  {
    id: 1,
    name: 'Brio',
    category: ['Bakery'],
    location: ['Central'],
    neighbourhood: 'Oliver/Wîhkwêntôwin',
    address: '12021 102 Ave \#104, Edmonton, AB T5K 0R8',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Brio+Bakery/@53.5426894,-113.5686474,14z/data=!4m6!3m5!1s0x53a0234d20464099:0x7ee93826d507f9bc!8m2!3d53.5426894!4d-113.5305386!16s%2Fg%2F11fj4b4d7t?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '(780) 424-2131',
    website: 'https://briobakery.com/',
    instagram: 'https://www.instagram.com/brio.bakery/',
    price: ['$'],
    recOne: 'Olive Sourdough',
    recTwo: 'Cinnamon Bun',
    notes:
      "Arguably the best bakery in the city. Come early, it's often lined up, popular items can sell out quickly.",
  },

  {
    id: 2,
    name: 'Lift Me Up Bakery',
    category: ['Bakery'],
    location: ['Central'],
    neighbourhood: 'Oliver/Wîhkwêntôwin',
    address: '10750 124 St, Edmonton, AB T5M 0H1',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Lift+Me+Up+Bakery/@53.5523647,-113.5387401,17z/data=!3m1!4b1!4m6!3m5!1s0x53a023d176efd5a1:0x64ca46072526711d!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '(780) 452-3393',
    website: 'https://www.tiramisubistro.ca/',
    instagram: 'https://www.instagram.com/tiramisu_bistro/',
    price: ['$'],
    recOne: 'Cinnamon Buns',
    // recTwo: ,
    notes: 'The cinnamon buns are not cheap, but they are completely worth it.',
  },

  {
    id: 3,
    name: 'Duchess',
    category: ['Bakery'],
    location: 'Central',
    neighbourhood: 'OW',
    address: '10718 124 St, Edmonton, AB T5M 0H1',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Duchess+Bake+Shop/@53.5523566,-113.5387607,16.97z/data=!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a023d17d191fdb:0x57bec7f9669eb0f6!8m2!3d53.5515464!4d-113.5361601!16s%2Fg%2F1td004tw?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '(780) 488-4999',
    website: 'https://duchessbakeshop.com/',
    instagram: 'https://www.instagram.com/duchessbakeshop',
    price: ['$$'],
    // recOne: '',
    // recTwo: '',
    // notes: '',
  },

  // Barbeque

  {
    id: 4,
    name: 'Meat',
    category: ['BBQ'],
    location: ['Central'],
    neighbourhood: 'OS',
    address: '8216 104 St NW, Edmonton, AB T6E 4E5',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/MEAT/@53.5191778,-113.50211,17.1z/data=!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a0220fdc661e57:0x99e601e126453b93!8m2!3d53.5187192!4d-113.4978414!16s%2Fg%2F11b5zwtlpr?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '(587) 520-6338',
    website: 'http://meatfordinner.com',
    instagram: 'https://www.instagram.com/meat_yeg',
    price: ['$$', '$$$'],
    // recOne: rec,
    // recTwo: rec,
    notes:
      'Best BBQ place in Edmonton. Large portions meant for sharing with groups.',
  },

  // Breakfast/Brunch

  {
    id: 5,
    name: "Barb & Ernie's",
    category: ['Breakfast', 'Brunch', 'German'],
    location: ['South'],
    neighbourhood: 'OS',
    address: '9906 72 Ave NW, Edmonton, AB T6E 0Z3',
    city: 'Edmonton',
    mapUrl:
      "https://www.google.ca/maps/place/Barb+%26+Ernie's+Old+Country+Inn/@53.5147682,-113.4977673,15.32z/data=!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a018a7a086dd13:0xc4c9efaa0c2cada9!8m2!3d53.5087688!4d-113.4865633!16s%2Fg%2F1w4f7sl0?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D",
    phone: '(780) 433-3242',
    website: 'http://oldcountryinnedmonton.com',
    // instagram: '',
    price: ['$$'],
    recOne: 'Bratwurst Benny',
    // recTwo: rec,
    notes: 'German food and incredible breakfast. An Edmonton institution.',
  },

  {
    id: 6,
    name: 'Dogpatch',
    category: ['Brunch', 'Pub'],
    location: 'Central',
    neighbourhood: 'Riverdale',
    address: '#101, 10158 90 St NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/@53.544668,-113.4737124,697m/data=!3m2!1e3!4b1!4m6!3m5!1s0x53a023f6604bc969:0xcf847540df051ba2!8m2!3d53.5446648!4d-113.4711375!16s%2Fg%2F11r7sx39_c?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-761-8700',
    website: 'https://www.dogpatchyeg.ca/',
    instagram: 'https://www.instagram.com/dogpatchyeg/',
    price: ['$$'],
    // recOne: '',
    // recTwo: '',
    // notes: '',
  },

  {
    id: 67,
    name: "Hap's",
    category: ['Breakfast'],
    location: ['West'],
    neighbourhood: 'Britannia Youngstown',
    address: '16060 Stony Plain Rd',
    city: 'Edmonton',
    mapUrl:
      "https://www.google.com/maps/place/Hap's+Hungry+House/@53.5412377,-113.6019235,16.07z/data=!4m6!3m5!1s0x53a02105752a28af:0xea6e51a74ca1aea7!8m2!3d53.5416619!4d-113.5986637!16s%2Fg%2F1vb9cr57?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D",
    phone: '780-483-2288',
    website: 'https://www.hapshungryhouse.ca/',
    instagram: 'https://www.instagram.com/hapshungryhouse/',
    price: ['$', '$$'],
    recs: ['Eggs Benedict'],
    notes: [
      'Not fancy, but a solid choice for cheap and tasty breakfast. This is the place you go to cure a hangover.',
    ],
  },

  // Breweries

  {
    id: 7,
    name: 'Odd Company OG',
    category: ['Brewery', 'Burger'],
    location: ['Central'],
    neighbourhood: 'OW',
    address: '12021 102 Ave #105, Edmonton, AB T5K 0R8',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Odd+Company+Brewing/@53.5419071,-113.5291703,18.45z/data=!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a02388bfbcd2ad:0xc92308a439a39f37!8m2!3d53.542563!4d-113.5305577!16s%2Fg%2F11gk7s2t55?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '(587) 590-9973',
    website: 'https://www.oddcompany.ca/',
    instagram: 'https://www.instagram.com/oddcompanybrewing/',
    price: ['$'],
    recOne: 'Coconut Passionfruit Sour',
    recTwo: 'Cheeseburger',
    notes:
      'Food menu is very limited. OS location has a much bigger menu, but I live downtown.',
  },

  // Burgers

  {
    id: 8,
    name: 'Fox Burger Highlands',
    category: ['Burgers'],
    location: 'North',
    neighbourhood: 'Highlands',
    address: '6423 112 Ave NW, Edmonton, AB T5W 0N9',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Fox+Burger+Highlands/@53.5609387,-113.4700135,14.25z/data=!3m1!5s0x53a022d8b7cd5949:0x4c164ba122831d7e!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a02364afebbc21:0xd6c42d47cc949718!8m2!3d53.5647642!4d-113.4374579!16s%2Fg%2F11fn48dsnd?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '(780) 250-0369',
    website: 'https://foxburger.ca',
    instagram: 'https://www.instagram.com/foxburgerhighlands/',
    price: ['$'],
    recOne: '',
    // recTwo: ,
    notes:
      "There are locations in Westmount and Leduc as well, but I've only been to the OG in Highlands.",
  },

  // {
  // id: 9,
  // name: 'Flat Boy',
  // category: ,
  // location: ,
  // address: ,
  // phone: ,
  // website: ,
  // recOne: ,
  // recTwo: ,
  // notes: ,
  // },

  // Cafe

  {
    id: 10,
    name: 'Brown Butter Cafe',
    category: ['Cafe'],
    location: 'South',
    // neighbourhood:'',
    address: '1528 91 St SW, Edmonton, AB T6X 1M5',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Brown+Butter+Cafe/@53.4187458,-113.4783485,17.03z/data=!3m1!5s0x53a01e9e0ff7feb3:0xc18cdd617ed9795d!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a01c271374ecfb:0xaef8fd73ab305b02!8m2!3d53.4190429!4d-113.479092!16s%2Fg%2F11f15k_pv9?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '(780) 752-9900',
    website: 'https://brownbuttercafe.com/',
    instagram: 'https://www.instagram.com/brownbuttercafe/',
    price: ['$'],
    recOne: 'Cinnamon Bun',
    // recTwo: ,
    notes:
      "The cinnamon bun is on another level. It blows every other cinnamon bun I've ever had out of the water. Banger matcha latte as well.",
  },

  {
    id: 11,
    name: 'The Colombian Glenora',
    category: ['Cafe'],
    location: ['West'],
    neighbourhood: 'Glenora',
    address: '#1, 10340-134 Street NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/The+Colombian+Coffee+Bar+%26+Roastery-+Glenora/@53.5439226,-113.5556167,15.79z/data=!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a0217eccc2ff07:0x1f8fa0f0c36a8059!8m2!3d53.545912!4d-113.553329!16s%2Fg%2F11g03p8wzl?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-757-9195',
    website: 'https://thecolombian.ca/',
    instagram: 'https://www.instagram.com/thecolombianyeg/',
    price: ['$'],
    recOne: 'Coffee',
    // recTwo: ,
    notes:
      'Best coffee in the city. Colombia is the country that made me fall in love with coffee. The owner is Colombian and imports beans directly from farms back home.',
  },

  {
    id: 12,
    name: 'The Colombian Mill Creek',
    category: ['Cafe'],
    location: ['South'],
    neighbourhood: 'Mill Creek',
    address: '8816-92 Street NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Mill+Creek+Cafe/@53.5208205,-113.4809039,17.19z/data=!3m1!5s0x53a022737f618d89:0xc0d27df0745e16e5!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a022737f8ca7c5:0x14b4fd0e3ce74ca!8m2!3d53.5183421!4d-113.4764116!16s%2Fg%2F1td4zjp_?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '825-480-1787',
    website: 'https://thecolombian.ca/',
    instagram: 'https://www.instagram.com/thecolombianyeg/',
    price: ['$'],
    recOne: 'Coffee',
    // recTwo: ,
    notes:
      'Best coffee in the city. Colombia is the country that made me fall in love with coffee. The owner is Colombian and imports beans directly from farms back home.',
  },

  {
    id: 13,
    name: 'The Colombian Parkallen',
    category: ['Cafe'],
    location: ['South'],
    neighbourhood: 'Parkallen',
    address: '6529 111 Street NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/The+Colombian+-+Parkallen/@53.5027204,-113.5165322,20.07z/data=!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a01f1b21f29f93:0x80c5d5238d107f2a!8m2!3d53.5029638!4d-113.5162491!16s%2Fg%2F11t551npk5?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '587-520-4300',
    website: 'https://thecolombian.ca/',
    instagram: 'https://www.instagram.com/thecolombianyeg/',
    price: ['$'],
    recOne: 'Coffee',
    // recTwo: ,
    notes:
      'Best coffee in the city. Colombia is the country that made me fall in love with coffee. The owner is Colombian and imports beans directly from farms back home.',
  },

  {
    id: 14,
    name: 'Square 1 Glenora',
    category: ['Cafe'],
    location: ['West'],
    neighbourhood: 'Glenora',
    address: '14055 West Block Dr NW Unit 140, Edmonton, AB T5N 1L8',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Square+1+Coffee+-+Glenora/@53.5434164,-113.5576172,16.32z/data=!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x539ff9f9569d280b:0xdafd66f95b1473da!8m2!3d53.5433334!4d-113.5647066!16s%2Fg%2F11f62s_v1x?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-452-8511',
    website: 'https://www.square1coffee.ca/',
    instagram: 'https://www.instagram.com/square1coffee/',
    price: ['$'],
    recOne: 'Coffee',
    // recTwo: ,
    notes:
      "Great Coffee. - Several other locations that I haven't visited. - South (Fairway) Location has a lot of cool stuff to buy. - Glenora location is my favourite office away from the office.",
  },

  {
    id: 15,
    name: 'Square 1 South',
    category: ['Cafe'],
    location: ['South'],
    neighbourhood: 'Aspen Gardens',
    address: '15 Fairway Dr NW, Edmonton, AB T6J 2S6',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Square+1+Coffee+-+Aspen+Gardens/@53.470154,-113.5427269,15.4z/data=!3m1!5s0x53a01f0c460dd213:0x74c50c3ea17140cb!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a01f0c44ff38ab:0x3fa4a68f88da38f9!8m2!3d53.4722732!4d-113.5398415!16s%2Fg%2F11cmxz232q?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-452-8511',
    website: 'https://www.square1coffee.ca/',
    instagram: 'https://www.instagram.com/square1coffee/',
    price: ['$'],
    recOne: 'Coffee',
    // recTwo: ,
    notes:
      "Great Coffee. - Several other locations that I haven't visited. - South (Fairway) Location has a lot of cool stuff to buy. - Glenora location is my favourite office away from the office.",
  },

  {
    id: 16,
    name: 'Little Brick',
    category: ['Cafe'],
    location: ['Central'],
    neighbourhood: 'Riverdale',
    address: '10004 90 St NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Little+Brick/@53.5445206,-113.4791867,14.29z/data=!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a0225f2a3698f1:0x25146da93bec151c!8m2!3d53.5421187!4d-113.4696022!16s%2Fg%2F11b7hkc0c2?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    mapUrl:
      'https://www.google.com/maps/place/@53.5421187,-113.4696022,697m/data=!3m2!1e3!4b1!4m6!3m5!1s0x53a0225f2a3698f1:0x25146da93bec151c!8m2!3d53.5421187!4d-113.4696022!16s%2Fg%2F11b7hkc0c2?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-705-1230',
    website: 'https://littlebrick.ca/"',
    instagram: 'https://www.instagram.com/littlebrickyeg/',
    price: ['$', '$$'],
    // recOne: '',
    // recTwo: '',
    // notes: '',
  },

  {
    id: 65,
    name: 'Felice Cafe',
    category: ['Cafe'],
    location: ['Central'],
    neighbourhood: '',
    address: '10930 84 Street NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/Felice+Cafe/@53.5565845,-113.4734576,17.38z/data=!4m6!3m5!1s0x53a0234c0db10939:0xb61fd69dbdf1ea0b!8m2!3d53.5566129!4d-113.4716802!16s%2Fg%2F11pzdy729q?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    // phone: '',
    website: 'https://www.felicecafe.ca/',
    instagram: 'https://www.instagram.com/felicecafeyeg',
    price: ['$'],
    // recs: ['', ''],
    // notes: [''],
  },

  {
    id: 69,
    name: 'Iconoclast',
    category: ['Cafe'],
    location: ['Central'],
    neighbourhood: 'OW',
    address: '#103, 12021 102 Ave NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/Iconoclast+Coffee+Roasters/@53.5427993,-113.5321855,18.06z/data=!4m10!1m3!11m2!2shQLWEvrj8-nEq6P77NxI7Q3beqahCw!3e3!3m5!1s0x53a023cd4d00e2d5:0x18da8a62e4c53c97!8m2!3d53.5428382!4d-113.5302693!16s%2Fg%2F11bw77v9md?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
    // phone: '',
    website: 'https://iconoclastcoffee.com/',
    instagram: 'https://www.instagram.com/iconoclastcoffee/',
    price: ['$', '$$'],
    // recs: ['', ''],
    // notes: [''],
  },

  //Cajun
  {
    id: 17,
    name: 'Da De O',
    category: ['Cajun'],
    location: ['South'],
    neighbourhood: 'OS',
    address: '10548 A 82 Ave NW, Edmonton, AB T6E 2A4',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/DaDeO/@53.518281,-113.5025057,21z/data=!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a0220535001db1:0x8d7ed7be7fcedb36!8m2!3d53.5182611!4d-113.5027049!16s%2Fg%2F1v4k65w9?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-433-0930',
    website: 'http://dadeo.ca',
    instagram: 'https://www.instagram.com/dadeorestaurant/',
    price: ['$', '$$'],
    recOne: 'Pulled Pork Po Boy',
    recTwo: 'Sweet Potato Fries',
    notes:
      "An Edmonton institution &mdash; 1950's style diner serving Cajun category.",
  },

  // Canadian

  {
    id: 18,
    name: 'Butternut Tree',
    category: ['Canadian', 'Bougie', 'Date Night'],
    location: ['Central'],
    neighbourhood: 'OW',
    address: '9707 110 St NW #101, Edmonton, AB T5K 2L9',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/The+Butternut+Tree/@53.5335507,-113.5093218,17.49z/data=!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a0223b7f403541:0x9388b00ab4a9a08e!8m2!3d53.5342397!4d-113.5099717!16s%2Fg%2F11gb3tx8bb?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-760-2271',
    website: 'https://thebutternuttree.ca/',
    instagram: 'https://www.instagram.com/thebutternuttree/',
    price: ['$$$$'],
    // recOne: ,
    // recTwo: ,
    notes:
      'Great high-end spot overlooking the High Level Bridge. Strangely, not talked about often.',
  },

  {
    id: 19,
    name: 'Rge Rd',
    category: ['Canadian', 'Bougie', 'Date Night'],
    location: ['Central'],
    neighbourhood: 'OW',
    address: '10643 123 St NW, Edmonton, AB T5N 1P2',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Rge+Rd/@53.5485473,-113.5343142,16.7z/data=!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a023d233a60ab7:0xe543711ef12a6d3c!8m2!3d53.5506797!4d-113.5338447!16s%2Fg%2F1q62f6qqq?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-447-4577',
    website: 'https://www.rgerd.ca/',
    instagram: 'https://www.instagram.com/rge_rd/',
    price: ['$$$$'],
    // recOne: ,
    // recTwo: ,
    notes:
      'Rotating menu, changing regularly. - Seating at the bar is often available for walk-ins. ',
  },

  {
    id: 68,
    name: 'Happy & Olive',
    category: ['Bougie'],
    location: ['West'],
    neighbourhood: 'Crestwood',
    address: '9640 142 St NW, Edmonton, AB T5N 4B2',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Happy+and+Olive/@53.5338237,-113.5695741,17.01z/data=!4m6!3m5!1s0x53a02141cf085b67:0x63b8420acfca5d22!8m2!3d53.5338314!4d-113.5669808!16s%2Fg%2F11kjjp4f8y?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '(825) 401-4958',
    website: 'http://happyandolive.ca/',
    instagram: 'https://www.instagram.com/happyandolive/',
    price: ['$$$'],
    // recs: ['', ''],
    // notes: [''],
  },

  // Casual

  // Chinese

  {
    id: 20,
    name: 'Lingnan',
    category: ['Chinese'],
    location: ['Central'],
    neighbourhood: 'Downtown',
    address: '10582 104 St NW, Edmonton, AB T5H 2W1',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/The+Lingnan/@53.554655,-113.5153841,15.48z/data=!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a0224c712fa363:0xfe2bd3aff91b5185!8m2!3d53.549522!4d-113.4995049!16s%2Fg%2F1wg5xpmq?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-426-3975',
    website: 'https://thelingnan.com/',
    instagram: 'https://www.instagram.com/thelingnan/',
    price: ['$$'],
    // recOne: ,
    // recTwo: ,
    notes: "As far as Canadian-Chinese food goes, this is where it's at.",
  },

  // Dessert

  {
    id: 70,
    name: 'Kind Ice Cream Highlands',
    category: ['Dessert'],
    location: ['North'],
    neighbourhood: 'Highlands',
    address: '6507 112 Ave NW, Edmonton, AB T5W 0P1',
    city: 'Edmonton',
    mapUrl: '6507 112 Ave NW',
    phone: '(780) 474-5547',
    website: 'http://kindicecream.ca/',
    instagram: 'https://www.instagram.com/kindicecream/',
    price: ['$'],
    // recs: ['', ''],
    // notes: [''],
  },

  {
    id: 72,
    name: 'Kind Ice Cream South',
    category: ['Dessert'],
    location: ['South'],
    neighbourhood: 'Richie',
    address: '9551 76 Ave NW, Edmonton, AB T6C 0K1',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Kind+Ice+Cream/@53.5108834,-113.4774863,16.34z/data=!3m1!5s0x53a018a0012c5317:0x395885d421b46d43!4m6!3m5!1s0x53a0194a5ace5a99:0xaf89676db8fdb27a!8m2!3d53.512138!4d-113.476085!16s%2Fg%2F11h0_6c84z?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '(780) 474-5547',
    website: 'http://kindicecream.ca/',
    instagram: 'https://www.instagram.com/kindicecream/',
    price: ['$'],
    // recs: ['', ''],
    // notes: [''],
  },

  {
    id: 73,
    name: 'Kind Ice Cream Downtown',
    category: ['Dessert'],
    location: ['Central'],
    neighbourhood: 'OW',
    address: '12017 102 Ave NW, Edmonton, AB T5K 0R8',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Kind+Ice+Cream/@53.5423654,-113.5267227,14.87z/data=!4m6!3m5!1s0x53a02349057b368b:0x51198763294b002f!8m2!3d53.5428341!4d-113.5299564!16s%2Fg%2F11ssg0k7c3?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '17805098746',
    website: 'http://kindicecream.ca/',
    instagram: 'https://www.instagram.com/kindicecream/',
    price: ['$'],
    recs: ['', ''],
    notes: [''],
  },

  // Dutch

  {
    id: 21,
    name: 'Dutch Delicious',
    category: ['Dutch', 'Groceries'],
    location: 'West',
    neighbourhood: 'Westmount',
    address: '13232 118 Ave NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Dutch+Delicious+Bakery/@53.5743776,-113.5565086,15.48z/data=!3m1!5s0x53a023e67af09721:0x34e2653107a78247!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a023e66324374f:0x668d80f703f337ba!8m2!3d53.5706413!4d-113.5513702!16s%2Fg%2F1tjyt91b?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-455-2323',
    website: 'https://dutchdeliciousbakery.com/',
    instagram: 'https://www.instagram.com/dutchdeliciousbakery/',
    price: ['$', '$$'],
    notes:
      'Dutch specialty store. Lots of cheese, pastries, and other imported snacks.',
  },

  // Filipino

  // Gastropub

  {
    id: 22,
    name: 'The Common',
    category: ['Gastropub'],
    location: ['Central'],
    neighbourhood: 'OW',
    address: '9910 109 St NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/The+Common/@53.5373477,-113.5136316,15.65z/data=!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a0223a292717c3:0x1fe0866ed81ddb2f!8m2!3d53.5375828!4d-113.5087145!16s%2Fg%2F1hc0_0hyp?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-452-7333',
    website: 'https://www.thecommon.ca/',
    instagram: 'https://www.instagram.com/thecommonyeg/',
    price: ['$$', '$$$'],
    // recOne:'',
    // recTwo:'',
    notes:
      'Solid downtown spot for lunch and dinner with a phenomenal vibe. Lots of good DJs in the evenings.',
  },

  {
    id: 23,
    name: 'Otto',
    category: ['Gastropub', 'German'],
    location: 'North',
    // neighbourhood: 'FILL',
    address: '11405 95 St',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/OTTO+Food+and+Drink/@53.562394,-113.4964142,15.65z/data=!3m1!5s0x53a023a9ccc4756b:0xb0608e1089686241!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a023a9cccd383f:0x49959e84a8a95481!8m2!3d53.5645034!4d-113.4869837!16s%2Fg%2F11ddwtgxcc?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-477-6244',
    website: 'https://www.ottofoodanddrink.com/',
    instagram: 'https://www.instagram.com/otto_yeg/',
    price: ['$$'],
    // recOne: 'FILL',
    // recTwo:'',
    // notes: [''],
  },

  {
    id: 24,
    name: 'Three Vikings',
    category: ['Gastropub', 'Danish'],
    location: 'Central',
    neighbourhood: 'OW',
    address: '10713 124 St',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Three+Vikings/@53.5515607,-113.5356996,18.93z/data=!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a023b7f69f9169:0x5bed4d460db5b58!8m2!3d53.5515572!4d-113.535437!16s%2Fg%2F11gmb64wfn?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-249-6302',
    website: 'https://www.threevikings.ca/',
    instagram: 'https://www.instagram.com/threevikings/',
    price: ['$$'],
    // recOne: 'FILL',
    // recTwo: 'FILL',
    notes: 'Underrated spot on 124th, one of the best food pubs in town.',
  },

  {
    id: 25,
    name: 'Red Star',
    category: ['Gastropub'],
    location: 'Central',
    neighbourhood: 'Downtown',
    address: '10534 Jasper Ave',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Red+Star+Bar/@53.5430129,-113.5012623,16.63z/data=!4m14!1m7!3m6!1s0x53a023d176efd5a1:0x64ca46072526711d!2sLift+Me+Up+Bakery!8m2!3d53.5523615!4d-113.5361652!16s%2Fg%2F11nnv_5n7z!3m5!1s0x53a0223801310943:0x1ee715475339769f!8m2!3d53.5411323!4d-113.5021013!16s%2Fg%2F1wf21jtn?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-428-0825',
    website: 'https://redstarpub.ca/',
    instagram: 'https://www.instagram.com/redstaryeg/',
    price: ['$$'],
    // recOne: '',
    // recTwo: '',
    // notes: '',
  },

  // Indian
  {
    id: 26,
    name: 'Remedy Cafe',
    category: ['Indian', 'Cafe'],
    location: ['South'],
    neighbourhood: 'OS',
    address: '8631 – 109 Street',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Remedy+Cafe/@53.5226479,-113.512012,19.2z/data=!4m6!3m5!1s0x53a022195caa127b:0xb5fbc993324e581!8m2!3d53.5228042!4d-113.5117214!16s%2Fg%2F1tycwbb5?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-433-3096',
    website: 'https://www.remedycafe.ca/',
    instagram: 'https://www.instagram.com/remedycafe/',
    price: ['$$'],
    recOne: 'Chicken Chana Wrap',
    recTwo: 'Chai Latte',
    notes:
      'Hipster cafe thats serves modern Indian food. - This is the original location near the UofA, other locations are spread around the city.',
  },

  {
    id: 27,
    name: 'Remedy Cafe 124th',
    category: ['Indian', 'Cafe'],
    location: ['Central'],
    neighbourhood: 'OW',
    address: '10310 – 124 Street',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Remedy+Cafe/@53.5451316,-113.5360885,18.58z/data=!4m6!3m5!1s0x53a0222b47843253:0xdcc4edd2f0bef9ef!8m2!3d53.5447629!4d-113.5361328!16s%2Fg%2F11b5qtwzj7?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-705-4464',
    website: 'https://www.remedycafe.ca/',
    instagram: 'https://www.instagram.com/remedycafe/',
    price: ['$$'],
    recOne: 'Chicken Chana Wrap',
    recTwo: 'Chai Latte',
    notes:
      'Hipster cafe thats serves modern Indian food. - There are other locations around the city.',
  },

  {
    id: 28,
    name: 'Nosh Cafe',
    category: ['Indian'],
    location: ['Central'],
    neighbourhood: 'OW',
    address: '8708 109 St NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Nosh+Cafe-Indian+Restaurant/@53.544099,-113.5357563,20.01z/data=!3m1!5s0x53a0222b0de84fa5:0x441fb165c03c7557!4m6!3m5!1s0x53a0222b11682ced:0x972bee0b3c8da7bb!8m2!3d53.5441198!4d-113.5355964!16s%2Fg%2F11b6cglbpj?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '587-988-2894',
    website: 'https://noshcafeedmonton.com',
    instagram: 'https://www.instagram.com/noshcafe1/',
    price: ['$$'],
    recOne: 'Dosa',
    recTwo: 'Shahi Paneer',
    notes: 'Low-Key Indian spot with incredible food and an extensive menu.',
  },

  // Indonesian
  {
    id: 29,
    name: 'Padmanadi',
    category: ['Indonesian', 'Vegan'],
    location: ['Central'],
    neighbourhood: 'Central McDougal',
    address: '10740 101 St NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Padmanadi/@53.5538263,-113.4936872,16.36z/data=!4m6!3m5!1s0x53a0224d64b96cd9:0x1ca89507e72e071c!8m2!3d53.5523913!4d-113.4940589!16s%2Fg%2F1tmgc357?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-428-8899',
    website: 'https://www.padmanadi.com/',
    instagram: 'https://www.instagram.com/padmanadi/',
    price: ['$$'],
    // recOne: '',
    // recTwo: '',
    notes: 'Indonesian vegan food. Even as a non-vegan, I love this place.',
  },

  // Italian
  {
    id: 30,
    name: 'Bar Bricco',
    category: ['Italian', 'Bougie', 'Date Night'],
    location: ['Central'],
    neighbourhood: 'Downtown',
    address: '10347 Jasper Ave',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Bar+Bricco/@53.5407408,-113.499372,19z/data=!3m1!4b1!4m6!3m5!1s0x53a02247c0d9d2cd:0x8c89adf5d544a238!8m2!3d53.54074!4d-113.4987283!16s%2Fg%2F11cjpc_tvv?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-424-5588',
    website: 'https://www.barbricco.com/',
    instagram: 'https://www.instagram.com/barbricco/',
    price: ['$$$'],
    // recOne: '',
    // recTwo: '',
    notes:
      'When Daniel Costa opens an Italian restaurant, you go. Home runs all day long.',
  },

  {
    id: 31,
    name: 'Va!',
    category: ['Italian', 'Cafe'],
    location: ['Central'],
    neighbourhood: 'OW',
    address: '12024 Jasper Ave',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Va+Caffe/@53.5413196,-113.5293096,17.81z/data=!4m14!1m7!3m6!1s0x53a02247c0d9d2cd:0x8c89adf5d544a238!2sBar+Bricco!8m2!3d53.54074!4d-113.4987283!16s%2Fg%2F11cjpc_tvv!3m5!1s0x53a023a4cf83aee9:0xf7ad25402e39fabb!8m2!3d53.5411641!4d-113.5295975!16s%2Fg%2F11y5xd0jdk?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-249-2445',
    website: 'https://www.va-yeg.ca/',
    instagram: 'https://www.instagram.com/va_caffe/',
    price: ['$', '$$'],
    recOne: 'Breakfast Panino',
    recTwo: 'Mortadella Panini',
    notes: 'Tiny cafe with a small menu of phenomenal Italian snacks.',
  },

  {
    id: 32,
    name: 'Olia',
    category: ['Italian', 'Bougie', 'Date Night'],
    location: ['Central'],
    neighbourhood: 'OW',
    address: '12016 Jasper Avenue',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Olia/@53.541251,-113.5291345,18.61z/data=!4m14!1m7!3m6!1s0x53a02247c0d9d2cd:0x8c89adf5d544a238!2sBar+Bricco!8m2!3d53.54074!4d-113.4987283!16s%2Fg%2F11cjpc_tvv!3m5!1s0x53a0222ea89b86e5:0xf2c192b0595c6326!8m2!3d53.54117!4d-113.52918!16s%2Fg%2F11wbzzs45b?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-244-5156',
    website: 'https://www.olia-ristorante.ca/',
    instagram: 'https://www.instagram.com/olia_ristorante/',
    price: ['$$$$'],
    // recOne: '',
    // recTwo: '',
    notes:
      'Another Daniel Costa masterpiece. Arguably the best Italian restaurant in the city.',
  },

  {
    id: 33,
    name: 'Italian Centre',
    category: ['Italian', 'Cafe'],
    location: ['Central'],
    neighbourhood: 'Little Italy',
    address: '10878 95 Street',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Italian+Centre+Shop+Ltd./@53.5544388,-113.4884732,16.72z/data=!4m14!1m7!3m6!1s0x53a02247c0d9d2cd:0x8c89adf5d544a238!2sBar+Bricco!8m2!3d53.54074!4d-113.4987283!16s%2Fg%2F11cjpc_tvv!3m5!1s0x53a023ab3541fc31:0x3865465fbb970d90!8m2!3d53.556234!4d-113.4852481!16s%2Fg%2F1tf3b6rq?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '587-687-3977',
    website: 'https://www.italiancentre.ca/',
    instagram: 'http://instagram.com/italiancentreshop/',
    price: ['$'],
    recOne: 'Panino',
    // recTwo: '',
    notes: [
      'The panino is a right of passage for Edmontonians. This sandwich is ledgendary.',
      'Produce is high quality and it has the best deli counter in town.',
      'Other locations in Sherwood Park and the West End.',
    ],
  },

  {
    id: 34,
    name: 'Italian Centre South',
    category: ['Italian'],
    location: ['South'],
    neighbourhood: 'Pleasantview',
    address: '5028 104a Street',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Italian+Centre+Shop+Southside+Ltd./@53.4885501,-113.5016175,16.61z/data=!4m14!1m7!3m6!1s0x53a02247c0d9d2cd:0x8c89adf5d544a238!2sBar+Bricco!8m2!3d53.54074!4d-113.4987283!16s%2Fg%2F11cjpc_tvv!3m5!1s0x53a01f4bd4a0d2bb:0x30050f84508f51fe!8m2!3d53.4875135!4d-113.4998782!16s%2Fg%2F1td5qyww?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '587 687 3977',
    website: 'https://www.italiancentre.ca/',
    instagram: 'http://instagram.com/italiancentreshop/',
    price: ['$'],
    recOne: 'Panino',
    recTwo: '',
    notes: [
      'The panino is a right of passage for Edmontonians. This sandwich is ledgendary.',
      'Produce is high quality and it has the best deli counter in town.',
      'Other locations in Sherwood Park and the West End.',
    ],
  },

  // Japanese
  {
    id: 35,
    name: 'Izakaya Tomo',
    category: ['Japanese'],
    location: ['South'],
    neighbourhood: 'Strathcona Industrial Park',
    address: '3739 99st Edmonton, AB',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Izakaya+Tomo/@53.4713921,-113.4878527,17z/data=!3m1!4b1!4m6!3m5!1s0x53a01f2c1dc04f8f:0x6335e276215c7933!8m2!3d53.4713889!4d-113.4852778!16s%2Fg%2F1q2w8yjf_?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-440-9152',
    website: 'https://izakayatomo.net/',
    instagram: 'https://www.instagram.com/izakayatomo/',
    price: ['$$'],
    recOne: 'Tsukemono',
    recTwo: '',
    notes: [
      'Inconveniently located, but worth the visit for high-quality sushi.',
      'Very few places offer tsukemono (Japanese pickles), so they have a leg up for that alone.',
    ],
  },

  {
    id: 36,
    name: 'Dorinku Tokyo',
    category: ['Japanese'],
    location: ['South'],
    neighbourhood: 'OS',
    address: '10205 82 ave',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Dorinku+Tokyo/@53.5173413,-113.4944091,17.86z/data=!4m14!1m7!3m6!1s0x53a01f2c1dc04f8f:0x6335e276215c7933!2sIzakaya+Tomo!8m2!3d53.4713889!4d-113.4852778!16s%2Fg%2F1q2w8yjf_!3m5!1s0x53a0220e4fede9ed:0x63536cec3ffd4624!8m2!3d53.5179245!4d-113.4939921!16s%2Fg%2F11c3_bkf3b?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-988-9760',
    website: 'https://tokyo.dorinku.ca/',
    instagram: 'https://www.instagram.com/dorinkutokyo/',
    price: ['$$'],
    recOne: 'Ramen',
    recTwo: 'Shaka Shaka Fries',
    notes: [
      'Lots of interesting lunch specials and feature items.',
      'Impressive collection of sake.',
    ],
  },

  {
    id: 37,
    name: 'Japonais Bistro',
    category: ['Japanese'],
    location: ['Central'],
    neighbourhood: 'OW',
    address: '11806 Jasper Ave',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Japonais+Bistro/@53.5411198,-113.5251443,18.33z/data=!3m1!5s0x53a0222e63cd90d1:0xa6e8949711564979!4m14!1m7!3m6!1s0x53a01f2c1dc04f8f:0x6335e276215c7933!2sIzakaya+Tomo!8m2!3d53.4713889!4d-113.4852778!16s%2Fg%2F1q2w8yjf_!3m5!1s0x53a0222e620cc5f9:0xdb82455b238aba0!8m2!3d53.5412073!4d-113.5255256!16s%2Fg%2F1pp2tzvlt?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-760-1616',
    website: 'https://japonaisbistro.ca/',
    instagram: 'https://www.instagram.com/japonais_jasperave/',
    price: ['$$', '$$$'],
    recOne: 'Bento Box',
    recTwo: 'Sashimi',
  },

  {
    id: 38,
    name: 'Japonais',
    category: ['Japanese', 'Sushi'],
    location: ['West'],
    neighbourhood: 'Windermere',
    address: '6138 Currents Dr NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Japonais+Windermere/@53.4381446,-113.6044399,16.47z/data=!4m6!3m5!1s0x539ff5071c52975f:0xbe85b1c3347a19d3!8m2!3d53.4379686!4d-113.6025692!16s%2Fg%2F11k4y8hzwl?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-334-1717',
    website: 'https://japonaisbistro.ca/',
    instagram: 'https://www.instagram.com/japonais_windermere/',
    price: ['$$', '$$$'],
    recOne: 'Bento Box',
    recTwo: 'Sashimi',
    notes: [
      'One of the top spots for higher end sushi.',
      'Lunch Bentos are a killer deal.',
    ],
  },

  {
    id: 39,
    name: 'Tokiwa',
    category: ['Japanese'],
    location: ['Central'],
    neighbourhood: 'OW',
    address: '11978 104 Ave NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/Tokiwa+Ramen/@53.547453,-113.5305568,17z/data=!4m6!3m5!1s0x53a023d2b2dc5fbb:0xb44423113114b408!8m2!3d53.5474322!4d-113.5279032!16s%2Fg%2F11g6_5kz67?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
    phone: '+17807611400',
    website: 'https://tokiwaramen.ca/',
    instagram: 'https://www.instagram.com/tokiwa_ramen/',
    price: ['$$'],
    recOne: 'Black Garlic Ramen',
    recTwo: 'Spicy Goma Ramen',
    notes: [
      'Hands down the best ramen in the city.',
      'Line-ups on the weekend, expect to wait.',
      'Closing hours vary, only open until broth runs out.',
    ],
  },

  // Korean
  {
    id: 40,
    name: 'Seoul Fried Chicken',
    category: ['Korean'],
    location: ['Central'],
    neighbourhood: 'Downtown',
    address: '#101 10145 104 St',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/SFC+Seoul+Fried+Chicken+Downtown/@53.5422868,-113.4996071,19.16z/data=!3m1!5s0x53a02248789aa99b:0x3b13ba8991d330c8!4m6!3m5!1s0x53a023e6c15d9183:0xa8cdc150040daead!8m2!3d53.5420304!4d-113.4988514!16s%2Fg%2F11t1jtct70?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-249-2096',
    website: 'https://seoulfried.com/',
    instagram: 'https://www.instagram.com/seoulfriedchicken/',
    price: ['$$'],
    recOne: 'Garlic Soy Chicken',
    recTwo: 'Gochujang Caramel Chicken',
    notes: 'This place will change the way you think about fried chicken.',
  },

  {
    id: 41,
    name: 'Seoul Fried Chicken',
    category: ['Korean'],
    location: ['South'],
    neighbourhood: 'OS',
    address: '7904b 104 St',
    mapUrl:
      'https://www.google.ca/maps/place/SFC+Seoul+Fried+Chicken/@53.5161308,-113.4990107,17.95z/data=!3m1!5s0x53a0220588d598fb:0x73b29b0ee3548edc!4m6!3m5!1s0x53a022058ed3e31f:0x601ea1ebaca49cd9!8m2!3d53.5154406!4d-113.4980222!16s%2Fg%2F11cltkvhs_?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    city: 'Edmonton',
    phone: '780-761-3616',
    website: 'https://seoulfried.com/',
    instagram: 'https://www.instagram.com/seoulfriedchicken/',
    price: ['$$'],
    recOne: 'Garlic Soy Chicken',
    recTwo: 'Gochujang Caramel Chicken',
    notes: 'This place will change the way you think about fried chicken.',
  },

  {
    id: 42,
    name: 'Buok',
    category: ['Korean'],
    location: ['Central'],
    neighbourhood: 'Downtown',
    address: '10707 100 Ave NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Buok+Fresh+Korean+Kitchen/@53.5389426,-113.5065167,17.69z/data=!3m1!5s0x53a02239b1aa5db9:0xf7b66f9139a87e22!4m6!3m5!1s0x53a023e3233f8865:0x8ca2eab58a42025a!8m2!3d53.5386393!4d-113.5054792!16s%2Fg%2F11f75ylxbc?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780.244.2865',
    website: 'https://www.buokfresh.ca/',
    instagram: 'https://www.instagram.com/buokfresh/',
    price: ['$'],
    recOne: 'Bibimbaap',
    recTwo: '',
    notes: 'Best bang for your buck Korean.',
  },

  // Latin & Meixcan
  {
    id: 43,
    name: 'Paraiso Tropical',
    category: [
      'Latin',
      'Venezuelan',
      'Colombian',
      'Salvadorian',
      'Guatelmalan',
      'Mexican',
    ],
    location: ['Central'],
    neighbourhood: 'Alberta Avenue',
    address: '9136-118 Avenue NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Paraiso+Tropical+-+Latin+Market+North/@53.5685362,-113.4848203,17.26z/data=!4m6!3m5!1s0x53a02308d1d4c4c9:0x527deb9e6d3c9460!8m2!3d53.5704869!4d-113.482235!16s%2Fg%2F1tg67st2?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-479-6000',
    website: 'http://paraisotropical.ca/',
    instagram: 'https://www.instagram.com/latinfoodmarket/',
    price: ['$'],
    recOne: 'Pozole',
    recTwo: 'Yuca con Chicharron',
    notes: [
      'Incredible Latin grocery store with a small takeout kitchen.',
      "It's the only place in town to find Mexican Pozole",
    ],
  },

  {
    id: 44,
    name: 'Paraiso South',
    category: [
      'Latin',
      'Venezuelan',
      'Colombian',
      'Salvadorian',
      'Guatelmalan',
      'Mexican',
    ],
    location: ['South'],
    neighbourhood: 'Allendale',
    address: '6926-104 Street NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Paraiso+Tropical+-+Latin+Market+South/@53.5034118,-113.497986,16.35z/data=!4m6!3m5!1s0x53a018a9893592fb:0xd5e1f61efb8494da!8m2!3d53.5060659!4d-113.4981531!16s%2Fg%2F11b70bml56?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-705-9711',
    website: 'http://paraisotropical.ca/',
    instagram: 'https://www.instagram.com/latinfoodmarket/',
    price: ['$'],
    recOne: 'Pozole',
    recTwo: 'Yuca con Chicharron',
    notes: [
      'Incredible Latin grocery store with a small takeout kitchen.',
      "It's the only place in town to find Mexican Pozole",
    ],
  },

  {
    id: 45,
    name: 'Avila Arepa',
    category: ['Latin', 'Guatemalan'],
    location: ['South'],
    neighbourhood: 'OS',
    address: '10760 82 Ave NW,',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/%C3%81vila+Arepa+-+Urban+Venezuelan+Kitchen/@53.5183191,-113.5082212,19.68z/data=!4m6!3m5!1s0x53a0221b5c52c85d:0x229ca5b4efcd1d4c!8m2!3d53.5182817!4d-113.5086597!16s%2Fg%2F11d_894mqr?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-249-9436',
    website: 'https://www.avilaarepa.ca/',
    instagram: 'https://www.instagram.com/avila.arepa/',
    price: ['$'],
    recOne: 'Pabellón Arepa',
    recTwo: 'Yuca Frita',
    notes:
      "Venezuelan joint on Whyte ave. I adore arepas and ate them all the time when I lived in Colombia. I don't know anywhere else in town that does them.",
  },

  {
    id: 64,
    name: 'Calle Mexican',
    category: ['Mexican'],
    location: ['South'],
    neighbourhood: 'OS',
    address: '7704 104 Street NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/Calle+M%C3%A9xico+Restaurant/@53.5134642,-113.5029536,17z/data=!3m1!4b1!4m6!3m5!1s0x53a0233c90c450db:0xa19458d153f8ea31!8m2!3d53.5134611!4d-113.4980827!16s%2Fg%2F11j4k0fp5p?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
    phone: '825-512-5932',
    website: 'https://callemexico.ca/',
    instagram: 'https://www.instagram.com/callemexicorestaurant/',
    price: ['$'],
    recs: ['', ''],
    notes: [''],
  },

  // Middle Eastern & Persian

  {
    id: 46,
    name: 'Al Salam Bakery',
    category: ['Middle Eastern'],
    location: ['South'],
    neighbourhood: 'Strathcona Industrial Park',
    address: '10141 34 Ave NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Al+Salam+Bakery+%26+Restaurant/@53.4663337,-113.4901906,17.9z/data=!4m14!1m7!3m6!1s0x53a0221b5c52c85d:0x229ca5b4efcd1d4c!2s%C3%81vila+Arepa+-+Urban+Venezuelan+Kitchen!8m2!3d53.5182817!4d-113.5086597!16s%2Fg%2F11d_894mqr!3m5!1s0x53a01f2898eec5f9:0x57d5f749f2bbbc7!8m2!3d53.4671975!4d-113.4896738!16s%2Fg%2F1tf6x0hz?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-944-0000',
    website: 'https://www.alsalampita.ca/',
    instagram: 'https://www.instagram.com/alsalampita/',
    price: ['$'],
    recOne: 'Chicken Shawarma',
    recTwo: '',
    notes: 'Middle Eastern groceries and restaurant.',
  },

  {
    id: 47,
    name: 'Sunbake Pita',
    category: ['Middle Eastern'],
    location: ['North'],
    neighbourhood: 'Rosslyn',
    address: '10728 134 Ave NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Sunbake+Pita+Bakery/@53.5964205,-113.5105478,15.88z/data=!4m14!1m7!3m6!1s0x53a0221b5c52c85d:0x229ca5b4efcd1d4c!2s%C3%81vila+Arepa+-+Urban+Venezuelan+Kitchen!8m2!3d53.5182817!4d-113.5086597!16s%2Fg%2F11d_894mqr!3m5!1s0x53a0237e5e34682f:0xa3f6f746ce7a01ff!8m2!3d53.595207!4d-113.5062807!16s%2Fg%2F1tlgxmxg?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-472-8405',
    website: 'https://www.sunbakepita.ca/',
    instagram: 'https://www.instagram.com/sunbakepitabakery/',
    price: ['$'],
    recOne: 'Chicken Shawarma Saj',
    recTwo: "Za'atar and Cheese Pie",
    notes:
      'They bake thousands of pitas daily. If you want pitas, buy them here, the quality is superb.',
  },

  {
    id: 48,
    name: 'Shaheen Grocery',
    category: ['Afghan', 'Iranian'],
    location: ['South'],
    neighbourhood: 'Ermineskin',
    address: '2830 Calgary Trail NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Shaheen+Grocery+%26+Bakery/@53.4582691,-113.4941794,18.78z/data=!4m14!1m7!3m6!1s0x53a0221b5c52c85d:0x229ca5b4efcd1d4c!2s%C3%81vila+Arepa+-+Urban+Venezuelan+Kitchen!8m2!3d53.5182817!4d-113.5086597!16s%2Fg%2F11d_894mqr!3m5!1s0x53a01edebd99cb6b:0xcc322bbfe0ad7b71!8m2!3d53.4579443!4d-113.4945718!16s%2Fg%2F11gm8t6_7p?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-760-2830',
    website: 'http://shaheengrocery.ca/',
    instagram: 'https://www.instagram.com/shaheengroceryedmonton/',
    price: ['$'],
    recOne: 'Sesame Naan',
    recTwo: '',
    notes: [
      'Grocery store specializing in Afghan and Iranian items. Lots of cool stuff here.',
      "Top pick for me is the naan, but this isn't like Indian naan, this is huge and fluffy &mdash; almost like focaccia.",
    ],
  },

  {
    id: 71,
    name: 'Lovesong',
    category: ['Middle Eastern', 'Bistro'],
    location: ['Central'],
    neighbourhood: 'OW',
    address: '12015 102 Ave NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/lovesong.farm/@53.5428011,-113.5321488,18.08z/data=!4m10!1m3!11m2!2shQLWEvrj8-nEq6P77NxI7Q3beqahCw!3e3!3m5!1s0x53a023bdb59d9cd7:0x9cd76a4a585c7154!8m2!3d53.5426319!4d-113.5300675!16s%2Fg%2F11w30k457b?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
    // phone: '',
    website: 'https://lovesong.farm/',
    instagram: 'https://www.instagram.com/lovesong.farm/',
    price: ['$$', '$$$'],
    // recs: ['', ''],
    // notes: [''],
  },

  // Pizza
  {
    id: 49,
    name: 'Capital Pizza',
    category: ['Pizza', 'Italian'],
    location: [' North'],
    neighbourhood: 'Londonderry',
    address: '7640 144 Ave NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.ca/maps/place/Capital+Pizza/@53.6071998,-113.4600722,17.33z/data=!4m14!1m7!3m6!1s0x53a0221b5c52c85d:0x229ca5b4efcd1d4c!2s%C3%81vila+Arepa+-+Urban+Venezuelan+Kitchen!8m2!3d53.5182817!4d-113.5086597!16s%2Fg%2F11d_894mqr!3m5!1s0x53a023561b72218d:0x5535e0de6f74afbc!8m2!3d53.6071737!4d-113.4598835!16s%2Fg%2F1tgdhp3b?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    mapUrl:
      'https://www.google.com/maps/place/Capital+Pizza/@53.6071769,-113.4624638,17z/data=!4m6!3m5!1s0x53a023561b72218d:0x5535e0de6f74afbc!8m2!3d53.6071737!4d-113.4598835!16s%2Fg%2F1tgdhp3b?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-476-1281',
    website: 'https://capitalpizza.ca',
    instagram: 'https://www.instagram.com/capitalpizzalondondale/',
    price: ['$$'],
    recOne: 'Pizza.',
    // recTwo: '',
    notes: [
      "Old school 'Steak and Pizza' joint. I've been eating this pizza since I was a child.",
    ],
  },
  {
    id: 50,
    name: 'Dallas Pizza',
    category: ['Pizza'],
    location: ['East'],
    neighbourhood: 'Forest Heights',
    address: '7834 106 Ave NW',
    city: 'Edmonton',
    mapUrl:
      'k+House/@53.5505221,-113.4517285,16.33z/data=!4m14!1m7!3m6!1s0x53a0221b5c52c85d:0x229ca5b4efcd1d4c!2sÁvila+Arepa+-+Urban+Venezuelan+Kitchen!8m2!3d53.5182817!4d-113.5086597!16s%2Fg%2F11d_894mqr!3m5!1s0x53a022ee5348d73b:0xb589267c5dacd44b!8m2!3d53.5496839!4d-113.448787!16s%2Fg%2F1tdfhchb?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    mapUrl:
      'https://www.google.com/maps/place/Dallas+Pizza+%26+Steak+House/@53.5496871,-113.4513673,17z/data=!3m1!4b1!4m6!3m5!1s0x53a022ee5348d73b:0xb589267c5dacd44b!8m2!3d53.5496839!4d-113.448787!16s%2Fg%2F1tdfhchb?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-466-1112',
    website: 'https://dallas-pizza.com',
    instagram: 'https://www.instagram.com/dallaspizzayeg/',
    price: ['$$'],
    recOne: 'Pizza',
    recTwo: '',
    notes: [
      "Old school 'Steak and Pizza' joint. I've been eating this pizza since I was a child.",
    ],
  },
  {
    id: 51,
    name: 'High Dough',
    category: ['Pizza'],
    location: ['South'],
    neighbourhood: 'OS',
    address: '7341 104 St NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/High+Dough/@53.5104311,-113.5000197,17z/data=!3m1!4b1!4m6!3m5!1s0x53a023c7db24dced:0x505e0a66d5d60fe8!8m2!3d53.5104279!4d-113.4974394!16s%2Fg%2F11smrgdq_2?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D',
    phone: '(780) 757-4460',
    website: 'https://www.thehighdough.ca',
    instagram: 'https://www.instagram.com/thehighdough/',
    price: ['$$'],
    recOne: 'Donair Pizza',
    recTwo: '',
    notes: ['Detroit style. Thick, fluffy and chewy crust, sauce on top.'],
  },

  {
    id: 52,
    name: "Fn'Za",
    category: ['Pizza'],
    location: ['Central'],
    neighbourhood: 'OW',
    address: '11939 Jasper Ave',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/Fn%E2%80%99za/@53.5407579,-113.5306729,17z/data=!3m1!4b1!4m6!3m5!1s0x53a023554f9325f7:0xd87cdfc89d5721f9!8m2!3d53.5407547!4d-113.5280926!16s%2Fg%2F11t_ygw7y6?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D',
    phone: '587-900-9666',
    website: 'http://fnza.wtf',
    instagram: 'https://www.instagram.com/fnza.wtf/',
    price: ['$'],
    recOne: 'LA Dip',
    recTwo: 'Venice Bitch',
    notes: [
      "These beauties run the best pizza shop in town. Top shelf ingredients, sourdough crust, fermented tomato sauce... You can get a 10-inch for under $20 and the price to quality is unmatched. Tip and tax included in the price. Absolute banger spot. If I did ratings on this site, I'd give it 11/10.",
    ],
  },
  // Portuguese
  {
    id: 53,
    name: 'Sabor',
    category: ['Portuguese', 'Seafood', 'Mediterranean'],
    location: ['Central'],
    neighbourhood: 'Downtown',
    address: '#109, 10220 103 St NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/sabor/data=!4m2!3m1!1s0x53a0224890edca61:0xcb4267c543d4e2de?sa=X&ved=1t:242&ictx=111',
    phone: '',
    website: 'https://www.sabor.ca/',
    instagram: 'https://www.instagram.com/sabor_yeg/',
    price: ['$$$'],
    recOne: '',
    recTwo: '',
    notes: ['Best seafood in the city.'],
  },

  // Pub

  {
    id: 54,
    name: 'Sherlock Holmes',
    category: ['Pub'],
    location: ['Central'],
    neighbourhood: 'Downtown',
    address: '10012 101A Ave',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/The+Sherlock+Holmes+Pub+Downtown/@53.5424491,-113.4913599,17z/data=!3m1!4b1!4m6!3m5!1s0x53a0224596254607:0x82ea31f8d983f5e7!8m2!3d53.5424491!4d-113.4913599!16s%2Fg%2F1tfv4tdw?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
    phone: '178-0426-7784',
    website: 'https://www.sherlockshospitality.com/',
    instagram: 'https://www.instagram.com/sherlocks_dt/',
    price: ['$$'],
    recOne: '',
    recTwo: '',
    notes: [
      "Proper English pub that's been around for almost 20 years. One of the best spots for a pint in the city.",
      'Several locations exist, but downtown is the best.',
    ],
  },

  // Sandwiches

  {
    id: 55,
    name: 'Farrow Garneau',
    category: ['Sandwiches'],
    location: ['South'],
    neighbourhood: 'Garneau',
    address: '8422 109 St NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/Farrow+Garneau/@53.5206409,-113.5514175,14z/data=!3m1!5s0x53a0221c0cee119d:0x4ae1ea34ea82a9ac!4m10!1m2!2m1!1sfarrow!3m6!1s0x53a021ff97bfffff:0x418cfe15f6adaa0c!8m2!3d53.5206409!4d-113.5123616!15sCgZmYXJyb3ciA4gBAVoIIgZmYXJyb3eSAQ1zYW5kd2ljaF9zaG9w4AEA!16s%2Fg%2F1pzsyx8vc?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
    phone: '+17807574160',
    website: 'https://farrowsandwiches.ca/',
    instagram: 'https://www.instagram.com/farrowsandwiches/',
    price: ['$'],
    recOne: 'The Grick',
    recTwo: '',
    notes: [
      "You won't find a better breakfast sandwich than the Grick.",
      'Other locations downtown and in Ritchie',
    ],
  },

  {
    id: 56,
    name: 'Farrow 124th',
    category: ['Sandwiches'],
    location: ['Central'],
    neighbourhood: 'OW',
    address: '#6, 10240 124 St',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/Farrow+Garneau/@53.5206409,-113.5514175,14z/data=!3m1!5s0x53a0221c0cee119d:0x4ae1ea34ea82a9ac!4m10!1m2!2m1!1sfarrow!3m6!1s0x53a021ff97bfffff:0x418cfe15f6adaa0c!8m2!3d53.5206409!4d-113.5123616!15sCgZmYXJyb3ciA4gBAVoIIgZmYXJyb3eSAQ1zYW5kd2ljaF9zaG9w4AEA!16s%2Fg%2F1pzsyx8vc?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
    phone: '+17807574160',
    website: 'https://farrowsandwiches.ca/',
    instagram: 'https://www.instagram.com/farrowsandwiches/',
    price: ['$'],
    recOne: 'The Grick',
    recTwo: '',
    notes: [
      "You won't find a better breakfast sandwich than the Grick.",
      'Other locations downtown and in Ritchie',
    ],
  },

  {
    id: 57,
    name: 'Pals',
    category: ['Sandwiches'],
    location: ['South'],
    neighbourhood: 'OS',
    address: '10335 83 Ave NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/Pals+Sandwiches/@53.5363462,-113.6022164,13z/data=!4m10!1m2!2m1!1spals!3m6!1s0x53a02332884b2667:0xb19d88b1de2a6ad3!8m2!3d53.5189834!4d-113.4971178!15sCgRwYWxzWgYiBHBhbHOSAQ1zYW5kd2ljaF9zaG9wmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJvYTJWMlpHWjNFQUXgAQD6AQQITRA2!16s%2Fg%2F11t9cft2nk?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
    phone: '825-480-5300',
    website: 'https://www.palsyeg.com/',
    instagram: 'https://www.instagram.com/pals_yeg/',
    price: ['$$'],
    recOne: 'Cubano',
    recTwo: '',
    notes: ['The Cubano is &#x1f525 (When they have it on the menu, at least)'],
  },

  {
    id: 58,
    name: 'Fifendekel',
    category: ['Sandwiches'],
    location: ['South'],
    neighbourhood: 'Mayfield',
    address: '10646 170 St NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/Fifendekel/@53.5598168,-113.6540309,13.59z/data=!4m10!1m2!2m1!1sfifendekel!3m6!1s0x53a02118aac5c2ab:0x9386e9734969ba49!8m2!3d53.5520175!4d-113.6161127!15sCgpmaWZlbmRla2VsIgOIAQFaDCIKZmlmZW5kZWtlbJIBDXNhbmR3aWNoX3Nob3DgAQA!16s%2Fg%2F1td1v3k2?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-489-6436',
    website: 'https://www.fifendekel.ca/',
    instagram: 'https://www.instagram.com/fifendekel/',
    price: ['$'],
    recOne: 'Chicken Salad Sandwich',
    recTwo: '',
    notes: ["Multiple locations, but I've only been to the 170 St one."],
  },

  // Spanish
  {
    id: 59,
    name: 'Bodega Downtown',
    category: ['Spanish'],
    location: ['Central'],
    neighbourhood: 'Downtown',
    address: '10220 103 St NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/@53.5379317,-113.515406,11151m/data=!3m2!1e3!5s0x53a022489237a1df:0x454a1ed829979579!4m10!1m2!2m1!1sbodega!3m6!1s0x53a0224890f2d03b:0xa701382f02a061a6!8m2!3d53.5434186!4d-113.497686!15sCgZib2RlZ2FaCCIGYm9kZWdhkgEJdGFwYXNfYmFymgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJwV2JrNUlaSE5WVkVJeFZtcG9NVnB1VlRSV2FsWjBXbFZTVkZGWVl4QULgAQD6AQQIABAx!16s%2Fg%2F11b6q8z78s?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-757-1114',
    website: 'https://www.bodegabysabor.ca/',
    instagram: 'https://www.instagram.com/bodegabysabor/',
    price: ['$$', '$$$'],
    recOne: '',
    recTwo: '',
    notes: ['Spanish tapas. Small plates, best shared by a group of people.'],
  },

  {
    id: 60,
    name: 'Bodega 124th',
    category: ['Spanish'],
    location: ['Central'],
    location: 'Central',
    neighbourhood: 'OW',
    address: '12417 Stony Plain Rd',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/Bodega+124+Street/@53.5468056,-113.6131899,11149m/data=!3m1!1e3!4m10!1m2!2m1!1sbodega!3m6!1s0x53a023d4bd68259f:0xc17e09eacf95536!8m2!3d53.5468056!4d-113.5369722!15sCgZib2RlZ2FaCCIGYm9kZWdhkgEKcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOQ1owd3RNVTluRUFF4AEA-gEFCKwEEC0!16s%2Fg%2F11f48js5bn?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-250-6066',
    website: 'https://www.bodegabysabor.ca/',
    instagram: 'https://www.instagram.com/bodegabysabor/',
    price: ['$$', '$$$'],
    recOne: '',
    recTwo: '',
    notes: ['Spanish tapas. Small plates, best shared by a group of people.'],
  },

  {
    id: 61,
    name: 'Bodega Highlands',
    category: ['Spanish'],
    location: ['North'],
    neighbourhood: 'Highlands',
    address: '6509 112 Ave NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/Bodega+Highlands/@53.5379317,-113.515406,11151m/data=!3m1!1e3!4m10!1m2!2m1!1sbodega!3m6!1s0x53a022d8b5660b1d:0x5739e7f250d88ab9!8m2!3d53.564646!4d-113.4381348!15sCgZib2RlZ2FaCCIGYm9kZWdhkgEJdGFwYXNfYmFymgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJzNVYyTXpSbEpVVjBaYVZsWTVWMU5GV25OVFZVNWhUVEJzVTJGV1JSQULgAQD6AQQIGBBH!16s%2Fg%2F11c4bg6yx8?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-757-0137',
    website: 'https://www.bodegabysabor.ca/',
    instagram: 'https://www.instagram.com/bodegabysabor/',
    price: ['$$', '$$$'],
    recOne: '',
    recTwo: '',
    notes: ['Spanish tapas. Small plates, best shared by a group of people.'],
  },

  // Thai

  {
    id: 62,
    name: 'Numchok Wilai',
    category: ['Thai'],
    location: ['Central'],
    neighbourhood: 'OW',
    address: '10623 124 St NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/Numchok+Wilai+Restaurant/@53.5504793,-113.5383814,16.72z/data=!4m10!1m3!11m2!2shQLWEvrj8-nEq6P77NxI7Q3beqahCw!3e3!3m5!1s0x53a023d3bf9df11f:0xf4aaaa55b079bf85!8m2!3d53.5500993!4d-113.5357209!16s%2Fg%2F1v76zbbz?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-488-7897',
    website: 'https://numchokwilai.ca/',
    instagram: 'https://www.instagram.com/numchokwilai/',
    price: ['$$'],
    // recOne: '',
    // recTwo: '',
    // notes: '',
  },

  // Vietnamese

  {
    id: 63,
    name: 'Banh Mi Day',
    category: ['Vietnamese, Sandwiches'],
    location: ['Central'],
    neighbourhood: 'OW',
    address: '11765 Jasper Ave',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/B%C3%A1nh+M%C3%AC+Day/@53.540828,-113.5246112,664m/data=!3m1!1e3!4m6!3m5!1s0x53a023f36b40f389:0xfccd22913461fe81!8m2!3d53.5407644!4d-113.5244262!16s%2Fg%2F11tfdhhdvc?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '780-485-2802',
    website: 'https://www.banhmiday.ca/',
    instagram: 'https://www.instagram.com/banhmiday.edmonton',
    price: ['$'],
    recs: ['Beef Sate Banh Mi'],
    notes: ['Best banh mi in Edmonton.'],
  },

  {
    id: 66,
    name: 'Golden Bird',
    category: ['Vietnamese'],
    location: ['Central'],
    neighbourhood: 'Chinatown',
    address: '10542 97 St NW',
    city: 'Edmonton',
    mapUrl:
      'https://www.google.com/maps/place/Golden+Bird+Restaurant/@53.5496524,-113.4913873,17z/data=!3m1!4b1!4m6!3m5!1s0x53a02251f505c8cb:0x636870a874ef092f!8m2!3d53.5496492!4d-113.4888124!16s%2Fg%2F1ttq1ss9?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    phone: '(780)420-1612',
    // website: '',
    // instagram: '',
    price: ['$'],
    // recs: ['', ''],
    // notes: [''],
  },
];
// Key:
// OS = Old Strathcona
// OW = Oliver/Wîhkwêntôwin
// WM = Westmount
// MC

export default restaurants;
