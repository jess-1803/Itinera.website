export interface ItineraryDay {
  day: number;
  title: string;
  activities: { time: string; description: string }[];
}

export interface ItineraryFull {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  style: string;
  bestTime: string;
  groupSize: string;
  imageKey: string;
  intro: string;
  highlights: string[];
  days: ItineraryDay[];
}

export const ITINERARIES: ItineraryFull[] = [
  {
    id: "paris",
    title: "A Taste of Paris",
    subtitle: "Five days of culture, cuisine, and quiet revelations in the City of Light.",
    duration: "5 Days",
    style: "Culture & Cuisine",
    bestTime: "April – June, Sept – Oct",
    groupSize: "Solo or couple",
    imageKey: "paris",
    intro:
      "Paris rewards the unhurried traveller. This itinerary skips the tourist queues and leans into the intimate side of the city — neighbourhood bistros, after-hours galleries, and the kind of mornings that exist only in Paris.",
    highlights: [
      "Private Louvre after-hours tour",
      "Michelin-star dining in Marais",
      "Hidden jazz clubs of Montmartre",
      "Dawn walk along the Seine",
      "Champagne tasting in a private cellar",
    ],
    days: [
      {
        day: 1,
        title: "Arrival & the 7th Arrondissement",
        activities: [
          { time: "14:00", description: "Check in to your boutique hotel near Rue de Varenne" },
          { time: "16:00", description: "First walk through Champ de Mars — the Eiffel Tower at golden hour" },
          { time: "19:30", description: "Dinner at a neighbourhood bistro on Rue Cler — classic steak frites, natural wine" },
          { time: "21:30", description: "Evening stroll across Pont de Bir-Hakeim" },
        ],
      },
      {
        day: 2,
        title: "The Louvre, After Hours",
        activities: [
          { time: "09:00", description: "Slow morning — café au lait and croissants at Café de Flore" },
          { time: "11:00", description: "Musée d'Orsay: Impressionist galleries without the crowds" },
          { time: "14:00", description: "Lunch at a wine bar in Saint-Germain-des-Prés" },
          { time: "18:30", description: "Private guided Louvre tour — the collections you never see" },
          { time: "21:00", description: "Champagne on the rooftop of a Marais gallery" },
        ],
      },
      {
        day: 3,
        title: "Marais, Cuisine & Craft",
        activities: [
          { time: "09:30", description: "Morning market at Marché d'Aligre — the city's most authentic food market" },
          { time: "11:00", description: "Walking tour of the medieval Marais neighbourhood" },
          { time: "13:00", description: "Lunch at a Michelin-starred bistro — tasting menu" },
          { time: "16:00", description: "Visit galleries in the Marais art district" },
          { time: "20:00", description: "Dinner at a modern French restaurant — seasonal, local" },
        ],
      },
      {
        day: 4,
        title: "Montmartre & After Dark",
        activities: [
          { time: "09:00", description: "Dawn walk up to Sacré-Cœur before the crowds arrive" },
          { time: "10:30", description: "Breakfast at a Montmartre café overlooking the city" },
          { time: "14:00", description: "Champagne tasting in a private cellar in Pigalle" },
          { time: "17:00", description: "Aperitif hour — vermouth and olives at a neighbourhood bar" },
          { time: "21:30", description: "Jazz club in Montmartre — live music until midnight" },
        ],
      },
      {
        day: 5,
        title: "The Seine & Departure",
        activities: [
          { time: "07:00", description: "Dawn walk along the Seine — the city at its most quiet" },
          { time: "09:00", description: "Final breakfast — pain au chocolat and espresso in the Latin Quarter" },
          { time: "11:00", description: "Browse the bouquinistes along the river" },
          { time: "14:00", description: "Check out and transfer to CDG" },
        ],
      },
    ],
  },
  {
    id: "tokyo",
    title: "Tokyo Neon Nights",
    subtitle: "Eight days of contrast, wonder, and the poetry of a city that never sleeps.",
    duration: "8 Days",
    style: "Urban Exploration",
    bestTime: "March – May, Oct – Nov",
    groupSize: "Solo or pair",
    imageKey: "tokyo",
    intro:
      "Tokyo is a city of infinite layers. This itinerary moves between the ancient and the ultramodern — from Shinto shrines at dawn to neon-drenched alleyways after midnight — with space for the discoveries that aren't on any map.",
    highlights: [
      "Omakase sushi in Ginza",
      "Midnight photography walk in Shinjuku",
      "Architecture tour of Omotesando",
      "Tea ceremony in a private garden",
      "Sunrise at Senso-ji temple",
    ],
    days: [
      {
        day: 1,
        title: "Arrival & Shinjuku",
        activities: [
          { time: "15:00", description: "Check in to a design hotel in Shinjuku" },
          { time: "17:00", description: "First walk through Shinjuku Gyoen — still, green, necessary" },
          { time: "19:30", description: "Ramen at a standing bar in Golden Gai" },
          { time: "22:00", description: "Explore the neon of Kabukicho on foot" },
        ],
      },
      {
        day: 2,
        title: "Ancient Tokyo: Asakusa & Senso-ji",
        activities: [
          { time: "06:00", description: "Sunrise at Senso-ji temple — arrive before tour groups" },
          { time: "08:00", description: "Breakfast at a traditional kissaten coffee shop" },
          { time: "11:00", description: "Walk Nakamise-dori and explore Asakusa side streets" },
          { time: "14:00", description: "Sumida River boat cruise to Hamarikyu Gardens" },
          { time: "19:00", description: "Izakaya dinner — yakitori, sake, company" },
        ],
      },
      {
        day: 3,
        title: "Design & Architecture",
        activities: [
          { time: "10:00", description: "Architecture walk in Omotesando — Prada, Tod's, Dior buildings" },
          { time: "12:30", description: "Lunch at a rooftop café in Harajuku" },
          { time: "15:00", description: "21_21 Design Sight museum in Midtown" },
          { time: "18:00", description: "Cocktails at a Tokyo skyscraper bar" },
          { time: "20:30", description: "Omakase sushi counter in Ginza — chef's selection" },
        ],
      },
      {
        day: 4,
        title: "Calm Day: Yanaka & Tea",
        activities: [
          { time: "09:30", description: "Morning in Yanaka — old Tokyo preserved, quiet streets" },
          { time: "11:30", description: "Traditional tea ceremony in a private garden" },
          { time: "14:00", description: "Ueno museums — National Museum collection" },
          { time: "18:00", description: "Sunset from Ueno Park" },
          { time: "20:00", description: "Dinner at a neighbourhood restaurant in Nezu" },
        ],
      },
      {
        day: 5,
        title: "Day Trip: Nikko",
        activities: [
          { time: "07:30", description: "Shinkansen to Nikko — 2 hours north of Tokyo" },
          { time: "10:00", description: "Tosho-gu Shrine complex — UNESCO World Heritage" },
          { time: "13:00", description: "Lunch by the Daiya River" },
          { time: "15:00", description: "Kegon Falls and Lake Chuzenji" },
          { time: "19:00", description: "Return to Tokyo" },
        ],
      },
      {
        day: 6,
        title: "Shibuya & Modern Tokyo",
        activities: [
          { time: "10:00", description: "Shibuya crossing at midday — the theatre of the city" },
          { time: "12:00", description: "Lunch at a depachika — the underground food halls" },
          { time: "14:30", description: "Teamlab Borderless digital art museum" },
          { time: "19:00", description: "Dinner in Daikanyama — Tokyo's most elegant neighbourhood" },
          { time: "23:00", description: "Midnight photography walk in neon-lit Shibuya" },
        ],
      },
      {
        day: 7,
        title: "Kyoto Day Trip",
        activities: [
          { time: "06:30", description: "Shinkansen to Kyoto — 2h 15m by Hikari" },
          { time: "09:30", description: "Fushimi Inari torii gates at dawn" },
          { time: "12:00", description: "Lunch in Gion — kaiseki or bento" },
          { time: "14:00", description: "Arashiyama bamboo grove" },
          { time: "19:30", description: "Return Shinkansen to Tokyo" },
        ],
      },
      {
        day: 8,
        title: "Final Morning & Departure",
        activities: [
          { time: "07:00", description: "Final breakfast — tamago kake gohan at a local kissaten" },
          { time: "09:00", description: "Last walk through the neighbourhood" },
          { time: "11:00", description: "Transfer to Narita or Haneda" },
        ],
      },
    ],
  },
  {
    id: "swiss",
    title: "Swiss Alpine Retreat",
    subtitle: "Seven days of glacier views, thermal waters, and slow living at altitude.",
    duration: "7 Days",
    style: "Nature & Wellness",
    bestTime: "June – Sept, Dec – Feb",
    groupSize: "Couple or small group",
    imageKey: "swiss",
    intro:
      "Switzerland rewards those who slow down. This itinerary follows the Glacier Express across the Alps, pauses for thermal baths in Vals, and ends in a private chalet with wine from across the country's hidden wine regions.",
    highlights: [
      "Glacier Express panoramic journey",
      "Thermal baths in Vals",
      "Private chalet wine tasting",
      "Hiking above Zermatt",
      "Sunrise on the Matterhorn",
    ],
    days: [
      {
        day: 1,
        title: "Arrival in Zurich",
        activities: [
          { time: "14:00", description: "Arrive Zurich — check in to a design hotel in the Altstadt" },
          { time: "16:00", description: "Walk the old town — the guildhalls, the Limmat River" },
          { time: "18:30", description: "Aperitif by the lake at a waterfront bar" },
          { time: "20:00", description: "Dinner at a Swiss brasserie — rösti, raclette, local wine" },
        ],
      },
      {
        day: 2,
        title: "Lucerne & Lake",
        activities: [
          { time: "08:30", description: "Train to Lucerne — 50 minutes" },
          { time: "10:00", description: "Chapel Bridge and the old town at walking pace" },
          { time: "12:30", description: "Lunch at a lakeside restaurant" },
          { time: "14:30", description: "Boat cruise on Lake Lucerne" },
          { time: "18:00", description: "Return to Zurich. Dinner at a wine bar" },
        ],
      },
      {
        day: 3,
        title: "Glacier Express",
        activities: [
          { time: "07:45", description: "Board the Glacier Express from St. Moritz westbound" },
          { time: "09:00 – 15:30", description: "Panoramic journey through the Alps — 91 bridges, 19 tunnels" },
          { time: "15:30", description: "Arrive Zermatt — no cars, only mountains" },
          { time: "18:00", description: "Check in to a chalet hotel with Matterhorn views" },
          { time: "20:00", description: "Fondue dinner in the village" },
        ],
      },
      {
        day: 4,
        title: "Zermatt & the Matterhorn",
        activities: [
          { time: "05:30", description: "Sunrise hike above Zermatt — watch the Matterhorn turn gold" },
          { time: "09:00", description: "Breakfast with a view at a mountain hut" },
          { time: "12:00", description: "Gornergrat Railway to 3,089m — panoramic glaciers" },
          { time: "15:00", description: "Return and rest. Spa afternoon" },
          { time: "20:00", description: "Raclette dinner with local Valais wine" },
        ],
      },
      {
        day: 5,
        title: "Vals: Thermal Baths",
        activities: [
          { time: "08:30", description: "Transfer to Vals — remote mountain village" },
          { time: "11:00", description: "Peter Zumthor's Therme Vals — stone, water, silence" },
          { time: "13:30", description: "Lunch at the thermal hotel restaurant" },
          { time: "15:00", description: "Afternoon in the thermal baths — outdoor pools, steam rooms" },
          { time: "19:30", description: "Dinner at the Haus Zumthor restaurant" },
        ],
      },
      {
        day: 6,
        title: "Bernese Oberland & Wine",
        activities: [
          { time: "08:00", description: "Drive or train to Interlaken — turquoise lakes, peaks" },
          { time: "10:00", description: "Paragliding from Beatenberg (optional) or hiking above Grindelwald" },
          { time: "13:00", description: "Lunch at an alpine restaurant" },
          { time: "16:00", description: "Transfer to a private chalet estate in the Lavaux region" },
          { time: "19:00", description: "Private wine tasting — Swiss Chasselas from UNESCO vineyard terraces" },
        ],
      },
      {
        day: 7,
        title: "Slow Morning & Departure",
        activities: [
          { time: "08:00", description: "Final breakfast with vineyard views over Lake Geneva" },
          { time: "10:00", description: "Last walk through Lavaux terraces" },
          { time: "12:00", description: "Transfer to Geneva airport" },
        ],
      },
    ],
  },
];
