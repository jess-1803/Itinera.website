import kyotoImg from "../assets/destinations/kyoto.png";
import amalfiImg from "../assets/destinations/amalfi.png";
import moroccoImg from "../assets/destinations/morocco.png";
import patagoniaImg from "../assets/destinations/patagonia.png";

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
  coverImage?: string;
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
        title: "Montmartre & Hidden Jazz",
        activities: [
          { time: "08:30", description: "Dawn walk up to Sacré-Cœur before the tourists arrive" },
          { time: "10:30", description: "Atelier visit with a local artist in the 18th" },
          { time: "13:00", description: "Lunch at a hidden brasserie on Rue Lepic" },
          { time: "15:30", description: "Père Lachaise cemetery walk — Proust, Piaf, Wilde" },
          { time: "21:00", description: "Cave jazz club near Pigalle — house cognac, no reservations" },
        ],
      },
      {
        day: 4,
        title: "Le Marais & the Private Cellar",
        activities: [
          { time: "09:30", description: "Sunday brunch at a Marais boulangerie" },
          { time: "11:30", description: "Place des Vosges — the oldest planned square in Paris" },
          { time: "14:00", description: "Private champagne tasting in a 17th-century cellar" },
          { time: "17:00", description: "Stroll through the Galerie Vivienne — 19th-century arcade" },
          { time: "20:00", description: "Dinner at a natural wine bar in the 11th" },
        ],
      },
      {
        day: 5,
        title: "Departure Morning",
        activities: [
          { time: "07:00", description: "Early morning walk along the Seine — the city barely awake" },
          { time: "09:00", description: "Final breakfast at a neighbourhood café — café crème, pain au chocolat" },
          { time: "11:00", description: "Browse the bouquinistes along the Left Bank" },
          { time: "13:00", description: "Transfer to Charles de Gaulle" },
        ],
      },
    ],
  },
  {
    id: "tokyo",
    title: "Tokyo Neon Nights",
    subtitle: "Eight days navigating the world's most exhilarating city — from dawn temples to midnight ramen.",
    duration: "8 Days",
    style: "Urban Exploration",
    bestTime: "March – May, Oct – Nov",
    groupSize: "Solo or couple",
    imageKey: "tokyo",
    intro:
      "Tokyo is a city that rewards patience and punishes itineraries. This route gives you structure but leaves enough space for the city to surprise you — and it will.",
    highlights: [
      "Omakase sushi in Ginza",
      "Midnight photography walk through Shinjuku",
      "Architecture tour of Omotesando",
      "Tea ceremony in a private machiya",
      "Dawn at Tsukiji Outer Market",
    ],
    days: [
      {
        day: 1,
        title: "Arrival & Shinjuku",
        activities: [
          { time: "15:00", description: "Check in to a design hotel in Shinjuku" },
          { time: "17:00", description: "Golden Gai — aperitivo in a six-seat bar" },
          { time: "19:00", description: "Ramen in Omoide Yokocho (Memory Lane)" },
          { time: "21:30", description: "Tokyo Metropolitan Government Building observation deck — free, spectacular" },
        ],
      },
      {
        day: 2,
        title: "Harajuku, Omotesando & Design",
        activities: [
          { time: "08:00", description: "Meiji Shrine at dawn — forest path, absolute quiet" },
          { time: "10:00", description: "Omotesando architecture walk: Prada by Herzog & de Meuron, Tod's by Toyo Ito" },
          { time: "13:00", description: "Lunch at a basement café in Minami-Aoyama" },
          { time: "15:30", description: "21_21 Design Sight in Roppongi" },
          { time: "19:30", description: "Dinner in Shibuya — izakaya, sake, yakitori" },
        ],
      },
      {
        day: 3,
        title: "Yanaka & Old Tokyo",
        activities: [
          { time: "09:00", description: "Yanaka — the neighbourhood that survived the bombs. Cats, temples, tofu shops." },
          { time: "11:30", description: "Nezu Shrine and its tunnel of torii" },
          { time: "13:30", description: "Lunch at a soba-ya in Ueno" },
          { time: "15:00", description: "Tokyo National Museum — Edo period collections" },
          { time: "20:00", description: "Midnight walk through Akihabara's electric town" },
        ],
      },
      {
        day: 4,
        title: "Ginza & the Omakase Counter",
        activities: [
          { time: "07:00", description: "Tsukiji Outer Market — tuna sashimi for breakfast" },
          { time: "10:00", description: "Ginza gallery circuit — Ginza Six rooftop garden" },
          { time: "13:00", description: "Kaiseki lunch at a Ginza department store restaurant" },
          { time: "16:00", description: "Hamarikyu Gardens — tidal garden, tea pavilion on the water" },
          { time: "19:30", description: "Omakase sushi counter — 12 courses, no menu, pure trust" },
        ],
      },
      {
        day: 5,
        title: "Day Trip: Kamakura",
        activities: [
          { time: "08:00", description: "Train to Kamakura — 50 minutes south" },
          { time: "10:00", description: "The Great Buddha at Kōtoku-in" },
          { time: "12:00", description: "Hiking the Daibutsu Trail — coastal forest paths" },
          { time: "14:00", description: "Fresh fish lunch in the old town" },
          { time: "16:30", description: "Engaku-ji Zen temple before closing" },
          { time: "19:00", description: "Return to Tokyo — conveyor belt sushi for contrast" },
        ],
      },
      {
        day: 6,
        title: "Tea, Craft & the Private Machiya",
        activities: [
          { time: "10:00", description: "Private tea ceremony in a 100-year-old machiya townhouse" },
          { time: "13:00", description: "Koenji: Tokyo's quieter, weirder neighbourhood" },
          { time: "15:30", description: "Second-hand vinyl shopping in Shimokitazawa" },
          { time: "19:00", description: "Dinner at a standing bar in Nakameguro — canalside in autumn" },
        ],
      },
      {
        day: 7,
        title: "Naoshima Island (optional day trip)",
        activities: [
          { time: "07:00", description: "Bullet train west to Okayama, ferry to Naoshima" },
          { time: "11:00", description: "Chichu Art Museum — Monet rooms buried in the hillside" },
          { time: "14:00", description: "Benesse House collection — art in the landscape" },
          { time: "16:00", description: "Yayoi Kusama's yellow pumpkin on the jetty" },
          { time: "20:00", description: "Return to Tokyo by night train" },
        ],
      },
      {
        day: 8,
        title: "Final Morning",
        activities: [
          { time: "07:00", description: "Final dawn walk — Shinjuku Gyoen National Garden" },
          { time: "09:30", description: "Department store basement food halls — best souvenirs in the world" },
          { time: "12:00", description: "Last bowl of ramen. Say goodbye properly." },
          { time: "14:00", description: "Transfer to Narita or Haneda" },
        ],
      },
    ],
  },
  {
    id: "swiss",
    title: "Swiss Alpine Retreat",
    subtitle: "Seven days of mountain grandeur, thermal silence, and the art of doing nothing beautifully.",
    duration: "7 Days",
    style: "Nature & Wellness",
    bestTime: "June – Sept, Dec – Feb",
    groupSize: "Couple or small group",
    imageKey: "swiss",
    intro:
      "Switzerland is a country that has perfected the art of restraint. This itinerary moves between glaciers and thermal baths, peak-top restaurants and valley cheesemakers, with long pauses built in for the mountains to do their work.",
    highlights: [
      "Glacier Express panoramic rail journey",
      "Thermal baths in Vals by Peter Zumthor",
      "Private chalet wine tasting",
      "Sunrise on the Matterhorn from Gornergrat",
      "Fondue by a frozen lake",
    ],
    days: [
      {
        day: 1,
        title: "Zurich & Arrival",
        activities: [
          { time: "13:00", description: "Arrive Zurich. Lunch at a lakeside restaurant on the Limmat" },
          { time: "15:30", description: "Old Town walk — Grossmünster, medieval guildhalls" },
          { time: "18:00", description: "Swiss aperitif at a rooftop bar with lake views" },
          { time: "20:00", description: "Dinner at a modern Swiss restaurant — raclette, Chasselas" },
        ],
      },
      {
        day: 2,
        title: "Glacier Express to Zermatt",
        activities: [
          { time: "08:30", description: "Board the Glacier Express — St. Moritz to Zermatt, panoramic glass roof" },
          { time: "13:00", description: "Lunch onboard as the train crosses 291 bridges" },
          { time: "17:00", description: "Arrive Zermatt — no cars, horse-drawn carriages and silence" },
          { time: "20:00", description: "Dinner with first Matterhorn views across the table" },
        ],
      },
      {
        day: 3,
        title: "The Matterhorn at Sunrise",
        activities: [
          { time: "06:00", description: "Rack railway to Gornergrat — 3,089m. The Matterhorn in its first light." },
          { time: "09:00", description: "Alpine breakfast at the summit restaurant" },
          { time: "11:00", description: "Hiking trails back down through meadows and marmots" },
          { time: "15:00", description: "Village exploration — watchmakers, cheese shops" },
          { time: "19:30", description: "Fondue dinner in a 400-year-old farmhouse" },
        ],
      },
      {
        day: 4,
        title: "Vals & the Thermal Baths",
        activities: [
          { time: "09:00", description: "Scenic drive to Vals through the Rhine Gorge" },
          { time: "12:00", description: "Arrive Therme Vals — Peter Zumthor's stone bath temple" },
          { time: "12:30", description: "Four hours immersed in 60,000 litres of thermal silence" },
          { time: "17:00", description: "Rest. Read. Do nothing." },
          { time: "20:00", description: "Hotel dinner — mountain herbs, air-dried beef, local cheese" },
        ],
      },
      {
        day: 5,
        title: "Interlaken & the Lakes",
        activities: [
          { time: "09:00", description: "Drive to Interlaken between lakes Thun and Brienz" },
          { time: "11:00", description: "Boat across Lake Thun to Spiez — medieval castle on the water" },
          { time: "14:00", description: "Lunch at a lakeside restaurant — fish from the lake, Chasselas" },
          { time: "16:00", description: "Schilthorn cable car — 360-degree Alpine panorama" },
          { time: "20:00", description: "Chalet dinner with a local winemaker" },
        ],
      },
      {
        day: 6,
        title: "Bern & the Arcades",
        activities: [
          { time: "09:30", description: "Drive to Bern — one of Europe's great underrated capitals" },
          { time: "10:30", description: "Six kilometres of medieval arcades in the old town" },
          { time: "13:00", description: "Market lunch in the Bundesplatz square" },
          { time: "15:00", description: "Paul Klee Museum — 4,000 works in a Renzo Piano building" },
          { time: "19:30", description: "Final Swiss dinner — Bernese Platte, local Pinot Noir" },
        ],
      },
      {
        day: 7,
        title: "Geneva & Departure",
        activities: [
          { time: "08:30", description: "Morning drive along Lake Geneva — the Alps reflected in water" },
          { time: "10:30", description: "Geneva old town and the Reformation Wall" },
          { time: "13:00", description: "Lunch at Brasserie des Halles de l'Île, river island setting" },
          { time: "15:30", description: "Transfer to Geneva International Airport" },
        ],
      },
    ],
  },
  {
    id: "morocco",
    title: "Moroccan Depths",
    subtitle: "Seven days from the Atlantic coast into the Sahara, through medieval medinas and mountain passes.",
    duration: "7 Days",
    style: "Culture & Adventure",
    bestTime: "Oct – April",
    groupSize: "Solo, couple or small group",
    imageKey: "morocco",
    coverImage: moroccoImg,
    intro:
      "Morocco moves at its own rhythm. This route trades the Marrakech tourist trail for the lived-in reality of Fez's 9,000-alley medina, the silence of the Sahara before dawn, and the cedar forests of the Middle Atlas. It rewards curiosity and patience in equal measure.",
    highlights: [
      "Fez medina with a local guide — 9,000 alleyways, no map",
      "Overnight in a luxury desert camp, Merzouga",
      "Dawn camel ride to watch the sun rise over the dunes",
      "The blue city of Chefchaouen",
      "Private riad dinner in Marrakech",
    ],
    days: [
      {
        day: 1,
        title: "Casablanca to Fez",
        activities: [
          { time: "10:00", description: "Arrive Casablanca. Hassan II Mosque — largest in Africa, built over the Atlantic" },
          { time: "13:00", description: "Train north to Fez — 4 hours through the Rif foothills" },
          { time: "18:00", description: "Check in to a riad in the medina — courtyard, zellige tiles, absolute quiet" },
          { time: "20:00", description: "First dinner: bastilla, harira, mechoui lamb" },
        ],
      },
      {
        day: 2,
        title: "The Living Medieval City",
        activities: [
          { time: "08:30", description: "Fez el-Bali with a local guide — 9th century, unchanged in essential ways" },
          { time: "10:30", description: "Chouara tannery from the rooftop — leather being dyed in stone vats as it has been for centuries" },
          { time: "13:00", description: "Lunch inside the medina — kefta, fresh-squeezed orange juice, msemen" },
          { time: "15:30", description: "Madrasa Bou Inania — 14th-century Quranic school, carved cedar and marble" },
          { time: "20:30", description: "Dinner at a riad restaurant — seven-vegetable couscous" },
        ],
      },
      {
        day: 3,
        title: "Middle Atlas & Cedar Forests",
        activities: [
          { time: "09:00", description: "Drive south through the Middle Atlas — cedar forest, Barbary macaques in the trees" },
          { time: "12:00", description: "Ifrane — the 'Switzerland of Morocco', Art Deco colonial town" },
          { time: "14:00", description: "Lunch beside a mountain lake" },
          { time: "17:00", description: "Continue to the Ziz Valley — first palm groves, first date palms" },
          { time: "20:00", description: "Arrive Erfoud — gateway to the Sahara" },
        ],
      },
      {
        day: 4,
        title: "Merzouga & the Sahara",
        activities: [
          { time: "08:00", description: "Drive to Merzouga — Erg Chebbi dunes rise 150 metres from flat desert" },
          { time: "11:00", description: "Camel ride into the dunes — an hour of silence and soft sand" },
          { time: "14:00", description: "Lunch at a desert auberge, mint tea in the shade" },
          { time: "17:30", description: "Check in to a luxury desert camp — private tent, real beds, no electricity" },
          { time: "19:00", description: "Sunset from the highest dune. Dinner under stars. Gnawa musicians." },
        ],
      },
      {
        day: 5,
        title: "Dawn Dunes & the Draa Valley",
        activities: [
          { time: "05:30", description: "Camel ride to watch the sunrise over the Sahara. Worth every alarm." },
          { time: "09:00", description: "Breakfast at camp, then drive west through the Draa Valley" },
          { time: "12:00", description: "Zagora — biblical landscape, mud-brick fortresses" },
          { time: "15:00", description: "Draa Valley oasis road — 200km of date palms and kasbahs" },
          { time: "20:00", description: "Arrive Ouarzazate — film city, kasbah hotel" },
        ],
      },
      {
        day: 6,
        title: "The High Atlas & Marrakech",
        activities: [
          { time: "09:00", description: "Drive north over the High Atlas — Tizi n'Tichka pass, 2,260m" },
          { time: "11:30", description: "Kasbah Aït Benhaddou — Unesco-listed, used in Gladiator, Game of Thrones" },
          { time: "14:00", description: "Lunch at a mountain auberge — tagine, argan oil bread" },
          { time: "17:30", description: "Arrive Marrakech — check in to a medina riad" },
          { time: "20:00", description: "Private dinner on the riad terrace — rose petals, candlelight, bastilla" },
        ],
      },
      {
        day: 7,
        title: "Marrakech & Departure",
        activities: [
          { time: "08:00", description: "Majorelle Garden before the crowds — Yves Saint Laurent's blue sanctuary" },
          { time: "10:30", description: "Jemaa el-Fna square in morning mode — juice stalls, storytellers" },
          { time: "13:00", description: "Final lunch: mechoui lamb slow-cooked in an earth oven" },
          { time: "15:00", description: "Hammam and argan oil massage" },
          { time: "20:00", description: "Transfer to Marrakech Menara Airport" },
        ],
      },
    ],
  },
  {
    id: "greece",
    title: "Greek Islands: Athens to Milos",
    subtitle: "Eight days between antiquity and the Aegean — ruins at dawn, volcanic beaches at noon.",
    duration: "8 Days",
    style: "History & Coast",
    bestTime: "May – June, Sept – Oct",
    groupSize: "Couple or small group",
    imageKey: "greece",
    coverImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop",
    intro:
      "Greece refuses to be hurried. This route moves from the marble weight of Athens to the volcanic drama of Santorini to the raw, unpolished beauty of Milos — an island that still feels discovered rather than consumed.",
    highlights: [
      "Acropolis at dawn — before the tour groups arrive",
      "Santorini caldera at sunset from Oia",
      "Kleftiko sea caves, Milos — by private boat",
      "Dinner in an Athenian neoclassical home",
      "Midnight swimming off a black-sand beach",
    ],
    days: [
      {
        day: 1,
        title: "Athens Arrival",
        activities: [
          { time: "14:00", description: "Check in to a boutique hotel in Monastiraki — Acropolis view" },
          { time: "16:00", description: "Plaka neighbourhood walk — afternoon light on marble" },
          { time: "19:30", description: "Dinner in a neoclassical house in Kolonaki — modern Greek, natural wine" },
          { time: "21:30", description: "Cocktail at a rooftop bar with a lit Parthenon behind you" },
        ],
      },
      {
        day: 2,
        title: "The Acropolis, Dawn",
        activities: [
          { time: "07:30", description: "Acropolis at opening — you and the ancient stones, almost alone" },
          { time: "10:00", description: "Acropolis Museum — the marbles in context, the missing pieces" },
          { time: "13:00", description: "Lunch at a taverna in Thisseio — tsatziki, grilled octopus" },
          { time: "15:30", description: "Ancient Agora — Stoa of Attalos, Socrates' prison" },
          { time: "20:00", description: "Dinner in Psiri — street food, honey-fried cheese, ouzo" },
        ],
      },
      {
        day: 3,
        title: "Ferry to Santorini",
        activities: [
          { time: "08:00", description: "High-speed ferry from Piraeus — 5 hours across the Cyclades" },
          { time: "13:00", description: "Arrive Fira, Santorini. Lunch on the caldera rim." },
          { time: "15:30", description: "Walk the clifftop path from Fira to Oia — two hours, views the entire way" },
          { time: "19:30", description: "Oia at sunset — the most famous moment in Greece" },
          { time: "21:00", description: "Dinner at a cave restaurant carved into the caldera cliff" },
        ],
      },
      {
        day: 4,
        title: "Santorini's Other Side",
        activities: [
          { time: "08:00", description: "Akrotiri — Bronze Age city buried by the volcanic eruption of 1613 BC" },
          { time: "11:00", description: "Red Beach — volcanic rock crumbling into Aegean blue" },
          { time: "13:30", description: "Lunch at a winery — Assyrtiko white, grown in volcanic ash soil" },
          { time: "16:00", description: "Swim off Kamari's black sand beach" },
          { time: "20:00", description: "Mezedes dinner in Imerovigli with caldera views" },
        ],
      },
      {
        day: 5,
        title: "Ferry to Milos",
        activities: [
          { time: "09:30", description: "Ferry to Milos — 2 hours, far fewer tourists than Santorini" },
          { time: "12:00", description: "Arrive Adamas, the main port. Lunch at a harbour fish taverna." },
          { time: "15:00", description: "Drive to Sarakiniko — moon-like white pumice formations over electric blue water" },
          { time: "18:00", description: "Swim off a deserted cove near Triades" },
          { time: "20:30", description: "Dinner in Plaka, the hilltop capital — catch of the day, cold retsina" },
        ],
      },
      {
        day: 6,
        title: "Kleftiko by Private Boat",
        activities: [
          { time: "09:00", description: "Private boat departure — captain, just you, the coastline" },
          { time: "10:30", description: "Kleftiko: sea caves, arches, crystal water. Anchor and swim." },
          { time: "13:00", description: "Lunch onboard — fresh fish grilled on the boat" },
          { time: "15:00", description: "More caves, more swimming, a stop at Tsigrado beach" },
          { time: "18:30", description: "Return to port. Sunset from the boat." },
          { time: "21:00", description: "Final Milos dinner — sea urchin pasta, local cheese" },
        ],
      },
      {
        day: 7,
        title: "Milos at Leisure",
        activities: [
          { time: "09:30", description: "Catacombs of Milos — 1st-century Christian burial site, entirely underground" },
          { time: "11:30", description: "Site of the Venus de Milo discovery — the original is in the Louvre" },
          { time: "14:00", description: "Long lunch and a long swim at Firiplaka beach" },
          { time: "19:00", description: "Sunset cocktail at a bar cut into the caldera rock" },
          { time: "21:00", description: "Dinner at the best taverna on the island — ask the owner what's fresh" },
        ],
      },
      {
        day: 8,
        title: "Departure",
        activities: [
          { time: "07:30", description: "Final morning swim — the Aegean at its quietest" },
          { time: "09:30", description: "Ferry back to Athens" },
          { time: "14:30", description: "Arrive Piraeus. Transfer to Athens airport." },
        ],
      },
    ],
  },
  {
    id: "vietnam",
    title: "Vietnam End to End",
    subtitle: "Ten days from Hanoi's old quarter to the Mekong Delta — moving south through a country of endless surprise.",
    duration: "10 Days",
    style: "Adventure & Culture",
    bestTime: "Feb – April, Aug – Oct",
    groupSize: "Solo or couple",
    imageKey: "vietnam",
    coverImage: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1600&auto=format&fit=crop",
    intro:
      "Vietnam is one of the great travel experiences on earth — a country of extraordinary food, complex history, and landscapes that range from the karst peaks of the north to the languid delta of the south. This south-to-north route follows the logic of the country itself.",
    highlights: [
      "Ha Long Bay overnight on a private junk boat",
      "Street food cycling tour in Hoi An",
      "Hue Imperial Citadel at dusk",
      "Sunrise over the Mekong Delta from a rowing boat",
      "Pho in Hanoi at 6am — the only way to start",
    ],
    days: [
      {
        day: 1,
        title: "Hanoi Arrival",
        activities: [
          { time: "14:00", description: "Check in to a French colonial hotel in the Old Quarter" },
          { time: "16:00", description: "Hoan Kiem Lake walk — Ngoc Son Temple, the Huc Bridge" },
          { time: "18:30", description: "Bia hoi corner — street beer on a plastic stool, among locals" },
          { time: "20:00", description: "Bun cha dinner: grilled pork, fresh noodles, fish sauce — the Hanoi dish" },
        ],
      },
      {
        day: 2,
        title: "Hanoi Deep Dive",
        activities: [
          { time: "06:00", description: "Pho at a pavement stall — pho bo, tendon, extra broth. The city not yet awake." },
          { time: "09:00", description: "Ho Chi Minh Mausoleum and the Presidential Palace stilted house" },
          { time: "11:00", description: "Vietnam Museum of Ethnology — 54 ethnic groups, outdoor reconstructed houses" },
          { time: "14:00", description: "Old Quarter exploration — 36 guilds, still trading as named: Tin Street, Paper Street" },
          { time: "20:00", description: "Vietnamese coffee — egg coffee at Cafe Giang, 1946 recipe" },
        ],
      },
      {
        day: 3,
        title: "Ha Long Bay: Embarkation",
        activities: [
          { time: "08:00", description: "Drive to Ha Long — 3.5 hours, watch the landscape flatten to delta" },
          { time: "12:30", description: "Board your private junk. Lunch as you sail into 1,600 limestone islands." },
          { time: "15:00", description: "Kayaking through sea caves and floating fishing villages" },
          { time: "18:30", description: "Sunset cocktail on the sundeck. Silence. Islands everywhere." },
          { time: "20:00", description: "Seafood dinner onboard — crab, squid, clams pulled from the bay that afternoon" },
        ],
      },
      {
        day: 4,
        title: "Ha Long Bay: Dawn & Return",
        activities: [
          { time: "05:30", description: "Dawn on deck — mist over the karst peaks. One of the great mornings." },
          { time: "07:30", description: "Tai chi on the sundeck. Breakfast with bay views." },
          { time: "09:30", description: "Swimming off the boat, last kayak, exploring a hidden cave" },
          { time: "12:00", description: "Lunch as the junk returns to port" },
          { time: "16:00", description: "Drive back to Hanoi. Fly to Da Nang." },
          { time: "21:00", description: "Arrive Hoi An — lantern city at night" },
        ],
      },
      {
        day: 5,
        title: "Hoi An Ancient Town",
        activities: [
          { time: "07:00", description: "Morning market — women arriving by boat with vegetables from the river farms" },
          { time: "09:00", description: "Hoi An Ancient Town — Japanese Bridge, Chinese assembly halls, tailor workshops" },
          { time: "13:00", description: "Cooking class: cao lau (local noodle, only made with water from one ancient well)" },
          { time: "16:00", description: "Bicycle to An Bang beach — quieter, wider than Cua Dai" },
          { time: "20:00", description: "Lanterns on the Thu Bon River — full moon festival if timing allows" },
        ],
      },
      {
        day: 6,
        title: "Hue: The Imperial City",
        activities: [
          { time: "08:30", description: "Hired driver north — Hai Van Pass with panoramic South China Sea views" },
          { time: "12:00", description: "Arrive Hue. Bun bo Hue for lunch — spicier, richer than Hanoi pho." },
          { time: "14:30", description: "Imperial Citadel — 19th-century Nguyen Dynasty, still battle-scarred" },
          { time: "17:30", description: "Dragon boat cruise on the Perfume River to Thien Mu Pagoda" },
          { time: "20:00", description: "Royal Hue cuisine dinner — seven courses, ancient recipes" },
        ],
      },
      {
        day: 7,
        title: "Hue Tombs & Departure South",
        activities: [
          { time: "08:30", description: "Tu Duc and Khai Dinh tombs — emperors' garden mausoleums" },
          { time: "12:00", description: "Lunch at a garden house restaurant — Hue's unique tradition" },
          { time: "14:30", description: "Fly Da Nang to Ho Chi Minh City (Saigon)" },
          { time: "18:00", description: "Arrive Saigon. Check in to a hotel in District 1." },
          { time: "20:30", description: "Rooftop bar — the skyline of modern Vietnam" },
        ],
      },
      {
        day: 8,
        title: "Saigon",
        activities: [
          { time: "08:00", description: "War Remnants Museum — unsparing, necessary" },
          { time: "11:00", description: "Reunification Palace — 1975: the tank through the gates, the war over" },
          { time: "13:00", description: "Lunch: banh mi on the street. Pate, jalapeño, fresh herbs, carnage." },
          { time: "15:30", description: "Ben Thanh Market — not for buying, for looking" },
          { time: "20:00", description: "Dinner in a converted colonial villa in District 3 — mo xao xa ot, lotus salad" },
        ],
      },
      {
        day: 9,
        title: "Mekong Delta Day Trip",
        activities: [
          { time: "07:30", description: "Drive to My Tho — gateway to the Mekong Delta" },
          { time: "10:00", description: "Boat through the delta's waterways — coconut candy workshops, beehive farms" },
          { time: "12:00", description: "Lunch on a river island — elephant fish, morning glory stir fry" },
          { time: "14:30", description: "Rowing boat through narrow mangrove canals" },
          { time: "17:30", description: "Return to Saigon. Last evening." },
          { time: "20:00", description: "Pho again. Always pho at the end." },
        ],
      },
      {
        day: 10,
        title: "Departure",
        activities: [
          { time: "07:00", description: "Final morning: ca phe sua da (iced milk coffee) at a street stall" },
          { time: "09:00", description: "Last wander through the French quarter — Notre-Dame Cathedral, Central Post Office" },
          { time: "12:00", description: "Transfer to Tan Son Nhat International Airport" },
        ],
      },
    ],
  },
  {
    id: "kyoto",
    title: "Kyoto, Slowly",
    subtitle: "Five days of temple mornings, quiet lanes, and seasonal cooking in Japan's old capital.",
    duration: "5 Days",
    style: "Culture & Slow Travel",
    bestTime: "March – May, Oct – Nov",
    groupSize: "Solo or couple",
    imageKey: "kyoto",
    coverImage: kyotoImg,
    intro: "Kyoto reveals itself early and on foot. This five-day route gives the city's temples and neighbourhoods room to breathe, pairing its best-known landmarks with small craft shops, riverside walks, and unhurried meals.",
    highlights: [
      "Fushimi Inari before the morning crowds",
      "Arashiyama bamboo grove and riverside walk",
      "Tea ceremony in a Gion machiya",
      "Nishiki Market with a local food guide",
      "Higashiyama's temple lanes at dusk",
    ],
    days: [
      { day: 1, title: "Arrival in Higashiyama", activities: [
        { time: "14:00", description: "Check in to a small ryokan near the eastern hills and settle in over tea." },
        { time: "16:00", description: "Walk the old lanes around Kiyomizu-dera as the afternoon light softens." },
        { time: "19:00", description: "Try a seasonal kaiseki dinner, with dishes built around the day's market produce." },
      ] },
      { day: 2, title: "Torii Gates & Old Streets", activities: [
        { time: "06:30", description: "Visit Fushimi Inari early and follow the lower forest trail before it gets busy." },
        { time: "10:00", description: "Return through Fushimi for a sake-brewery tasting and a relaxed lunch." },
        { time: "15:00", description: "Browse the pottery studios and small shops of Sannenzaka and Ninenzaka." },
        { time: "18:30", description: "Watch the lanterns come on around Yasaka Shrine and Gion." },
      ] },
      { day: 3, title: "Arashiyama & the Katsura River", activities: [
        { time: "07:00", description: "Walk through the bamboo grove while the paths are still quiet." },
        { time: "09:00", description: "Visit Tenryu-ji's garden, then take the riverside path toward Togetsukyo Bridge." },
        { time: "13:00", description: "Have a simple soba lunch near the river before returning to central Kyoto." },
        { time: "16:00", description: "Leave the late afternoon open for a riverside stroll or a rest at the ryokan." },
      ] },
      { day: 4, title: "Markets, Gardens & Tea", activities: [
        { time: "09:00", description: "Explore Nishiki Market with a local guide, tasting pickles, tofu, and seasonal sweets." },
        { time: "13:00", description: "Spend a quiet hour among the moss gardens at Nanzen-ji." },
        { time: "16:00", description: "Join a small tea ceremony in a traditional Gion machiya." },
        { time: "19:00", description: "Choose a neighbourhood izakaya for dinner and a final evening walk." },
      ] },
      { day: 5, title: "Northern Temples & Departure", activities: [
        { time: "08:00", description: "Visit the Philosopher's Path and its small temples before the day warms up." },
        { time: "11:00", description: "Stop at a local café for a last matcha and a slow breakfast." },
        { time: "13:00", description: "Collect your bags and continue to Kyoto Station for departure." },
      ] },
    ],
  },
  {
    id: "amalfi",
    title: "The Amalfi Coast, by Sea and Foot",
    subtitle: "Four days of cliffside villages, lemon groves, and long lunches above the Mediterranean.",
    duration: "4 Days",
    style: "Coast & Food",
    bestTime: "May – June, Sept – Oct",
    groupSize: "Couple or small group",
    imageKey: "amalfi",
    coverImage: amalfiImg,
    intro: "The coast is best experienced at a gentler pace: early walks before the roads fill, ferries between villages, and enough time to linger over lunch. This short route keeps one base and lets the coastline set the rhythm.",
    highlights: [
      "Arrive in Positano by ferry",
      "Walk a section of the Path of the Gods",
      "Ravello gardens and villa terraces",
      "A small-group lemon grove visit",
      "Sunset dinner in Amalfi town",
    ],
    days: [
      { day: 1, title: "Arrive by Water", activities: [
        { time: "13:00", description: "Take the ferry into Positano and check in to a family-run guesthouse above the beach." },
        { time: "16:00", description: "Explore the quieter upper lanes, stopping at a ceramic workshop along the way." },
        { time: "19:30", description: "Dinner on a terrace overlooking the water: grilled local fish, vegetables, and an early night." },
      ] },
      { day: 2, title: "The Path of the Gods", activities: [
        { time: "07:30", description: "Transfer to Bomerano for a guided walk along the easier, scenic section of the Sentiero degli Dei." },
        { time: "11:30", description: "Pause in Nocelle for fresh lemonade and a view back over the coast." },
        { time: "14:00", description: "Return to Positano for a late lunch and a swim at the beach." },
        { time: "19:00", description: "Try handmade pasta at a small trattoria away from the waterfront." },
      ] },
      { day: 3, title: "Amalfi & Ravello", activities: [
        { time: "09:00", description: "Take the ferry to Amalfi and visit the cathedral and cloister before the midday rush." },
        { time: "12:00", description: "Share a long lunch in town, then ride up to Ravello by local bus." },
        { time: "15:00", description: "Walk the gardens at Villa Rufolo and Villa Cimbrone at an easy pace." },
        { time: "19:30", description: "Return to Amalfi for a sunset dinner near the old harbour." },
      ] },
      { day: 4, title: "Lemon Groves & Departure", activities: [
        { time: "09:00", description: "Visit a small lemon grove above the coast and learn how sfusato lemons are grown." },
        { time: "11:30", description: "Pick up pastries and take one last walk along the waterfront." },
        { time: "13:00", description: "Continue by ferry or transfer to your next stop." },
      ] },
    ],
  },
  {
    id: "cappadocia",
    title: "Cappadocia at First Light",
    subtitle: "Four days among cave dwellings, valley trails, and the volcanic landscapes of central Türkiye.",
    duration: "4 Days",
    style: "Landscape & Culture",
    bestTime: "April – June, Sept – Oct",
    groupSize: "Solo, couple or small group",
    imageKey: "cappadocia",
    coverImage: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?q=80&w=1600&auto=format&fit=crop",
    intro: "Cappadocia is more than a balloon flight. Stay in one village, explore the valleys on foot with a local guide, and make time for the region's rock-cut churches, underground history, and evening light.",
    highlights: [
      "Optional sunrise balloon flight over Göreme",
      "Cave hotel stay with valley views",
      "Göreme Open-Air Museum with a local guide",
      "Kaymakli underground city",
      "Sunset walk through the Red and Rose Valleys",
    ],
    days: [
      { day: 1, title: "Göreme & the Cave Valleys", activities: [
        { time: "14:00", description: "Check in to a locally owned cave hotel and get oriented in Göreme." },
        { time: "16:30", description: "Walk the nearby viewpoints and learn how the soft volcanic stone shaped local homes." },
        { time: "19:30", description: "Dinner at a family-run restaurant featuring pottery kebab and regional vegetables." },
      ] },
      { day: 2, title: "The Valleys at Sunrise", activities: [
        { time: "05:00", description: "Take an optional balloon flight, weather permitting; otherwise watch the launch from a valley viewpoint." },
        { time: "09:30", description: "Visit the Göreme Open-Air Museum with a local guide, focusing on the painted rock churches." },
        { time: "14:30", description: "Rest during the warmest part of the day, then walk through Love Valley in the late afternoon." },
        { time: "19:00", description: "Enjoy a quiet dinner back in town." },
      ] },
      { day: 3, title: "Underground History", activities: [
        { time: "09:00", description: "Drive to Kaymakli and explore its underground rooms with a licensed local guide." },
        { time: "12:30", description: "Stop for lunch in a village garden before returning through the countryside." },
        { time: "16:30", description: "Walk the Red and Rose Valleys as the rock changes colour in the evening light." },
        { time: "20:00", description: "Share a regional meal and a glass of local wine on the hotel terrace." },
      ] },
      { day: 4, title: "Uçhisar & Departure", activities: [
        { time: "08:30", description: "Climb to Uçhisar Castle for a final wide view across the valleys." },
        { time: "11:00", description: "Browse small workshops in Avanos, known for its pottery traditions." },
        { time: "14:00", description: "Transfer to the airport for your onward journey." },
      ] },
    ],
  },
  {
    id: "rajasthan",
    title: "Rajasthan: Forts, Lakes & Desert",
    subtitle: "Seven days linking Jaipur, Jodhpur, and Udaipur through the colours and craft traditions of Rajasthan.",
    duration: "7 Days",
    style: "Culture & Heritage",
    bestTime: "October – March",
    groupSize: "Couple or small group",
    imageKey: "rajasthan",
    coverImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600&auto=format&fit=crop",
    intro: "Rajasthan is best travelled with room for the road between its cities. This week-long route pairs historic forts with local markets, artisan workshops, and a slower finish beside Udaipur's lakes.",
    highlights: [
      "Amber Fort and the old lanes of Jaipur",
      "Block-printing workshop with a local artisan",
      "Mehrangarh Fort above Jodhpur's blue quarter",
      "Desert sunset outside Jaisalmer",
      "Udaipur's lake palaces and old city",
    ],
    days: [
      { day: 1, title: "Jaipur's Old City", activities: [
        { time: "14:00", description: "Settle into a restored haveli and take an orientation walk through the walled city." },
        { time: "16:30", description: "See Hawa Mahal from the street and explore the bazaars with a local guide." },
        { time: "19:30", description: "Try a Rajasthani thali at a neighbourhood restaurant." },
      ] },
      { day: 2, title: "Amber Fort & Jaipur Crafts", activities: [
        { time: "08:00", description: "Visit Amber Fort early, taking time for the courtyards and hilltop views." },
        { time: "12:00", description: "Return to Jaipur for lunch and a rest during the warmest hours." },
        { time: "15:30", description: "Join a small block-printing workshop and learn about the region's textile patterns." },
        { time: "19:00", description: "Walk to a rooftop for sunset over the old city." },
      ] },
      { day: 3, title: "Jaipur to Jodhpur", activities: [
        { time: "08:30", description: "Travel by road to Jodhpur with a stop for lunch in a village along the way." },
        { time: "15:00", description: "Check in near the old city and walk the blue lanes at a relaxed pace." },
        { time: "19:30", description: "Dinner in a family-run restaurant beneath the fort walls." },
      ] },
      { day: 4, title: "Mehrangarh & the Blue City", activities: [
        { time: "08:30", description: "Explore Mehrangarh Fort with time for the museum and the views over Jodhpur." },
        { time: "12:30", description: "Have lunch in the old city, then browse the spice and textile markets." },
        { time: "16:30", description: "Visit Jaswant Thada before returning to the blue quarter for evening light." },
      ] },
      { day: 5, title: "Desert Road to Jaisalmer", activities: [
        { time: "08:00", description: "Drive west through the Thar region, stopping at small settlements en route." },
        { time: "14:00", description: "Check in to a heritage stay near Jaisalmer Fort and explore its lanes." },
        { time: "17:00", description: "Head to the dunes for a quiet sunset walk; overnight in town for a lighter footprint." },
      ] },
      { day: 6, title: "Jaisalmer to Udaipur", activities: [
        { time: "08:00", description: "Visit the fort and its carved havelis before the day warms up." },
        { time: "11:00", description: "Travel toward Udaipur, breaking the long journey for lunch and a leg stretch." },
        { time: "19:00", description: "Arrive at a small guesthouse near Lake Pichola." },
      ] },
      { day: 7, title: "Udaipur & Departure", activities: [
        { time: "08:30", description: "Visit the City Palace and its courtyards overlooking the lake." },
        { time: "11:30", description: "Take a short boat ride and leave time for a final café stop in the old city." },
        { time: "14:00", description: "Transfer to the airport or continue your journey." },
      ] },
    ],
  },
  {
    id: "patagonia",
    title: "Patagonia: Trails at the Edge of the World",
    subtitle: "Six days of mountain paths, glacier water, and quiet estancias in Chilean Patagonia.",
    duration: "6 Days",
    style: "Hiking & Wilderness",
    bestTime: "November – March",
    groupSize: "Small group",
    imageKey: "patagonia",
    coverImage: patagoniaImg,
    intro: "Patagonia asks for flexibility: weather changes quickly, and the best days leave space to linger. This Chile-focused route uses Puerto Natales as a base for Torres del Paine, with a mix of guided walks and restorative time in town.",
    highlights: [
      "Base in Puerto Natales with a local guide",
      "A full-day walk in Torres del Paine",
      "Grey Glacier boat excursion",
      "Wildlife spotting along park roads",
      "A working estancia visit and shared meal",
    ],
    days: [
      { day: 1, title: "Arrive in Puerto Natales", activities: [
        { time: "15:00", description: "Check in to a small guesthouse and take a waterfront walk along the Última Esperanza Sound." },
        { time: "17:00", description: "Meet your local guide to review weather, trail conditions, and layers for the week." },
        { time: "19:30", description: "Dinner in town featuring local lamb or a seasonal vegetarian option." },
      ] },
      { day: 2, title: "Torres del Paine: The Viewpoints", activities: [
        { time: "07:00", description: "Drive into the national park, stopping at Lago Sarmiento and Laguna Amarga viewpoints." },
        { time: "10:00", description: "Take a moderate guided walk with views of the Paine massif; choose the route to suit conditions." },
        { time: "13:00", description: "Picnic lunch outdoors, followed by a slower afternoon at Salto Grande waterfall." },
        { time: "18:00", description: "Return to Puerto Natales for a warm meal and rest." },
      ] },
      { day: 3, title: "Grey Glacier", activities: [
        { time: "08:00", description: "Travel to Lago Grey and board a boat excursion, weather permitting, to view the glacier safely from the water." },
        { time: "13:00", description: "Have lunch near the lake and walk the shoreline if conditions allow." },
        { time: "16:30", description: "Return to town with time to rest or browse local wool and craft shops." },
      ] },
      { day: 4, title: "The Paine Trails", activities: [
        { time: "07:00", description: "Choose a full-day guided hike based on weather and fitness; pack layers, water, and a trail lunch." },
        { time: "16:00", description: "Return to Puerto Natales and leave the evening open for recovery." },
        { time: "19:30", description: "Share dinner with your guide and review the next day's conditions." },
      ] },
      { day: 5, title: "Estancia & Open Country", activities: [
        { time: "09:00", description: "Visit a nearby working estancia and hear about life, wildlife, and conservation in the region." },
        { time: "12:30", description: "Share a traditional lunch with your hosts." },
        { time: "15:00", description: "Take an easy walk across the open steppe, keeping a respectful distance from wildlife." },
        { time: "18:30", description: "Return to town for a final sunset along the waterfront." },
      ] },
      { day: 6, title: "Departure", activities: [
        { time: "08:00", description: "Enjoy a slow breakfast and a final walk through the harbour district." },
        { time: "10:30", description: "Transfer to the airport or bus terminal for your onward journey." },
      ] },
    ],
  },
];
