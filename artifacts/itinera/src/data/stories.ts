export interface StorySection {
  type: "paragraph" | "pullquote" | "subheading";
  content: string;
}

export interface Story {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  imageKey: string;
  publishedDate: string;
  author: string;
  body: StorySection[];
}

export const STORIES: Story[] = [
  {
    slug: "tokyo-minimalism",
    title: "48 Hours in Minimalist Tokyo",
    category: "Architecture & Design",
    readTime: "5 min read",
    publishedDate: "May 2025",
    author: "Itinera Editorial",
    imageKey: "architecture",
    excerpt:
      "Tokyo teaches restraint. In a city of infinite stimulation, the most profound experiences are the ones that ask you to subtract rather than add.",
    body: [
      {
        type: "paragraph",
        content:
          "There is a particular quality to light in Tokyo at six in the morning. It arrives not as spectacle but as suggestion — thin, oblique, uncommitted — falling across concrete the way a thought falls across a quiet mind. Most visitors sleep through it. This was deliberate. For 48 hours, I had set one rule: move toward silence.",
      },
      {
        type: "paragraph",
        content:
          "The assignment was architecture, but Tokyo resists that word. Architecture implies permanence, and Tokyo has always been a city of temporary certainties — rebuilt after earthquake, rebuilt after fire, rebuilt after war, rebuilt because rebuilding is a form of memory. What you find here instead is an ongoing negotiation between the radically new and the stubbornly ancient. Walk three blocks in Yanaka and you are in 1952. Walk three more and you are somewhere that has not been named yet.",
      },
      {
        type: "subheading",
        content: "The Grammar of the Quiet",
      },
      {
        type: "paragraph",
        content:
          "My first stop was the Nezu Shrine, not for its famous tunnel of torii gates — though they are extraordinary at dawn, damp-red against a grey sky — but for the garden behind it. A small, unremarkable garden. Irises in spring. Stone lanterns wearing their moss with the patience of old men. I sat on a step and watched a woman arrange a single chrysanthemum in a bamboo vessel and understood, viscerally, what the Japanese mean by ma: the negative space in which meaning lives.",
      },
      {
        type: "pullquote",
        content:
          "In Tokyo's best spaces, less is not a design choice. It is a moral position.",
      },
      {
        type: "paragraph",
        content:
          "From there I went to Omotesando, which is often described as Tokyo's Champs-Élysées, which is like describing the moon as Earth's suburb. The comparison gets the geography right and misses everything else. What Omotesando does — what Kengo Kuma and Tadao Ando and SANAA have done along its ginkgo-lined length — is demonstrate that luxury and restraint are not opposites but complements. The Prada building by Herzog & de Meuron is a lattice of glass bubbles. The TOD'S building by Toyo Ito is a concrete tree. Neither announces itself. Both stop you dead.",
      },
      {
        type: "subheading",
        content: "What Disappears",
      },
      {
        type: "paragraph",
        content:
          "The afternoon brought me to the 21_21 Design Sight in Roppongi, a building that is more underground than above, as if its ambitions were directional rather than vertical. The current exhibition involved a single room, a single material, a single question posed on a white card: what does it mean to hold something? I stayed for forty minutes. I don't know what that says about me.",
      },
      {
        type: "paragraph",
        content:
          "By evening I had arrived at the thing Tokyo does best: the omakase counter. Twelve seats, no menu, no choices, complete trust. The chef's name was Hiroshi and he worked with the concentration of a surgeon and the warmth of someone who has been feeding people his whole life. The fish came from the market that morning. He told me which boats. I ate for two hours and said almost nothing and left understanding more about hospitality than I had from any hotel I'd ever stayed in.",
      },
      {
        type: "paragraph",
        content:
          "The city had taught me what I should have already known: that the places worth travelling to are the ones that give you less to look at and more to feel. Tokyo, at its quietest, is the loudest place I have ever been.",
      },
    ],
  },
  {
    slug: "patagonia-silence",
    title: "The Silent Fjords of Patagonia",
    category: "Wilderness & Nature",
    readTime: "6 min read",
    publishedDate: "March 2025",
    author: "Itinera Editorial",
    imageKey: "wilderness",
    excerpt:
      "To travel to Patagonia in the shoulder season is to make a bet that discomfort will pay dividends. It does. The dividends are extraordinary.",
    body: [
      {
        type: "paragraph",
        content:
          "The boat left Natales at five in the morning, which is to say it left before light, before coffee, before the brain had agreed to be conscious. The crew of five moved around each other with the efficiency of people who have done this in darkness many times. I stood at the stern and watched the lights of the town disappear behind a headland, and then there was only the Última Esperanza Sound — Last Hope, in translation — and the absolute black of a Patagonian winter night.",
      },
      {
        type: "paragraph",
        content:
          "I had come in May, which is the beginning of the southern autumn and the end of the tourist season. The guanacos were still on the hillsides. The pumas were, somewhere, doing whatever pumas do in the dark. Torres del Paine had shed most of its visitors like a tree sheds leaves, and what remained was the park as it actually is: enormous, indifferent, and more beautiful than anything that could be planned.",
      },
      {
        type: "subheading",
        content: "The Logic of the Glacier",
      },
      {
        type: "pullquote",
        content:
          "A glacier makes a sound that is somewhere between a rifle shot and the earth clearing its throat. You feel it in your chest before you hear it with your ears.",
      },
      {
        type: "paragraph",
        content:
          "The Grey Glacier comes at you slowly, which is the only way something that massive can come. It fills the view the way a fact fills a mind — gradually, then all at once. From the boat you can see the blue veining inside the ice, colours that have no names in any language built for surfaces. The guide explained the physics of glacial blue with the patience of someone who has explained it a hundred times and still believes it is worth explaining. The ice absorbs red light and reflects blue. The glacier is blue because it is old. It has had time to become pure.",
      },
      {
        type: "paragraph",
        content:
          "A calf broke off while we watched — a column the size of a building, rotating slowly as it fell, hitting the water with the sound of something final. The wave it produced reached us thirty seconds later. Small, but perceptible. A message from the ice.",
      },
      {
        type: "subheading",
        content: "Before the Light",
      },
      {
        type: "paragraph",
        content:
          "The towers — Las Torres, the three granite spires that give the park its name — are best approached in darkness so that you arrive at the mirador as the sun does. I had been warned about this advice. I had been told it was a cliché, that everyone does it, that the trail is crowded even at 4am. This was true. It was also entirely beside the point. When the first light hit the east face of the central tower and the rock went from grey to amber to that specific pink-gold that exists only at altitude in the early morning, everyone on the mirador stopped talking at the same moment. We stood in the cold and watched, and nobody pretended to be somewhere else.",
      },
      {
        type: "paragraph",
        content:
          "I descended in the full morning, legs aching in the specific way that means you've done something honest with your body. The wind had come up, which is the normal condition of Patagonia — the wind is not weather here, it is climate. A condor was using it to stay perfectly still in the air above the valley, doing nothing with great elegance. I watched it for a while and then walked back to the lodge, where there was coffee and bread and the particular satisfaction of having been somewhere that asked something of you.",
      },
    ],
  },
  {
    slug: "marrakech-riads",
    title: "A Study in Moroccan Riad Design",
    category: "Architecture & Culture",
    readTime: "4 min read",
    publishedDate: "January 2025",
    author: "Itinera Editorial",
    imageKey: "culture",
    excerpt:
      "The riad is built on a single idea: that the most valuable space is interior. Everything worth having is inside.",
    body: [
      {
        type: "paragraph",
        content:
          "You would not know it from the street. That is the entire point. The street-facing wall of a Marrakech riad is often blank plaster, studded with a single door — ornate, yes, but set into nothing, giving away nothing. This is intentional. The riad is a house built around an absence: the central courtyard open to the sky, a rectangle of light and shadow and water that organises everything else around it.",
      },
      {
        type: "paragraph",
        content:
          "I had come to understand riads through the lens of design history, which is a way of saying I had come to understand them wrong. The riad is not a designed object in the sense that a hotel lobby is designed. It is a system of values made physical. The values are: family, discretion, water, geometry, and the quality of staying in.",
      },
      {
        type: "subheading",
        content: "The Mathematics of the Tile",
      },
      {
        type: "pullquote",
        content:
          "Every zellige tile is cut by hand. The imperfection is the point. Perfection is for machines; beauty is for craftsmen.",
      },
      {
        type: "paragraph",
        content:
          "I found the workshop on the third attempt, down an alley that became a narrower alley that became a passage that felt like a mistake. The zellige craftsmen work sitting on the floor, hammer in one hand, chisel in the other, cutting tiles from fired ceramic with a speed that suggests not expertise but something past expertise — a knowledge held in the body rather than the mind. The tiles are small, irregular in their perfection. Assembled, they produce the geometric patterns you have seen on every wall in every medina: stars within stars, hexagons becoming wheels, infinity suggested in a space two feet square.",
      },
      {
        type: "paragraph",
        content:
          "The master craftsman showed me where the pattern began. There is always a single point, he said. Everything else follows from the first decision. I thought about that for a long time.",
      },
      {
        type: "subheading",
        content: "The Logic of Turning Inward",
      },
      {
        type: "paragraph",
        content:
          "My riad had a courtyard with an orange tree and a fountain and a resident cat who occupied the best chair with an authority no interior designer could have planned. In the evenings the family who ran the house would bring mint tea to the courtyard and the sound of the medina — which is continuous, which is the sound of everything happening at once — would arrive softened, filtered by the walls, reduced to something you could choose to hear or not.",
      },
      {
        type: "paragraph",
        content:
          "This is what the riad does. It takes the world and makes it optional. You can go out into the noise and heat and colour of the city — and you should, you must, the medina is one of the greatest human constructions on earth — but you can also come back. The courtyard will be there. The fountain will be running. The cat will have not moved.",
      },
      {
        type: "paragraph",
        content:
          "I spent four days learning the medina's grammar and four evenings forgetting it in the courtyard, and by the end I understood that the riad is not an escape from Morocco. It is the most Moroccan thing of all.",
      },
    ],
  },
  {
    slug: "vietnam-night-trains",
    title: "The Art of Arriving Slowly",
    category: "Travel Philosophy",
    readTime: "5 min read",
    publishedDate: "April 2025",
    author: "Itinera Editorial",
    imageKey: "wilderness",
    excerpt:
      "The overnight train from Hanoi to Da Nang takes 16 hours. That is not a problem. That is the entire point.",
    body: [
      {
        type: "paragraph",
        content:
          "The platform at Hanoi's Ga Ha Noi station smells of diesel and sugar cane and something frying in oil somewhere out of sight. It is 9pm. The train is already at the platform — a succession of pale green carriages with rust along the lower seams, a locomotive that looks as if it has opinions about the journey ahead. I have a soft sleeper berth, which is the phrase for a bunk with a padded surface and a curtain and a small folding table for tea. I am delighted.",
      },
      {
        type: "paragraph",
        content:
          "We live now in an age of frictionless travel. The airport is designed to get you from kerb to gate in the fewest possible minutes. The aircraft is designed to get you from gate to destination in the fewest possible hours. The hotel is designed to produce in you the sense that you have not really moved at all — that the place you are in is essentially the same place you left, with different art in the lobby. This is efficient. It is also, as a travel experience, essentially nothing.",
      },
      {
        type: "subheading",
        content: "What the Train Gives You",
      },
      {
        type: "pullquote",
        content:
          "Travel is not transportation. Transportation is what you do when the travelling is finished.",
      },
      {
        type: "paragraph",
        content:
          "The train gives you something no aircraft can: the geography between two places. Vietnam at night from a train window is a succession of small revelations — the lit doorways of houses, the fires of roadside vendors, the sudden opening of a river valley, the mountains gathering at the edge of visibility. You are not being transported. You are being shown. There is a difference.",
      },
      {
        type: "paragraph",
        content:
          "My compartment companions were a family from Hue — grandmother, mother, two children — who distributed snacks with the generosity of people who understand that sharing food is the same as sharing space. We had no common language beyond the grammar of pointing at things and nodding. The children fell asleep on the grandmother's lap somewhere around Ninh Binh. The mother watched the window with the expression of someone thinking about something she wouldn't say. The train moved south.",
      },
      {
        type: "subheading",
        content: "The Hai Van Pass at Dawn",
      },
      {
        type: "paragraph",
        content:
          "The Hai Van Pass — the Pass of Ocean Clouds, in translation — reaches 500 metres above the South China Sea and forms the climatic divide between northern and southern Vietnam. The train crosses it before dawn, which means you experience it as a gradual lightening of the window rather than a view. Grey becoming silver becoming the first colour. The South China Sea appearing below, then the mountains around it, then Da Nang in the distance, small and lit and arriving.",
      },
      {
        type: "paragraph",
        content:
          "I stepped onto the platform in Da Nang at 6am with the particular clarity that comes from a night spent in motion — not rested exactly, but scoured. The city was waking up around me. Someone was making pho. Someone else was opening a café. A dog was performing its morning operations with great deliberateness. I had arrived, in all the ways that matter.",
      },
    ],
  },
  {
    slug: "lisbon-light",
    title: "What Lisbon Taught Me About Light",
    category: "City Portraits",
    readTime: "5 min read",
    publishedDate: "February 2025",
    author: "Itinera Editorial",
    imageKey: "architecture",
    excerpt:
      "Every city has a light. London's is flat and democratic. Paris has the light of its own mythology. Lisbon's is something else entirely: particular, lateral, almost aggressive in its beauty.",
    body: [
      {
        type: "paragraph",
        content:
          "It finds you, Lisbon's light. You are walking through Alfama in the late afternoon, making your way up another of the seven hills, following an alley that keeps promising to open and keeps not opening, and then it does — a miradouro, a viewpoint, the Tagus below you going gold, the opposite bank in the last full sun, the city arranged around you in its irregular Moorish geography — and the light is doing something to the walls that no photographer has ever quite captured and no painter has quite gotten right.",
      },
      {
        type: "paragraph",
        content:
          "The Portuguese have a word for it: saudade. It means something like longing for a thing you cannot name, or the beauty of absence, or the sweetness of loss. The light is made of it. The fado music — which you will hear coming from somewhere every evening, low and certain and bereft in the way of something that has always been bereft — is made of it too. Lisbon is a city that has had time to understand what it is nostalgic for.",
      },
      {
        type: "subheading",
        content: "The Azulejos",
      },
      {
        type: "pullquote",
        content:
          "The tiles are everywhere: on church facades, on railway stations, on the sides of ordinary apartment buildings. They are Portugal's autobiography, written in blue and white.",
      },
      {
        type: "paragraph",
        content:
          "The National Tile Museum is housed in a 16th-century convent, which is either ironic or appropriate depending on your view of religion and decoration. The collection spans five centuries of azulejo production — from the Moorish geometric patterns brought from North Africa to the Baroque excess of the 18th century to the art nouveau panels of the early 20th. The most extraordinary piece is a panoramic tile depiction of Lisbon before the 1755 earthquake, when the city was different, when the Praça do Comércio was lined with palaces that no longer exist. The earthquake was followed by a tsunami and then a fire. The city was rebuilt in three years. The tiles survived.",
      },
      {
        type: "subheading",
        content: "The Fado Hour",
      },
      {
        type: "paragraph",
        content:
          "I went to a fado house in Mouraria — the Moorish quarter, the birthplace of fado, where the music is said to have arrived with the sailors' longing for home. The room was small, the tables close together. The fadista came on without introduction and sang for forty minutes and said nothing between songs. She had the face of someone who had decided that performance and sincerity were the same thing. The Portuguese couple beside me was crying by the third song. I wasn't, but I understood why they were.",
      },
      {
        type: "paragraph",
        content:
          "Lisbon is a city of what remains. The Alfama survived the earthquake because it was built on rock. The trams are 1930s stock still running their original routes. The pastelaria on the corner has been there since 1885 and sells the same pastéis de nata it has always sold. The city does not mistake what is old for what is valuable. It understands that some things have earned their continuation.",
      },
      {
        type: "paragraph",
        content:
          "I left on a morning when the Tagus was running silver and the tram was going past on its usual schedule and the light was doing its usual extraordinary thing to the walls. I had learned nothing about Lisbon that Lisbon doesn't offer freely to anyone who takes the time to look. That, I think, is what the best cities do.",
      },
    ],
  },
  {
    slug: "sahara-dawn",
    title: "A Weekend at the Edge of the Sahara",
    category: "Wilderness & Nature",
    readTime: "4 min read",
    publishedDate: "December 2024",
    author: "Itinera Editorial",
    imageKey: "culture",
    excerpt:
      "The dunes of Erg Chebbi rise 150 metres from flat desert. Standing at the top, you understand why every religion that matters was born in this kind of landscape.",
    body: [
      {
        type: "paragraph",
        content:
          "The road from Erfoud to Merzouga crosses a flat, rocky hammada — the pavement desert, nothing growing, nothing moving, the heat sitting on it like a presence. And then, without preamble, there are dunes. The Erg Chebbi begins as a suggestion at the horizon and becomes, in twenty minutes of driving, an extraordinary fact: a sea of sand 50 kilometres long and 5 kilometres wide, the highest peaks at 150 metres, the colour varying by minute — apricot, rose, amber, the deep ochre of old honey.",
      },
      {
        type: "paragraph",
        content:
          "I arrived in the late afternoon, which is the correct time to arrive, because the dunes in the last sun are doing something that can only be described as showing off. The shadows are precise and long. The gradations of colour between sunlit and shaded slope are the kind of thing that makes you reach for your phone and then put it away again, because no phone will help you here. You just have to look.",
      },
      {
        type: "subheading",
        content: "The Camp",
      },
      {
        type: "paragraph",
        content:
          "The luxury camp was twenty minutes by camel from the nearest road, which felt exactly right. The tent had a real bed, clean sheets, a rug, lanterns. There was no electricity after ten o'clock. The Sahara at night is very dark, which turns out to mean it is very lit — the Milky Way is not a metaphor out here, not a faint suggestion visible between the light pollution. It is a structure. It fills the sky with a density that makes you realise you have spent your whole life looking at a partial version of it.",
      },
      {
        type: "pullquote",
        content:
          "The Sahara at night is a lesson in what we have built over. Every city is a dimming.",
      },
      {
        type: "paragraph",
        content:
          "Dinner was served by lantern light: harira soup, mechoui lamb cooked slowly in the earth, preserved lemon and olive salad, the kind of bread that requires no butter because it is already perfect. Gnawa musicians played until midnight, the guembri bass lute and the iron castanets creating a rhythm that is not like other music — it does not build toward something, it circles, it persists, it works on you the way long travel works on you, slowly and from underneath.",
      },
      {
        type: "subheading",
        content: "The First Light",
      },
      {
        type: "paragraph",
        content:
          "The guide woke me at five-thirty. I dressed in the dark and climbed onto a camel that was sitting, reluctantly, waiting. We crossed the dark sand in single file, the guide ahead, me following, the stars still overhead, the camp disappearing behind the first dune. The ride to the peak took forty minutes. The camel moved with the swaying certainty of something that has done this ten thousand times.",
      },
      {
        type: "paragraph",
        content:
          "We watched from the summit as the sky paled and the dunes changed colour beneath us — grey becoming pink becoming gold becoming the full morning — and I thought about how many people have watched this specific event from this specific desert and felt this specific thing, which is small and grateful and strangely certain. The Sahara is very old. It has seen everyone who needed seeing. It doesn't need to impress you. It just continues, as it has always continued, entirely indifferent, entirely magnificent.",
      },
    ],
  },
];
