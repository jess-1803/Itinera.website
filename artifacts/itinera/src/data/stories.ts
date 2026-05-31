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
          "In Tokyo, the spaces between buildings are as considered as the buildings themselves. Emptiness here is not absence — it is presence, carefully held.",
      },
      {
        type: "paragraph",
        content:
          "From Yanaka I walked south through Ueno, past the national museums closed at that hour, down into Akihabara — a useful antidote to tranquillity, walls of blinking electronics and anime merchandise — and then into the Kanda district, where a stretch of secondhand bookshops called Jimbocho has been quietly outlasting the digital age for more than a century.",
      },
      {
        type: "subheading",
        content: "Omotesando: Architecture as Performance",
      },
      {
        type: "paragraph",
        content:
          "The afternoon belonged to Omotesando. This is where Tokyo puts its architecture on parade: Herzog & de Meuron's Prada building in its diamond-paned glass, Toyo Ito's Tod's with its tree-column facade reading like an abstract print, Kengo Kuma's Nezu Museum tucked behind a bamboo screen at the boulevard's eastern end. Each building is a statement. Together they form something rarer: an argument about what a city can be.",
      },
      {
        type: "paragraph",
        content:
          "I lingered longest at the Nezu Museum. Kuma designed it as a disappearing act — the building recedes behind its bamboo, the entrance corridor narrows until you feel yourself exhaling without knowing why, and then the garden opens behind the galleries and you are standing in Edo-period silence with the city entirely gone. This is the magic trick Tokyo's best architects have always known: the city's noise makes the quiet louder.",
      },
      {
        type: "subheading",
        content: "The Second Evening",
      },
      {
        type: "paragraph",
        content:
          "Dinner, both nights, at counters. A ramen bar in Golden Gai so narrow that brushing past someone requires a kind of agreed-upon choreography. An omakase counter in Ginza where the chef worked with the focused quiet of a calligrapher, eight courses across two hours, each plate a composition more than a meal. The bill was extravagant. It was worth every cent.",
      },
      {
        type: "paragraph",
        content:
          "On my final morning I went back to the Nezu Shrine. The light was the same oblique grey. The woman with the chrysanthemum was gone. A single bird was doing something intricate in a pine tree. Tokyo is a city that will overwhelm you if you let it. The secret — and it feels like a secret worth protecting — is that it will also ask you, very quietly, to be still.",
      },
    ],
  },
  {
    slug: "patagonia-fjords",
    title: "The Silent Fjords of Patagonia",
    category: "Wilderness",
    readTime: "8 min read",
    publishedDate: "March 2025",
    author: "Itinera Editorial",
    imageKey: "wilderness",
    excerpt:
      "At the end of the world, silence is not the absence of sound. It is a presence — dense, physical, and strangely companionable.",
    body: [
      {
        type: "paragraph",
        content:
          "The Patagonian wind has no manners. It arrives without warning, from directions that do not appear on compasses, and when it hits you — truly hits you, at the crest of a ridge above Lago Grey — it is not weather but argument. It disagrees with your presence. It would prefer you elsewhere. You stay anyway, because behind you is a glacier the colour of antifreeze and ahead of you is nothing but sky and it is the most alive you have felt in years.",
      },
      {
        type: "paragraph",
        content:
          "I had come to Torres del Paine in shoulder season, late April, when the summer crowds have gone and the park begins to reassert itself. The tourist infrastructure remains — refugios still serving their leaden bread and instant coffee, the same weatherproof gear drying on the same communal lines — but the trails are yours. You walk for six hours and the only other human you see is a ranger on horseback, far below, working with the unhurried economy of someone who has long since made peace with the landscape.",
      },
      {
        type: "subheading",
        content: "The Geography of the Extreme",
      },
      {
        type: "paragraph",
        content:
          "Patagonia is not a single place. It is a condition. The region spreads across the bottom quarter of South America — Chilean and Argentine in equal parts, if you ask the maps, though the land itself seems indifferent to the distinction. To the west, the channels: a labyrinth of fjords and islands so complex that the Spanish spent decades trying to chart them and gave up twice. To the east, the steppe: flat, pale, merciless, stretching to the Atlantic without apology. Between them, the mountains. The Andes here lose their composure and become something feverish — granite towers, ice fields, valleys carved by glaciers that are retreating now at speeds that cannot be comfortable to contemplate.",
      },
      {
        type: "pullquote",
        content:
          "The glacier calves with a sound like a rifle shot, and the berg rolls in the water for a long, slow moment before settling. Then the silence returns, heavier than before.",
      },
      {
        type: "paragraph",
        content:
          "I spent the second day on the water, in a zodiac out of Puerto Natales, moving through the Última Esperanza Sound — Last Hope Sound, as the maps translate it, a name that tells you exactly what the early explorers were feeling. The channel narrows as you move north, the mountains press closer, and the Balmaceda Glacier appears around a bend as a white wall, cracked and luminous, descending to the water's edge. The guide cut the engine and we drifted. The glacier calved twice while we watched — a rifle crack, a slow plunge, the sudden icebergs glowing turquoise in the dark water.",
      },
      {
        type: "subheading",
        content: "Silence as Landscape",
      },
      {
        type: "paragraph",
        content:
          "People who have not been here imagine Patagonia as silent. It is not. The wind is constant and sometimes deafening. Condors have an extraordinary wingspan and cut the air with an audible presence. The grass of the steppe is always moving, always whispering. But these are sounds without human origin, and in the absence of traffic and voices and the low electrical hum of cities, they register differently — as part of the landscape rather than as noise imposed upon it.",
      },
      {
        type: "paragraph",
        content:
          "This is what people mean, I think, when they talk about the silence of wild places. It is not acoustic. It is the silence of a place that does not know you are there and is not performing for you. The mountains were here before the word Patagonia existed. The glacier was here before the continent had its current shape. You walk across this land with a full and clarifying awareness that your presence is strictly temporary and entirely optional.",
      },
      {
        type: "subheading",
        content: "The Last Day",
      },
      {
        type: "paragraph",
        content:
          "My final morning in the park, I climbed the Mirador Las Torres before dawn. It takes two and a half hours from the base camp in the dark, with a headlamp and a cold that is academic at first and then suddenly personal. At the top, the three granite towers of the Paine Massif stand over a lake of glacial melt, and in the grey pre-dawn they are shapes more than things — black against black, impossible scale.",
      },
      {
        type: "paragraph",
        content:
          "Then the light comes. It comes from behind you, from the east, and it hits the towers first at their peaks, turns them briefly orange, then pink, then the specific shade of pink that exists only at altitude in the last minutes before full daylight. The colour lasts perhaps four minutes. Around me, a dozen other people who had also climbed in the dark were completely silent. No phones raised. No words. We stood in the cold and watched the light happen to the rock and felt the specific gratitude of having arrived at the right place at the right time in a world that did not require our presence but somehow accommodated it anyway.",
      },
    ],
  },
  {
    slug: "moroccan-riad-design",
    title: "A Study in Moroccan Riad Design",
    category: "Culture",
    readTime: "6 min read",
    publishedDate: "February 2025",
    author: "Itinera Editorial",
    imageKey: "culture",
    excerpt:
      "The riad turns its back on the street. Its windows face inward, its beauty is private, and its logic is the logic of the courtyard: everything worth having is at the centre.",
    body: [
      {
        type: "paragraph",
        content:
          "From the street, it could be a wall. Blank plaster, sun-bleached to the colour of old bone, a wooden door studded with iron nails arranged in patterns that may or may not be significant. No windows. No number. No indication, to a stranger, that anything of consequence lies within. This is by design. The riad has always been a building that protects itself through anonymity — a domestic philosophy that the medinas of Morocco have practiced for centuries and that the modern world is only now beginning to appreciate.",
      },
      {
        type: "paragraph",
        content:
          "I had been given the address of a riad in Marrakech's northern medina by someone who described it, with characteristic understatement, as 'comfortable.' I spent ten minutes walking in circles in the Bab Doukkala neighbourhood before I understood that the building I had passed twice was, in fact, my destination. The owner, a Frenchwoman who had spent eleven years restoring it, answered the door in paint-stained overalls and led me through an entrance corridor — narrow, turning twice, designed to prevent the gaze from penetrating the interior — and into the courtyard.",
      },
      {
        type: "pullquote",
        content:
          "The riad is an argument that privacy is not isolation. You turn inward not to shut the world out, but to create a world worth being in.",
      },
      {
        type: "subheading",
        content: "The Courtyard as Centre of the Universe",
      },
      {
        type: "paragraph",
        content:
          "The central courtyard of a riad is called the wust ed-dar — the middle of the house. This is accurate in both the physical and philosophical sense. The rooms of the house face inward, their doors and windows opening onto the courtyard rather than the street. The light comes down from the open sky above. In traditional riads, a fountain at the courtyard's centre circulates water that cools the air through evaporation — a technology of extraordinary elegance that has been working for a thousand years without requiring a single mechanical component.",
      },
      {
        type: "paragraph",
        content:
          "The one I was standing in had a fountain of carved marble, its basin barely larger than a bathtub. Orange trees in large ceramic pots stood at each corner of the courtyard, heavy with fruit that would not be harvested until December. The floor was zellige — the hand-cut geometric tilework for which Moroccan craftsmen are still among the most sought-after in the world — in patterns of navy and white that seemed simultaneously mathematical and organic, like something grown rather than made.",
      },
      {
        type: "subheading",
        content: "The Craftsmen of the Medina",
      },
      {
        type: "paragraph",
        content:
          "The owner, whose name was Colette, spent two afternoons walking me through the medina's craft districts. This is not the tourist route — not the carpet sellers of Djemaa el-Fna, not the leather tanneries where guides lead you to rooftop terraces with sprigs of mint to hold against your nose. These were the working workshops of the men who made the buildings.",
      },
      {
        type: "paragraph",
        content:
          "In one alley, four men were laying a zellige floor in a riad under restoration. The tiles — each piece cut by hand with a hammer and a chisel called a menkach — were arranged in a pattern that required, Colette explained, a full week of calculation before the first tile could be placed. The master craftsman, a man of perhaps sixty who did not look up from his work when we entered, was operating from a drawing that existed only in his memory. The apprentice beside him was seventeen. The tradition was being transmitted in real time, tile by tile, in a room no tourist would ever see.",
      },
      {
        type: "subheading",
        content: "The Philosophy of Turning Inward",
      },
      {
        type: "paragraph",
        content:
          "What the riad teaches — if you spend enough time in one, if you let the logic of it settle into you — is something about attention. The building asks you to look at what is close rather than what is distant. Its beauty is not panoramic but intimate: the way the morning light moves across the zellige floor, the way the fountain sound changes as the day heats and expands the courtyard's acoustics, the weight of a cedar door, the feel of cool plaster under a palm pressed flat against it.",
      },
      {
        type: "paragraph",
        content:
          "In a world organized entirely around distraction — around the pull toward the next thing, the wider view, the louder experience — there is something almost corrective about a house that has been designed, for ten centuries, to make you stay where you are and notice what is already there. On my last evening in Marrakech, I sat in the courtyard until the muezzin call rolled over the medina from four directions at once, the prayers overlapping and combining in the warm air, and the orange trees held perfectly still, and the fountain went on circulating its unremarkable water, and I understood, for a moment, exactly why the riad has its windows facing in.",
      },
    ],
  },
];
