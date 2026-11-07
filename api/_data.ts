import type { Character, MythologyInfo } from './_types.js'

export const source = "https://godofwar.fandom.com/api.php"

export const mythologies: MythologyInfo[] = [
  {
    "id": "griega",
    "realm": "Mount Olympus",
    "nativeName": null,
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/96/MountOlympus.jpg/revision/latest/scale-to-width-down/608?cb=20230210111209",
    "about": "Mount Olympus was the famed home of the Olympian Gods and the sacred mountain from where they ruled over all of Greece. Olympus emerged from the depths of the Underworld following the Titanomachy and became the symbol of the new might and opulence of who would become known as the Olympians. The mountain was a sanctuary beyond the reach of all but the gods themselves and only those who were invited could have the honor of setting foot in this golden place.",
    "characterCount": 50,
    "es": {
      "realm": "Monte Olimpo",
      "about": "El monte Olimpo fue el célebre hogar de los dioses olímpicos y la montaña sagrada desde la que gobernaban toda Grecia. El Olimpo surgió de las profundidades del Inframundo tras la Titanomaquia y se convirtió en el símbolo del nuevo poder y la opulencia de quienes llegarían a ser conocidos como los olímpicos. La montaña era un santuario fuera del alcance de todos, salvo de los propios dioses, y solo quienes eran invitados tenían el honor de pisar ese lugar dorado."
    }
  },
  {
    "id": "nordica",
    "realm": "Nine Realms",
    "nativeName": null,
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/92/Nine_realms_edited.png/revision/latest/scale-to-width-down/900?cb=20230110054220",
    "about": "The Norse World, also known as the Nine Realms to its inhabitants and the Northlands to foreigners, is the world of the Norse Gods and other races that exist along the branches of the World Tree, weaving them together to form the Norse World. It includes the nine realms (Midgard, Alfheim, Asgard, Vanaheim, Niflheim, Muspelheim, Helheim, Svartalfheim, and Jotunheim), and the Realm Between Realms, the realm which serves as an \"in-between space\" between the nine.",
    "characterCount": 190,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "El mundo nórdico, conocido como los Nueve Reinos por sus habitantes y como las Tierras del Norte por los extranjeros, es el mundo de los dioses nórdicos y de las demás razas que existen a lo largo de las ramas del Árbol del Mundo, que los entrelaza para formar el mundo nórdico. Incluye los nueve reinos (Midgard, Alfheim, Asgard, Vanaheim, Niflheim, Muspelheim, Helheim, Svartalfheim y Jötunheim) y el Reino entre Reinos, que funciona como un \"espacio intermedio\" entre los nueve."
    }
  }
]

export const characters: Character[] = [
  {
    "id": 1,
    "slug": "kratos",
    "name": "Kratos",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Κράτος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/b/bc/Kratos_Greek_Era3.jpg/revision/latest?cb=20230118133505",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God (currently)",
      "Demigod (originally)"
    ],
    "aliases": [
      "God of War/Stríðsguð (ᛊᛏᚱᛁᚦᛊᚷᚢᛞ) (in Gróa's shrine)",
      "Cruel Striker/Fárbauti (ᚠᚨᚱᛒᚨᚢᛏᛁ) (in Loki's shrine and by Verðandi)",
      "Marked Warrior",
      "Fallen God",
      "The Champion/Slave of the Gods",
      "Slayer of the Gods/God-Killer",
      "Oathbreaker (by the Furies)",
      "Foreign God (by the Norse Gods)",
      "Exiled God/Útlægr Guð (Soundtrack)",
      "Shield-Bearer/ΦΕΡ'ΑΣΠΙ (Soundtrack)",
      "Servant/Champion/Fist of Ares (formerly)",
      "Slayer of Ares",
      "Death, the Destroyer of Worlds (by the Grave Digger)",
      "Sinker of Atlantis",
      "Ashen God",
      "Paladin of Athena",
      "Grumbles (by Laufey)",
      "Destroyer of Fate (by Verðandi)",
      "Bringer of War (by Verðandi)",
      "Weapon of the Gods (by Verðandi)"
    ],
    "appearsIn": [
      "God of War Sons of Sparta",
      "God of War: Ascension",
      "God of War: Chains of Olympus",
      "God of War",
      "God of War: Ghost of Sparta",
      "God of War II",
      "God of War III",
      "God of War (2018)",
      "God of War Ragnarök",
      "God of War Ragnarök: Valhalla",
      "God of War (DC Comics)",
      "God of War: Betrayal",
      "God of War: Fallen God",
      "Soulcalibur: Broken Destiny",
      "Mortal Kombat (2011)",
      "PlayStation All-Stars Battle Royale",
      "Shovel Knight: Treasure Trove",
      "The Lost Pages of Norse Myth",
      "God of War (Dark Horse Comics)",
      "God of War: A Call from the Wilds",
      "God of War: Mimir’s Vision",
      "God of War: Lore and Legends",
      "Lúnda's Workshop Notes",
      "God of War: The Official Cookbook of the Nine Realms",
      "God of War Laufey"
    ],
    "about": "Kratos (Greek: Κράτος), also known as Fárbauti (Nordic: ᚠᚨᚱᛒᚨᚢᛏᛁ), the God of War/Stríðsguð (Nordic: ᛊᛏᚱᛁᚦᛊᚷᚢᛞ) is the main and titular protagonist of the God of War series. He is a demigod son of his father Zeus and mother Callisto, as well as a brother of Deimos. Kratos is also the father of Calliope and Atreus, and was married to Lysandra and Laufey.",
    "quote": "What can I say to you? I remember how it felt to take that throne. All that it meant. And all that it did not. A god of war… a god of pain. Of suffering. Of destruction. The Norns said I chase a redemption that I know I can never deserve. What does that make me? God of fools. A god of… Hope. ‘When all else is lost…’ You lost everything. And everyone. And you became… There is no forgiving you. You chose!… I chose. What now? Should I, this same man, should I sit? Take? Proclaim? Lead? Place myself in service? In service. Should I… lose everything and everyone… will there still be enough left inside so that I do not become you? I do not know. But I have hope. You are cruel, and arrogant, and selfish. But… you are more than that. You have always been more than what others saw. You are more than that. –Kratos confronting his younger self in God of War Ragnarök: Valhalla",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Kratos (griego: Κράτος), también conocido como Fárbauti (rúnico: ᚠᚨᚱᛒᚨᚢᛏᛁ), el Dios de la Guerra/Stríðsguð (rúnico: ᛊᛏᚱᛁᚦᛊᚷᚢᛞ), es el protagonista principal y titular de la saga God of War. Es un semidiós, hijo de su padre Zeus y de su madre Calisto, además de hermano de Deimos. Kratos también es el padre de Calliope y Atreus, y estuvo casado con Lysandra y con Laufey.",
      "quote": "¿Qué puedo decirte? Recuerdo lo que se sentía al tomar ese trono. Todo lo que significaba. Y todo lo que no. Un dios de la guerra… un dios del dolor. Del sufrimiento. De la destrucción. Las nornas dijeron que persigo una redención que sé que nunca podré merecer. ¿En qué me convierte eso? Dios de los necios. Un dios de… la esperanza. ‘Cuando todo lo demás está perdido…’ Lo perdiste todo. Y a todos. Y te convertiste en… No hay perdón para ti. ¡Tú elegiste!… Yo elegí. ¿Y ahora qué? ¿Debería yo, este mismo hombre, debería sentarme? ¿Tomar? ¿Proclamar? ¿Liderar? ¿Ponerme al servicio? Al servicio. Si yo… lo perdiera todo y a todos… ¿quedaría aún suficiente dentro de mí para no convertirme en ti? No lo sé. Pero tengo esperanza. Eres cruel, y arrogante, y egoísta. Pero… eres más que eso. Siempre has sido más de lo que otros veían. Eres más que eso. –Kratos enfrentándose a su yo más joven en God of War Ragnarök: Valhalla",
      "species": [
        "Dios (actualmente)",
        "Semidiós (originalmente)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Dios de la Guerra/Stríðsguð (ᛊᛏᚱᛁᚦᛊᚷᚢᛞ) (en el santuario de Gróa)",
        "Golpeador Cruel/Fárbauti (ᚠᚨᚱᛒᚨᚢᛏᛁ) (en el santuario de Loki y según Verðandi)",
        "Guerrero Marcado",
        "Dios Caído",
        "El Campeón/Esclavo de los Dioses",
        "Asesino de Dioses/Matadioses",
        "Perjuro (según las Furias)",
        "Dios Extranjero (según los dioses nórdicos)",
        "Dios Exiliado/Útlægr Guð (banda sonora)",
        "Portador del Escudo/ΦΕΡ'ΑΣΠΙ (banda sonora)",
        "Siervo/Campeón/Puño de Ares (antes)",
        "Asesino de Ares",
        "La Muerte, Destructora de Mundos (según el Sepulturero)",
        "Hundidor de la Atlántida",
        "Dios Ceniciento",
        "Paladín de Atenea",
        "Gruñón (según Laufey)",
        "Destructor del Destino (según Verðandi)",
        "Portador de la Guerra (según Verðandi)",
        "Arma de los Dioses (según Verðandi)"
      ]
    }
  },
  {
    "id": 240,
    "slug": "kratos-norse",
    "name": "Kratos",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚲᚱᚨᛏᛟᛊ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/e/e9/Kratos-_GOW_Ragnarok.png/revision/latest?cb=20230115190836",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God (currently)",
      "Demigod (originally)"
    ],
    "aliases": [
      "God of War/Stríðsguð (ᛊᛏᚱᛁᚦᛊᚷᚢᛞ) (in Gróa's shrine)",
      "Cruel Striker/Fárbauti (ᚠᚨᚱᛒᚨᚢᛏᛁ) (in Loki's shrine and by Verðandi)",
      "Marked Warrior",
      "Fallen God",
      "The Champion/Slave of the Gods",
      "Slayer of the Gods/God-Killer",
      "Oathbreaker (by the Furies)",
      "Foreign God (by the Norse Gods)",
      "Exiled God/Útlægr Guð (Soundtrack)",
      "Shield-Bearer/ΦΕΡ'ΑΣΠΙ (Soundtrack)",
      "Servant/Champion/Fist of Ares (formerly)",
      "Slayer of Ares",
      "Death, the Destroyer of Worlds (by the Grave Digger)",
      "Sinker of Atlantis",
      "Ashen God",
      "Paladin of Athena",
      "Grumbles (by Laufey)",
      "Destroyer of Fate (by Verðandi)",
      "Bringer of War (by Verðandi)",
      "Weapon of the Gods (by Verðandi)"
    ],
    "appearsIn": [
      "God of War Sons of Sparta",
      "God of War: Ascension",
      "God of War: Chains of Olympus",
      "God of War",
      "God of War: Ghost of Sparta",
      "God of War II",
      "God of War III",
      "God of War (2018)",
      "God of War Ragnarök",
      "God of War Ragnarök: Valhalla",
      "God of War (DC Comics)",
      "God of War: Betrayal",
      "God of War: Fallen God",
      "Soulcalibur: Broken Destiny",
      "Mortal Kombat (2011)",
      "PlayStation All-Stars Battle Royale",
      "Shovel Knight: Treasure Trove",
      "The Lost Pages of Norse Myth",
      "God of War (Dark Horse Comics)",
      "God of War: A Call from the Wilds",
      "God of War: Mimir’s Vision",
      "God of War: Lore and Legends",
      "Lúnda's Workshop Notes",
      "God of War: The Official Cookbook of the Nine Realms",
      "God of War Laufey"
    ],
    "about": "Kratos (Greek: Κράτος), also known as Fárbauti (Nordic: ᚠᚨᚱᛒᚨᚢᛏᛁ), the God of War/Stríðsguð (Nordic: ᛊᛏᚱᛁᚦᛊᚷᚢᛞ) is the main and titular protagonist of the God of War series. He is a demigod son of his father Zeus and mother Callisto, as well as a brother of Deimos. Kratos is also the father of Calliope and Atreus, and was married to Lysandra and Laufey.",
    "quote": "What can I say to you? I remember how it felt to take that throne. All that it meant. And all that it did not. A god of war… a god of pain. Of suffering. Of destruction. The Norns said I chase a redemption that I know I can never deserve. What does that make me? God of fools. A god of… Hope. ‘When all else is lost…’ You lost everything. And everyone. And you became… There is no forgiving you. You chose!… I chose. What now? Should I, this same man, should I sit? Take? Proclaim? Lead? Place myself in service? In service. Should I… lose everything and everyone… will there still be enough left inside so that I do not become you? I do not know. But I have hope. You are cruel, and arrogant, and selfish. But… you are more than that. You have always been more than what others saw. You are more than that. –Kratos confronting his younger self in God of War Ragnarök: Valhalla",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Kratos (griego: Κράτος), también conocido como Fárbauti (rúnico: ᚠᚨᚱᛒᚨᚢᛏᛁ), el Dios de la Guerra/Stríðsguð (rúnico: ᛊᛏᚱᛁᚦᛊᚷᚢᛞ), es el protagonista principal y titular de la saga God of War. Es un semidiós, hijo de su padre Zeus y de su madre Calisto, además de hermano de Deimos. Kratos también es el padre de Calliope y Atreus, y estuvo casado con Lysandra y con Laufey.",
      "quote": "¿Qué puedo decirte? Recuerdo lo que se sentía al tomar ese trono. Todo lo que significaba. Y todo lo que no. Un dios de la guerra… un dios del dolor. Del sufrimiento. De la destrucción. Las nornas dijeron que persigo una redención que sé que nunca podré merecer. ¿En qué me convierte eso? Dios de los necios. Un dios de… la esperanza. ‘Cuando todo lo demás está perdido…’ Lo perdiste todo. Y a todos. Y te convertiste en… No hay perdón para ti. ¡Tú elegiste!… Yo elegí. ¿Y ahora qué? ¿Debería yo, este mismo hombre, debería sentarme? ¿Tomar? ¿Proclamar? ¿Liderar? ¿Ponerme al servicio? Al servicio. Si yo… lo perdiera todo y a todos… ¿quedaría aún suficiente dentro de mí para no convertirme en ti? No lo sé. Pero tengo esperanza. Eres cruel, y arrogante, y egoísta. Pero… eres más que eso. Siempre has sido más de lo que otros veían. Eres más que eso. –Kratos enfrentándose a su yo más joven en God of War Ragnarök: Valhalla",
      "species": [
        "Dios (actualmente)",
        "Semidiós (originalmente)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Dios de la Guerra/Stríðsguð (ᛊᛏᚱᛁᚦᛊᚷᚢᛞ) (en el santuario de Gróa)",
        "Golpeador Cruel/Fárbauti (ᚠᚨᚱᛒᚨᚢᛏᛁ) (en el santuario de Loki y según Verðandi)",
        "Guerrero Marcado",
        "Dios Caído",
        "El Campeón/Esclavo de los Dioses",
        "Asesino de Dioses/Matadioses",
        "Perjuro (según las Furias)",
        "Dios Extranjero (según los dioses nórdicos)",
        "Dios Exiliado/Útlægr Guð (banda sonora)",
        "Portador del Escudo/ΦΕΡ'ΑΣΠΙ (banda sonora)",
        "Siervo/Campeón/Puño de Ares (antes)",
        "Asesino de Ares",
        "La Muerte, Destructora de Mundos (según el Sepulturero)",
        "Hundidor de la Atlántida",
        "Dios Ceniciento",
        "Paladín de Atenea",
        "Gruñón (según Laufey)",
        "Destructor del Destino (según Verðandi)",
        "Portador de la Guerra (según Verðandi)",
        "Arma de los Dioses (según Verðandi)"
      ]
    }
  },
  {
    "id": 2,
    "slug": "atreus",
    "name": "Atreus",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛚᛟᚲᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/a/a8/Capture_d%E2%80%99%C3%A9cran_2023-01-27_%C3%A0_15.54.20.png/revision/latest/scale-to-width-down/358?cb=20230127152503",
    "voiceActor": "Sunny Suljic",
    "gender": "Male",
    "species": [
      "1/2 Jötunn",
      "1/4 God (Greek descent)",
      "1/4 Mortal"
    ],
    "aliases": [
      "Loki Laufeyson",
      "Wolf/Úlfur",
      "Bear/Björn",
      "The Champion/Sa Kappi (ᛊᚨ ᚲᚨᛈᛈᛁ) (by the Jötnar)",
      "Champ (by Angrboda)",
      "Boy (by Kratos, Odin and Thor)",
      "Son (by Kratos)",
      "Sac-Seed (by Brok)",
      "Little Brother (by Mimir)",
      "Lad (by Mimir)",
      "Laddie (by Mimir)",
      "Small One (by Modi)",
      "Stillborn Lamb (by Modi)",
      "Kid (by Modi)",
      "Asshole (by Modi)",
      "Little Turd (by Brok)",
      "Child (by Freya and Hrist)",
      "Son of a Spartan (by Imposter Týr)",
      "Champion (by Imposter Týr)",
      "Tre' (by Sindri)",
      "Lok' (by Sindri)",
      "Young One (by Imposter Týr)",
      "Midgard Giant (by Angrboda)",
      "Junior (by Heimdall)",
      "Half-Breed/Mongrel (by Modi and Heimdall)",
      "Giant Disaster (by Heimdall)",
      "Little Mongrel (by Heimdall)",
      "Little Runt (by Heimdall)",
      "Absolute, Unqualified Moron (by Heimdall)",
      "Jötunn (by Thor and Heimdall)",
      "Kid (by Thor)",
      "Little Trickster (by Odin)",
      "Guest (by Odin)",
      "The Runaway (by Imposter Týr)",
      "Young Man (by Odin)",
      "Breastfed Child/Brjóstbarn (by Einherjar)",
      "Little Kid/Kraki Litla (by Einherjar Captain)",
      "Annoying Pest (by Mist)",
      "Weak Child (by Hrist)",
      "Traitor Child (by Hrist)",
      "Cute Little Squirt (by Lúnda)"
    ],
    "appearsIn": [
      "God of War (2018)",
      "God of War Ragnarök",
      "The Lost Pages of Norse Myth",
      "God of War (Dark Horse Comics)",
      "God of War: A Call from the Wilds",
      "God of War: Mimir’s Vision",
      "God of War - The Official Novelization",
      "God of War: Lore and Legends",
      "Lúnda's Workshop Notes",
      "God of War: The Official Cookbook of the Nine Realms (mentioned only)",
      "God of War Ragnarök: Valhalla (mentioned only)",
      "God of War Laufey",
      "Astro's Playroom",
      "Astro Bot"
    ],
    "about": "Atreus (Greek: Ἀτρεύς) / Loki (Nordic: ᛚᛟᚲᛁ) also known as Loki Laufeyson (Translation: Loki, Son of Laufey), is the Norse God of Mischief and the Champion of the Jötnar. He is the deuteragonist of God of War (2018) and one of the two protagonists of God of War Ragnarök along with Kratos.",
    "quote": "We've got to be more than a bunch of stories with our endings already written. –Loki to Angrboda",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Atreus (griego: Ἀτρεύς) / Loki (rúnico: ᛚᛟᚲᛁ), también conocido como Loki Laufeyson (traducción: Loki, hijo de Laufey), es el dios nórdico de las travesuras y el Campeón de los jötnar. Es el deuteragonista de God of War (2018) y uno de los dos protagonistas de God of War Ragnarök junto con Kratos.",
      "quote": "Tenemos que ser más que un montón de historias con sus finales ya escritos. –Loki a Angrboda",
      "species": [
        "1/2 jötunn",
        "1/4 dios (ascendencia griega)",
        "1/4 mortal"
      ],
      "gender": "Masculino",
      "aliases": [
        "Loki Laufeyson",
        "Lobo/Úlfur",
        "Oso/Björn",
        "El Campeón/Sa Kappi (ᛊᚨ ᚲᚨᛈᛈᛁ) (según los jötnar)",
        "Campeón (según Angrboda)",
        "Chico (según Kratos, Odín y Thor)",
        "Hijo (según Kratos)",
        "Semilla de Saco (según Brok)",
        "Hermanito (según Mimir)",
        "Muchacho (según Mimir)",
        "Muchachito (según Mimir)",
        "Pequeñín (según Modi)",
        "Cordero Nacido Muerto (según Modi)",
        "Niño (según Modi)",
        "Imbécil (según Modi)",
        "Pequeño Mierdita (según Brok)",
        "Niño (según Freya y Hrist)",
        "Hijo de un espartano (según el Týr impostor)",
        "Campeón (según el Týr impostor)",
        "Tre' (según Sindri)",
        "Lok' (según Sindri)",
        "Jovencito (según el Týr impostor)",
        "Gigante de Midgard (según Angrboda)",
        "Junior (según Heimdall)",
        "Mestizo/Chucho (según Modi y Heimdall)",
        "Desastre Gigante (según Heimdall)",
        "Pequeño Chucho (según Heimdall)",
        "Pequeño Enclenque (según Heimdall)",
        "Absoluto e Irremediable Idiota (según Heimdall)",
        "Jötunn (según Thor y Heimdall)",
        "Niño (según Thor)",
        "Pequeño Embaucador (según Odín)",
        "Invitado (según Odín)",
        "El Fugitivo (según el Týr impostor)",
        "Jovencito (según Odín)",
        "Niño de Pecho/Brjóstbarn (según los einherjar)",
        "Niñito/Kraki Litla (según el capitán einherjar)",
        "Plaga Molesta (según Mist)",
        "Niño Débil (según Hrist)",
        "Niño Traidor (según Hrist)",
        "Pequeño Mocoso Adorable (según Lúnda)"
      ]
    }
  },
  {
    "id": 3,
    "slug": "baldur",
    "name": "Baldur",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᚨᛚᛞᚢᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/f/f0/Baldur2.png/revision/latest/scale-to-width-down/479?cb=20230219143256",
    "voiceActor": "Jeremy Davies",
    "gender": "Male",
    "species": [
      "God (1/2 Aesir, 1/2 Vanir)"
    ],
    "aliases": [
      "Baldur Odinson",
      "The Stranger",
      "My Boy (by Freya)",
      "My Dear, Sweet Boy (by Freya)",
      "The Man Who Cannot Be Killed (by Mimir)",
      "Uncle (by Magni and Modi)",
      "Coward (by himself)",
      "Scruffy Fella (by Brok)",
      "Brother (by his brothers)",
      "Best Tracker (by Odin)",
      "My Closer (by Odin)"
    ],
    "appearsIn": [
      "God of War (2018)",
      "God of War Ragnarök (illusion)"
    ],
    "about": "Baldur (Old Norse: Baldr, Nordic: ᛒᚨᛚᛞᚢᚱ), also known as Baldur Odinson (Translation: Baldur, Son of Odin), and also known as the Stranger, was the Norse Aesir God of Light, Peace, Beauty, and Goodness as well as Prince of Asgard. He is a member of the Aesir Royal Family, being son of Odin and Freya, paternal nephew of Vili and Vé, maternal nephew of Freyr, younger half-brother of Thor, Týr, and Heimdall, husband of Nanna, father of Forseti and uncle of Magni, Modi and Thrúd.",
    "quote": "I spent the last 100 years dreaming of this moment. I’ve rehearsed everything I ever wanted to say to you, every word, to make you understand exactly what you stole from me. But now I realize… I don’t need you to understand anything. I don’t need you at all. –Baldur to his mother upon their reunion.",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Baldur (nórdico antiguo: Baldr, rúnico: ᛒᚨᛚᛞᚢᚱ), también conocido como Baldur Odinson (traducción: Baldur, hijo de Odín), y también conocido como el Extraño, fue el dios nórdico Aesir de la luz, la paz, la belleza y la bondad, además de príncipe de Asgard. Es miembro de la familia real Aesir, siendo hijo de Odín y Freya, sobrino por parte de padre de Vili y Vé, sobrino por parte de madre de Freyr, medio hermano menor de Thor, Týr y Heimdall, esposo de Nanna, padre de Forseti y tío de Magni, Modi y Thrúd.",
      "quote": "Pasé los últimos 100 años soñando con este momento. Ensayé todo lo que siempre quise decirte, cada palabra, para hacerte entender exactamente lo que me robaste. Pero ahora me doy cuenta… de que no necesito que entiendas nada. No te necesito en absoluto. –Baldur a su madre en su reencuentro.",
      "species": [
        "Dios (1/2 Aesir, 1/2 Vanir)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Baldur Odinson",
        "El Extraño",
        "Mi Niño (según Freya)",
        "Mi Querido y Dulce Niño (según Freya)",
        "El Hombre que No Puede Morir (según Mimir)",
        "Tío (según Magni y Modi)",
        "Cobarde (según él mismo)",
        "Tipo Desaliñado (según Brok)",
        "Hermano (según sus hermanos)",
        "Mejor Rastreador (según Odín)",
        "Mi Rematador (según Odín)"
      ]
    }
  },
  {
    "id": 4,
    "slug": "freya",
    "name": "Freya",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚠᚱᛖᛁᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/95/Capture_d%E2%80%99%C3%A9cran_2023-01-27_%C3%A0_15.03.43.png/revision/latest/scale-to-width-down/335?cb=20230127142223",
    "voiceActor": "Danielle Bisutti",
    "gender": "Female",
    "species": [
      "Goddess (Vanir)",
      "Valkyrie (formerly)",
      "Shield Maiden"
    ],
    "aliases": [
      "Freya Njördsdottir",
      "Freyja",
      "Frigg",
      "Náð",
      "Vanadís",
      "Witch of the Woods",
      "Falcon",
      "Fálki",
      "Vanadís (Valkyrie form)",
      "Mother (by Baldur)",
      "Selfish Witch (by Baldur)",
      "Woman (by Kratos)",
      "My Queen (by Sigrún)",
      "Your Majesty (by Mimir & Sindri)",
      "Your Goddessness (by Brok)",
      "Very Considerate Goddess (by Mimir)",
      "Master of Magics (by Nornir)",
      "Queen Mistletoe (by Heimdall)",
      "Traitor (by Gná)",
      "The great Healer (by Mari)"
    ],
    "appearsIn": [
      "God of War (2018)",
      "God of War Ragnarök",
      "God of War Ragnarök: Valhalla"
    ],
    "about": "Freya (Old Norse: Freyja, Nordic: ᚠᚱᛖᛁᚨ), also known as Frigg (Old Norse: Frigga, Nordic: ᚠᚱᛁᚷᚷ), Freya Njördsdottir (Translation: Freya, Daughter of Njörd) and Nað (Nordic: ᚾᚨᛞ), is the Vanir Goddess of Love, Beauty, War, Death, Magic, Childhood and Fertility. She is the daughter of Njörd and Nerthus, the older twin sister of Freyr, the ex-wife of Odin, the mother of Baldur, the former step-mother of Thor, Týr, and Heimdall, the mother-in-law of Nanna, and the grandmother of Forseti.",
    "quote": "There's still a part of me that is so... angry. And it'll always be... It'll always be angry. But no. You are not the one who needs to die. I do see that. –Freya to Kratos, forgiving him for Baldur's death",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Freya (nórdico antiguo: Freyja, rúnico: ᚠᚱᛖᛁᚨ), también conocida como Frigg (nórdico antiguo: Frigga, rúnico: ᚠᚱᛁᚷᚷ), Freya Njördsdottir (traducción: Freya, hija de Njörd) y Nað (rúnico: ᚾᚨᛞ), es la diosa Vanir del amor, la belleza, la guerra, la muerte, la magia, la infancia y la fertilidad. Es hija de Njörd y Nerthus, hermana gemela mayor de Freyr, exesposa de Odín, madre de Baldur, antigua madrastra de Thor, Týr y Heimdall, suegra de Nanna y abuela de Forseti.",
      "quote": "Todavía hay una parte de mí que está tan... enojada. Y siempre lo estará... Siempre estará enojada. Pero no. Tú no eres quien debe morir. Eso sí lo veo. –Freya a Kratos, perdonándolo por la muerte de Baldur",
      "species": [
        "Diosa (Vanir)",
        "Valquiria (antes)",
        "Doncella escudera"
      ],
      "gender": "Femenino",
      "aliases": [
        "Freya Njördsdottir",
        "Freyja",
        "Frigg",
        "Náð",
        "Vanadís",
        "Bruja del Bosque",
        "Halcón",
        "Fálki",
        "Vanadís (forma de valquiria)",
        "Madre (según Baldur)",
        "Bruja Egoísta (según Baldur)",
        "Mujer (según Kratos)",
        "Mi Reina (según Sigrún)",
        "Su Majestad (según Mimir y Sindri)",
        "Su Diosidad (según Brok)",
        "Diosa Muy Considerada (según Mimir)",
        "Maestra de las Magias (según las nornas)",
        "Reina Muérdago (según Heimdall)",
        "Traidora (según Gná)",
        "La gran Sanadora (según Mari)"
      ]
    }
  },
  {
    "id": 5,
    "slug": "mimir",
    "name": "Mimir",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛗᛁᛗᛁᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/9c/Mimir_photo_mode_1.png/revision/latest?cb=20180704210814",
    "voiceActor": "Alastair Duncan",
    "gender": "Male",
    "species": [
      "God (Aesir, originally Fae)"
    ],
    "aliases": [
      "Puck",
      "Robin Goodfellow",
      "Hidden Man",
      "Brother (by Kratos)",
      "Head (by Kratos & Atreus)",
      "Silver-Tongued Little Shit (by Odin)",
      "Smartest Head Alive (by Odin)",
      "Old Partner in Crime (by Odin)",
      "Disgruntled Former Employee (by Odin)",
      "Old Goat (by Heimdall and Brok)",
      "Condescending Skull (by Ræb)",
      "Severed Head (by Durlin)",
      "Belt-Boy (by Brok)",
      "Smart Guy (by Brok)",
      "Mimir of the Aesir (by Verðandi)",
      "Counselor to Kings (by Verðandi)",
      "Merry Wanderer of the Wood (by Verðandi)",
      "Robin of the Goodfellows (by Verðandi)",
      "Long-Winded Know-It-All (by himself)",
      "Idjit (by Brok)",
      "Traitor (by Heimdall)",
      "Traitorous head (by Heimdall)",
      "Decapitated Delight (by Ratatoskr)",
      "Most Annoying Man Alive (by Freya)",
      "Half-Blind, Piss-Drunk, Oversexed Liar (by Hildisvíni)",
      "Pig (by Hildisvíni)",
      "Jackass (by himself)",
      "Mimir of the Bifröst Teats (by himself)",
      "Old Friend (by Týr)",
      "Mimir's Head (by the Norns)",
      "Love (by Sigrún)",
      "Sweetheart (by Lúnda)"
    ],
    "appearsIn": [
      "God of War (2018)",
      "God of War Ragnarök",
      "The Lost Pages of Norse Myth (narrator)",
      "God of War: A Call from the Wilds (narrator)",
      "God of War: Mimir’s Vision (narrator)",
      "God of War - The Official Novelization (narrator)",
      "God of War: Lore and Legends",
      "Lúnda's Workshop Notes",
      "God of War: The Official Cookbook of the Nine Realms",
      "God of War Ragnarök: Valhalla"
    ],
    "about": "Mimir (Nordic: ᛗᛁᛗᛁᚱ), formerly known as Puck, is a Celtic fae who became Odin's advisor and the ambassador of the Aesir Gods until Odin imprisoned him for 109 years. After being freed by Kratos and Atreus, he became their ally. He is the tritagonist of God of War (2018) and God of War Ragnarök, and later the deuteragonist of God of War Ragnarök: Valhalla.",
    "quote": "Me? I'm the greatest ambassador to the Gods, the Giants, and all the creatures of the Nine Realms. I know every corner of these lands, every language spoken, every war waged, every deal struck. They call me… Mimir! --smartest man alive, and I have the answer to your every question. –Mimir",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Mimir (rúnico: ᛗᛁᛗᛁᚱ), antes conocido como Puck, es un hada celta que se convirtió en consejero de Odín y embajador de los dioses Aesir hasta que Odín lo encarceló durante 109 años. Tras ser liberado por Kratos y Atreus, se convirtió en su aliado. Es el tritagonista de God of War (2018) y God of War Ragnarök, y más tarde el deuteragonista de God of War Ragnarök: Valhalla.",
      "quote": "¿Yo? Soy el más grande embajador ante los dioses, los gigantes y todas las criaturas de los Nueve Reinos. Conozco cada rincón de estas tierras, cada lengua hablada, cada guerra librada, cada trato cerrado. Me llaman… ¡Mimir! --el hombre más listo del mundo, y tengo la respuesta a cada una de tus preguntas. –Mimir",
      "species": [
        "Dios (Aesir, originalmente hada)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Puck",
        "Robin Goodfellow",
        "Hombre Oculto",
        "Hermano (según Kratos)",
        "Cabeza (según Kratos y Atreus)",
        "Pequeño Cabrón de Lengua de Plata (según Odín)",
        "La Cabeza más Lista del Mundo (según Odín)",
        "Viejo Compinche (según Odín)",
        "Exempleado Resentido (según Odín)",
        "Viejo Cabrón (según Heimdall y Brok)",
        "Calavera Condescendiente (según Ræb)",
        "Cabeza Cercenada (según Durlin)",
        "Chico Cinturón (según Brok)",
        "Sabelotodo (según Brok)",
        "Mimir de los Æsir (según Verðandi)",
        "Consejero de Reyes (según Verðandi)",
        "Alegre Vagabundo del Bosque (según Verðandi)",
        "Robin de los Goodfellow (según Verðandi)",
        "Sabelotodo Parlanchín (según él mismo)",
        "Idiota (según Brok)",
        "Traidor (según Heimdall)",
        "Cabeza traidora (según Heimdall)",
        "Delicia Decapitada (según Ratatoskr)",
        "El Hombre más Molesto del Mundo (según Freya)",
        "Mentiroso Medio Ciego, Borracho Perdido y Calenturiento (según Hildisvíni)",
        "Cerdo (según Hildisvíni)",
        "Burro (según él mismo)",
        "Mimir de las Tetas del Bifröst (según él mismo)",
        "Viejo Amigo (según Týr)",
        "Cabeza de Mimir (según las nornas)",
        "Amor (según Sigrún)",
        "Cariño (según Lúnda)"
      ]
    }
  },
  {
    "id": 6,
    "slug": "laufey",
    "name": "Laufey",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛚᚨᚢᚠᛖᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/f/fd/Laufey_Infobox.jpeg/revision/latest/scale-to-width-down/560?cb=20260603104156",
    "voiceActor": "Deborah Ann Woll",
    "gender": "Female",
    "species": [
      "Jötunn (Frost Giant)"
    ],
    "aliases": [
      "Faye (by Kratos and Sindri)",
      "Mother (by Atreus)",
      "Last Guardian of the Jötnar (by Sindri)",
      "Special woman (by Sindri)",
      "Fair-Haired Woman/Warrior (by Magnus)",
      "Godling (by Begtse)"
    ],
    "appearsIn": [
      "God of War (2018) (Corpse and mentioned only)",
      "God of War Ragnarök",
      "God of War Laufey"
    ],
    "about": "Laufey (Nordic: ᛚᚨᚢᚠᛖᛁ), known by her alias Faye, was a Jötunn warrior of Midgard. She was the second wife of Kratos and the mother of Atreus.",
    "quote": "To grieve deeply is to have loved fully. Open your heart to the world as you opened it to me, and you will find every reason to keep living in it. –Faye to Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Laufey (rúnico: ᛚᚨᚢᚠᛖᛁ), conocida por su alias Faye, fue una guerrera jötunn de Midgard. Fue la segunda esposa de Kratos y la madre de Atreus.",
      "quote": "Llorar profundamente es haber amado plenamente. Abre tu corazón al mundo como me lo abriste a mí, y encontrarás todas las razones para seguir viviendo en él. –Faye a Kratos",
      "species": [
        "Jötunn (gigante de escarcha)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Faye (según Kratos y Sindri)",
        "Madre (según Atreus)",
        "Última Guardiana de los jötnar (según Sindri)",
        "Mujer especial (según Sindri)",
        "Mujer/Guerrera de Cabello Claro (según Magnus)",
        "Diosecilla (según Begtse)"
      ]
    }
  },
  {
    "id": 7,
    "slug": "jormungandr",
    "name": "Jörmungandr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛃᛟᚱᛗᚢᚾᚷᚨᚾᛞᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/6/6f/Midgard_Serpent.png/revision/latest/scale-to-width-down/495?cb=20230202182804",
    "voiceActor": "Mike Niederquell (creature vocals)",
    "gender": "Male",
    "species": [
      "Jötunn (Animal Giant)"
    ],
    "aliases": [
      "Jörmi (by his close friends)",
      "The Big Snake (by Baldur)",
      "The Snake (by Kratos)",
      "The Serpent (by Kratos and Raven Keeper)"
    ],
    "appearsIn": [
      "God of War (2018)",
      "God of War Ragnarök",
      "God of War Ragnarök: Valhalla (mentioned only)"
    ],
    "about": "Jörmungandr (Old Norse: Jǫrmungandr, Nordic: ᛃᛟᚱᛗᚢᚾᚷᚨᚾᛞᚱ), also known as the World Serpent, is a mythical male Jötunn serpent destined to fight Thor come Ragnarök. He becomes an ally of Kratos and Atreus after the pair awaken him from deep slumber within the Lake of Nine.",
    "quote": "He and Thor have a bit of an unpleasant history between them... or they will, anyway. –Atreus and Mimir seeing the World Serpent eating the Statue of Thor.",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Jörmungandr (nórdico antiguo: Jǫrmungandr, rúnico: ᛃᛟᚱᛗᚢᚾᚷᚨᚾᛞᚱ), también conocido como la Serpiente del Mundo, es una mítica serpiente jötunn macho destinada a luchar contra Thor cuando llegue el Ragnarök. Se convierte en aliado de Kratos y Atreus después de que ambos lo despiertan de un profundo sueño en el Lago de los Nueve.",
      "quote": "Él y Thor tienen una historia algo desagradable entre ellos... o la tendrán, en todo caso. –Atreus y Mimir viendo a la Serpiente del Mundo devorar la estatua de Thor.",
      "species": [
        "Jötunn (gigante animal)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Jörmi (según sus amigos cercanos)",
        "La Gran Serpiente (según Baldur)",
        "La Serpiente (según Kratos)",
        "La Serpiente (según Kratos y el Guardián de los Cuervos)"
      ]
    }
  },
  {
    "id": 8,
    "slug": "sindri",
    "name": "Sindri",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᛁᚾᛞᚱᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/b/bb/Sindri2018.png/revision/latest?cb=20240225235738",
    "voiceActor": "Adam J. Harrington",
    "gender": "Male",
    "species": [
      "Dwarf"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018)",
      "God of War Ragnarök",
      "The Lost Pages of Norse Myth",
      "God of War: The Official Novelization",
      "God of War: Lore and Legends",
      "Lúnda's Workshop Notes",
      "God of War: The Official Cookbook of the Nine Realms"
    ],
    "about": "Sindri, also known as Eitri, is a supporting character in both God of War (2018), and God of War Ragnarök. He is introduced as a Dwarf working alongside his brother, Brok. The pair were responsible for forging Thor's hammer, Mjölnir, Kratos' Leviathan Axe, which formerly belonged to Laufey the Just and the Draupnir Spear used to kill Heimdall.",
    "quote": "I gave you everything. My skills, my friendship, my home, my secrets, my treasures...and you just kept taking. And now what have I got? Not even my family. You want sorry? This is what sorry looks like. –Sindri lashing out towards Atreus after Brok's death.",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Sindri, también conocido como Eitri, es un personaje secundario tanto en God of War (2018) como en God of War Ragnarök. Se presenta como un enano que trabaja junto a su hermano, Brok. Ambos fueron los responsables de forjar el martillo de Thor, Mjölnir; el Hacha Leviatán de Kratos, que antes perteneció a Laufey la Justa; y la Lanza Draupnir utilizada para matar a Heimdall.",
      "quote": "Te di todo. Mis habilidades, mi amistad, mi hogar, mis secretos, mis tesoros... y tú solo seguiste tomando. ¿Y ahora qué me queda? Ni siquiera mi familia. ¿Quieres disculpas? Así es como se ven las disculpas. –Sindri arremetiendo contra Atreus tras la muerte de Brok.",
      "species": [
        "Enano"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 9,
    "slug": "brok",
    "name": "Brok",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᚱᛟᚲ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/3/32/Brok_profile.png/revision/latest?cb=20240226000115",
    "voiceActor": "Robert Craighead",
    "gender": "Male",
    "species": [
      "Dwarf"
    ],
    "aliases": [
      "Brokkr",
      "Huldra Brother",
      "The Blue One (by Kratos)",
      "Dwarf (by Kratos)",
      "Obstinate Pighead (by Sindri)",
      "Blabr (by Lúnda)",
      "Azure Vulgarian (by Mimir)",
      "Bampot (by Mimir)",
      "Blue Twat (by Mimir)",
      "A Great Blacksmith (by Kratos)",
      "Friend (by Kratos)",
      "Weird uncle (by Atreus)",
      "Snappy dressers (by Lúnda)",
      "Two-and-only Huldra Bros (by Lúnda)"
    ],
    "appearsIn": [
      "God of War (2018)",
      "God of War Ragnarök",
      "The Lost Pages of Norse Myth",
      "God of War: The Official Novelization",
      "God of War: Lore and Legends",
      "Lúnda's Workshop Notes",
      "God of War: The Official Cookbook of the Nine Realms"
    ],
    "about": "Brok, also known as Brokkr, is a character in God of War (2018). He is a Dwarf, along with his brother Sindri. He and his brother used to work together until a rift between differing views caused the family business to split in two. The pair were responsible for forging Thor's hammer, Mjölnir, and Kratos' axe, Leviathan, which formerly belonged to Laufey.",
    "quote": "The nature of a thing's more important than the form of a thing. –Brok",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Brok, también conocido como Brokkr, es un personaje de God of War (2018). Es un enano, al igual que su hermano Sindri. Él y su hermano solían trabajar juntos hasta que una ruptura por diferencias de opinión hizo que el negocio familiar se dividiera en dos. Ambos fueron los responsables de forjar el martillo de Thor, Mjölnir, y el hacha de Kratos, Leviatán, que antes perteneció a Laufey.",
      "quote": "La naturaleza de una cosa es más importante que su forma. –Brok",
      "species": [
        "Enano"
      ],
      "gender": "Masculino",
      "aliases": [
        "Brokkr",
        "Hermano Huldra",
        "El Azul (según Kratos)",
        "Enano (según Kratos)",
        "Cabeza Dura Obstinado (según Sindri)",
        "Blabr (según Lúnda)",
        "Vulgar Azulado (según Mimir)",
        "Tarado (según Mimir)",
        "Pendejo Azul (según Mimir)",
        "Un Gran Herrero (según Kratos)",
        "Amigo (según Kratos)",
        "Tío raro (según Atreus)",
        "Elegantes vestidores (según Lúnda)",
        "Los únicos dos Hermanos Huldra (según Lúnda)"
      ]
    }
  },
  {
    "id": 10,
    "slug": "thor",
    "name": "Thor",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚦᛟᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/e/e9/Capture_d%E2%80%99%C3%A9cran_2023-01-26_%C3%A0_20.45.43.png/revision/latest/scale-to-width-down/494?cb=20230127102918",
    "voiceActor": "Ryan Hurst",
    "gender": "Male",
    "species": [
      "1/2 God (Aesir)",
      "1/2 Jötunn"
    ],
    "aliases": [
      "Thor Odinson",
      "Sweaty Bawbag (by Mimir)",
      "Biggest Butchering Bastard in the Nine Realms (by Mimir)",
      "Big Idiot (by Brok)",
      "Fat Dobber (by Mimir)",
      "Thunder Lummox (by Mimir)",
      "Father (by Magni, Modi, & Thrúd)",
      "Fool (by Kratos)",
      "Idiot (by Atreus)",
      "Destroyer (by himself)",
      "Sick Man (by Heimdall)",
      "Stealthy Side of Beef (by Odin)",
      "Fat Drunken Utter Piece of Trash (by Heimdall)",
      "Brother (by his brothers)",
      "Honey (by Sif)",
      "Dad (by Thrúd)"
    ],
    "appearsIn": [
      "God of War (2018) (cameo)",
      "God of War Ragnarök"
    ],
    "about": "Thor (Old Norse: Þórr, Nordic: ᚦᛟᚱ), also known as Thor Odinson (Translation: Thor, Son of Odin) was the Norse Aesir God of Thunder, Lightning, Storms, Wrestling, Strength, Consecration, the Sky, War, Hallowing, the Champion of the Aesir and Prince of Asgard. Head of a family of strong warriors, he was the son of Odin and Fjörgyn and step-son of Hróðr and Frigg, nephew of Vili and Vé, husband of Sif, older half-brother of Týr, Heimdall and Baldur, as well as the father of Magni, Modi, and Thrúd, and uncle of Forseti.",
    "quote": "WE don't change. We … are destroyers. –Thor to Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Thor (nórdico antiguo: Þórr, rúnico: ᚦᛟᚱ), también conocido como Thor Odinson (traducción: Thor, hijo de Odín), fue el dios nórdico Aesir del trueno, el rayo, las tormentas, la lucha, la fuerza, la consagración, el cielo, la guerra y la santificación, el Campeón de los Aesir y príncipe de Asgard. Cabeza de una familia de poderosos guerreros, era hijo de Odín y Fjörgyn e hijastro de Hróðr y Frigg, sobrino de Vili y Vé, esposo de Sif, medio hermano mayor de Týr, Heimdall y Baldur, además de padre de Magni, Modi y Thrúd, y tío de Forseti.",
      "quote": "NOSOTROS no cambiamos. Nosotros … somos destructores. –Thor a Kratos",
      "species": [
        "1/2 dios (Aesir)",
        "1/2 jötunn"
      ],
      "gender": "Masculino",
      "aliases": [
        "Thor Odinson",
        "Escroto Sudoroso (según Mimir)",
        "El Bastardo Carnicero más Grande de los Nueve Reinos (según Mimir)",
        "Gran Idiota (según Brok)",
        "Gordo Soplón (según Mimir)",
        "Zoquete del Trueno (según Mimir)",
        "Padre (según Magni, Modi y Thrúd)",
        "Necio (según Kratos)",
        "Idiota (según Atreus)",
        "Destructor (según él mismo)",
        "Enfermo (según Heimdall)",
        "Sigiloso Costillar de Res (según Odín)",
        "Gordo Borracho y Total Pedazo de Basura (según Heimdall)",
        "Hermano (según sus hermanos)",
        "Cariño (según Sif)",
        "Papá (según Thrúd)"
      ]
    }
  },
  {
    "id": 11,
    "slug": "calliope",
    "name": "Calliope",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Καλλιόπη",
    "image": "https://static.wikia.nocookie.net/godofwar/images/c/c1/Bryanwynia-god-of-war-ascension-calliope.jpg/revision/latest/scale-to-width-down/191?cb=20130623151533",
    "voiceActor": "Debi Derryberry (English)",
    "gender": "Female",
    "species": [
      "3/4 Mortal",
      "1/4 God"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War Sons of Sparta",
      "God of War: Ascension (illusion)",
      "God of War: Chains of Olympus",
      "God of War (flashback and illusion)",
      "God of War II (illusion)",
      "God of War III (illusion)",
      "God of War Ragnarök (mentioned)",
      "God of War Ragnarök: Valhalla (mentioned)",
      "God of War (DC/Wildstorm comic series)"
    ],
    "about": "Calliope (Greek: Καλλιόπη) was the beloved daughter of Kratos and Lysandra. She, along with her mother, were unknowingly killed by Kratos as part of Ares' plot to harden Kratos' heart in order to make him the \"perfect warrior\" with no ties to the mortal realm. Unfortunately for the God of War, Calliope's death would only serve as the driving force behind Kratos' desire to kill Ares in retribution for his fallen family.",
    "quote": "Mother! What's happening outside? The people! The fires! –Calliope, moments before death.",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Calliope (griego: Καλλιόπη) era la amada hija de Kratos y Lysandra. Ella, junto con su madre, fue asesinada sin saberlo por Kratos como parte del plan de Ares para endurecer el corazón de Kratos y convertirlo en el \"guerrero perfecto\", sin lazos con el reino mortal. Desafortunadamente para el Dios de la Guerra, la muerte de Calliope solo serviría como la fuerza impulsora detrás del deseo de Kratos de matar a Ares como venganza por su familia caída.",
      "quote": "¡Madre! ¿Qué está pasando afuera? ¡La gente! ¡Los incendios! –Calliope, momentos antes de morir.",
      "species": [
        "3/4 mortal",
        "1/4 dios"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 12,
    "slug": "ares",
    "name": "Ares",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Ἄρης",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/9e/Ares_29_Render.webp/revision/latest/scale-to-width-down/455?cb=20260613113051",
    "voiceActor": "Steven Blum (God of War, God of War: Ghost of Sparta & God of War: Ascension)",
    "gender": "Male",
    "species": [
      "God (Olympian)"
    ],
    "aliases": [
      "Lord of Battles",
      "Fallen God",
      "First God of War",
      "Cruel God (by Kratos)"
    ],
    "appearsIn": [
      "God of War: Sons of Sparta (Mentioned)",
      "God of War: Ascension (Flashback & Multiplayer)",
      "God of War",
      "God of War: Ghost of Sparta (Flashback)",
      "God of War II",
      "God of War III (Voice & Corpse)",
      "God of War (2018) (Mentioned)",
      "God of War Ragnarök (Mentioned)",
      "God of War Ragnarök: Valhalla (Flashback)",
      "God of War (DC/Wildstorm comic series)",
      "God of War (Novel)"
    ],
    "about": "Ares (Greek: Ἄρης) was the original Olympian God of War, and the son of Zeus and Hera and the main antagonist of God of War, as well as the perpetrator behind the events of God of War: Ascension, meaning he was also responsible for setting the events of the series into motion by tricking Kratos into killing his family and turning him into the Ghost of Sparta, which eventually fulfilled the prophecy of the Marked Warrior who would destroy Olympus and end the reign of the Gods.",
    "quote": "I have taught you many ways to kill a mortal, Kratos. Flesh that burns, bones that break. But to break a man's spirit, is to truly destroy him. –Ares",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Ares (griego: Ἄρης) fue el Dios de la Guerra olímpico original, hijo de Zeus y Hera y el antagonista principal de God of War, además del responsable de los acontecimientos de God of War: Ascension, lo que significa que también fue quien puso en marcha los eventos de la saga al engañar a Kratos para que matara a su familia y convertirlo en el Fantasma de Esparta, lo que finalmente cumplió la profecía del Guerrero Marcado que destruiría el Olimpo y pondría fin al reinado de los dioses.",
      "quote": "Te he enseñado muchas formas de matar a un mortal, Kratos. Carne que arde, huesos que se rompen. Pero quebrar el espíritu de un hombre es destruirlo de verdad. –Ares",
      "species": [
        "Dios (olímpico)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Señor de las Batallas",
        "Dios Caído",
        "Primer Dios de la Guerra",
        "Dios Cruel (según Kratos)"
      ]
    }
  },
  {
    "id": 13,
    "slug": "colossus-of-rhodes",
    "name": "Colossus of Rhodes",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Κολοσσος Οφ Ροδες",
    "image": "https://static.wikia.nocookie.net/godofwar/images/6/61/Colossus_complete.jpg/revision/latest?cb=20101014145747",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Living Statue"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War II",
      "God of War II (Novel)",
      "God of War III (intro)"
    ],
    "about": "The Colossus of Rhodes was a large bronze statue in the port of the city of Rhodes that acted as the first boss, being given life by Zeus, at the beginning of God of War II.",
    "quote": "I do not need your help, Zeus. I can take down this beast. –Kratos.",
    "es": {
      "realm": "Monte Olimpo",
      "about": "El Coloso de Rodas era una gran estatua de bronce en el puerto de la ciudad de Rodas que, tras recibir vida de Zeus, fungió como el primer jefe al comienzo de God of War II.",
      "quote": "No necesito tu ayuda, Zeus. Puedo derribar a esta bestia. –Kratos.",
      "species": [
        "Estatua viviente"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 14,
    "slug": "deimos",
    "name": "Deimos",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Δείμος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/0/07/AkinDeimosT.png/revision/latest/scale-to-width-down/267?cb=20260615102949",
    "voiceActor": "Mark Deklin (God of War: Ghost of Sparta)",
    "gender": "Male",
    "species": [
      "Mortal"
    ],
    "aliases": [
      "Brother (by Kratos)",
      "The Other One (by Zeus)"
    ],
    "appearsIn": [
      "God of War Sons of Sparta",
      "God of War: Ascension (mentioned)",
      "God of War (treasure room cutscenes; non-canon)",
      "God of War: Ghost of Sparta",
      "God of War III (voice and skin)",
      "God of War Ragnarök (mentioned)"
    ],
    "about": "Deimos (Greek: Δείμος) is the deuteragonist of God of War: Ghost of Sparta and God of War Sons of Sparta. He was the younger son of Callisto, and the younger half-brother of Kratos. Due to his strange birthmarks, he was abducted by Ares and Athena during his childhood to avert a prophecy about the destruction of Mount Olympus at the hands of a “Marked Warrior”. He was then tortured by Thanatos, God of Death for years in the Domain of Death. After he came of age in the Domain of Death, Deimos was fueled by hatred for the brother who had failed to save him from his torment.",
    "quote": "A Spartan never lets his back hit the ground. Right, brother? –Deimos",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Deimos (griego: Δείμος) es el deuteragonista de God of War: Ghost of Sparta y God of War Sons of Sparta. Era el hijo menor de Calisto y el medio hermano menor de Kratos. Debido a sus extrañas marcas de nacimiento, fue secuestrado por Ares y Atenea durante su infancia para evitar una profecía sobre la destrucción del monte Olimpo a manos de un “Guerrero Marcado”. Luego fue torturado durante años por Tánatos, dios de la muerte, en el Dominio de la Muerte. Tras alcanzar la edad adulta en el Dominio de la Muerte, Deimos se alimentó del odio hacia el hermano que no había logrado salvarlo de su tormento.",
      "quote": "Un espartano nunca deja que su espalda toque el suelo. ¿Verdad, hermano? –Deimos",
      "species": [
        "Mortal"
      ],
      "gender": "Masculino",
      "aliases": [
        "Hermano (según Kratos)",
        "El Otro (según Zeus)"
      ]
    }
  },
  {
    "id": 15,
    "slug": "thanatos",
    "name": "Thanatos",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Θάνατος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/e/ee/Thanatos%2B-%2Billus.webp/revision/latest/scale-to-width-down/541?cb=20260613070055",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God (Primordial)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ghost of Sparta"
    ],
    "about": "Thanatos (Greek: Θάνατος) is the Greek Primordial God of Death, and the main antagonist in God of War: Ghost of Sparta. He is the ruler of the Domain of Death and the father of Erinys.",
    "quote": "The Oracle may have yet spoken truth. The Marked Warrior shall bring about the destruction of Olympus. Ares chose poorly that day. He took your brother when it should have been you. None of that matters now. Nothing you do is of your own choosing. –Thanatos",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Thanatos (griego: Θάνατος) es el dios primordial griego de la muerte y el antagonista principal de God of War: Ghost of Sparta. Es el gobernante del Dominio de la Muerte y el padre de Erinia.",
      "quote": "Puede que el Oráculo haya dicho la verdad, después de todo. El Guerrero Marcado provocará la destrucción del Olimpo. Ares eligió mal aquel día. Se llevó a tu hermano cuando debiste haber sido tú. Nada de eso importa ya. Nada de lo que haces es por tu propia elección. –Thanatos",
      "species": [
        "Dios (primordial)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 16,
    "slug": "athena",
    "name": "Athena",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Ἀθηναία",
    "image": "https://static.wikia.nocookie.net/godofwar/images/0/03/Astral_Athena_01_Andy_Park.jpg/revision/latest/scale-to-width-down/540?cb=20231224112548",
    "voiceActor": "Carole Ruggier (God of War, God of War II & God of War (2018))",
    "gender": "Female",
    "species": [
      "Goddess (formerly)",
      "Astral Being"
    ],
    "aliases": [
      "Maiden of Olympus",
      "Favorite of Zeus",
      "Warrior Goddess",
      "Child (by Zeus)",
      "My wily little goddess (by Zeus)",
      "My most beloved daughter (by Zeus)",
      "Cold gray cowardly virgin (by Ares)",
      "Treacherous bitch (by Ares)",
      "Cunning bitch (by Poseidon)"
    ],
    "appearsIn": [
      "God of War Sons of Sparta (mentioned)",
      "God of War: Chains of Olympus",
      "God of War",
      "God of War: Ghost of Sparta",
      "God of War II",
      "God of War III",
      "God of War (2018)",
      "God of War Ragnarök: Valhalla (mentioned)",
      "God of War (DC/Wildstorm comic series)",
      "God of War (Novel)",
      "God of War II (Novel)",
      "God of War: Fallen God"
    ],
    "about": "Athena (Greek: Ἀθηναία) was the Olympian Goddess of Wisdom serving as the deuteragonist-turned-final antagonist of the Greek Era of God of War series, who mostly appeared as an ally of Kratos during his quests as a servant to Mount Olympus.",
    "quote": "There’s nowhere you can hide, Spartan. Put as much distance between you and the truth as you want, it changes nothing. Pretend to be everything you are not: teacher, husband, father. But there is one unavoidable truth you will never escape: You cannot change. You will always be… a monster. –Athena mocking Kratos in his hallucination",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Athena (griego: Ἀθηναία) fue la diosa olímpica de la sabiduría, que pasó de deuteragonista a antagonista final de la era griega de la saga God of War, y que apareció mayormente como aliada de Kratos durante sus misiones como servidor del monte Olimpo.",
      "quote": "No hay lugar donde puedas esconderte, espartano. Pon toda la distancia que quieras entre tú y la verdad, eso no cambia nada. Finge ser todo lo que no eres: maestro, esposo, padre. Pero hay una verdad ineludible de la que nunca escaparás: no puedes cambiar. Siempre serás… un monstruo. –Atenea burlándose de Kratos en su alucinación",
      "species": [
        "Diosa (antes)",
        "Ser astral"
      ],
      "gender": "Femenino",
      "aliases": [
        "Doncella del Olimpo",
        "Favorita de Zeus",
        "Diosa Guerrera",
        "Niña (según Zeus)",
        "Mi astuta diosita (según Zeus)",
        "Mi hija más amada (según Zeus)",
        "Virgen fría, gris y cobarde (según Ares)",
        "Perra traicionera (según Ares)",
        "Perra astuta (según Poseidón)"
      ]
    }
  },
  {
    "id": 17,
    "slug": "tyr",
    "name": "Týr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛏᛁᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/2/2f/Capture_d%E2%80%99%C3%A9cran_2023-01-27_%C3%A0_15.26.37.png/revision/latest/scale-to-width-down/358?cb=20230127144611",
    "voiceActor": "Ben Prendergast (English)",
    "gender": "Male",
    "species": [
      "1/2 God (Aesir)",
      "1/2 Jötunn"
    ],
    "aliases": [
      "Týr Odinson",
      "Brother (by his brothers)",
      "Lord Týr (by Sindri & Freya)",
      "The One who Fought for Peace (by Mimir)",
      "Preachy Old Stiff (by Thor)",
      "Great Týr (by Freya)"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned and pictured only)",
      "God of War Ragnarök",
      "The Lost Pages of Norse Myth",
      "God of War: A Call from the Wilds (mentioned only)",
      "God of War: Mimir’s Vision",
      "God of War - The Official Novelization (mentioned only)",
      "God of War: Lore and Legends (mentioned only)",
      "Lúnda's Workshop Notes",
      "God of War: The Official Cookbook of the Nine Realms",
      "God of War Ragnarök: Valhalla"
    ],
    "about": "Týr (Old Norse: Tyrr, Nordic: ᛏᛁᚱ) and Týr Odinson (Translation: Týr, Son of Odin), is the Aesir God of War, Law, Justice, Honor as well as a Prince of Asgard. He is the son of Odin and Hróðr, younger half-brother of Thor, older half-brother of Heimdall, and Baldur, uncle of Magni, Modi, Thrúd, and Forseti.",
    "quote": "A man at war with himself places a deficit upon his focus. He is impatient, emotional, easily surprised. A man at one with himself has a clearer mind, sharper instincts. That man is ready to win. That man is ready to progress. –Týr to Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Týr (nórdico antiguo: Tyrr, rúnico: ᛏᛁᚱ) y Týr Odinson (traducción: Týr, hijo de Odín), es el dios Aesir de la guerra, la ley, la justicia y el honor, además de príncipe de Asgard. Es hijo de Odín y Hróðr, medio hermano menor de Thor, medio hermano mayor de Heimdall y Baldur, y tío de Magni, Modi, Thrúd y Forseti.",
      "quote": "Un hombre en guerra consigo mismo debilita su concentración. Es impaciente, emocional, fácil de sorprender. Un hombre en paz consigo mismo tiene la mente más clara, los instintos más agudos. Ese hombre está listo para ganar. Ese hombre está listo para progresar. –Týr a Kratos",
      "species": [
        "1/2 dios (Aesir)",
        "1/2 jötunn"
      ],
      "gender": "Masculino",
      "aliases": [
        "Týr Odinson",
        "Hermano (según sus hermanos)",
        "Lord Týr (según Sindri y Freya)",
        "El que Luchó por la Paz (según Mimir)",
        "Viejo Estirado y Sermoneador (según Thor)",
        "Gran Týr (según Freya)"
      ]
    }
  },
  {
    "id": 18,
    "slug": "odin",
    "name": "Odin",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛟᛞᛁᚾ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/c/c0/Odin_Render.png/revision/latest/scale-to-width-down/539?cb=20251130123752",
    "voiceActor": "Richard Schiff",
    "gender": "Male",
    "species": [
      "God (Aesir)"
    ],
    "aliases": [
      "Odin Borrson",
      "Wotan",
      "Hrafnaguð (Raven God)",
      "Hoárr (One-Eyed)",
      "Madman (by Mimir)",
      "Father (by his sons)",
      "King of Meddlers (by Mimir)",
      "Bastard (by Mimir and Freya)",
      "Prick (by Freyr)",
      "Ol' One-Eye (by Freyr)",
      "All-Fucker (by Brok & Mimir)",
      "Týr (disguise)",
      "Powerful God with Impossibly High Expectations (by Atreus)",
      "Husband (by Freya)",
      "Father (by his sons)",
      "God of Titles (by Lúnda)",
      "Big Daddy High Muckety-Muck of all the Aesir (by Lúnda)",
      "Maniac (by Freyr)"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned and pictured only)",
      "God of War Ragnarök",
      "The Lost Pages of Norse Myth (mentioned)",
      "God of War: Mimir’s Vision (mentioned)",
      "God of War - The Official Novelization (mentioned)",
      "God of War: Lore and Legends (mentioned)",
      "God of War: The Official Cookbook of the Nine Realms (mentioned)",
      "God of War Ragnarök: Valhalla (mentioned)"
    ],
    "about": "Odin (Old Norse: Óðinn, Nordic: ᛟᛞᛁᚾ), also known as the All-Father and Odin Borrson (Translation: Odin, Son of Borr), was the King of the Aesir and the ruler of the Norse Pantheon. He is the eldest son of Borr and Bestla, the eldest grandson of Búri, the older brother of Vili and Vé, the father of Thor, Týr, Heimdall, and Baldur, grandfather of Magni, Modi, Forseti and Thrúd, ex-husband of Fjörgyn and Frigg and the lover of Hróðr and the Nine Daughters of Ægir and Rán.",
    "quote": "Everyone's got me all wrong. You think war drives me, or power? Wealth? Nah. Never have. Know what drives me? What I really want? I want answers. Same as you. See, mortals have it easy. When they push up against life's big questions, they can look to us to give them meaning. Divine comfort. We both know that's a sham. But when we have questions? Why are we here? To give meaning to mortals while living without it ourselves? No. We're more than that. –Odin to Loki",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Odin (nórdico antiguo: Óðinn, rúnico: ᛟᛞᛁᚾ), también conocido como el Padre de Todo y Odin Borrson (traducción: Odín, hijo de Borr), fue el rey de los Aesir y el gobernante del panteón nórdico. Es el hijo mayor de Borr y Bestla, el nieto mayor de Búri, el hermano mayor de Vili y Vé, el padre de Thor, Týr, Heimdall y Baldur, abuelo de Magni, Modi, Forseti y Thrúd, exesposo de Fjörgyn y Frigg y amante de Hróðr y de las Nueve Hijas de Ægir y Rán.",
      "quote": "Todos me han malinterpretado. ¿Crees que me mueve la guerra, o el poder? ¿La riqueza? No. Nunca. ¿Sabes qué me mueve? ¿Qué es lo que realmente quiero? Quiero respuestas. Igual que tú. Mira, los mortales lo tienen fácil. Cuando se topan con las grandes preguntas de la vida, pueden recurrir a nosotros para que les demos sentido. Consuelo divino. Ambos sabemos que eso es una farsa. Pero ¿cuando nosotros tenemos preguntas? ¿Por qué estamos aquí? ¿Para darles sentido a los mortales mientras vivimos sin él? No. Somos más que eso. –Odín a Loki",
      "species": [
        "Dios (Aesir)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Odín Borrson",
        "Wotan",
        "Hrafnaguð (Dios Cuervo)",
        "Hoárr (El Tuerto)",
        "Loco (según Mimir)",
        "Padre (según sus hijos)",
        "Rey de los Entrometidos (según Mimir)",
        "Bastardo (según Mimir y Freya)",
        "Imbécil (según Freyr)",
        "El Viejo Tuerto (según Freyr)",
        "Padre de Todas las Jodas (según Brok y Mimir)",
        "Týr (disfraz)",
        "Dios Poderoso con Expectativas Imposiblemente Altas (según Atreus)",
        "Esposo (según Freya)",
        "Padre (según sus hijos)",
        "Dios de los Títulos (según Lúnda)",
        "Gran Papi Mandamás Supremo de todos los Aesir (según Lúnda)",
        "Maníaco (según Freyr)"
      ]
    }
  },
  {
    "id": 19,
    "slug": "hermes",
    "name": "Hermes",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Ἑρμῆς",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/9d/AkinHermes.png/revision/latest/scale-to-width-down/499?cb=20240128185009",
    "voiceActor": "Greg Ellis",
    "gender": "Male",
    "species": [
      "God (Olympian)"
    ],
    "aliases": [
      "Messenger of the Gods",
      "Heaven's Herald"
    ],
    "appearsIn": [
      "God of War Sons of Sparta (mentioned)",
      "God of War: Chains of Olympus (mentioned)",
      "God of War: Betrayal (mentioned)",
      "God of War II",
      "God of War III",
      "God of War (2018) (referenced)",
      "God of War (DC/Wildstorm comic series)",
      "God of War (Novel)",
      "God of War II (Novel)"
    ],
    "about": "Hermes (Greek: Ἑρμῆς) was the Olympian God of Travelers, Messengers, Thieves, Commerce, Sports, Athletics, and Speed. Famed as the Messenger of Mount Olympus, he was the son of the King of the Gods Zeus and the Pleiade Maia. He is also the father of Ceryx, the messenger of Mount Olympus.",
    "quote": "I thought Spartans fought with honor. And yet you seek to kill me when I have no way to defend myself? Not fair! But you have your own sense of honor, right, Kratos? And what has that honor brought you? Nothing but nightmares of your failure. Today you may defeat me, but in the end, Kratos, in the end you'll betray only yourself. –Hermes' last words to Kratos.",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Hermes (griego: Ἑρμῆς) fue el dios olímpico de los viajeros, los mensajeros, los ladrones, el comercio, los deportes, el atletismo y la velocidad. Famoso como el Mensajero del monte Olimpo, era hijo del rey de los dioses, Zeus, y de la pléyade Maya. También es el padre de Cérix, el mensajero del monte Olimpo.",
      "quote": "Creí que los espartanos luchaban con honor. ¿Y aun así buscas matarme cuando no tengo forma de defenderme? ¡No es justo! Pero tú tienes tu propio sentido del honor, ¿verdad, Kratos? ¿Y qué te ha traído ese honor? Nada más que pesadillas de tu fracaso. Hoy quizás me derrotes, pero al final, Kratos, al final solo te traicionarás a ti mismo. –Últimas palabras de Hermes a Kratos.",
      "species": [
        "Dios (olímpico)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Mensajero de los Dioses",
        "Heraldo del Cielo"
      ]
    }
  },
  {
    "id": 20,
    "slug": "poseidon",
    "name": "Poseidon",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Ποσειδῶν",
    "image": "https://static.wikia.nocookie.net/godofwar/images/5/5a/Poseidon_Concept_Art.jpg/revision/latest/scale-to-width-down/559?cb=20100316205955",
    "voiceActor": "Fred Tatasciore (God of War)",
    "gender": "Male",
    "species": [
      "God (Olympian)"
    ],
    "aliases": [
      "King of the Seas",
      "The Ocean God",
      "Earth-Shaker",
      "Mighty Poseidon",
      "Father of Horses",
      "King of Atlantis",
      "Sea God (by Kratos)"
    ],
    "appearsIn": [
      "God of War Sons of Sparta (mentioned)",
      "God of War: Ascension (intro & multiplayer)",
      "God of War",
      "God of War: Ghost of Sparta",
      "God of War II",
      "God of War III",
      "God of War Ragnarök (mentioned)",
      "God of War (DC/Wildstorm comic series)",
      "God of War (Novel)",
      "God of War II (Novel)"
    ],
    "about": "Poseidon (Greek: Ποσειδῶν) was the Olympian God of the Seas, Rivers, Water, Storms, Tempests, Winds, Hurricanes, Rain, Floods, Drought, Earthquakes and Horses. Son of the Titans Cronos and Rhea, Poseidon was most notoriously known as the powerful brother of Zeus and Hades as well as Demeter, Hera and Hestia. He was also the unfaithful husband of Amphitrite and the uncle of powerful deities such as Ares, Athena and Hephaestus.",
    "quote": "You have disrespected the Gods for the last time, Kratos! –Poseidon before his fight with Kratos.",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Poseidon (griego: Ποσειδῶν) fue el dios olímpico de los mares, los ríos, el agua, las tormentas, las tempestades, los vientos, los huracanes, la lluvia, las inundaciones, la sequía, los terremotos y los caballos. Hijo de los titanes Cronos y Rea, Poseidón era conocido sobre todo como el poderoso hermano de Zeus y Hades, así como de Deméter, Hera y Hestia. También fue el esposo infiel de Anfitrite y el tío de deidades poderosas como Ares, Atenea y Hefesto.",
      "quote": "¡Has faltado al respeto a los dioses por última vez, Kratos! –Poseidón antes de su pelea con Kratos.",
      "species": [
        "Dios (olímpico)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Rey de los Mares",
        "El Dios del Océano",
        "Sacudidor de la Tierra",
        "Poderoso Poseidón",
        "Padre de los Caballos",
        "Rey de la Atlántida",
        "Dios del Mar (según Kratos)"
      ]
    }
  },
  {
    "id": 21,
    "slug": "zeus",
    "name": "Zeus",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Ζεος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/8/8b/AkinZeus.png/revision/latest/scale-to-width-down/339?cb=20240128185031",
    "voiceActor": "English:",
    "gender": "Male",
    "species": [
      "God (Olympian)",
      "Astral Being (briefly)"
    ],
    "aliases": [
      "King of All",
      "King of Olympus",
      "King of Mount Olympus",
      "King of the Gods",
      "Lord of All the Sky and Earth",
      "Mightiest among the mighty",
      "The Greatest of all the Gods",
      "The Father of Olympus",
      "Father of the Gods",
      "The Rain Bringer",
      "Skyfather",
      "My stupid husband (by Hera)",
      "Father (by Ares, Kratos and his other children)",
      "Grave Digger",
      "Coward (by Kratos)",
      "Old Man (by Kratos)"
    ],
    "appearsIn": [
      "God of War Sons of Sparta (mentioned)",
      "God of War: Ascension (intro & multiplayer)",
      "God of War",
      "God of War: Ghost of Sparta (as Grave Digger)",
      "God of War: Betrayal (mentioned)",
      "God of War II",
      "God of War III",
      "God of War (2018) (illusion)",
      "God of War Ragnarök (mentioned)",
      "God of War Ragnarök: Valhalla (mentioned)",
      "God of War (DC Comics)(mentioned)",
      "God of War (Novel)",
      "God of War II (Novel)",
      "PlayStation All-Stars Battle Royale",
      "God of War - The Official Novelization (illusion)"
    ],
    "about": "Zeus (Greek: Ζεύς/Δίας) was the King of Olympus and the ruler of the Greek Pantheon, as well as the God of the Sky, Thunder, Lightning, Storms, Hospitality and Heavens. Youngest son of the Titans Cronos and Rhea, he was the brother of Hades, Poseidon as well as Demeter, Hestia and Hera - whom he would also wed. He fathered a line of all-powerful deities such as Athena, Ares, Hephaestus, Persephone, Zagreus, Aphrodite, Artemis, Apollo, Hermes and Dionysus as well as many mortal children such as Hercules, Kratos, Deimos, Perseus, Pollux, Peirithous, Minos and countless others.",
    "quote": "My brothers. We were forged in victory. A victory that ended the great war and brought forth the reign of mount Olympus. Born from the depths of the underworld, rooted in the river of souls, our mountain emerged out of the chaos. As it grew, so too did the might of the Olympians. We created a world of peace, a world of prosperity. A world that lives in the shadow and safety of my mountain. A mountain that has come to be the absolute measure of strength and power. Now, on this day, that power is to be tested. The mortal, Kratos, seeks to destroy all that I have wrought. Brothers, put aside the petty grievances that have splintered us for so long. We will unite. We will stand together. And I will wipe out this plague! Olympus will prevail! –Zeus to his fellow gods, Poseidon, Hades, Helios and Hermes.",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Zeus (griego: Ζεύς/Δίας) fue el rey del Olimpo y el gobernante del panteón griego, así como el dios del cielo, el trueno, el rayo, las tormentas, la hospitalidad y los cielos. Hijo menor de los titanes Cronos y Rea, era hermano de Hades y Poseidón, así como de Deméter, Hestia y Hera, con quien también se casaría. Engendró un linaje de deidades todopoderosas como Atenea, Ares, Hefesto, Perséfone, Zagreo, Afrodita, Artemisa, Apolo, Hermes y Dioniso, así como muchos hijos mortales como Hércules, Kratos, Deimos, Perseo, Pólux, Pirítoo, Minos e incontables otros.",
      "quote": "Hermanos míos. Fuimos forjados en la victoria. Una victoria que puso fin a la gran guerra y dio paso al reinado del monte Olimpo. Nacida de las profundidades del Inframundo, arraigada en el río de las almas, nuestra montaña surgió del caos. A medida que crecía, también crecía el poder de los olímpicos. Creamos un mundo de paz, un mundo de prosperidad. Un mundo que vive a la sombra y bajo la protección de mi montaña. Una montaña que ha llegado a ser la medida absoluta de la fuerza y el poder. Ahora, en este día, ese poder será puesto a prueba. El mortal, Kratos, busca destruir todo lo que he forjado. Hermanos, dejen de lado las mezquinas rencillas que nos han dividido por tanto tiempo. Nos uniremos. Permaneceremos juntos. ¡Y yo acabaré con esta plaga! ¡El Olimpo prevalecerá! –Zeus a sus compañeros dioses, Poseidón, Hades, Helios y Hermes.",
      "species": [
        "Dios (olímpico)",
        "Ser astral (brevemente)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Rey de Todo",
        "Rey del Olimpo",
        "Rey del Monte Olimpo",
        "Rey de los Dioses",
        "Señor de Todo el Cielo y la Tierra",
        "El más poderoso entre los poderosos",
        "El Más Grande de Todos los Dioses",
        "El Padre del Olimpo",
        "Padre de los Dioses",
        "El Portador de la Lluvia",
        "Padre del Cielo",
        "Mi estúpido esposo (según Hera)",
        "Padre (según Ares, Kratos y sus otros hijos)",
        "Sepulturero",
        "Cobarde (según Kratos)",
        "Viejo (según Kratos)"
      ]
    }
  },
  {
    "id": 22,
    "slug": "alrik",
    "name": "Alrik",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚨᛚᚱᛁᚲ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/d/dc/Undead_Alrik.jpg/revision/latest/scale-to-width-down/487?cb=20250702225143",
    "voiceActor": "Bob Joles",
    "gender": "Male",
    "species": [
      "Mortal, Undead"
    ],
    "aliases": [
      "The Barbarian King",
      "Barbarian Prince",
      "Hades' Champion"
    ],
    "appearsIn": [
      "God of War: Ascension (flashback)",
      "God of War",
      "God of War II",
      "God of War III (voice)",
      "God of War (2018) (mentioned)",
      "God of War Ragnarök: Valhalla (flashback)",
      "God of War (DC/Wildstorm comic series)"
    ],
    "about": "Alrik, better known as the Barbarian King, was the leader of the Barbarian army, a strong warrior himself and an old enemy of Kratos. He was killed by the Spartan after the latter gained the Blades of Chaos. He and his brutish army drove Kratos to beg Ares to save him, leading to the events of God of War: Ascension and thus the entire series.",
    "quote": "This time, Ghost of Sparta, I will have your head! –The Barbarian King to Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Alrik, más conocido como el Rey Bárbaro, fue el líder del ejército bárbaro, un guerrero fuerte en sí mismo y un viejo enemigo de Kratos. Fue asesinado por el espartano después de que este obtuviera las Espadas del Caos. Él y su brutal ejército llevaron a Kratos a suplicarle a Ares que lo salvara, lo que desencadenó los acontecimientos de God of War: Ascension y, por ende, de toda la saga.",
      "quote": "¡Esta vez, Fantasma de Esparta, tendré tu cabeza! –El Rey Bárbaro a Kratos",
      "species": [
        "Mortal, no muerto"
      ],
      "gender": "Masculino",
      "aliases": [
        "El Rey Bárbaro",
        "Príncipe Bárbaro",
        "Campeón de Hades"
      ]
    }
  },
  {
    "id": 23,
    "slug": "aphrodite",
    "name": "Aphrodite",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Αφροδιτε",
    "image": "https://static.wikia.nocookie.net/godofwar/images/8/80/Aphrodite1.png/revision/latest?cb=20231211113104",
    "voiceActor": "Carole Ruggier (God of War)",
    "gender": "Female",
    "species": [
      "Goddess (Olympian)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War",
      "God of War III",
      "God of War (Novel)",
      "God of War II (Novel) (mentioned)"
    ],
    "about": "Aphrodite (Αφροδίτη) is the Olympian Goddess of Love and Beauty, and one of the many supporting characters in the God of War series.",
    "quote": "Kratos, it's been far too long. Even though you are no longer the God of War, you can still share my bed. –Aphrodite inviting Kratos to her bed",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Aphrodite (Αφροδίτη) es la diosa olímpica del amor y la belleza, y uno de los muchos personajes secundarios de la saga God of War.",
      "quote": "Kratos, ha pasado demasiado tiempo. Aunque ya no seas el Dios de la Guerra, todavía puedes compartir mi lecho. –Afrodita invitando a Kratos a su lecho",
      "species": [
        "Diosa (olímpica)"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 24,
    "slug": "aphrodite-s-handmaidens",
    "name": "Aphrodite's Handmaidens",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Αφροδιτε'ς Ανδμαιδενς",
    "image": "https://static.wikia.nocookie.net/godofwar/images/a/a9/Screweyefaiuk.png/revision/latest?cb=20240128183657",
    "voiceActor": "Holly Fields (Dark-skin)",
    "gender": "Female",
    "species": [
      "Mortal"
    ],
    "aliases": [
      "Aphrodite's Handmaidens"
    ],
    "appearsIn": [
      "God of War III"
    ],
    "about": "Aphrodite's Handmaidens are the servants and lovers of the Olympic Goddess of Love, Aphrodite. Appear briefly in God of War III.",
    "quote": "Handmaiden 1: Why does Aphrodite always get to have all of the fun? Handmaiden 2: When will it be our turn? –Handmaidens watching Kratos and Aphrodite have intercourse",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Las doncellas de Afrodita son las sirvientas y amantes de la diosa olímpica del amor, Afrodita. Aparecen brevemente en God of War III.",
      "quote": "Doncella 1: ¿Por qué Afrodita siempre se divierte tanto? Doncella 2: ¿Cuándo nos tocará a nosotras? –Las doncellas observando a Kratos y Afrodita teniendo relaciones",
      "species": [
        "Mortal"
      ],
      "gender": "Femenino",
      "aliases": [
        "Doncellas de Afrodita"
      ]
    }
  },
  {
    "id": 25,
    "slug": "apollo",
    "name": "Apollo",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Ἀπόλλων",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/9f/Apollo_%28God_of_War%29.png/revision/latest/scale-to-width-down/464?cb=20260607171409",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God (Olympian)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War Sons of Sparta (Mentioned)",
      "God of War: Ascension (Mentioned)",
      "God of War III (Mentioned)"
    ],
    "about": "Apollo (Greek: Ἀπόλλων) is the Olympian God of Light, Music, The Sun, Day, Healing, Diseases, Enlightenment, Oracles, Art, Celebration, Entertainment, Stories, Archery, Truth, Prophecy. Knowledge, Logic and Science. He is the son of Zeus and Leto as well as the younger twin brother of Artemis. Despite his prominent status in mythology, he has never appeared in person in the series.",
    "quote": "But this is the power of the god Apollo. Neither you nor the Tree of Life can survive his Olympian flames. –Kratos",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Apollo (griego: Ἀπόλλων) es el dios olímpico de la luz, la música, el sol, el día, la sanación, las enfermedades, la iluminación, los oráculos, el arte, la celebración, el entretenimiento, las historias, el tiro con arco, la verdad, la profecía, el conocimiento, la lógica y la ciencia. Es hijo de Zeus y Leto, así como el hermano gemelo menor de Artemisa. A pesar de su prominente lugar en la mitología, nunca ha aparecido en persona en la saga.",
      "quote": "Pero este es el poder del dios Apolo. Ni tú ni el Árbol de la Vida pueden sobrevivir a sus llamas olímpicas. –Kratos",
      "species": [
        "Dios (olímpico)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 26,
    "slug": "atropos",
    "name": "Atropos",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Ἄτροπος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/b/b2/Atropos21.jpg/revision/latest/scale-to-width-down/367?cb=20130127042929",
    "voiceActor": "Debi Mae West",
    "gender": "Female",
    "species": [
      "God (Primordial)"
    ],
    "aliases": [
      "Measurer of the Threads of Fate"
    ],
    "appearsIn": [
      "God of War: Chains of Olympus (mentioned)",
      "God of War: Ghost of Sparta (mentioned)",
      "God of War II",
      "God of War III",
      "God of War (2018) (mentioned)",
      "God of War Ragnarök (mentioned)",
      "God of War II (Novel)"
    ],
    "about": "Atropos (Greek: Ἄτροπος) is one of the three Sisters of Fate, the oldest sister and the measurer of threads who determines the life of everyone, be they mortal or god. She is defeated along with her younger sister, Lahkesis, when Kratos traps them inside their own mirror and shatters it.",
    "quote": "And now that life is at an end. We control your destiny, foolish mortal! With a whim we can end your life… or allow you to live. –Atropos.",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Atropos (griego: Ἄτροπος) es una de las tres Hermanas del Destino, la hermana mayor y la que mide los hilos que determinan la vida de todos, ya sean mortales o dioses. Es derrotada junto con su hermana menor, Láquesis, cuando Kratos las atrapa dentro de su propio espejo y lo hace añicos.",
      "quote": "Y ahora esa vida ha llegado a su fin. ¡Controlamos tu destino, mortal insensato! Con un capricho podemos acabar con tu vida… o permitirte vivir. –Átropos.",
      "species": [
        "Dios (primordial)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Medidora de los Hilos del Destino"
      ]
    }
  },
  {
    "id": 27,
    "slug": "boreas",
    "name": "Boreas",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Βορέας",
    "image": "https://static.wikia.nocookie.net/godofwar/images/f/f5/Boreas.jpg/revision/latest?cb=20110724025337",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God (Olympian)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Chains of Olympus (mentioned)",
      "God of War: Ghost of Sparta (mentioned)",
      "God of War II (mentioned)",
      "God of War III (mentioned)",
      "God of War II (Novel) (mentioned)"
    ],
    "about": "Boreas (Greek: Βορέας) is the Olympian God of North Wind, Storms, Winter, Loneliness, Solitude, Absence, Lack, Sadness, Depression, Calmness and Serenity. He leads the path of the Sun Chariot of Helios along with three horses that drive it, called the Fire Steeds.",
    "quote": null,
    "es": {
      "realm": "Monte Olimpo",
      "about": "Boreas (griego: Βορέας) es el dios olímpico del viento del norte, las tormentas, el invierno, la soledad, el aislamiento, la ausencia, la carencia, la tristeza, la depresión, la calma y la serenidad. Guía el recorrido del Carro del Sol de Helios junto con los tres caballos que lo impulsan, llamados los Corceles de Fuego.",
      "quote": null,
      "species": [
        "Dios (olímpico)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 28,
    "slug": "callisto",
    "name": "Callisto",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Καλλιστώ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/c/ca/Callisto_Cutout.png/revision/latest/scale-to-width-down/378?cb=20260615101509",
    "voiceActor": "Jennifer Hale (young)",
    "gender": "Female",
    "species": [
      "Mortal"
    ],
    "aliases": [
      "Mother (by Kratos & Deimos)"
    ],
    "appearsIn": [
      "God of War Sons of Sparta (mentioned only)",
      "God of War (treasure room cutscenes; non-canon)",
      "God of War: Ghost of Sparta",
      "God of War III (mentioned only)",
      "God of War (2018)(mentioned only)"
    ],
    "about": "Callisto (Greek: Καλλιστώ) was a Spartan woman and mother of Kratos and Deimos, and was also one of Zeus' many lovers. She was kept within the city of Atlantis, until Kratos' arrival in the city.",
    "quote": "Punish me for my shortcomings, and grant my son redemption. –Callisto.",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Callisto (griego: Καλλιστώ) fue una mujer espartana, madre de Kratos y Deimos, y también una de las muchas amantes de Zeus. Estuvo retenida en la ciudad de la Atlántida hasta la llegada de Kratos a la ciudad.",
      "quote": "Castígame por mis faltas y concede la redención a mi hijo. –Calisto.",
      "species": [
        "Mortal"
      ],
      "gender": "Femenino",
      "aliases": [
        "Madre (según Kratos y Deimos)"
      ]
    }
  },
  {
    "id": 29,
    "slug": "captain",
    "name": "Captain",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Καπταιν",
    "image": "https://static.wikia.nocookie.net/godofwar/images/8/81/Captain.jpg/revision/latest?cb=20141201191752",
    "voiceActor": "Keith Ferguson",
    "gender": "Male",
    "species": [
      "Mortal"
    ],
    "aliases": [
      "Boat Captain",
      "The Deckhand"
    ],
    "appearsIn": [
      "God of War Sons of Sparta",
      "God of War: Ascension (mentioned)",
      "God of War",
      "God of War II",
      "God of War III (mentioned)",
      "God of War (2018) (mentioned)",
      "God of War: Ragnarök (mentioned)",
      "God of War Ragnarök: Valhalla (mentioned)"
    ],
    "about": "The Captain was the leading sailor of a fleet of ships that once sailed the Aegean Sea during the events of God of War, when Kratos was tasked with killing the Hydra King as part of his service to the Gods of Olympus. However, despite being momentarily saved from falling into the Hydra's stomach by Kratos, the warrior only did so to obtain the key he had on him before letting him fall to his death inside the creature's carcass.",
    "quote": "He could have saved me. He held my life in his hand, and still he let go. I may have been just a mere boat captain, but he treated me as if I was nothing! He is to blame for my torment here! I hope he suffers in Hades as I have. Damn that Ghost of Sparta! –Boat Captain",
    "es": {
      "realm": "Monte Olimpo",
      "about": "El Capitán era el marinero al mando de una flota de barcos que alguna vez navegó por el mar Egeo durante los acontecimientos de God of War, cuando a Kratos se le encomendó matar al Rey Hidra como parte de su servicio a los dioses del Olimpo. Sin embargo, a pesar de que Kratos lo salvó momentáneamente de caer en el estómago de la Hidra, el guerrero solo lo hizo para obtener la llave que llevaba consigo antes de dejarlo caer hacia su muerte dentro del cadáver de la criatura.",
      "quote": "Pudo haberme salvado. Tenía mi vida en su mano y aun así me soltó. Puede que yo haya sido solo un simple capitán de barco, ¡pero me trató como si no fuera nada! ¡Él tiene la culpa de mi tormento aquí! Espero que sufra en el Hades como yo he sufrido. ¡Maldito sea ese Fantasma de Esparta! –El capitán del barco",
      "species": [
        "Mortal"
      ],
      "gender": "Masculino",
      "aliases": [
        "Capitán del Barco",
        "El Marinero de Cubierta"
      ]
    }
  },
  {
    "id": 30,
    "slug": "chaos",
    "name": "Chaos",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Χάος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/d/dc/Caos_concept_art.webp/revision/latest/scale-to-width-down/360?cb=20240421045658",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "God (Primordial)"
    ],
    "aliases": [
      "Creator of the Universe",
      "Mother of Life"
    ],
    "appearsIn": [
      "God of War Sons of Sparta (mentioned only)",
      "God of War: Ascension"
    ],
    "about": "Chaos (Greek: χάος) is the original Greek Primordial entity who personifies life itself and is the mother/grandmother of the other Primordial deities, one of whom gave birth to the Titans, who in turn birthed the Gods of Olympus.",
    "quote": "This world is the birthright of those who were born to the son of Chaos, father of the Universe. –Gyges",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Caos (griego: χάος) es la entidad primordial griega original que personifica la vida misma y es la madre/abuela de las demás deidades primordiales, una de las cuales dio a luz a los titanes, quienes a su vez engendraron a los dioses del Olimpo.",
      "quote": "Este mundo es el derecho de nacimiento de quienes nacieron del hijo del Caos, padre del universo. –Giges",
      "species": [
        "Dios (primordial)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Creador del Universo",
        "Madre de la Vida"
      ]
    }
  },
  {
    "id": 31,
    "slug": "charon",
    "name": "Charon",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Χάρων",
    "image": "https://static.wikia.nocookie.net/godofwar/images/4/45/Charon_02a.jpg/revision/latest/scale-to-width-down/423?cb=20100104164213",
    "voiceActor": "Dwight Schultz",
    "gender": "Male",
    "species": [
      "God (Primordial)"
    ],
    "aliases": [
      "The Ferryman"
    ],
    "appearsIn": [
      "God of War: Chains of Olympus",
      "God of War III (carving only)"
    ],
    "about": "Charon (Greek: Χάρων) was the ferryman of the Underworld and a boss in God of War: Chains of Olympus.",
    "quote": "We share a common fate, Kratos, the gods will release neither of us from our torture. –Charon.",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Charon (griego: Χάρων) fue el barquero del Inframundo y un jefe en God of War: Chains of Olympus.",
      "quote": "Compartimos un destino común, Kratos: los dioses no nos liberarán a ninguno de los dos de nuestra tortura. –Caronte.",
      "species": [
        "Dios (primordial)"
      ],
      "gender": "Masculino",
      "aliases": [
        "El Barquero"
      ]
    }
  },
  {
    "id": 32,
    "slug": "clotho",
    "name": "Clotho",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Κλωθώ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/0/00/Sister_Fate.jpg/revision/latest?cb=20080528072222",
    "voiceActor": "Susan Silo",
    "gender": "Female",
    "species": [
      "God (Primordial)"
    ],
    "aliases": [
      "Spinner of the Threads of Fate",
      "Genesis of All"
    ],
    "appearsIn": [
      "God of War: Chains of Olympus (mentioned)",
      "God of War: Ghost of Sparta (mentioned)",
      "God of War II",
      "God of War III",
      "God of War (2018) (mentioned)",
      "God of War Ragnarök (mentioned)",
      "God of War II (Novel)"
    ],
    "about": "Clotho (Greek: Κλωθώ) is one of the three Primordial Sisters of Fate, the youngest sister and the spinner of the threads as she is the one who begins life and decides who will be born and when. She is the last of the sisters to be defeated and the only one to be physically killed by Kratos, when he invades the Palace of the Fates to use the loom and change his fate.",
    "quote": "It is through my threads that all life is born. You must not tamper with destiny, Kratos. You will destroy everything. –Clotho.",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Clotho (griego: Κλωθώ) es una de las tres Hermanas del Destino primordiales, la hermana menor y la hilandera de los hilos, ya que es ella quien da inicio a la vida y decide quién nacerá y cuándo. Es la última de las hermanas en ser derrotada y la única a la que Kratos mata físicamente, cuando invade el Palacio de las Moiras para usar el telar y cambiar su destino.",
      "quote": "Es a través de mis hilos que nace toda vida. No debes alterar el destino, Kratos. Lo destruirás todo. –Cloto.",
      "species": [
        "Dios (primordial)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Hilandera de los Hilos del Destino",
        "Génesis de Todo"
      ]
    }
  },
  {
    "id": 33,
    "slug": "cronos",
    "name": "Cronos",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Κρόνος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/5/54/Cronosgear_Izzy-1-.jpg/revision/latest/scale-to-width-down/407?cb=20111007205938",
    "voiceActor": "Lloyd Sherr (God of War II)",
    "gender": "Male",
    "species": [
      "God (Titan)"
    ],
    "aliases": [
      "Kronos",
      "Father of the Gods of Olympus",
      "Titan Lord",
      "Titan King",
      "The youngest child of Earth and Sky",
      "The Last Living Titan"
    ],
    "appearsIn": [
      "God of War Sons of Sparta (mentioned)",
      "God of War: Ascension (intro)",
      "God of War",
      "God of War II",
      "God of War III",
      "God of War (2018) (referenced)",
      "God of War (Novel)",
      "God of War II (Novel)"
    ],
    "about": "Cronos (Greek: Κρόνος), was the leader and last of the mighty Titans who were born to Gaia and Ouranos. He fathered the first of the Olympians with his wife Rhea. He fought in the Titanomachy where he was overthrown by his son Zeus. His punishment by Zeus after the battle was to forever carry Pandora's Temple on his back in chains. He is a minor character in God of War, a minor ally in God of War II and a major antagonist in God of War III.",
    "quote": "You killed Ares out of your need for vengeance. But this time, retribution finally comes to me, Spartan. –Cronos to Kratos.",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Cronos (griego: Κρόνος) fue el líder y el último de los poderosos titanes nacidos de Gea y Urano. Engendró a los primeros olímpicos con su esposa Rea. Luchó en la Titanomaquia, donde fue derrocado por su hijo Zeus. Su castigo impuesto por Zeus tras la batalla fue cargar para siempre el Templo de Pandora sobre su espalda, encadenado. Es un personaje menor en God of War, un aliado menor en God of War II y un antagonista importante en God of War III.",
      "quote": "Mataste a Ares por tu necesidad de venganza. Pero esta vez, la retribución por fin me llega a mí, espartano. –Cronos a Kratos.",
      "species": [
        "Dios (titán)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Kronos",
        "Padre de los Dioses del Olimpo",
        "Señor Titán",
        "Rey Titán",
        "El hijo menor de la Tierra y el Cielo",
        "El Último Titán Vivo"
      ]
    }
  },
  {
    "id": 34,
    "slug": "daedalus",
    "name": "Daedalus",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Δαιδαλος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/3/39/Daedalus.png/revision/latest?cb=20100403200725",
    "voiceActor": "Malcolm McDowell",
    "gender": "Male",
    "species": [
      "Mortal"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War III"
    ],
    "about": null,
    "quote": "What have you done with my child? My boy! WHERE IS MY BOY? –Daedalus.",
    "es": {
      "realm": "Monte Olimpo",
      "about": null,
      "quote": "¿Qué has hecho con mi hijo? ¡Mi niño! ¿DÓNDE ESTÁ MI NIÑO? –Dédalo.",
      "species": [
        "Mortal"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 35,
    "slug": "epimetheus",
    "name": "Epimetheus",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Επιμεθεος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/5/56/Epimetheus.png/revision/latest?cb=20100403202528",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God (Titan)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War III"
    ],
    "about": "Epimetheus (Ἐπιμηθεύς) was a Titan of Hindsight and Afterthought, he was sent to Tartarus after he was defeated in the Great War by Zeus.",
    "quote": null,
    "es": {
      "realm": "Monte Olimpo",
      "about": "Epimetheus (Ἐπιμηθεύς) fue un titán de la retrospección y la reflexión tardía; fue enviado al Tártaro tras ser derrotado por Zeus en la Gran Guerra.",
      "quote": null,
      "species": [
        "Dios (titán)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 36,
    "slug": "gaia",
    "name": "Gaia",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Γαῖα",
    "image": "https://static.wikia.nocookie.net/godofwar/images/b/bb/Gow2-gaia.jpg/revision/latest/scale-to-width-down/384?cb=20080308184943",
    "voiceActor": "Linda Hunt",
    "gender": "Female",
    "species": [
      "Goddess (Primordial)"
    ],
    "aliases": [
      "Mother Earth",
      "Everpresent Mother of Earth",
      "Mother of the Titans",
      "Grandmother of all Living Beings"
    ],
    "appearsIn": [
      "God of War Sons of Sparta (mentioned)",
      "God of War: Ascension (Narrator)",
      "God of War: Chains of Olympus (Narrator)",
      "God of War (Narrator)",
      "God of War: Ghost of Sparta (Narrator and mentioned)",
      "God of War II (Narrator and Titan)",
      "God of War III (Titan)",
      "God of War Ragnarök (mentioned)",
      "God of War II (Novel)",
      "Mortal Kombat 9 (Background Cameo)"
    ],
    "about": "Gaia (Greek: Γαῖα) is the Primordial Goddess of the Earth, mother of the Titans and the grandmother/great-grandmother of the Olympian Gods. She is the narrator of the series, the deuteragonist of God of War II, and the secondary antagonist of God of War III.",
    "quote": "I am the Titan, Gaia; ever-present Mother of Earth. I have watched you become a powerful warrior, and I have been with you through all the events of your life, but I can no longer simply watch. –Gaia.",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Gaia (griego: Γαῖα) es la diosa primordial de la Tierra, madre de los titanes y abuela/bisabuela de los dioses olímpicos. Es la narradora de la saga, la deuteragonista de God of War II y la antagonista secundaria de God of War III.",
      "quote": "Soy la titán Gea, eterna Madre de la Tierra. Te he visto convertirte en un guerrero poderoso, y he estado contigo a lo largo de todos los acontecimientos de tu vida, pero ya no puedo limitarme a observar. –Gea.",
      "species": [
        "Diosa (primordial)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Madre Tierra",
        "Eterna Madre de la Tierra",
        "Madre de los Titanes",
        "Abuela de Todos los Seres Vivos"
      ]
    }
  },
  {
    "id": 37,
    "slug": "hades",
    "name": "Hades",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "ᾍδης",
    "image": "https://static.wikia.nocookie.net/godofwar/images/2/26/Hades_-_Ascension.jpg/revision/latest/scale-to-width-down/585?cb=20130310194617",
    "voiceActor": "Nolan North (God of War)",
    "gender": "Male",
    "species": [
      "God (Olympian)"
    ],
    "aliases": [
      "Lord of the Dead",
      "King of the Underworld",
      "Lord Hades"
    ],
    "appearsIn": [
      "God of War Sons of Sparta (mentioned)",
      "God of War: Ascension (intro & multiplayer)",
      "God of War: Chains of Olympus (mentioned)",
      "God of War",
      "God of War: Betrayal (mentioned)",
      "God of War II",
      "God of War III",
      "God of War (DC/Wildstorm comic series)",
      "God of War II (Novel)"
    ],
    "about": "Hades (Greek: ᾍδης), also known as Háidēs or Pluto, was the Olympian God of the Dead and the Ruler of the Underworld. Eldest son of the mighty titan Cronos and his queen Rhea, he was most notoriously known as the brother of Zeus and Poseidon as well as Demeter, Hera and Hestia. The firstborn son of Cronos was the supreme ruler of the afterlife and the dead in the Greek world. Furthermore, Hades was the husband of Persephone and the uncle of Kratos himself — a family bond that the latter has long been unaware of.",
    "quote": "Kratos, so glad you could carve out some time for us! You know we need it. I sense some bad blood between us, Kratos. Oh, all the memories. They're overwhelming, really. Let's see... How many sins have you committed against me? Oh, that's right, you murdered my niece, Athena! And what else. WHAT else? Ah, and you killed my brother, Poseidon. And I have not forgotten that it was you who butchered my beautiful Queen! I will see you suffer as I have suffered. Your soul is MINE. –Hades before engaging Kratos in battle.",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Hades (griego: ᾍδης), también conocido como Háidēs o Plutón, fue el dios olímpico de los muertos y el gobernante del Inframundo. Hijo mayor del poderoso titán Cronos y de su reina Rea, era conocido sobre todo como el hermano de Zeus y Poseidón, así como de Deméter, Hera y Hestia. El primogénito de Cronos era el gobernante supremo del más allá y de los muertos en el mundo griego. Además, Hades era el esposo de Perséfone y el tío del propio Kratos, un lazo familiar que este último ha ignorado durante mucho tiempo.",
      "quote": "Kratos, ¡qué gusto que pudieras hacerte un tiempo para nosotros! Sabes que lo necesitamos. Percibo algo de rencor entre nosotros, Kratos. Ah, todos esos recuerdos. Son abrumadores, de verdad. Veamos... ¿Cuántos pecados has cometido contra mí? ¡Ah, claro, asesinaste a mi sobrina, Atenea! ¿Y qué más? ¿QUÉ más? Ah, y mataste a mi hermano, Poseidón. ¡Y no he olvidado que fuiste tú quien masacró a mi hermosa reina! Te veré sufrir como yo he sufrido. Tu alma es MÍA. –Hades antes de enfrentarse a Kratos en batalla.",
      "species": [
        "Dios (olímpico)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Señor de los Muertos",
        "Rey del Inframundo",
        "Lord Hades"
      ]
    }
  },
  {
    "id": 38,
    "slug": "helios",
    "name": "Helios",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Ἥλιος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/2/25/Screen98765tfhjh.png/revision/latest?cb=20240102113111",
    "voiceActor": "Crispin Freeman (God of War III) & (God of War Ragnarök: Valhalla)",
    "gender": "Male",
    "species": [
      "God (Titan)"
    ],
    "aliases": [
      "Titan of the Sun",
      "The Sun God",
      "All-Seeing God"
    ],
    "appearsIn": [
      "God of War: Chains of Olympus",
      "God of War II",
      "God of War III",
      "God of War Ragnarök: Valhalla (illusion)",
      "God of War (DC/Wildstorm comic series)"
    ],
    "about": "Helios (Greek: Ἥλιος) was the Titan God of the Sun and Guardian of Oaths. He is a major background character God of War: Chains of Olympus, a major antagonist in God of War III and a minor but key character in God of War: Ragnarök: Valhalla.",
    "quote": "Behold the glory of Helios! –Helios",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Helios (griego: Ἥλιος) fue el dios titán del sol y guardián de los juramentos. Es un personaje de fondo importante en God of War: Chains of Olympus, un antagonista importante en God of War III y un personaje menor pero clave en God of War: Ragnarök: Valhalla.",
      "quote": "¡Contemplen la gloria de Helios! –Helios",
      "species": [
        "Dios (titán)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Titán del Sol",
        "El Dios del Sol",
        "Dios que Todo lo Ve"
      ]
    }
  },
  {
    "id": 39,
    "slug": "hephaestus",
    "name": "Hephaestus",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Εφαιστος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/d/d1/Kato324.jpg/revision/latest?cb=20240108194543",
    "voiceActor": "Rip Torn",
    "gender": "Male",
    "species": [
      "God (Olympian)"
    ],
    "aliases": [
      "Craftsman of Olympus",
      "Smith God"
    ],
    "appearsIn": [
      "God of War: Chains of Olympus (mentioned only)",
      "God of War III",
      "God of War Ragnarök (mentioned Only)",
      "God of War Ragnarök: Valhalla (mentioned Only)"
    ],
    "about": "Hephaestus (Greek: Hφαιστος) is the Craftsman of Olympus, as well as the God of Smithery and Craftswork. He starts off as an ally in God of War III, but later betrays and tries to murder Kratos in order to protect Pandora from the Flame of Olympus.",
    "quote": "Zeus may have imprisoned me here, but you are the reason I live in torment. –Hephaestus to Kratos, God of War III",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Hefesto (griego: Hφαιστος) es el Artesano del Olimpo, así como el dios de la herrería y la artesanía. Comienza como un aliado en God of War III, pero más tarde traiciona a Kratos e intenta asesinarlo para proteger a Pandora de la Llama del Olimpo.",
      "quote": "Puede que Zeus me haya encarcelado aquí, pero tú eres la razón por la que vivo atormentado. –Hefesto a Kratos, God of War III",
      "species": [
        "Dios (olímpico)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Artesano del Olimpo",
        "Dios Herrero"
      ]
    }
  },
  {
    "id": 40,
    "slug": "hera",
    "name": "Hera",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Ἥρα",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/91/AndyPark_GOW3_20.jpg/revision/latest/scale-to-width-down/377?cb=20100710201452",
    "voiceActor": "Adrienne Barbeau",
    "gender": "Female",
    "species": [
      "Goddess (Olympian)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (mentioned only)",
      "God of War: Betrayal (mentioned only)",
      "God of War III"
    ],
    "about": "Hera (Greek: Ἥρα) was the Olympian Goddess of Women and Marriage, and the sister and wife of Zeus. She was also the mother of Ares and Hephaestus. She is also Queen of the Gods. She is a minor antagonist in God of War III.",
    "quote": "Bravo! Bravo! Our hero has arrived. Applause for another bastard child of Zeus, just in time for the final act. –Hera.",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Hera (griego: Ἥρα) era la diosa olímpica de las mujeres y el matrimonio, y la hermana y esposa de Zeus. También era la madre de Ares y Hefesto. Además, es la reina de los dioses. Es una antagonista menor en God of War III.",
      "quote": "¡Bravo! ¡Bravo! Nuestro héroe ha llegado. Un aplauso para otro hijo bastardo de Zeus, justo a tiempo para el acto final. –Hera.",
      "species": [
        "Diosa (olímpica)"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 41,
    "slug": "hercules",
    "name": "Hercules",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Ερκυλες",
    "image": "https://static.wikia.nocookie.net/godofwar/images/3/3c/Hercures.jpg/revision/latest/scale-to-width-down/517?cb=20260620052503",
    "voiceActor": "Kevin Sorbo",
    "gender": "Male",
    "species": [
      "God (formerly Demigod)"
    ],
    "aliases": [
      "Heracles",
      "Brother (by Kratos)",
      "Mightiest of Men",
      "Protector of Mankind"
    ],
    "appearsIn": [
      "God of War: Ascension (in multiplayer)",
      "God of War III",
      "God of War Ragnarök: Valhalla (mentioned only)"
    ],
    "about": "Hercules (Greek: Herakles/Ἡρακλῆς) was the son of Zeus and Alcmene, and paternal half-brother of Athena, Ares, Hephaestus, Aphrodite, Persephone, Zagreus, Artemis, Apollo, Hermes, Dionysus, Kratos and Deimos. As a mortal, he was tasked with twelve labors in order to gain redemption for the murder of his family. Being called to Mount Olympus in order to defend it with the Olympian Gods against Kratos and the Titans he brought from the past, Hercules would consider it his thirteenth and final labor to rid Olympus of Kratos once and for all.",
    "quote": "Think about it, brother. While I was stuck cleaning the Augean stables, he chose you to destroy Ares! Not convinced? How about this? While you were being crowned the God of War, I was sent to find an apple. They called them \"labors\". HA! Perhaps he did allow me to kill the Nemean Lion, but he made your name known amongst the people! A fierce warrior! A killer made hero! A MAN MADE A GOD! But this time, brother... This time I will destroy you. Call it my thirteenth and final labor. Soon I will become the God of War and claim the throne for myself! –Hercules to Kratos.",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Hércules (griego: Herakles/Ἡρακλῆς) era hijo de Zeus y Alcmena, y medio hermano por parte de padre de Atenea, Ares, Hefesto, Afrodita, Perséfone, Zagreo, Artemisa, Apolo, Hermes, Dioniso, Kratos y Deimos. Como mortal, se le encomendaron doce trabajos para obtener la redención por el asesinato de su familia. Al ser llamado al monte Olimpo para defenderlo junto a los dioses olímpicos contra Kratos y los titanes que este trajo del pasado, Hércules consideraría como su decimotercer y último trabajo librar al Olimpo de Kratos de una vez por todas.",
      "quote": "Piénsalo, hermano. ¡Mientras yo estaba atrapado limpiando los establos de Augías, él te eligió a ti para destruir a Ares! ¿No te convence? ¿Qué tal esto? Mientras a ti te coronaban como el Dios de la Guerra, a mí me enviaron a buscar una manzana. Los llamaban \"trabajos\". ¡JA! Tal vez sí me permitió matar al león de Nemea, ¡pero a ti te dio a conocer entre la gente! ¡Un guerrero feroz! ¡Un asesino convertido en héroe! ¡UN HOMBRE CONVERTIDO EN DIOS! Pero esta vez, hermano... Esta vez te destruiré. Llámalo mi decimotercer y último trabajo. ¡Pronto me convertiré en el Dios de la Guerra y reclamaré el trono para mí! –Hércules a Kratos.",
      "species": [
        "Dios (antes semidiós)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Heracles",
        "Hermano (según Kratos)",
        "El Más Poderoso de los Hombres",
        "Protector de la Humanidad"
      ]
    }
  },
  {
    "id": 42,
    "slug": "hydra",
    "name": "Hydra",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Υδρα",
    "image": "https://static.wikia.nocookie.net/godofwar/images/0/07/Attachment.jpg/revision/latest?cb=20110519053013",
    "voiceActor": "Michael Edward Johnson (creature vocals)",
    "gender": "Female",
    "species": [
      "Monsters"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War Sons of Sparta (mentioned)",
      "God of War",
      "God of War III (flashback)",
      "God of War (Novel)"
    ],
    "about": "The Hydra was a multi-headed sea monster that terrorized the Aegean Sea and was the first boss in God of War.",
    "quote": "Kratos, before you reach Athens, there is a task you must complete. This beast, this Hydra, it has terrorized my seas for far too long. –Poseidon.",
    "es": {
      "realm": "Monte Olimpo",
      "about": "La Hidra era un monstruo marino de múltiples cabezas que aterrorizaba el mar Egeo y fue el primer jefe de God of War.",
      "quote": "Kratos, antes de que llegues a Atenas, hay una tarea que debes completar. Esta bestia, esta Hidra, ha aterrorizado mis mares durante demasiado tiempo. –Poseidón.",
      "species": [
        "Monstruos"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 43,
    "slug": "hyperion",
    "name": "Hyperion",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Ὑπερίων",
    "image": "https://static.wikia.nocookie.net/godofwar/images/7/7c/Hyperion_Cutout.png/revision/latest?cb=20260618115904",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God (Titan)"
    ],
    "aliases": [
      "Master of Sun",
      "The father of the Sun and the Moon"
    ],
    "appearsIn": [
      "God of War II",
      "God of War: Chains of Olympus",
      "God of War III",
      "God of War: Sons of Sparta (mentioned)"
    ],
    "about": "Hyperion (Greek: Ὑπερίων) was one of the almighty Titans of Greek Mythology and a character in the God of War Series. He was the master of the sun before his son Helios, and is also the father of Eos and Selene.",
    "quote": null,
    "es": {
      "realm": "Monte Olimpo",
      "about": "Hiperión (griego: Ὑπερίων) fue uno de los todopoderosos titanes de la mitología griega y un personaje de la saga God of War. Fue el señor del sol antes que su hijo Helios, y también es el padre de Eos y Selene.",
      "quote": null,
      "species": [
        "Dios (titán)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Amo del Sol",
        "El padre del Sol y la Luna"
      ]
    }
  },
  {
    "id": 44,
    "slug": "icarus",
    "name": "Icarus",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Ικαρος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/e/e7/Icarus.jpg/revision/latest?cb=20080527213519",
    "voiceActor": "Bob Joles",
    "gender": "Male",
    "species": [
      "Mortal"
    ],
    "aliases": [
      "King Minos' architect"
    ],
    "appearsIn": [
      "God of War II",
      "God of War III (mentioned)"
    ],
    "about": null,
    "quote": "Go back. Go back, warrior. There is no passage here. You will never make it across. You think you can, but you cannot. Do you hear me?! It is my wings that will make it across. It is my test! Do you not know who I am‽ Have you not heard of Icarus? It is my fate to make it across, NONE OTHER! This is my test! The sisters will grant me an audience, not you. You will die, white warrior! You will die! –Icarus.",
    "es": {
      "realm": "Monte Olimpo",
      "about": null,
      "quote": "Regresa. Regresa, guerrero. Aquí no hay paso. Nunca lograrás cruzar. Crees que puedes, pero no puedes. ¡¿Me oyes?! Son mis alas las que lograrán cruzar. ¡Es mi prueba! ¿¡No sabes quién soy!? ¿No has oído hablar de Ícaro? Es mi destino cruzar, ¡DE NADIE MÁS! ¡Esta es mi prueba! Las hermanas me concederán una audiencia a mí, no a ti. ¡Morirás, guerrero blanco! ¡Morirás! –Ícaro.",
      "species": [
        "Mortal"
      ],
      "gender": "Masculino",
      "aliases": [
        "Arquitecto del rey Minos"
      ]
    }
  },
  {
    "id": 45,
    "slug": "king-aeacus",
    "name": "King Aeacus",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Κινγ Αιακος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/a/a9/King_Aecus.jpg/revision/latest/scale-to-width-down/700?cb=20110807064027",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Judge of the Underworld"
    ],
    "aliases": [],
    "appearsIn": [],
    "about": null,
    "quote": "King Aeacus has found you wanting. –King Minos",
    "es": {
      "realm": "Monte Olimpo",
      "about": null,
      "quote": "El rey Éaco te ha hallado indigno. –El rey Minos",
      "species": [
        "Juez del Inframundo"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 46,
    "slug": "king-minos",
    "name": "King Minos",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Κινγ Μινος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/2/24/King_Minos.jpg/revision/latest/scale-to-width-down/564?cb=20110807061655",
    "voiceActor": "Mark Moseley",
    "gender": "Male",
    "species": [
      "Judge of the Underworld"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War III",
      "God of War Ragnarök",
      "God of War Ragnarök: Valhalla"
    ],
    "about": null,
    "quote": "By the Gods of Olympus, and order of Zeus, we are the Three Judges. Face your final judgement, mortal. King Aeacus has found you wanting. King Rhadamanthus has found you worthy. It falls to me, King Minos, to make the final decision. Your future is cloaked in shadow. The realm of the afterlife is not yet ready for you. Beyond that door waits your destiny. –King Minos",
    "es": {
      "realm": "Monte Olimpo",
      "about": null,
      "quote": "Por los dioses del Olimpo, y por orden de Zeus, somos los Tres Jueces. Enfrenta tu juicio final, mortal. El rey Éaco te ha hallado indigno. El rey Radamantis te ha hallado digno. Me corresponde a mí, el rey Minos, tomar la decisión final. Tu futuro está envuelto en sombras. El reino del más allá aún no está listo para ti. Tras esa puerta te espera tu destino. –El rey Minos",
      "species": [
        "Juez del Inframundo"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 47,
    "slug": "king-rhadamanthus",
    "name": "King Rhadamanthus",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Κινγ Ραδαμανθος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/5/57/King_Rhadamanthus.jpg/revision/latest/scale-to-width-down/700?cb=20131224115529",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Judge of the Underworld"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War III",
      "God of War Ragnarök: Valhalla"
    ],
    "about": null,
    "quote": "King Rhadamanthus has found you worthy. –King Minos.",
    "es": {
      "realm": "Monte Olimpo",
      "about": null,
      "quote": "El rey Radamantis te ha hallado digno. –El rey Minos.",
      "species": [
        "Juez del Inframundo"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 48,
    "slug": "lahkesis",
    "name": "Lahkesis",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Λάχεσις",
    "image": "https://static.wikia.nocookie.net/godofwar/images/7/7c/Laquesis_concept_art.jpg/revision/latest?cb=20220214190536",
    "voiceActor": "Leigh-Allyn Baker",
    "gender": "Female",
    "species": [
      "God (Primordial)"
    ],
    "aliases": [
      "Executioner of the Threads of Fate"
    ],
    "appearsIn": [
      "God of War: Chains of Olympus (mentioned)",
      "God of War: Ghost of Sparta (mentioned)",
      "God of War II",
      "God of War III",
      "God of War (2018) (mentioned)",
      "God of War Ragnarök (mentioned)",
      "God of War II (Novel)"
    ],
    "about": "Lahkesis (Greek: Λάχεσις) is one of the three Primordial Sisters of Fate, the middle sister and the executioner of the threads of fate, as she is the one who ends the lives of every mortal, God, and Titan, before releasing them to the afterlife. She is defeated along with her older sister, Atropos, when they are trapped in their mirror as Kratos breaks it.",
    "quote": "It was I who deemed that the Titans lose the Great War…and I who have allowed you to come this far. –Lahkesis",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Lahkesis (griego: Λάχεσις) es una de las tres Hermanas Primordiales del Destino, la hermana del medio y la ejecutora de los hilos del destino, ya que es ella quien pone fin a la vida de cada mortal, dios y titán, antes de liberarlos hacia el más allá. Es derrotada junto con su hermana mayor, Átropos, cuando quedan atrapadas en su espejo al romperlo Kratos.",
      "quote": "Fui yo quien decidió que los titanes perdieran la Gran Guerra… y yo quien te ha permitido llegar hasta aquí. –Lahkesis",
      "species": [
        "Dios (primordial)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Ejecutora de los Hilos del Destino"
      ]
    }
  },
  {
    "id": 49,
    "slug": "last-spartan",
    "name": "Last Spartan",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Λαστ Σπαρταν",
    "image": "https://static.wikia.nocookie.net/godofwar/images/7/78/The_Last_Spartan_cropped.png/revision/latest/scale-to-width-down/455?cb=20260615095409",
    "voiceActor": "God of War: Ghost of Sparta: Gideon Emery",
    "gender": "Male",
    "species": [
      "Mortal"
    ],
    "aliases": [
      "Last Spartan (Earned as he was the only spartan to survive Zeus's attack)"
    ],
    "appearsIn": [
      "God of War: Ghost of Sparta",
      "God of War II",
      "God of War III (voice)"
    ],
    "about": "The Last Spartan was a young Spartan commander who was very loyal to Kratos during his time as the God of War and was one of the few people Kratos actually cared for besides his family. He received his title due to him being the only mortal Spartan survivor after the betrayal of Zeus.",
    "quote": "I have faith that our brothers of Sparta will live on through the true God of War. –The Last Spartan.",
    "es": {
      "realm": "Monte Olimpo",
      "about": "El Último Espartano era un joven comandante espartano que fue muy leal a Kratos durante su época como el Dios de la Guerra y fue una de las pocas personas que a Kratos realmente le importaban además de su familia. Recibió su título por ser el único espartano mortal sobreviviente tras la traición de Zeus.",
      "quote": "Tengo fe en que nuestros hermanos de Esparta perdurarán a través del verdadero Dios de la Guerra. –El Último Espartano.",
      "species": [
        "Mortal"
      ],
      "gender": "Masculino",
      "aliases": [
        "Último Espartano (ganado por ser el único espartano que sobrevivió al ataque de Zeus)"
      ]
    }
  },
  {
    "id": 50,
    "slug": "lysandra",
    "name": "Lysandra",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Λυσάνδρα",
    "image": "https://static.wikia.nocookie.net/godofwar/images/2/20/KratosWife%26Child.jpg/revision/latest/scale-to-width-down/452?cb=20080528071653",
    "voiceActor": "Gwendoline Yeo (God of War & God of War III)",
    "gender": "Female",
    "species": [
      "Mortal"
    ],
    "aliases": [
      "Wife of Kratos"
    ],
    "appearsIn": [
      "God of War Sons of Sparta (mentioned)",
      "God of War: Ascension (illusion)",
      "God of War: Chains of Olympus (flashback)",
      "God of War (flashback and illusion)",
      "God of War II (illusion)",
      "God of War III (illusion)",
      "God of War Ragnarök: Valhalla (mentioned)",
      "God of War (DC/Wildstorm comic series)"
    ],
    "about": "Lysandra (Greek: Λυσάνδρα) was a Spartan woman who was Kratos' first wife and mother to his daughter, Calliope. Though Kratos had many women in his time, he felt truly connected to Lysandra and considered her his soul mate and true love. Lysandra was also the only person who did not fear Kratos during his time as a brutal Spartan captain, and, on more than one occasion, questioned his reasons for the reckless slaughter of many innocent people.",
    "quote": "You can see the light, it is changing you, it is time to lay your fears to rest, the light reveals the truth, the power of forgiveness comes from within. To be forgiven you must find the power to forgive yourself. –Lysandra, in Kratos' Psyche",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Lysandra (griego: Λυσάνδρα) era una mujer espartana que fue la primera esposa de Kratos y madre de su hija, Calliope. Aunque Kratos tuvo muchas mujeres en su vida, se sentía verdaderamente unido a Lysandra y la consideraba su alma gemela y su verdadero amor. Lysandra también fue la única persona que no temía a Kratos durante su época como brutal capitán espartano y, en más de una ocasión, cuestionó sus razones para la matanza despiadada de muchas personas inocentes.",
      "quote": "Puedes ver la luz, te está cambiando, es hora de dejar descansar tus miedos, la luz revela la verdad, el poder del perdón nace del interior. Para ser perdonado debes encontrar la fuerza para perdonarte a ti mismo. –Lysandra, en la psique de Kratos",
      "species": [
        "Mortal"
      ],
      "gender": "Femenino",
      "aliases": [
        "Esposa de Kratos"
      ]
    }
  },
  {
    "id": 51,
    "slug": "nike",
    "name": "Nike",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Νίκη",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/9e/Nike_goddess_of_victory.jpg/revision/latest?cb=20111106024112",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "God (Olympian)"
    ],
    "aliases": [
      "Νίκη"
    ],
    "appearsIn": [
      "God of War Sons of Sparta (mentioned)",
      "God of War: Chains of Olympus (Statue)",
      "God of War II (mentioned)",
      "God of War III (Mural)"
    ],
    "about": "Nike (Greek: Νίκη) is the Olympian Goddess of Victory. She is the daughter of the Oceanid Styx and Titan Pallas.",
    "quote": "Victory favors you, Kratos. But you must grab hold of your destiny and command it. –Gaia",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Nike (griego: Νίκη) es la diosa olímpica de la victoria. Es hija de la oceánide Estigia y del titán Palas.",
      "quote": "La victoria te favorece, Kratos. Pero debes tomar las riendas de tu destino y dominarlo. –Gaia",
      "species": [
        "Dios (olímpico)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Νίκη"
      ]
    }
  },
  {
    "id": 52,
    "slug": "oceanus",
    "name": "Oceanus",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Οκεανος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/5/57/Oceanus-render.png/revision/latest/scale-to-width-down/700?cb=20141029200036",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God (Titan)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Sons of Sparta (mentioned only)",
      "God of War III"
    ],
    "about": "Oceanus ( Ὠκεανός), known as the great river girdling the world, was a God of War II character ultimately cut from its final version, before appearing in God of War III during the siege of Mount Olympus. He was ultimately killed by Hades when Kratos attempted to climb up the mountain to reach Zeus.",
    "quote": null,
    "es": {
      "realm": "Monte Olimpo",
      "about": "Océano ( Ὠκεανός), conocido como el gran río que rodea el mundo, era un personaje de God of War II que finalmente se eliminó de su versión final, antes de aparecer en God of War III durante el asedio del monte Olimpo. Finalmente fue asesinado por Hades cuando Kratos intentaba escalar la montaña para llegar hasta Zeus.",
      "quote": null,
      "species": [
        "Dios (titán)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 53,
    "slug": "pandora",
    "name": "Pandora",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Πανδορα",
    "image": "https://static.wikia.nocookie.net/godofwar/images/1/1b/Pandora_transparent_.png/revision/latest?cb=20240212062008",
    "voiceActor": "Natalie Lander",
    "gender": "Female",
    "species": [
      "Immortal"
    ],
    "aliases": [
      "Key of Pandora's Box",
      "Thing (by Zeus)",
      "Object (by Zeus)",
      "Child (by Kratos and her Father)",
      "Little Whore (by Hera)",
      "Beloved Daughter (by her Father)",
      "The Blacksmith's Daughter (by Kratos and Týr)"
    ],
    "appearsIn": [
      "God of War III",
      "God of War Ragnarök (Mentioned only)",
      "God of War Ragnarök: Valhalla (Flashback only)"
    ],
    "about": "Pandora (Πανδώρα, \"All gifts\") is the living key, creation and adoptive daughter of Hephaestus and the tritagonist of God of War III'.",
    "quote": "Hope is what makes us strong. It is why we are here. It's what we fight with when all else is lost. –Pandora",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Pandora (Πανδώρα, \"Todos los dones\") es la llave viviente, creación e hija adoptiva de Hefesto y la tritagonista de God of War III'.",
      "quote": "La esperanza es lo que nos hace fuertes. Es la razón por la que estamos aquí. Es con lo que luchamos cuando todo lo demás está perdido. –Pandora",
      "species": [
        "Inmortal"
      ],
      "gender": "Femenino",
      "aliases": [
        "Llave de la Caja de Pandora",
        "Cosa (según Zeus)",
        "Objeto (según Zeus)",
        "Niña (según Kratos y su padre)",
        "Putita (según Hera)",
        "Hija Amada (según su padre)",
        "La Hija del Herrero (según Kratos y Týr)"
      ]
    }
  },
  {
    "id": 54,
    "slug": "peirithous",
    "name": "Peirithous",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Πειρίθοος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/3/33/09_AndrewKim_Peirithous.jpg/revision/latest/scale-to-width-down/480?cb=20100714123030",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Demigod"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War III"
    ],
    "about": "Peirithous (Greek: Πειρίθοος) was a Demigod who was kept prisoner of Hades, condemned to eternal suffering in the Underworld.",
    "quote": "I have suffered enough, Spartan. Hades, he sent me to this eternal torture. My prison of tinder. But now that you are here, you can free me! All I have left is my bow. Please, free me and it is yours. –Peirithous.",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Peirithous (griego: Πειρίθοος) era un semidiós que se encontraba prisionero de Hades, condenado al sufrimiento eterno en el Inframundo.",
      "quote": "Ya he sufrido suficiente, espartano. Hades me envió a esta tortura eterna. Mi prisión de yesca. ¡Pero ahora que estás aquí, puedes liberarme! Lo único que me queda es mi arco. Por favor, libérame y será tuyo. –Peirithous.",
      "species": [
        "Semidiós"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 55,
    "slug": "persephone",
    "name": "Persephone",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Περσεφόνη",
    "image": "https://static.wikia.nocookie.net/godofwar/images/8/8b/Persephone.jpg/revision/latest?cb=20080322034753",
    "voiceActor": "Marina Gordon",
    "gender": "Female",
    "species": [
      "Goddess (Olympian)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Chains of Olympus",
      "God of War III (Voice & Corpse)",
      "God of War Ragnarök: Valhalla (mentioned)"
    ],
    "about": "Persephone (Greek: Περσεφόνη) is the Olympian Goddess of Spring, Queen of the Underworld, and the main antagonist in God of War: Chains of Olympus.",
    "quote": "Do you think it was my choice to wed a man I did not love? Live a life I did not choose? I was betrayed by the very gods that once saw me as their own. But no more. –Persephone.",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Perséfone (griego: Περσεφόνη) es la diosa olímpica de la primavera, reina del Inframundo y la antagonista principal de God of War: Chains of Olympus.",
      "quote": "¿Crees que fue mi elección casarme con un hombre al que no amaba? ¿Vivir una vida que no elegí? Fui traicionada por los mismos dioses que alguna vez me vieron como una de los suyos. Pero ya no más. –Perséfone.",
      "species": [
        "Diosa (olímpica)"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 56,
    "slug": "perses",
    "name": "Perses",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Περσες",
    "image": "https://static.wikia.nocookie.net/godofwar/images/a/a7/Fire_Titan_new1.jpg/revision/latest/scale-to-width-down/390?cb=20100714231604",
    "voiceActor": "none",
    "gender": "Male",
    "species": [
      "God (Titan)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War II",
      "God of War III"
    ],
    "about": "Perses (Πέρσης) is one of the great Titans that takes part in the Second Titanomachy in God of War III.",
    "quote": null,
    "es": {
      "realm": "Monte Olimpo",
      "about": "Perses (Πέρσης) es uno de los grandes titanes que participa en la Segunda Titanomaquia en God of War III.",
      "quote": null,
      "species": [
        "Dios (titán)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 57,
    "slug": "poseidon-s-princess",
    "name": "Poseidon's Princess",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Ποσειδον'ς Πρινκεσς",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/97/Poseidon%27s_Princess.jpg/revision/latest/scale-to-width-down/520?cb=20201201004439",
    "voiceActor": "Erin Mathews",
    "gender": "Female",
    "species": [
      "Mortal"
    ],
    "aliases": [
      "Dearest beloved (by Poseidon)"
    ],
    "appearsIn": [
      "God of War III"
    ],
    "about": "Poseidon's Princess is a minor character and unwilling ally of Kratos in God of War III. She is the enslaved concubine of Poseidon, found chained up in his personal quarters.",
    "quote": "Lord Kratos, do not leave me! –Poseidon Princess.",
    "es": {
      "realm": "Monte Olimpo",
      "about": "La Princesa de Poseidón es un personaje menor y aliada involuntaria de Kratos en God of War III. Es la concubina esclavizada de Poseidón, a quien se encuentra encadenada en sus aposentos personales.",
      "quote": "¡Señor Kratos, no me abandone! –Princesa de Poseidón.",
      "species": [
        "Mortal"
      ],
      "gender": "Femenino",
      "aliases": [
        "Querida amada (según Poseidón)"
      ]
    }
  },
  {
    "id": 58,
    "slug": "skorpius",
    "name": "Skorpius",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Σκορπιος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/9a/Scorpionus_1.jpg/revision/latest?cb=20120202152630",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Scorpion"
    ],
    "aliases": [
      "Queen of the Scorpions",
      "The Boreas Scorpion",
      "Scorpion of Boreas",
      "Skorpios"
    ],
    "appearsIn": [
      "God of War III"
    ],
    "about": "The Queen of the Scorpions, or Skorpius, dwells deep within the caverns below Mount Olympus.",
    "quote": "Ah, good, good. You have the icestorm. The Scorpion must be defeated. –Daedalus",
    "es": {
      "realm": "Monte Olimpo",
      "about": "La Reina de los Escorpiones, o Skorpius, habita en lo profundo de las cavernas bajo el monte Olimpo.",
      "quote": "Ah, bien, bien. Tienes la tormenta de hielo. El Escorpión debe ser derrotado. –Dédalo",
      "species": [
        "Escorpión"
      ],
      "gender": "Femenino",
      "aliases": [
        "Reina de los Escorpiones",
        "El Escorpión de Bóreas",
        "Escorpión de Bóreas",
        "Skorpios"
      ]
    }
  },
  {
    "id": 59,
    "slug": "tartarus",
    "name": "Tartarus",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Τάρταρος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/4/45/Hds_matte.jpg/revision/latest/scale-to-width-down/700?cb=20120227214246",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God (Primordial)"
    ],
    "aliases": [
      "Embodiment of Hell",
      "Lord of Darkness",
      "Warden of the Pit",
      "Abyssal King"
    ],
    "appearsIn": [],
    "about": "Tartarus (Greek: τάρταρος) is the Primordial entity of the Abyss and one of the first children of Chaos, brother to Gaia and Nyx and is also the deepest part of the Underworld, where most of the Titans were imprisoned by Zeus after their defeat in the first Titanomachy.",
    "quote": "Here is where the souls of the wicked are tortured in the pits of Tartarus, the wailing and agony of the damned, resonated deep throughout the bowels of the Underworld. –Gaia",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Tártaro (griego: τάρταρος) es la entidad primordial del Abismo y uno de los primeros hijos del Caos, hermano de Gea y Nix, y también es la parte más profunda del Inframundo, donde la mayoría de los titanes fueron encarcelados por Zeus tras su derrota en la primera Titanomaquia.",
      "quote": "Aquí es donde las almas de los malvados son torturadas en los fosos del Tártaro; los lamentos y la agonía de los condenados resonaban en lo más hondo de las entrañas del Inframundo. –Gaia",
      "species": [
        "Dios (primordial)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Encarnación del Infierno",
        "Señor de la Oscuridad",
        "Guardián del Abismo",
        "Rey Abisal"
      ]
    }
  },
  {
    "id": 60,
    "slug": "typhon",
    "name": "Typhon",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Τυφῶν",
    "image": "https://static.wikia.nocookie.net/godofwar/images/d/d6/Gow2-titan.jpg/revision/latest/scale-to-width-down/700?cb=20080308185335",
    "voiceActor": "Fred Tatasciore",
    "gender": "Male",
    "species": [
      "God (Titan)"
    ],
    "aliases": [
      "Typhoeus/Typhaon/Typhos",
      "King of the Monsters",
      "Storm Giant",
      "Bane of Zeus",
      "Personification of Volcanic Forces"
    ],
    "appearsIn": [
      "God of War Sons of Sparta (mentioned)",
      "God of War II",
      "God of War III (Voice Only)",
      "God of War II (Novel)"
    ],
    "about": "Typhon (Greek: Τυφῶν) is a Titan with power over the wind and storms, who was sealed in the mountains after he was defeated by Zeus after challenging the King of the Gods.",
    "quote": "Get out of my sight, Olympian... –Typhon",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Tifón (griego: Τυφῶν) es un titán con poder sobre el viento y las tormentas, que fue sellado en las montañas después de ser derrotado por Zeus tras desafiar al rey de los dioses.",
      "quote": "Fuera de mi vista, olímpico... –Tifón",
      "species": [
        "Dios (titán)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Tifeo/Tifaón/Tifos",
        "Rey de los Monstruos",
        "Gigante de la Tormenta",
        "Azote de Zeus",
        "Personificación de las Fuerzas Volcánicas"
      ]
    }
  },
  {
    "id": 61,
    "slug": "zephyrus",
    "name": "Zephyrus",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Ζέφυρος",
    "image": "https://static.wikia.nocookie.net/godofwar/images/1/1b/938607_20080304_790screen046-1-.jpg/revision/latest?cb=20100213194056",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God (Olympian)",
      "Fire Steeds"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Chains of Olympus",
      "God of War III",
      "God of War II (Novel) (mentioned only)"
    ],
    "about": "Zephyros (Greek: Ζέφυρος) is a horse-like Immortal being who is the Olympian God of the West Wind, Spring, Fertility, Procreation, Hope, Rebirth, Luck, Flowers, Bees and Honey. He walks the path of the Sun Chariot of Helios, and is one of the three horses that drives it, called the Fire Steeds.",
    "quote": null,
    "es": {
      "realm": "Monte Olimpo",
      "about": "Céfiro (griego: Ζέφυρος) es un ser inmortal con forma de caballo que es el dios olímpico del viento del oeste, la primavera, la fertilidad, la procreación, la esperanza, el renacimiento, la suerte, las flores, las abejas y la miel. Recorre la senda del Carro del Sol de Helios y es uno de los tres caballos que lo conducen, llamados los Corceles de Fuego.",
      "quote": null,
      "species": [
        "Dios (olímpico)",
        "Corceles de fuego"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 62,
    "slug": "aesop",
    "name": "Aesop",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚨᛖᛊᛟᛈ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/6/63/Aesop_pushkin01.jpg/revision/latest/scale-to-width-down/464?cb=20241211000558",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Mortal"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018) (mentioned)"
    ],
    "about": "Aesop was a Greek storyteller. Author of many popular fables that were shared all across Greece.",
    "quote": "There was a man I knew of long ago... His stories were brief and purposeful. –Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Esopo fue un narrador griego. Autor de muchas fábulas populares que se compartían por toda Grecia.",
      "quote": "Hubo un hombre del que supe hace mucho tiempo... Sus historias eran breves y con propósito. –Kratos",
      "species": [
        "Mortal"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 63,
    "slug": "andvari",
    "name": "Andvari",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚨᚾᛞᚹᚨᚱᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/c/cb/ANDVARI2.png/revision/latest?cb=20180501142555",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Ring (formerly Dwarf)"
    ],
    "aliases": [
      "Andvari Ivaldison",
      "Ring",
      "Enchanter"
    ],
    "appearsIn": [
      "God of War (2018)",
      "God of War Ragnarök (Mentioned Only)"
    ],
    "about": "Andvari was a powerful enchanter and formerly served as an ally of Kratos and Atreus. He was Brok's friend some years prior to the game. He is a supportive character in God of War (2018).",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Andvari era un poderoso encantador y en el pasado fue aliado de Kratos y Atreus. Fue amigo de Brok algunos años antes de los sucesos del juego. Es un personaje de apoyo en God of War (2018).",
      "quote": null,
      "species": [
        "Anillo (antes enano)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Andvari Ivaldison",
        "Anillo",
        "Encantador"
      ]
    }
  },
  {
    "id": 64,
    "slug": "ask",
    "name": "Ask",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚨᛊᚲ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/e/e0/Odin%2C_Lodur%2C_Hoenir_skabe_Ask_og_Embla_by_Fr%C3%B8lich.jpg/revision/latest/scale-to-width-down/700?cb=20240726180557",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Mortal"
    ],
    "aliases": [
      "Askr"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned only)"
    ],
    "about": "Ask was the first Midgardian man created by Odin.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Ask fue el primer hombre de Midgard creado por Odín.",
      "quote": null,
      "species": [
        "Mortal"
      ],
      "gender": "Masculino",
      "aliases": [
        "Askr"
      ]
    }
  },
  {
    "id": 65,
    "slug": "aurvandil",
    "name": "Aurvandil",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚨᚢᚱᚹᚨᚾᛞᛁᛚ",
    "image": null,
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Jötunn (Frost Giant)"
    ],
    "aliases": [],
    "appearsIn": [
      "The Lost Pages of Norse Myth (mentioned)",
      "God of War (2018) (mentioned)"
    ],
    "about": "Aurvandil was a renowned warrior in Norse Mythology, and the husband of Gróa.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Aurvandil fue un renombrado guerrero de la mitología nórdica y el esposo de Gróa.",
      "quote": null,
      "species": [
        "Jötunn (gigante de escarcha)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 66,
    "slug": "audumbla",
    "name": "Auðumbla",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚨᚢᚦᚢᛗᛒᛚᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/e/ee/Au%C3%B0umbla.jpg/revision/latest?cb=20230104153922",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Jötunn (Primordial, Animal Giant)"
    ],
    "aliases": [
      "Auðhumla",
      "Auðumla",
      "Audumbla",
      "Great Auðumbla",
      "Primordial Cow"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned)",
      "God of War: Ragnarok (skeleton appeared)"
    ],
    "about": "Auðumbla is the Primordial Cow that fed Ymir with her milk and was the one who formed Búri out of the ice.",
    "quote": "Great Auðumbla's udders that's the Unity Stone! –Mimir about Auðumbla",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Auðumbla es la vaca primordial que alimentó a Ymir con su leche y fue quien formó a Búri a partir del hielo.",
      "quote": "¡Por las ubres de la gran Auðumbla, esa es la Piedra de la Unidad! –Mimir sobre Auðumbla",
      "species": [
        "Jötunn (primordial, gigante animal)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Auðhumla",
        "Auðumla",
        "Audumbla",
        "Gran Auðumbla",
        "Vaca Primordial"
      ]
    }
  },
  {
    "id": 67,
    "slug": "bergelmir",
    "name": "Bergelmir",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᛖᚱᚷᛖᛚᛗᛁᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/f/fb/Bergelmir_%28God_of_War_2018%29.png/revision/latest?cb=20180608144631",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Jötunn (Frost Giant)"
    ],
    "aliases": [
      "Bergelmir Thrúðgelmirson"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned only)"
    ],
    "about": "Bergelmir also known as Bergelmir Thrúðgelmirson (Translation: Bergelmir, Son of Thrúðgelmir) and Bergelmir the Beloved, was a Frost Giant and the founder of Jötunheim. He is a character featured in God of War (2018).",
    "quote": "Bergelmir and his queen survived the flood of Ymir's blood, and founded Jötunheim. They did NOT seek revenge, except to live and see his kind prosper, \"Bergelmir the Beloved\" ---- A happy ending! –Codex",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Bergelmir, también conocido como Bergelmir Thrúðgelmirson (traducción: Bergelmir, hijo de Thrúðgelmir) y Bergelmir el Amado, fue un gigante de escarcha y el fundador de Jötunheim. Es un personaje que aparece en God of War (2018).",
      "quote": "Bergelmir y su reina sobrevivieron a la inundación de la sangre de Ymir y fundaron Jötunheim. NO buscaron venganza, salvo vivir y ver prosperar a los de su especie, \"Bergelmir el Amado\" ---- ¡Un final feliz! –Códice",
      "species": [
        "Jötunn (gigante de escarcha)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Bergelmir Thrúðgelmirson"
      ]
    }
  },
  {
    "id": 68,
    "slug": "blodughadda",
    "name": "Blóðughadda",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᛚᛟᚦᚢᚷᚺᚨᛞᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/d/d9/Baby_Heimdall_and_Odin.jpg/revision/latest/scale-to-width-down/570?cb=20240205220639",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "1/2 Goddess (Aesir)",
      "1/2 Jötunn"
    ],
    "aliases": [
      "Blóðughadda Ægirsdottir"
    ],
    "appearsIn": [
      "God of War (2018) (mention)",
      "God of War Ragnarök (mention)"
    ],
    "about": "Blóðughadda is a Norse Goddess of Waves and one of the Nine Daughters of Ægir and Rán.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Blóðughadda es una diosa nórdica de las olas y una de las Nueve Hijas de Ægir y Rán.",
      "quote": null,
      "species": [
        "1/2 diosa (Aesir)",
        "1/2 jötunn"
      ],
      "gender": "Femenino",
      "aliases": [
        "Blóðughadda Ægirsdottir"
      ]
    }
  },
  {
    "id": 69,
    "slug": "borr",
    "name": "Borr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᛟᚱ",
    "image": null,
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God (Aesir)"
    ],
    "aliases": [
      "Borr Búrison",
      "Bor",
      "Bör",
      "Bur"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned)"
    ],
    "about": "Borr, also known as Borr Búrison (Translation: Borr, Son of Búri) is the Creator God, son of Búri and the grandson of Ymir. He was a member of the Aesir Royal Family, being father of Odin, Vili, and Vé.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Borr, también conocido como Borr Búrison (traducción: Borr, hijo de Búri), es el dios creador, hijo de Búri y nieto de Ymir. Fue miembro de la familia real Aesir, siendo padre de Odín, Vili y Vé.",
      "quote": null,
      "species": [
        "Dios (Aesir)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Borr Búrison",
        "Bor",
        "Bör",
        "Bur"
      ]
    }
  },
  {
    "id": 70,
    "slug": "bragi",
    "name": "Bragi",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᚱᚨᚷᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/1/1b/Bragi.PNG/revision/latest?cb=20210918003352",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God (Aesir)"
    ],
    "aliases": [
      "Bragr"
    ],
    "appearsIn": [
      "The Lost Pages of Norse Myth (mentioned only)"
    ],
    "about": "Bragi (Old Norse: Brɑɣe) is Norse God of Poetry and Music, and husband of Iðunn.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Bragi (nórdico antiguo: Brɑɣe) es el dios nórdico de la poesía y la música, y esposo de Iðunn.",
      "quote": null,
      "species": [
        "Dios (Aesir)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Bragr"
      ]
    }
  },
  {
    "id": 71,
    "slug": "brenna-daudi",
    "name": "Brenna Dauði",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᚱᛖᚾᚨ᛫ᛞᚨᚢᚦᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/d/d3/FezfGXTWQAIJYgB.jpeg/revision/latest/scale-to-width-down/394?cb=20230107113107",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Troll (Fire)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018)"
    ],
    "about": "Brenna Dauði is a Fire Troll and a boss in God of War (2018).",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Brenna Dauði es un trol de fuego y un jefe en God of War (2018).",
      "quote": null,
      "species": [
        "Trol (de fuego)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 72,
    "slug": "bylgja",
    "name": "Bylgja",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᛁᛚᚷᛃᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/d/d9/Baby_Heimdall_and_Odin.jpg/revision/latest/scale-to-width-down/570?cb=20240205220639",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "1/2 Goddess (Aesir)",
      "1/2 Jötunn"
    ],
    "aliases": [
      "Bylgja Ægirsdottir"
    ],
    "appearsIn": [
      "God of War (2018) (mention)",
      "God of War Ragnarök (mention)"
    ],
    "about": "Bylgja is a Norse Goddess of Waves and one of the Nine Daughters of Ægir and Rán.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Bylgja es una diosa nórdica de las olas y una de las Nueve Hijas de Ægir y Rán.",
      "quote": null,
      "species": [
        "1/2 diosa (Aesir)",
        "1/2 jötunn"
      ],
      "gender": "Femenino",
      "aliases": [
        "Bylgja Ægirsdottir"
      ]
    }
  },
  {
    "id": 73,
    "slug": "chaurli",
    "name": "Chaurli",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚲᚺᚨᚢᚱᛚᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/c/c3/FSlM3bsWUAYKE_j.jpeg/revision/latest/scale-to-width-down/394?cb=20230107163209",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Tortoise"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War",
      "God of War: Ragnarök"
    ],
    "about": "Chaurli is the giant tortoise that lives above Freya's home, as thanks for having saved her, since she was confined to the forests of Midgard, without escaping from the Aesir.",
    "quote": "Atreus: How's it going, Chaurli? Is your witch friend here? Kratos: What is that name? Atreus: That's what he told me it was - or what it sounded like in my head anyway. Chaurli! –Atreus and Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Chaurli es la tortuga gigante que vive sobre el hogar de Freya, en agradecimiento por haberla salvado, ya que ella estaba confinada a los bosques de Midgard, sin poder escapar de los Aesir.",
      "quote": "Atreus: ¿Cómo te va, Chaurli? ¿Está aquí tu amiga la bruja? Kratos: ¿Qué nombre es ese? Atreus: Es el que él me dijo, o al menos así sonó en mi cabeza. ¡Chaurli! –Atreus y Kratos",
      "species": [
        "Tortuga"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 74,
    "slug": "dagsetr",
    "name": "Dagsetr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛞᚨᚷᛊᛖᛏᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/2/2e/Dagsetr_God_of_War_2018.jpg/revision/latest/scale-to-width-down/700?cb=20180708005847",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Dragon"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018)",
      "God of War Ragnarök"
    ],
    "about": "Dagsetr is a male Dragon and the flying mount of Baldur in God of War (2018).",
    "quote": "Freya: Know anything about the frozen dragon? Kratos: It… was Baldur’s. He took Atreus, and tried to escape with him. We fought on its back. Freya: The things he put you through… Kratos: Odin gave the commands. The blame is his. –Freya to Kratos at Demise of Dagestr",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Dagsetr es un dragón macho y la montura voladora de Baldur en God of War (2018).",
      "quote": "Freya: ¿Sabes algo del dragón congelado? Kratos: Era… de Baldur. Se llevó a Atreus e intentó escapar con él. Luchamos sobre su lomo. Freya: Las cosas que te hizo pasar… Kratos: Odín daba las órdenes. La culpa es suya. –Freya a Kratos en Demise of Dagestr",
      "species": [
        "Dragón"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 75,
    "slug": "daudi-hamarr",
    "name": "Dauði Hamarr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛞᚨᚢᚦᛁ᛫ᚺᚨᛗᚨᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/c/c0/God_of_War_20180518163519.jpg/revision/latest/scale-to-width-down/700?cb=20180519040209",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Troll (Fire)"
    ],
    "aliases": [
      "Death's Hammer"
    ],
    "appearsIn": [
      "God of War (2018)"
    ],
    "about": "Dauði Hamarr, also known as Death's Hammer, is a fire Troll and an optional boss in God of War (2018).",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Dauði Hamarr, también conocido como el Martillo de la Muerte, es un trol de fuego y un jefe opcional en God of War (2018).",
      "quote": null,
      "species": [
        "Trol (de fuego)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Martillo de la Muerte"
      ]
    }
  },
  {
    "id": 76,
    "slug": "daudi-munr",
    "name": "Dauði Munr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛞᚨᚢᚦᛁ᛫ᛗᚢᚾᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/7/72/Dau%C3%B0i_Munr.jpg/revision/latest/scale-to-width-down/700?cb=20250711105132",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Troll (Fire)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018)"
    ],
    "about": "Dauði Munr is a Troll and a boss in God of War (2018).",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Dauði Munr es un trol y un jefe en God of War (2018).",
      "quote": null,
      "species": [
        "Trol (de fuego)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 77,
    "slug": "death-eater",
    "name": "Death Eater",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛞᛖᚨᚦ᛫ᛖᚨᛏᛖᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/a/ad/God_of_War_20180520171016.jpg/revision/latest/scale-to-width-down/700?cb=20180521005731",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Troll (Stone)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018)"
    ],
    "about": "Death Eater is a Troll and an optional boss in God of War (2018).",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Death Eater es un trol y un jefe opcional en God of War (2018).",
      "quote": null,
      "species": [
        "Trol (de piedra)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 78,
    "slug": "drofn",
    "name": "Drǫfn",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛞᚱᛟᚠᚾ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/d/d9/Baby_Heimdall_and_Odin.jpg/revision/latest/scale-to-width-down/570?cb=20240205220639",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "1/2 Goddess (Aesir)",
      "1/2 Jötunn"
    ],
    "aliases": [
      "Drǫfn Ægirsdottir"
    ],
    "appearsIn": [
      "God of War (2018) (mention)",
      "God of War Ragnarök (mention)"
    ],
    "about": "Drǫfn is a Norse Goddess of Waves and one of the Nine Daughters of Ægir and Rán.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Drǫfn es una diosa nórdica de las olas y una de las Nueve Hijas de Ægir y Rán.",
      "quote": null,
      "species": [
        "1/2 diosa (Aesir)",
        "1/2 jötunn"
      ],
      "gender": "Femenino",
      "aliases": [
        "Drǫfn Ægirsdottir"
      ]
    }
  },
  {
    "id": 79,
    "slug": "durathror",
    "name": "Duraþrór",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛞᚢᚱᚨᚦᚱᛟᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/4/46/Durathor.png/revision/latest/scale-to-width-down/560?cb=20240125225354",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Seasonal Stag"
    ],
    "aliases": [
      "One of the Stags Across the Realms",
      "Stag of Winter",
      "The Thriving Slumber"
    ],
    "appearsIn": [
      "God of War (2018)",
      "God of War Ragnarök"
    ],
    "about": "Duraþrór is the one of the stags across the Nine Realms. He appears as a statue in God of War (2018) and physically in God of War Ragnarök.",
    "quote": "A stag of the World Tree who watches the gates of Jötunheim (Where Giants come from). This really IS the Giants' mountain! –Codex",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Duraþrór es uno de los ciervos de los Nueve Reinos. Aparece como una estatua en God of War (2018) y en persona en God of War Ragnarök.",
      "quote": "Un ciervo del Árbol del Mundo que vigila las puertas de Jötunheim (de donde vienen los gigantes). ¡Esta SÍ es la montaña de los gigantes! –Códice",
      "species": [
        "Ciervo de las estaciones"
      ],
      "gender": "Masculino",
      "aliases": [
        "Uno de los Ciervos a Través de los Reinos",
        "Ciervo del Invierno",
        "El Sueño Próspero"
      ]
    }
  },
  {
    "id": 80,
    "slug": "dufa",
    "name": "Dúfa",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛞᚢᚠᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/d/d9/Baby_Heimdall_and_Odin.jpg/revision/latest/scale-to-width-down/570?cb=20240205220639",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "1/2 Goddess (Aesir)",
      "1/2 Jötunn"
    ],
    "aliases": [
      "Dúfa Ægirsdottir"
    ],
    "appearsIn": [
      "God of War (2018) (mention)",
      "God of War Ragnarök (mention)"
    ],
    "about": "Dúfa is a Norse Goddess of Waves and one of the Nine Daughters of Ægir and Rán.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Dúfa es una diosa nórdica de las olas y una de las Nueve Hijas de Ægir y Rán.",
      "quote": null,
      "species": [
        "1/2 diosa (Aesir)",
        "1/2 jötunn"
      ],
      "gender": "Femenino",
      "aliases": [
        "Dúfa Ægirsdottir"
      ]
    }
  },
  {
    "id": 81,
    "slug": "eir",
    "name": "Eir",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛖᛁᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/5/5a/Scre239482o.png/revision/latest?cb=20240102131748",
    "voiceActor": "Sarah Sokolovic",
    "gender": "Female",
    "species": [
      "Midgardian (formerly)",
      "Valkyrie (formerly)",
      "Shield Maiden"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018)",
      "God of War: Ragnarök",
      "God of War Valhalla DLC"
    ],
    "about": "Eir is a Valkyrie introduced in God of War (2018). She is one of the nine Valkyries who have been cursed by Odin to remain in a corporal form, eventually driving them to insanity. As she became too dangerous, Eir eventually found herself sealed away by the Valkyrie Queen in Midgard. She is nevertheless freed by Kratos and Atreus after they engaged and defeated her physical form. Blessing them with her eternal gratitude, her spirit vanished and eventually reunited with her sisters.",
    "quote": "The Healer. Strange, for a Valkyrie. Very quiet. Very calm. Where her sisters were violent rapids, Eir was a gentle stream. She healed the wounds of both mortals and gods... and even a certain all-knowing sage who once drank too much and fell off a mountain. –Mimir's remarks about Eir",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Eir es una valquiria introducida en God of War (2018). Es una de las nueve valquirias que fueron malditas por Odín para permanecer en forma corpórea, lo que con el tiempo las llevó a la locura. Como se volvió demasiado peligrosa, Eir terminó sellada por la reina de las valquirias en Midgard. Sin embargo, Kratos y Atreus la liberan después de enfrentarse a su forma física y derrotarla. Bendiciéndolos con su eterna gratitud, su espíritu se desvaneció y finalmente se reunió con sus hermanas.",
      "quote": "La sanadora. Extraño, para una valquiria. Muy callada. Muy tranquila. Donde sus hermanas eran rápidos violentos, Eir era un arroyo apacible. Curaba las heridas tanto de mortales como de dioses... e incluso las de cierto sabio que todo lo sabe que una vez bebió demasiado y se cayó de una montaña. –Comentarios de Mimir sobre Eir",
      "species": [
        "Midgardiano (antes)",
        "Valquiria (antes)",
        "Doncella escudera"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 82,
    "slug": "eis",
    "name": "Eis",
    "mythology": "griega",
    "realm": "Mount Olympus",
    "nativeName": "Εις",
    "image": "https://static.wikia.nocookie.net/godofwar/images/7/74/Eis.png/revision/latest?cb=20260214200119",
    "voiceActor": "Jack Quaid",
    "gender": "Male",
    "species": [
      "Human"
    ],
    "aliases": [
      "Atreus of Sparta"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned)",
      "God of War Sons of Sparta"
    ],
    "about": "Atreus of Sparta or Eis was a Spartan and an Agoge Cadet. Atreus of Sparta fought in many wars alongside Kratos.",
    "quote": "All Spartans are great warriors. We train from birth. Our lives were discipline, duty, battle, and death. Life was grim, and we greeted it grimly. But Atreus of Sparta was unlike the rest of us. He wore a smile even in the worst of times. He was happy. He inspired us to hope... that though we were machines of war, yet there was humanity in us. Goodness. When the day came for him to lay down his life in battle, his sacrifice saved countless others, and turned the tide in our favor. I carried him home on his shield, and buried him with all the honors of Spartan custom. His memory was a comfort in dark times. –Kratos to Atreus",
    "es": {
      "realm": "Monte Olimpo",
      "about": "Atreus de Esparta, o Eis, fue un espartano y un cadete de la agogé. Atreus de Esparta luchó en muchas guerras junto a Kratos.",
      "quote": "Todos los espartanos son grandes guerreros. Entrenamos desde el nacimiento. Nuestras vidas eran disciplina, deber, batalla y muerte. La vida era sombría, y la recibíamos con seriedad. Pero Atreus de Esparta no era como el resto de nosotros. Sonreía incluso en los peores momentos. Era feliz. Nos inspiraba esperanza... de que, aunque éramos máquinas de guerra, aún había humanidad en nosotros. Bondad. Cuando llegó el día en que dio su vida en batalla, su sacrificio salvó a muchísimos otros e inclinó la balanza a nuestro favor. Lo llevé a casa sobre su escudo y lo enterré con todos los honores de la costumbre espartana. Su recuerdo fue un consuelo en tiempos oscuros. –Kratos a Atreus",
      "species": [
        "Humano"
      ],
      "gender": "Masculino",
      "aliases": [
        "Atreus de Esparta"
      ]
    }
  },
  {
    "id": 83,
    "slug": "embla",
    "name": "Embla",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛖᛗᛒᛚᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/e/e0/Odin%2C_Lodur%2C_Hoenir_skabe_Ask_og_Embla_by_Fr%C3%B8lich.jpg/revision/latest/scale-to-width-down/700?cb=20240726180557",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Mortal"
    ],
    "aliases": [
      "Elm"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned only)"
    ],
    "about": "Embla was the first Midgardian woman created by Odin.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Embla fue la primera mujer de Midgard creada por Odín.",
      "quote": null,
      "species": [
        "Mortal"
      ],
      "gender": "Femenino",
      "aliases": [
        "Olmo"
      ]
    }
  },
  {
    "id": 84,
    "slug": "fafnir",
    "name": "Fafnir",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚠᚨᚠᚾᛁᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/8/85/Fafnir.jpg/revision/latest/scale-to-width-down/700?cb=20180715141424",
    "voiceActor": null,
    "gender": "Unknown",
    "species": [
      "Dwarf (formerly)",
      "Dragon"
    ],
    "aliases": [
      "Fafnir Hreidmarson"
    ],
    "appearsIn": [
      "God of War (2018)"
    ],
    "about": "Fafnir was a Dwarf who turned into a Dragon. He makes his only appearance in God of War (2018).",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Fafnir fue un enano que se convirtió en dragón. Su única aparición es en God of War (2018).",
      "quote": null,
      "species": [
        "Enano (antes)",
        "Dragón"
      ],
      "gender": "Desconocido",
      "aliases": [
        "Fafnir Hreidmarson"
      ]
    }
  },
  {
    "id": 85,
    "slug": "fjorgyn",
    "name": "Fjörgyn",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚠᛃᛟᚱᚷᛁᚾ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/b/b6/Rites_of_fjorgyn.webp/revision/latest?cb=20240202181138",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Jötunn (Frost Giant)"
    ],
    "aliases": [
      "Fjörgyn Annarsdottir",
      "Hlödyn",
      "Jörð",
      "Mother Nature"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned only)",
      "God of War Ragnarök (mentioned only)",
      "God of War: Lore and Legends (mentioned only)"
    ],
    "about": "Fjörgyn was a Jötunn and Goddess who is the personification of Earth and Trees. She was also a wife of Odin, the mother of Thor and grandmother of Magni, Modi and Thrúd.",
    "quote": "Here we bear witness to the funeral rites of Fjörgyn of the Jötnar, goddess of the earth and trees. For her beauty she was seduced, for her love she was betrayed, and for her gift of life, her life was claimed. To the summit and across the bridge she shall be borne, where nevermore the Thunder may find her. –Rites of Fjörgyn",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Fjörgyn fue una jötunn y diosa que es la personificación de la tierra y los árboles. También fue esposa de Odín, madre de Thor y abuela de Magni, Modi y Thrúd.",
      "quote": "Aquí somos testigos de los ritos funerarios de Fjörgyn de los jötnar, diosa de la tierra y los árboles. Por su belleza fue seducida, por su amor fue traicionada, y por su don de la vida, su vida fue reclamada. A la cima y a través del puente será llevada, donde nunca más el Trueno podrá encontrarla. –Ritos de Fjörgyn",
      "species": [
        "Jötunn (gigante de escarcha)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Fjörgyn Annarsdottir",
        "Hlödyn",
        "Jörð",
        "Madre Naturaleza"
      ]
    }
  },
  {
    "id": 86,
    "slug": "freyr",
    "name": "Freyr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚠᚱᛅᚢᛦ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/1/15/Freyrgow.png/revision/latest/scale-to-width-down/419?cb=20230729034358",
    "voiceActor": "Brett Dalton",
    "gender": "Male",
    "species": [
      "God (Vanir)"
    ],
    "aliases": [
      "Freyr Njördson",
      "Frey",
      "Vanir Stranger",
      "Lord Freyr",
      "The Horned God",
      "Yngvi (by Freya)",
      "Little Fool (by Freya)",
      "Sizzles (by Heimdall)",
      "Pretty Man (by Lúnda)",
      "Lord of Second Chances (by Freya)",
      "Son (by Hildisvíni)"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned only)",
      "God of War Ragnarök"
    ],
    "about": "Freyr (Old Norse: Frey, Nordic: ᚠᚱᛅᚢᛦ), also known as Freyr Njördson (Translation: Freyr, Son of Njörd) and Yngvi, is the Vanir God of Rain and Fertility. He is the son of Njörd and Nerthus, the younger twin brother of Freya, and the uncle of Baldur.",
    "quote": "We lost everything to that maniac you called HUSBAND. The man's family set me on fire. –Freyr, to Freya",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Freyr (nórdico antiguo: Frey, rúnico: ᚠᚱᛅᚢᛦ), también conocido como Freyr Njördson (traducción: Freyr, hijo de Njörd) e Yngvi, es el dios Vanir de la lluvia y la fertilidad. Es hijo de Njörd y Nerthus, el hermano gemelo menor de Freya y el tío de Baldur.",
      "quote": "Lo perdimos todo por culpa de ese maníaco al que llamabas ESPOSO. La familia de ese hombre me prendió fuego. –Freyr, a Freya",
      "species": [
        "Dios (Vanir)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Freyr Njördson",
        "Frey",
        "Extraño vanir",
        "Lord Freyr",
        "El Dios Astado",
        "Yngvi (según Freya)",
        "Tontito (según Freya)",
        "Chispitas (según Heimdall)",
        "Guapetón (según Lúnda)",
        "Señor de las Segundas Oportunidades (según Freya)",
        "Hijo (según Hildisvíni)"
      ]
    }
  },
  {
    "id": 87,
    "slug": "grendel-of-the-ashes",
    "name": "Grendel of the Ashes",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚷᚱᛖᚾᛞᛖᛚ᛫ᛟᚠ᛫ᚦᛖ᛫ᚨᛊᚺᛖᛊ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/1/14/God_of_War_20180520164246.jpg/revision/latest/scale-to-width-down/700?cb=20180521005708",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Troll (Fire)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018)"
    ],
    "about": "Grendel of the Ashes is Troll and a boss in God of War (2018).",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Grendel of the Ashes es un trol y un jefe en God of War (2018).",
      "quote": null,
      "species": [
        "Trol (de fuego)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 88,
    "slug": "groa",
    "name": "Gróa",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚷᚱᛟᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/3/3a/Gr%C3%B3a_%28God_of_War_2018%29.png/revision/latest?cb=20180608144740",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Jötunn (Frost Giant)"
    ],
    "aliases": [],
    "appearsIn": [
      "The Lost Pages of Norse Myth (mentioned)",
      "God of War (2018) (mentioned and pictured)"
    ],
    "about": "Gróa was a powerful Jötunn seeress in Norse Mythology, and the wife of Aurvandil.",
    "quote": "All-Father, your presence honors me, but now is not the best time. –Gróa's last words",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Gróa fue una poderosa vidente jötunn en la mitología nórdica y la esposa de Aurvandil.",
      "quote": "Padre de Todo, tu presencia me honra, pero ahora no es el mejor momento. –Últimas palabras de Gróa",
      "species": [
        "Jötunn (gigante de escarcha)"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 89,
    "slug": "gunnr",
    "name": "Gunnr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚷᚢᚾᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/b/b9/Gunnr_Valhalla.jpg/revision/latest/scale-to-width-down/450?cb=20240217002431",
    "voiceActor": "Anna Campbell",
    "gender": "Female",
    "species": [
      "Valkyrie (formerly)",
      "Shield Maiden"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018)",
      "God of War: Ragnarök",
      "God of War Valhalla DLC"
    ],
    "about": "Gunnr is a Valkyrie introduced in God of War (2018). She is one of the nine Valkyries who have been cursed by Odin to remain in a corporal form, eventually driving them to insanity. As she became too dangerous, Gunnr eventually found herself sealed away by the Valkyrie Queen in Midgard. She is nevertheless freed by Kratos and Atreus after they engaged and defeated her physical form. Blessing them with her eternal gratitude, her spirit vanished and eventually reunited with her sisters.",
    "quote": "Mistress of War. After any conflict, big or small, she would be first on the scene, sussing out the worthy spirits for a free trip to Valhalla. A gruesome task, but she took great pride in it. Her judgement of the fallen was unparalleled, and an invaluable resource to Odin. She was one of his favorites. –Mimir’s remarks about Gunnr",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Gunnr es una valquiria introducida en God of War (2018). Es una de las nueve valquirias que fueron malditas por Odín para permanecer en forma corpórea, lo que con el tiempo las llevó a la locura. Como se volvió demasiado peligrosa, Gunnr terminó sellada por la reina de las valquirias en Midgard. Sin embargo, Kratos y Atreus la liberan después de enfrentarse a su forma física y derrotarla. Bendiciéndolos con su eterna gratitud, su espíritu se desvaneció y finalmente se reunió con sus hermanas.",
      "quote": "Señora de la Guerra. Después de cualquier conflicto, grande o pequeño, era la primera en llegar, buscando los espíritus dignos de un viaje gratis a Valhalla. Una tarea macabra, pero se enorgullecía mucho de ella. Su juicio sobre los caídos no tenía igual y era un recurso invaluable para Odín. Era una de sus favoritas. –Comentarios de Mimir sobre Gunnr",
      "species": [
        "Valquiria (antes)",
        "Doncella escudera"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 90,
    "slug": "hefring",
    "name": "Hefring",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᛖᚠᚱᛁᛜ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/d/d9/Baby_Heimdall_and_Odin.jpg/revision/latest/scale-to-width-down/570?cb=20240205220639",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "1/2 Goddess (Aesir)",
      "1/2 Jötunn"
    ],
    "aliases": [
      "Hefring Ægirsdottir"
    ],
    "appearsIn": [
      "God of War (2018) (mention)",
      "God of War Ragnarök (mention)"
    ],
    "about": "Hefring is a Norse Goddess of Waves and one of the Nine Daughters of Ægir and Rán.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Hefring es una diosa nórdica de las olas y una de las Nueve Hijas de Ægir y Rán.",
      "quote": null,
      "species": [
        "1/2 diosa (Aesir)",
        "1/2 jötunn"
      ],
      "gender": "Femenino",
      "aliases": [
        "Hefring Ægirsdottir"
      ]
    }
  },
  {
    "id": 91,
    "slug": "heimdall",
    "name": "Heimdall",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᛖᛁᛗᛞᚨᛚᛚ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/b/b9/Capture_d%E2%80%99%C3%A9cran_2023-01-26_%C3%A0_20.40.10.png/revision/latest/scale-to-width-down/359?cb=20230127120924",
    "voiceActor": "Scott Porter",
    "gender": "Male",
    "species": [
      "God (Aesir)"
    ],
    "aliases": [
      "Heimdall Odinson",
      "Heimdallr",
      "Rig",
      "Hallinskiði",
      "Gullintanni",
      "Vindlér & Vindhlér",
      "Aesir Stranger",
      "Lord Heimdall",
      "Brother (by his brothers)",
      "Fanatical Follower of Odin (by Mimir)",
      "Jerk (by Loki)",
      "Asshole (by Thrúd)",
      "Spiteful, Vicious Little Shit (by Mimir)",
      "Odin's Lap Dog (by Mimir)",
      "Prize-Winning Taint Stain with a Capital Stank (by Brok)",
      "Creep (by Lúnda)"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned and pictured only)",
      "God of War Ragnarök"
    ],
    "about": "Heimdall (Old Norse: Heimdallr, Nordic: ᚺᛖᛁᛗᛞᚨᛚᛚ), also known as Heimdall Odinson (Translation: Heimdall, Son of Odin), also famed as the Watchman of the Aesir, the Bearer of Gjallarhorn and the Herald of Ragnarök, was the Norse God of Foresight, Surveillance, Order and, Foreknowledge and Prince of Asgard. He is a member of the Aesir Royal Family, being the son of Odin and the Nine Daughters of Ægir and Rán, step-son of Frigg, younger half-brother of Thor and Týr, older half-brother of Baldur, uncle of Magni, Modi, Forseti and Thrúd.",
    "quote": "Don’t you know who I am? I am the watchman of the Aesir! The Herald of Ragnarök! –Heimdall during his duel with Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Heimdall (nórdico antiguo: Heimdallr, rúnico: ᚺᛖᛁᛗᛞᚨᛚᛚ), también conocido como Heimdall Odinson (traducción: Heimdall, hijo de Odín), y famoso también como el Vigía de los Aesir, el Portador del Gjallarhorn y el Heraldo del Ragnarök, fue el dios nórdico de la previsión, la vigilancia, el orden y la presciencia, y príncipe de Asgard. Es miembro de la familia real Aesir, siendo hijo de Odín y de las Nueve Hijas de Ægir y Rán, hijastro de Frigg, medio hermano menor de Thor y Týr, medio hermano mayor de Baldur, y tío de Magni, Modi, Forseti y Thrúd.",
      "quote": "¿Acaso no sabes quién soy? ¡Soy el vigía de los Aesir! ¡El Heraldo del Ragnarök! –Heimdall durante su duelo con Kratos",
      "species": [
        "Dios (Aesir)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Heimdall Odinson",
        "Heimdallr",
        "Rig",
        "Hallinskiði",
        "Gullintanni",
        "Vindlér & Vindhlér",
        "Extraño æsir",
        "Lord Heimdall",
        "Hermano (según sus hermanos)",
        "Seguidor fanático de Odín (según Mimir)",
        "Imbécil (según Loki)",
        "Pendejo (según Thrúd)",
        "Pequeña mierda rencorosa y despiadada (según Mimir)",
        "Perrito faldero de Odín (según Mimir)",
        "Mancha de entrepierna de primer premio con un Hedor con mayúscula (según Brok)",
        "Raro (según Lúnda)"
      ]
    }
  },
  {
    "id": 92,
    "slug": "hel",
    "name": "Hel",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᛖᛚ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/a/ac/Eric-j-fitch-gow-medallion-003_Hel.png/revision/latest?cb=20230207234905",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "3/4 Jötunn",
      "1/4 God"
    ],
    "aliases": [
      "Queen of Helheim"
    ],
    "appearsIn": [],
    "about": "Hel (Nordic: ᚺᛖᛚ) is the daughter of Loki and Angrboða. She is the Goddess of Death and future ruler of Helheim, succeeding Hræsvelgr.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Hel (rúnico: ᚺᛖᛚ) es la hija de Loki y Angrboða. Es la diosa de la muerte y futura soberana de Helheim, sucesora de Hræsvelgr.",
      "quote": null,
      "species": [
        "3/4 jötunn",
        "1/4 dios"
      ],
      "gender": "Femenino",
      "aliases": [
        "Reina de Helheim"
      ]
    }
  },
  {
    "id": 93,
    "slug": "hildisvini",
    "name": "Hildisvíni",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᛁᛚᛞᛁᛊᚹᛁᚾᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/d/dd/Hildisvini.png/revision/latest/scale-to-width-down/578?cb=20231108184254",
    "voiceActor": "James Mathis III",
    "gender": "Male",
    "species": [
      "God (Vanir)"
    ],
    "aliases": [
      "Hyndluljóð",
      "Vanir Archer",
      "Freya's Boar (by Kratos)",
      "My Friend (by Freya)",
      "Old Boar (by Mimir)",
      "Shifty Bastard (by Mimir)"
    ],
    "appearsIn": [
      "God of War (2018) (Boar form)",
      "God of War Ragnarök",
      "God of War Ragnarök: Valhalla (mentioned only)"
    ],
    "about": "Hildsvini is a Vanir God, archer and Freya's Advisor. While in Midgard, he was trapped in the form of a boar and was Freya's friend during her stay in the Wildwoods.",
    "quote": "Counselor to the Vanir. And yes, while exiled at Midgard, I was trapped in my boar form. And then you shot me. –Hildisvíni to Kratos and Atreus",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Hildsvini es un dios Vanir, arquero y consejero de Freya. Mientras estuvo en Midgard, quedó atrapado en la forma de un jabalí y fue amigo de Freya durante su estancia en los Bosques Salvajes.",
      "quote": "Consejero de los Vanir. Y sí, mientras estaba exiliado en Midgard, quedé atrapado en mi forma de jabalí. Y luego me disparaste. –Hildisvíni a Kratos y Atreus",
      "species": [
        "Dios (Vanir)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Hyndluljóð",
        "Arquero vanir",
        "Jabalí de Freya (según Kratos)",
        "Mi amigo (según Freya)",
        "Viejo jabalí (según Mimir)",
        "Bastardo escurridizo (según Mimir)"
      ]
    }
  },
  {
    "id": 94,
    "slug": "himinglaeva",
    "name": "Himinglæva",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᛁᛗᛁᛜᛚᚨᚹᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/d/d9/Baby_Heimdall_and_Odin.jpg/revision/latest/scale-to-width-down/570?cb=20240205220639",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "1/2 Goddess (Aesir)",
      "1/2 Jötunn"
    ],
    "aliases": [
      "Himinglæva Ægirsdottir"
    ],
    "appearsIn": [
      "God of War (2018) (mention)",
      "God of War Ragnarök (mention)"
    ],
    "about": "Himinglæva is a Norse Goddess of Waves and one of the Nine Daughters of Ægir and Rán.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Himinglæva es una diosa nórdica de las olas y una de las Nueve Hijas de Ægir y Rán.",
      "quote": null,
      "species": [
        "1/2 diosa (Aesir)",
        "1/2 jötunn"
      ],
      "gender": "Femenino",
      "aliases": [
        "Himinglæva Ægirsdottir"
      ]
    }
  },
  {
    "id": 95,
    "slug": "hrimthur",
    "name": "Hrimthur",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᚱᛁᛗᚦᚢᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/f/f6/Hrimthur_God_of_War_2018.png/revision/latest/scale-to-width-down/700?cb=20180611023613",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Jötunn"
    ],
    "aliases": [
      "Hrimthur Thamurson",
      "Mysterious Mason (by Freya)",
      "Giant in Disguise (by Freya)"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned and pictured only)",
      "God of War: Ragnarök (mentioned only)"
    ],
    "about": "Hrimthur was a Jötunn and the son of Thamur.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Hrimthur fue un jötunn e hijo de Thamur.",
      "quote": null,
      "species": [
        "Jötunn"
      ],
      "gender": "Masculino",
      "aliases": [
        "Hrimthur Thamurson",
        "Cantero misterioso (según Freya)",
        "Gigante disfrazado (según Freya)"
      ]
    }
  },
  {
    "id": 96,
    "slug": "hrungnir",
    "name": "Hrungnir",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᚱᚢᛜᚾᛁᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/9a/Hrungnir_God_of_War_2018.png/revision/latest?cb=20180611232907",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Jötunn (Stone Giant)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018)"
    ],
    "about": "Hrungnir was a Jötunn featured in God of War (2018).",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Hrungnir fue un jötunn que aparece en God of War (2018).",
      "quote": null,
      "species": [
        "Jötunn (gigante de piedra)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 97,
    "slug": "hraesvelgr",
    "name": "Hræsvelgr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᚱᚨᛊᚹᛖᛚᚷᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/d/dc/Hr%C3%A6svelgr.jpg.webp/revision/latest/scale-to-width-down/393?cb=20221206201257",
    "voiceActor": "Molly Scarpine (creature vocals; uncredited)",
    "gender": "Female",
    "species": [
      "Jötunn (Animal Giant)"
    ],
    "aliases": [
      "Helheim bird",
      "Corpse eater",
      "Aviary overlord",
      "Large bird (by Kratos)"
    ],
    "appearsIn": [
      "God of War (2018)",
      "God of War Ragnarök"
    ],
    "about": "Hræsvelgr is a Jötunn who appears in God of War (2018) and God of War Ragnarök. She is the current ruler of Helheim, also known by her title of \"Hel\", being perched atop its tallest building and gazing down upon the Realm and its residents.",
    "quote": "We have spoken to the eagle that presides here in Helheim. She watched from afar while I battled the Bridge Keeper in our prior journey. Now, by releasing Garm, we have opened six tears to Helheim. Hræsvelgr is not pleased, but does not appear to be our enemy. That is for the best. –Kratos' thoughts about Hræsvelgr",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Hræsvelgr es una jötunn que aparece en God of War (2018) y God of War Ragnarök. Es la actual soberana de Helheim, también conocida por su título de \"Hel\"; se posa en lo alto de su edificio más alto y contempla desde allí el reino y a sus habitantes.",
      "quote": "Hemos hablado con el águila que preside aquí en Helheim. Ella observó desde lejos mientras yo combatía al Guardián del Puente en nuestro viaje anterior. Ahora, al liberar a Garm, hemos abierto seis grietas hacia Helheim. Hræsvelgr no está complacida, pero no parece ser nuestra enemiga. Es lo mejor. –Pensamientos de Kratos sobre Hræsvelgr",
      "species": [
        "Jötunn (gigante animal)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Ave de Helheim",
        "Devorador de cadáveres",
        "Señor de las aves",
        "Pájaro grande (según Kratos)"
      ]
    }
  },
  {
    "id": 98,
    "slug": "hrimfaxi",
    "name": "Hrímfaxi",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᚱᛁᛗᚠᚨᚲᛊᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/93/Chasing_the_Sun_and_Moon_%28God_of_War_2018%29.png/revision/latest?cb=20180608145052",
    "voiceActor": null,
    "gender": "Unknown",
    "species": [
      "Jötnar"
    ],
    "aliases": [
      "Frost Mane",
      "Rime Mane"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned and pictured only)"
    ],
    "about": null,
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": null,
      "quote": null,
      "species": [
        "Jötnar"
      ],
      "gender": "Desconocido",
      "aliases": [
        "Crin de Escarcha",
        "Crin de Helada"
      ]
    }
  },
  {
    "id": 99,
    "slug": "hronn",
    "name": "Hrǫnn",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᚱᛟᚾ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/d/d9/Baby_Heimdall_and_Odin.jpg/revision/latest/scale-to-width-down/570?cb=20240205220639",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "1/2 Goddess (Aesir)",
      "1/2 Jötunn"
    ],
    "aliases": [
      "Hrǫnn Ægirsdottir"
    ],
    "appearsIn": [
      "God of War (2018) (mention)",
      "God of War Ragnarök (mention)"
    ],
    "about": "Hrǫnn is a Norse Goddess of Waves and one of the Nine Daughters of Ægir and Rán.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Hrǫnn es una diosa nórdica de las olas y una de las Nueve Hijas de Ægir y Rán.",
      "quote": null,
      "species": [
        "1/2 diosa (Aesir)",
        "1/2 jötunn"
      ],
      "gender": "Femenino",
      "aliases": [
        "Hrǫnn Ægirsdottir"
      ]
    }
  },
  {
    "id": 100,
    "slug": "hymir",
    "name": "Hymir",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᛁᛗᛁᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/97/Thor%27s_Fishing_Trip.jpg/revision/latest?cb=20250324063413",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Jötunn (Frost Giant)"
    ],
    "aliases": [],
    "appearsIn": [],
    "about": "Hymir (Old Norse: hymez) is a male Jötunn.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Hymir (nórdico antiguo: hymez) es un jötunn masculino.",
      "quote": null,
      "species": [
        "Jötunn (gigante de escarcha)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 101,
    "slug": "hoenir",
    "name": "Hœnir",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᛟᚾᛁᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/6/6c/Hoenir.webp/revision/latest/scale-to-width-down/357?cb=20240210040420",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God (Aesir)"
    ],
    "aliases": [
      "The Silent",
      "Hǿnir",
      "HIGH-nir",
      "Hoenir"
    ],
    "appearsIn": [
      "The Lost Pages of Norse Myth (mentioned only)",
      "God of War Ragnarök (mentioned only)"
    ],
    "about": "Hœnir is Norse God of Silence, Indecision, Mystery and Avoidance.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Hœnir es el dios nórdico del silencio, la indecisión, el misterio y la evasión.",
      "quote": null,
      "species": [
        "Dios (Aesir)"
      ],
      "gender": "Masculino",
      "aliases": [
        "El Silencioso",
        "Hǿnir",
        "HIGH-nir",
        "Hoenir"
      ]
    }
  },
  {
    "id": 102,
    "slug": "ivaldi",
    "name": "Ivaldi",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛁᚹᚨᛚᛞᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/a/ad/Ivaldi%27s_hammer.png/revision/latest/scale-to-width-down/333?cb=20230302033546",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Dwarf"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018)"
    ],
    "about": "Ivaldi was a Dwarf alchemist who experimented with Niflheim's frost power, eventually leading to his death.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Ivaldi fue un alquimista enano que experimentó con el poder de la escarcha de Niflheim, lo que finalmente lo llevó a la muerte.",
      "quote": null,
      "species": [
        "Enano"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 103,
    "slug": "idunn",
    "name": "Iðunn",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛁᚦᚢᚾ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/a/a2/Idunn.webp/revision/latest/scale-to-width-down/700?cb=20240205224710",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Goddess (Aesir)"
    ],
    "aliases": [
      "Iðunn",
      "Idunn",
      "Idunna",
      "Iduna",
      "Idun",
      "Ithun"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned only)",
      "The Lost Pages of Norse Myth (mentioned only)"
    ],
    "about": "Iðunn is the Goddess of Spring and Eternal Youth, she guards the Apples of Youth and wife of Bragi.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Iðunn es la diosa de la primavera y la juventud eterna; custodia las Manzanas de la Juventud y es la esposa de Bragi.",
      "quote": null,
      "species": [
        "Diosa (Aesir)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Iðunn",
        "Idunn",
        "Idunna",
        "Iduna",
        "Idun",
        "Ithun"
      ]
    }
  },
  {
    "id": 104,
    "slug": "jarn-fotr",
    "name": "Járn Fótr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛃᚨᚱᚾ᛫ᚠᛟᛏᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/f/f7/God_of_War_20180518181603.jpg/revision/latest/scale-to-width-down/700?cb=20180519040209",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Troll (Frost)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018)"
    ],
    "about": "Járn Fótr is a Troll and a boss in God of War (2018).",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Járn Fótr es un trol y un jefe en God of War (2018).",
      "quote": null,
      "species": [
        "Trol (de escarcha)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 105,
    "slug": "jarnsaxa",
    "name": "Járnsaxa",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛃᚨᚱᚾᛊᚨᚲᛊᚨ",
    "image": null,
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Jötunn"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018) (indirect mention)"
    ],
    "about": "Járnsaxa (/jɑːrnˈsæksə/; Old Norse: [ˈjɑːrnˌsɑksɑ], \"iron dagger\") is a Jötunn in Norse mythology. In Snorri Sturluson's Prose Edda, she is Thor's lover and the mother of Magni.",
    "quote": "Thor's their dad. Different moms-sordid story, that one. Baldur's their uncle, Odin, dear ol' Grandpa. –Sindri talking about Magni and Modi to Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Járnsaxa (/jɑːrnˈsæksə/; nórdico antiguo: [ˈjɑːrnˌsɑksɑ], \"daga de hierro\") es una jötunn de la mitología nórdica. En la Edda prosaica de Snorri Sturluson, es la amante de Thor y la madre de Magni.",
      "quote": "Thor es su papá. Distintas mamás; una historia sórdida, esa. Baldur es su tío, y Odín, el querido abuelito. –Sindri hablándole a Kratos sobre Magni y Modi",
      "species": [
        "Jötunn"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 106,
    "slug": "jophie",
    "name": "Jöphie",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛃᛟᛈᚺᛁᛖ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/e/e8/FwLkc1JaAAAqtv3.jpg/revision/latest/scale-to-width-down/504?cb=20231224053332",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Gyrfalcon"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018) (Novel) (mentioned only)"
    ],
    "about": null,
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": null,
      "quote": null,
      "species": [
        "Halcón gerifalte"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 107,
    "slug": "kolga",
    "name": "Kólga",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚲᛟᛚᚷᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/d/d9/Baby_Heimdall_and_Odin.jpg/revision/latest/scale-to-width-down/570?cb=20240205220639",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "1/2 Goddess (Aesir)",
      "1/2 Jötunn"
    ],
    "aliases": [
      "Kólga Ægirsdottir"
    ],
    "appearsIn": [
      "God of War (2018) (mention)",
      "God of War Ragnarök (mention)"
    ],
    "about": "Kólga is a Norse Goddess of Waves and one of the Nine Daughters of Ægir and Rán.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Kólga es una diosa nórdica de las olas y una de las Nueve Hijas de Ægir y Rán.",
      "quote": null,
      "species": [
        "1/2 diosa (Aesir)",
        "1/2 jötunn"
      ],
      "gender": "Femenino",
      "aliases": [
        "Kólga Ægirsdottir"
      ]
    }
  },
  {
    "id": 108,
    "slug": "magni",
    "name": "Magni",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛗᚨᚷᚾᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/7/74/Magni-2018.png/revision/latest/scale-to-width-down/555?cb=20230213150817",
    "voiceActor": "Troy Baker",
    "gender": "Male",
    "species": [
      "3/4 Jötunn",
      "1/4 God (Aesir)"
    ],
    "aliases": [
      "Magni Thorson",
      "Thor's Favorite Son (by Mimir)",
      "Worthless Wanker (by Mimir)",
      "Brother (by Modi and Thrúd)",
      "Thor's Idiot Son (by Sindri)",
      "Fool (by Kratos)",
      "Dangerous Fool (by Mimir)",
      "Bigger Twit (by Mimir)",
      "Loudmouth (by Brok)",
      "Idiot (by Baldur)",
      "Useless (by Odin)",
      "My Son (by Thor)",
      "My Boy (by Thor)",
      "Our boy (by Sif)"
    ],
    "appearsIn": [
      "God of War (2018)",
      "God of War Ragnarök (mentioned only)",
      "God of War Ragnarök: Valhalla (illusion)"
    ],
    "about": "Magni (Old Norse: Mágni, Nordic: ᛗᚨᚷᚾᛁ), also known as Magni Thorson (Translation: Magni, Son of Thor), was the eldest son of Thor and Járnsaxa as well as grandson of Odin and Fjörgyn, nephew of Týr, Heimdall and Baldur, older half-brother of Modi and Thrúd. He is the tertiary antagonist of the God of War (2018) game. Both him and his brother accompanied their uncle, Baldur, on his mission to hunt down Kratos and Atreus, with the aim of bringing them to Odin in Asgard.",
    "quote": "Surrender. The Allfather demands it. –Magni to Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Magni (nórdico antiguo: Mágni, rúnico: ᛗᚨᚷᚾᛁ), también conocido como Magni Thorson (traducción: Magni, hijo de Thor), fue el hijo mayor de Thor y Járnsaxa, así como nieto de Odín y Fjörgyn, sobrino de Týr, Heimdall y Baldur, y medio hermano mayor de Modi y Thrúd. Es el antagonista terciario del juego God of War (2018). Tanto él como su hermano acompañaron a su tío Baldur en su misión de dar caza a Kratos y Atreus, con el objetivo de llevarlos ante Odín en Asgard.",
      "quote": "Ríndete. El Padre de Todo lo exige. –Magni a Kratos",
      "species": [
        "3/4 jötunn",
        "1/4 dios (Aesir)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Magni Thorson",
        "Hijo favorito de Thor (según Mimir)",
        "Pajero inútil (según Mimir)",
        "Hermano (según Modi y Thrúd)",
        "Hijo idiota de Thor (según Sindri)",
        "Tonto (según Kratos)",
        "Tonto peligroso (según Mimir)",
        "El más bobo (según Mimir)",
        "Bocazas (según Brok)",
        "Idiota (según Baldur)",
        "Inútil (según Odín)",
        "Mi hijo (según Thor)",
        "Mi chico (según Thor)",
        "Nuestro chico (según Sif)"
      ]
    }
  },
  {
    "id": 109,
    "slug": "mani",
    "name": "Mani",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛗᚨᚾᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/93/Chasing_the_Sun_and_Moon_%28God_of_War_2018%29.png/revision/latest?cb=20180608145052",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God"
    ],
    "aliases": [
      "Mani Mundilfœrison",
      "Máni",
      "Manni",
      "Mannudr",
      "The Moon"
    ],
    "appearsIn": [
      "God of War (2018) (pictured only)"
    ],
    "about": "Mani (Old Norse: Máni) also known as Mani Mundilfœrison (Translation: Mani, Son of Mundilfœri) and \"The Moon \" is the God of the moon and brother to the sun Goddess Sol. He and his sister are destined to die at the jaws of Sköll and Hati in the beginning of Ragnarök.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Mani (nórdico antiguo: Máni), también conocido como Mani Mundilfœrison (traducción: Mani, hijo de Mundilfœri) y \"La Luna\", es el dios de la luna y hermano de la diosa del sol Sol. Él y su hermana están destinados a morir entre las fauces de Sköll y Hati al comienzo del Ragnarök.",
      "quote": null,
      "species": [
        "Dios"
      ],
      "gender": "Masculino",
      "aliases": [
        "Mani Mundilfœrison",
        "Máni",
        "Manni",
        "Mannudr",
        "La Luna"
      ]
    }
  },
  {
    "id": 110,
    "slug": "modi",
    "name": "Modi",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛗᛟᛞᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/4/46/Modi-GOWIV.png/revision/latest/scale-to-width-down/403?cb=20230213150440",
    "voiceActor": "Nolan North",
    "gender": "Male",
    "species": [
      "3/4 God (Aesir)",
      "1/4 Jötunn"
    ],
    "aliases": [
      "Modi Thorson",
      "Módi",
      "Mothi",
      "Móði",
      "Worthless Wanker (by Mimir)",
      "Brother (by Magni and Thrúd)",
      "Bastard (by Loki)",
      "Coward (by Thor and Loki)",
      "Fool (by Kratos)",
      "Dangerous Fool (by Mimir)",
      "Thor's Idiot Son (by Sindri)",
      "Bigger Twit (by Mimir)",
      "Dung Heap (by Sindri)",
      "Idiot (by Baldur)",
      "Useless (by Odin)",
      "My son (by Thor)",
      "My boy (by Thor)",
      "Our boy (by Sif)"
    ],
    "appearsIn": [
      "God of War (2018)",
      "God of War Ragnarök (mentioned only)",
      "God of War Ragnarök: Valhalla (illusion)"
    ],
    "about": "Modi (Old Norse: Móði, Nordic: ᛗᛟᛞᛁ) also known as Modi Thorson (Translation: Modi, Son of Thor) was the Norse God of Courage and Wrath. Son of Thor and Sif, the nephew of Týr, Heimdall and Baldur, the younger half-brother of Magni, and older brother of Thrúd. He is the secondary antagonist of God of War (2018). Modi and his half-brother both followed their uncle Baldur in their quest to find and kill Kratos and Atreus.",
    "quote": "You ruined everything. I earned that fucking hammer, but now everyone's gonna think I only got it 'cause Magni's gone. I'll be a joke. But if I kill you — no one's gonna laugh at me. –Modi to Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Modi (nórdico antiguo: Móði, rúnico: ᛗᛟᛞᛁ), también conocido como Modi Thorson (traducción: Modi, hijo de Thor), fue el dios nórdico del valor y la ira. Hijo de Thor y Sif, sobrino de Týr, Heimdall y Baldur, medio hermano menor de Magni y hermano mayor de Thrúd. Es el antagonista secundario de God of War (2018). Modi y su medio hermano siguieron a su tío Baldur en su búsqueda para encontrar y matar a Kratos y Atreus.",
      "quote": "Lo arruinaste todo. Me gané ese maldito martillo, pero ahora todos van a pensar que solo lo obtuve porque Magni ya no está. Seré un chiste. Pero si te mato, nadie se va a reír de mí. –Modi a Kratos",
      "species": [
        "3/4 dios (Aesir)",
        "1/4 jötunn"
      ],
      "gender": "Masculino",
      "aliases": [
        "Modi Thorson",
        "Módi",
        "Mothi",
        "Móði",
        "Pajero inútil (según Mimir)",
        "Hermano (según Magni y Thrúd)",
        "Bastardo (según Loki)",
        "Cobarde (según Thor y Loki)",
        "Tonto (según Kratos)",
        "Tonto peligroso (según Mimir)",
        "Hijo idiota de Thor (según Sindri)",
        "El más bobo (según Mimir)",
        "Montón de estiércol (según Sindri)",
        "Idiota (según Baldur)",
        "Inútil (según Odín)",
        "Mi hijo (según Thor)",
        "Mi chico (según Thor)",
        "Nuestro chico (según Sif)"
      ]
    }
  },
  {
    "id": 111,
    "slug": "mattugr-helson",
    "name": "Máttugr Helson",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛗᚨᛏᛏᚢᚷᚱ ᚺᛖᛚᛋᛟᚾ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/0/0a/EvQXngnXcAYzKlx.jpeg/revision/latest/scale-to-width-down/700?cb=20230105122747",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "1/2 Troll",
      "1/2 Jötunn"
    ],
    "aliases": [
      "Helheim's son"
    ],
    "appearsIn": [
      "God of War (2018)",
      "God of War Ragnarök (mentioned only)"
    ],
    "about": "Máttugr Helson (Nordic: ᛗᚨᛏᛏᚢᚷᚱ ᚺᛖᛚᛋᛟᚾ) is a Troll known as \"The Bridge Keeper\", and is a boss in God of War (2018).",
    "quote": "We have spoken to the eagle that presides here in Helheim. She watched from afar while I battled the Bridge Keeper in our prior journey. Now, by releasing Garm, we have opened six tears to Helheim. Hræsvelgr is not pleased, but does not appear to be our enemy. That is for the best. –Kratos' thoughts about Hræsvelgr in Codex",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Máttugr Helson (rúnico: ᛗᚨᛏᛏᚢᚷᚱ ᚺᛖᛚᛋᛟᚾ) es un trol conocido como \"El Guardián del Puente\" y es un jefe en God of War (2018).",
      "quote": "Hemos hablado con el águila que preside aquí en Helheim. Ella observó desde lejos mientras yo combatía al Guardián del Puente en nuestro viaje anterior. Ahora, al liberar a Garm, hemos abierto seis grietas hacia Helheim. Hræsvelgr no está complacida, pero no parece ser nuestra enemiga. Es lo mejor. –Pensamientos de Kratos sobre Hræsvelgr en el Códice",
      "species": [
        "1/2 trol",
        "1/2 jötunn"
      ],
      "gender": "Masculino",
      "aliases": [
        "Hijo de Helheim"
      ]
    }
  },
  {
    "id": 112,
    "slug": "motsognir",
    "name": "Mótsognir",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛗᛟᛏᛊᛟᚷᚾᛁᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/8/8d/M%C3%B3tsognir.png/revision/latest?cb=20180514093819",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Dwarf"
    ],
    "aliases": [
      "Mótsognir Ivaldison"
    ],
    "appearsIn": [
      "God of War (2018)"
    ],
    "about": "Mótsognir is a character in God of War (2018).",
    "quote": "I hope that forfeiting my morality during this damned search would be enough. Now I see it was my own sacrifice that was required. –Mótsognir",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Mótsognir es un personaje de God of War (2018).",
      "quote": "Esperaba que renunciar a mi moral durante esta maldita búsqueda fuera suficiente. Ahora veo que lo que se requería era mi propio sacrificio. –Mótsognir",
      "species": [
        "Enano"
      ],
      "gender": "Masculino",
      "aliases": [
        "Mótsognir Ivaldison"
      ]
    }
  },
  {
    "id": 113,
    "slug": "nal",
    "name": "Nal",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚾᚨᛚ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/f/fb/Bergelmir_%28God_of_War_2018%29.png/revision/latest?cb=20180608144631",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Jötunn (Frost Giant)"
    ],
    "aliases": [
      "Nal",
      "Bergelmir's Lady Wife (by Mimir)"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned only)"
    ],
    "about": "Nal, along with her husband Bergelmir are the founder of Jötunheim and she is a character featured in God of War (2018).",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Nal, junto con su esposo Bergelmir, son los fundadores de Jötunheim, y ella es un personaje que aparece en God of War (2018).",
      "quote": null,
      "species": [
        "Jötunn (gigante de escarcha)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Nal",
        "Señora esposa de Bergelmir (según Mimir)"
      ]
    }
  },
  {
    "id": 114,
    "slug": "nanna",
    "name": "Nanna",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚾᚨᚾᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/3/34/Capture_d%E2%80%99%C3%A9cran_2022-12-03_%C3%A0_13.44.24.png/revision/latest/scale-to-width-down/571?cb=20221203134458",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Goddess (Aesir)"
    ],
    "aliases": [
      "Nanna Neprsdóttir",
      "Nana",
      "Nan"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned only)"
    ],
    "about": "Nanna (Old Norse: Nana), also known as Nanna Neprsdóttir (Translation: Nanna, Daughter of Nepr) is the Norse Goddess of Joy, Devotion, Peace and Loyalty. She is the daughter of Nepr and Nofn.",
    "quote": "Sweet Nanna's nethers! –Brok to Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Nanna (nórdico antiguo: Nana), también conocida como Nanna Neprsdóttir (traducción: Nanna, hija de Nepr), es la diosa nórdica de la alegría, la devoción, la paz y la lealtad. Es hija de Nepr y Nofn.",
      "quote": "¡Por las partes íntimas de la dulce Nanna! –Brok a Kratos",
      "species": [
        "Diosa (Aesir)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Nanna Neprsdóttir",
        "Nana",
        "Nan"
      ]
    }
  },
  {
    "id": 115,
    "slug": "nornir",
    "name": "Nornir",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚾᛟᚱᚾᛁᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/e/e6/OfficialNornir.jpg/revision/latest/scale-to-width-down/700?cb=20230203094819",
    "voiceActor": null,
    "gender": "Females",
    "species": [
      "Primordials"
    ],
    "aliases": [
      "The Norns",
      "Urðr",
      "Verðandi",
      "Skuld",
      "Shut-In Spinsters (by Brok)"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned only)",
      "God of War Ragnarök"
    ],
    "about": "The Nornir are the Norse Goddesses of Fate. They are also the Norse counterpart of the Greek Goddesses of Fate, the Sisters of Fate.",
    "quote": "There is no grand design. No script. Only the choices you make. That your choices are so predictable merely makes us seem prescient. –The Norns revealing the truth about fate.",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Las Nornir son las diosas nórdicas del destino. También son la contraparte nórdica de las diosas griegas del destino, las Moiras.",
      "quote": "No hay un gran designio. Ningún guion. Solo las decisiones que tomas. Que tus decisiones sean tan predecibles simplemente nos hace parecer clarividentes. –Las nornas revelando la verdad sobre el destino.",
      "species": [
        "Primordiales"
      ],
      "gender": "Femenino (grupo)",
      "aliases": [
        "Las Nornas",
        "Urðr",
        "Verðandi",
        "Skuld",
        "Solteronas encerradas (según Brok)"
      ]
    }
  },
  {
    "id": 116,
    "slug": "otr",
    "name": "Otr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛟᛏᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/7/73/God_of_War_20180812151000.jpg/revision/latest/scale-to-width-down/700?cb=20180817182649",
    "voiceActor": null,
    "gender": "Unknown",
    "species": [
      "Dwarf (formerly)",
      "Dragon"
    ],
    "aliases": [
      "Otr Hreidmarson"
    ],
    "appearsIn": [
      "God of War (2018)"
    ],
    "about": "Otr is one of the three dragons captured by the Dwarf King Mótsognir.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Otr es uno de los tres dragones capturados por el rey enano Mótsognir.",
      "quote": null,
      "species": [
        "Enano (antes)",
        "Dragón"
      ],
      "gender": "Desconocido",
      "aliases": [
        "Otr Hreidmarson"
      ]
    }
  },
  {
    "id": 117,
    "slug": "ratatoskr",
    "name": "Ratatoskr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚱᚨᛏᚨᛏᛟᛊᚲᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/4/43/Fk2bby_XgAAXlU0.jpeg/revision/latest/scale-to-width-down/394?cb=20221226122037",
    "voiceActor": "Troy Baker (God of War (2018); as \"Bitter Squirrel\" & God of War Ragnarok",
    "gender": "Male",
    "species": [
      "Squirrel"
    ],
    "aliases": [
      "Bitter Squirrel",
      "Arrogant Squirrel",
      "Anxious Squirrel",
      "Perfectionist Squirrel"
    ],
    "appearsIn": [
      "God of War (2018)",
      "God of War Ragnarok"
    ],
    "about": "Ratatoskr is a squirrel who guards the World Tree of Yggdrasil.",
    "quote": "My goodness, what a strapping physique. Capable of an astounding variety of acts of violence, I imagine. –Ratatoskr inspects Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Ratatoskr es una ardilla que custodia el Árbol del Mundo, Yggdrasil.",
      "quote": "Válgame, qué físico tan robusto. Capaz de una asombrosa variedad de actos de violencia, me imagino. –Ratatoskr examina a Kratos",
      "species": [
        "Ardilla"
      ],
      "gender": "Masculino",
      "aliases": [
        "Ardilla amargada",
        "Ardilla arrogante",
        "Ardilla ansiosa",
        "Ardilla perfeccionista"
      ]
    }
  },
  {
    "id": 118,
    "slug": "reginn",
    "name": "Reginn",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚱᛖᚷᛁᚾ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/1/1f/God_of_War_20180814221620.jpg/revision/latest/scale-to-width-down/700?cb=20180817182350",
    "voiceActor": null,
    "gender": "Unknown",
    "species": [
      "Dwarf (formerly)",
      "Dragon"
    ],
    "aliases": [
      "Regin",
      "Reginn Hreidmarson"
    ],
    "appearsIn": [
      "God of War (2018)"
    ],
    "about": null,
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": null,
      "quote": null,
      "species": [
        "Enano (antes)",
        "Dragón"
      ],
      "gender": "Desconocido",
      "aliases": [
        "Regin",
        "Reginn Hreidmarson"
      ]
    }
  },
  {
    "id": 119,
    "slug": "sif",
    "name": "Sif",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᛁᚠ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/f/f7/FkZDGyNWYAEuZ8V.jpeg/revision/latest/scale-to-width-down/394?cb=20221225180349",
    "voiceActor": "Emily Rose",
    "gender": "Female",
    "species": [
      "Goddess (Aesir)"
    ],
    "aliases": [
      "Sif Mandifarisdóttir",
      "Lady Sif (by Brok, Freya & Skjöldr)",
      "My Diplomat (by Odin)",
      "Mom (by Thrúd, Magni & Modi)",
      "Your Majesty (by Mimir)",
      "M'lady (by Mimir)"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned only)",
      "God of War: Ragnarök"
    ],
    "about": "Sif (Nordic: ᛊᛁᚠ), also known as Sif Mandifarisdóttir (Translation: Sif, Daughter of Mandifari) is the Norse Goddess of Wheat, Earth, Harvest and Family. She is the second wife of Thor, the daughter-in-law of Odin and Fjörgyn, the stepmother of Magni and mother of Modi and Thrúd.",
    "quote": "You said no more Aesir blood would be spilled. You said family comes first. You don’t think that this is retribution for him being here? He's put your granddaughter in danger. He's made your son miserable. –Sif to Odin about Loki",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Sif (rúnico: ᛊᛁᚠ), también conocida como Sif Mandifarisdóttir (traducción: Sif, hija de Mandifari), es la diosa nórdica del trigo, la tierra, la cosecha y la familia. Es la segunda esposa de Thor, nuera de Odín y Fjörgyn, madrastra de Magni y madre de Modi y Thrúd.",
      "quote": "Dijiste que no se derramaría más sangre Aesir. Dijiste que la familia es lo primero. ¿No crees que esto es un castigo por tenerlo aquí? Puso en peligro a tu nieta. Ha hecho miserable a tu hijo. –Sif a Odín sobre Loki",
      "species": [
        "Diosa (Aesir)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Sif Mandifarisdóttir",
        "Lady Sif (según Brok, Freya y Skjöldr)",
        "Mi diplomática (según Odín)",
        "Mamá (según Thrúd, Magni y Modi)",
        "Su Majestad (según Mimir)",
        "Milady (según Mimir)"
      ]
    }
  },
  {
    "id": 120,
    "slug": "sigrun",
    "name": "Sigrún",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᛁᚷᚱᚢᚾ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/4/4d/Scr324oi.png/revision/latest?cb=20240102131315",
    "voiceActor": "Martha Marion (2018)",
    "gender": "Female",
    "species": [
      "Midgardian (formerly)",
      "Valkyrie (formerly)",
      "Shield Maiden"
    ],
    "aliases": [
      "Sigrún Högnisdottir",
      "Valkyrie Queen",
      "Love (by Mimir)"
    ],
    "appearsIn": [
      "God of War (2018)",
      "God of War Ragnarök",
      "God of War Valhalla DLC"
    ],
    "about": "Sigrún is the Valkyrie Queen introduced in God of War (2018). She is one of the nine Valkyries who have been cursed into insanity by Odin. Although the incredible amount of power she possesses allowed her to resist much longer than her sisters, she inevitably lost herself as well. She is nevertheless freed by Kratos and Atreus after they engaged and defeated her physical form in a long and difficult battle. Blessing them with her eternal gratitude, her spirit vanished and eventually reunited with her sisters.",
    "quote": "Queen of the Valkyries, although she does not appear to refer to herself as such. When Freya, the original Queen Valkyrie, lost her wings to Odin, Sigrún grudgingly took the position in her stead. Now she is free to reunite the Valkyries and attempt to stem the tide of the dead flowing into Midgard. –Mimir's remarks about Sigrún",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Sigrún es la reina de las valquirias presentada en God of War (2018). Es una de las nueve valquirias que Odín maldijo con la locura. Aunque el increíble poder que posee le permitió resistir mucho más tiempo que sus hermanas, inevitablemente ella también perdió la razón. Aun así, Kratos y Atreus la liberan después de enfrentarse a su forma física y derrotarla en una larga y difícil batalla. Tras bendecirlos con su gratitud eterna, su espíritu se desvaneció y finalmente se reunió con sus hermanas.",
      "quote": "Reina de las valquirias, aunque no parece referirse a sí misma de esa manera. Cuando Freya, la reina valquiria original, perdió sus alas a manos de Odín, Sigrún asumió el puesto en su lugar a regañadientes. Ahora es libre de reunir a las valquirias e intentar contener la marea de muertos que inunda Midgard. –Comentarios de Mimir sobre Sigrún",
      "species": [
        "Midgardiano (antes)",
        "Valquiria (antes)",
        "Doncella escudera"
      ],
      "gender": "Femenino",
      "aliases": [
        "Sigrún Högnisdottir",
        "Reina valquiria",
        "Amor (según Mimir)"
      ]
    }
  },
  {
    "id": 121,
    "slug": "skadi",
    "name": "Skaði",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᚲᚨᚦᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/8/8c/Ska%C3%B0i_%28God_of_War_2018%29.png/revision/latest?cb=20180608144534",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Jötunn"
    ],
    "aliases": [
      "Skaði Thiazzidottir",
      "Skadi"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned only)",
      "God of War: Ragnarök (mentioned only)"
    ],
    "about": "Skaði also known as Skaði Thiazzisdottir (Translation: Skaði, Daughter of Thiazzi) is a female Jötunn featured in God of War (2018). Is the Norse Goddess of Winter, Skiing, Bowhunting, and Mountains.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Skaði, también conocida como Skaði Thiazzisdottir (traducción: Skaði, hija de Thiazzi), es una jötunn que aparece en God of War (2018). Es la diosa nórdica del invierno, el esquí, la caza con arco y las montañas.",
      "quote": null,
      "species": [
        "Jötunn"
      ],
      "gender": "Femenino",
      "aliases": [
        "Skaði Thiazzidottir",
        "Skadi"
      ]
    }
  },
  {
    "id": 122,
    "slug": "skinfaxi",
    "name": "Skinfaxi",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᚲᛁᚾᚠᚨᚲᛊᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/93/Chasing_the_Sun_and_Moon_%28God_of_War_2018%29.png/revision/latest?cb=20180608145052",
    "voiceActor": null,
    "gender": "Unknown",
    "species": [
      "Jötnar"
    ],
    "aliases": [
      "Shining Mane"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned and pictured only)"
    ],
    "about": null,
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": null,
      "quote": null,
      "species": [
        "Jötnar"
      ],
      "gender": "Desconocido",
      "aliases": [
        "Crin Resplandeciente"
      ]
    }
  },
  {
    "id": 123,
    "slug": "skoll-and-hati",
    "name": "Sköll and Hati",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᚲᛟᛚ᛫ᚨᚾᛞ᛫ᚺᚨᛏᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/e/e0/God_of_War_Sk%C3%B6ll_and_Hati.jpg/revision/latest/scale-to-width-down/700?cb=20221129195914",
    "voiceActor": null,
    "gender": "Unknown",
    "species": [
      "Jötunn (Animal giant)"
    ],
    "aliases": [
      "Celestial Wolves",
      "Sköll Hróðvitnirson",
      "Hati Hróðvitnirson"
    ],
    "appearsIn": [
      "God of War (2018)",
      "God of War Ragnarök"
    ],
    "about": "Sköll (Old Norse: Skǫll) and Hati are two Giant wolves featured in God of War (2018) and God of War Ragnarök. They are legendary for chasing down the Sun and Moon.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Sköll (nórdico antiguo: Skǫll) y Hati son dos lobos gigantes que aparecen en God of War (2018) y God of War Ragnarök. Son legendarios por perseguir al Sol y a la Luna.",
      "quote": null,
      "species": [
        "Jötunn (gigante animal)"
      ],
      "gender": "Desconocido",
      "aliases": [
        "Lobos celestiales",
        "Sköll Hróðvitnirson",
        "Hati Hróðvitnirson"
      ]
    }
  },
  {
    "id": 124,
    "slug": "sleipnir",
    "name": "Sleipnir",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᛚᛖᛁᛈᚾᛁᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/b/bb/Sleipnir.jpg/revision/latest?cb=20200224071139",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Horse"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018) (mentioned and pictured only)"
    ],
    "about": "Sleipnir is an eight-legged horse and Odin's horse who traveled with him on many journeys and realms.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Sleipnir es un caballo de ocho patas, el caballo de Odín, que lo acompañó en muchos viajes y por muchos reinos.",
      "quote": null,
      "species": [
        "Caballo"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 125,
    "slug": "sol",
    "name": "Sol",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᛟᛚ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/93/Chasing_the_Sun_and_Moon_%28God_of_War_2018%29.png/revision/latest?cb=20180608145052",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Goddess"
    ],
    "aliases": [
      "Sol Mundilfœrisdottir",
      "Sól",
      "Sunnurd",
      "Sunna",
      "Sigel",
      "The Sun"
    ],
    "appearsIn": [
      "God of War (2018) (pictured only)",
      "God of War Ragnarök"
    ],
    "about": "Sol (Old Norse: Sól) also known as Sol Mundilfœrisdottir (Translation: Sol, Daughter of Mundilfœri) is the Goddess of the sun and sister to the moon God Mani. She and her brother are destined to die at the jaws of Sköll and Hati in the beginning of Ragnarök.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Sol (nórdico antiguo: Sól), también conocida como Sol Mundilfœrisdottir (traducción: Sol, hija de Mundilfœri), es la diosa del sol y hermana del dios de la luna, Mani. Ella y su hermano están destinados a morir entre las fauces de Sköll y Hati al comienzo del Ragnarök.",
      "quote": null,
      "species": [
        "Diosa"
      ],
      "gender": "Femenino",
      "aliases": [
        "Sol Mundilfœrisdottir",
        "Sól",
        "Sunnurd",
        "Sunna",
        "Sigel",
        "El Sol"
      ]
    }
  },
  {
    "id": 126,
    "slug": "starkadr",
    "name": "Starkaðr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᛏᚨᚱᚲᚨᚦᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/97/Starka%C3%B0r.jpg/revision/latest?cb=20251117025603",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Jötunn (Frost Giant)"
    ],
    "aliases": [
      "Jötnar Military Leader (by Atreus)"
    ],
    "appearsIn": [
      "God of War (mentioned and pictured)"
    ],
    "about": "Starkaðr, also called Starkaðr the Mighty, was a Jötunn featured in God of War (2018).",
    "quote": "A Giant with eight arms, swinging four swords... until Thor chopped him up. Why did the Gods gang up on him? –Codex",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Starkaðr, también llamado Starkaðr el Poderoso, fue un jötunn que aparece en God of War (2018).",
      "quote": "Un gigante con ocho brazos que blandía cuatro espadas... hasta que Thor lo hizo pedazos. ¿Por qué los dioses se unieron todos contra él? –Códice",
      "species": [
        "Jötunn (gigante de escarcha)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Líder militar de los jötnar (según Atreus)"
      ]
    }
  },
  {
    "id": 127,
    "slug": "stonebeard-king",
    "name": "Stonebeard King",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᛏᛟᚾᛖᛒᛖᚨᚱᛞ᛫ᚲᛁᛜ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/4/4d/God_of_War_20180519151427.jpg/revision/latest/scale-to-width-down/700?cb=20180521165107",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Troll (Frost)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018)"
    ],
    "about": "Stonebeard King is a Troll and a boss in God of War (2018).",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "El Rey Barbapiedra (Stonebeard King) es un trol y un jefe en God of War (2018).",
      "quote": null,
      "species": [
        "Trol (de escarcha)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 128,
    "slug": "thamur",
    "name": "Thamur",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚦᚨᛗᚢᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/2/28/Tyr.jpg/revision/latest/scale-to-width-down/700?cb=20180710032906",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Jötunn"
    ],
    "aliases": [
      "Greatest Stonemason (by Mimir)",
      "Dead Giant (by Kratos)"
    ],
    "appearsIn": [
      "God of War"
    ],
    "about": "Thamur was a Jötunn who, before his death, attempted to build a wall around Jötunheim as a way to protect his people from Thor during the war between Giants and Aesir. However, when searching for his son, Hrimthur in Midgard, he was attacked by Thor, resulting in a fierce battle in which a blow from Thor caused Thamur to fall onto his own chisel, subsequently crushing the nearby village worshipping the Vanir God, Njörd, freezing the village and killing all of the inhabitants with his final breath.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Thamur fue un jötunn que, antes de morir, intentó construir una muralla alrededor de Jötunheim para proteger a su pueblo de Thor durante la guerra entre los gigantes y los Aesir. Sin embargo, mientras buscaba a su hijo Hrimthur en Midgard, Thor lo atacó, lo que desató una feroz batalla en la que un golpe de Thor hizo que Thamur cayera sobre su propio cincel; acto seguido aplastó la aldea cercana que adoraba al dios Vanir Njörd, la congeló y mató a todos sus habitantes con su último aliento.",
      "quote": null,
      "species": [
        "Jötunn"
      ],
      "gender": "Masculino",
      "aliases": [
        "El mejor cantero (según Mimir)",
        "Gigante muerto (según Kratos)"
      ]
    }
  },
  {
    "id": 129,
    "slug": "thiazzi",
    "name": "Thiazzi",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚦᛁᚨᛉᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/2/25/Thiazzi_and_Idunn_by_Elmer_Boyd_Smith.jpg/revision/latest/scale-to-width-down/429?cb=20240221181327",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Jötunn (Frost Giant)"
    ],
    "aliases": [
      "Thiazzi Olvaldison",
      "Þjazi"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned only)",
      "God of War Ragnarök (mentioned only)"
    ],
    "about": "Thiazi is a Jotunn and a character featured in God of War (2018). He is the father of Skaði.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Thiazi es un jötunn y un personaje que aparece en God of War (2018). Es el padre de Skaði.",
      "quote": null,
      "species": [
        "Jötunn (gigante de escarcha)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Thiazzi Olvaldison",
        "Þjazi"
      ]
    }
  },
  {
    "id": 130,
    "slug": "thrym",
    "name": "Thrym",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚦᚱᛁᛗ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/0/0a/Thrym_%28God_of_War_2018%29.png/revision/latest?cb=20180608145546",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Jötunn"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (mentioned only)"
    ],
    "about": "Thrym is a Jötunn featured in God of War (2018). He was a Frost Giant King who stole Thor's hammer, Mjölnir.",
    "quote": "\"Thrym the cunning\" ransomed Mjölnir for Freya, and Odin went along to sneak Thor into Jötunheim. If not for Freya, he might have killed every last Giant there! –Codex",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Thrym es un jötunn que aparece en God of War (2018). Fue un rey de los gigantes de escarcha que robó el martillo de Thor, Mjölnir.",
      "quote": "\"Thrym el astuto\" pidió a Freya como rescate por Mjölnir, y Odín le siguió el juego para infiltrar a Thor en Jötunheim. ¡De no ser por Freya, quizá habría matado hasta al último gigante de allí! –Códice",
      "species": [
        "Jötunn"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 131,
    "slug": "ullr",
    "name": "Ullr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚢᛚᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/93/UllrMyth.jpg/revision/latest/scale-to-width-down/559?cb=20240218222749",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God (Aesir)"
    ],
    "aliases": [
      "Ullr",
      "Ull"
    ],
    "appearsIn": [
      "The Lost Pages of Norse Myth (mentioned only)"
    ],
    "about": "Ullr (Old Norse: Ull), is a Norse God of Archery, Hunt, Sports and Skiing.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Ullr (nórdico antiguo: Ull) es un dios nórdico de la arquería, la caza, los deportes y el esquí.",
      "quote": null,
      "species": [
        "Dios (Aesir)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Ullr",
        "Ull"
      ]
    }
  },
  {
    "id": 132,
    "slug": "unnr",
    "name": "Unnr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚢᚾᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/d/d9/Baby_Heimdall_and_Odin.jpg/revision/latest/scale-to-width-down/570?cb=20240205220639",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "1/2 Goddess",
      "1/2 Jötunn"
    ],
    "aliases": [
      "Unnr Ægirsdottir"
    ],
    "appearsIn": [
      "God of War (2018) (mention)",
      "God of War Ragnarök (mention)"
    ],
    "about": "Unnr is a Norse Goddess of Waves and one of the Nine Daughters of Ægir and Rán.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Unnr es una diosa nórdica de las olas y una de las nueve hijas de Ægir y Rán.",
      "quote": null,
      "species": [
        "1/2 diosa",
        "1/2 jötunn"
      ],
      "gender": "Femenino",
      "aliases": [
        "Unnr Ægirsdottir"
      ]
    }
  },
  {
    "id": 133,
    "slug": "vili",
    "name": "Vili",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚹᛁᛚᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/1/16/Vili.jpg/revision/latest?cb=20200224063744",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God (Aesir)"
    ],
    "aliases": [
      "Vili Borrson",
      "VILL-ee",
      "Lothur"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned and pictured only)",
      "The Lost Pages of Norse Myth (mentioned only)"
    ],
    "about": "Vili also known as Vili Borrson (Translation: Vili, Son of Borr) is the Norse God of Wit, touch, sense. He is the younger brother of Odin and elder brother of Vé. He is the uncle of Thor, Týr, Heimdall, and Baldur.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Vili, también conocido como Vili Borrson (traducción: Vili, hijo de Borr), es el dios nórdico del ingenio, el tacto y los sentidos. Es el hermano menor de Odín y el hermano mayor de Vé. Es tío de Thor, Týr, Heimdall y Baldur.",
      "quote": null,
      "species": [
        "Dios (Aesir)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Vili Borrson",
        "VILL-ee",
        "Lothur"
      ]
    }
  },
  {
    "id": 134,
    "slug": "ve",
    "name": "Vé",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚹᛖ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/a/af/V%C3%A9.jpg/revision/latest?cb=20200224063435",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God (Aesir)"
    ],
    "aliases": [
      "Vé Borrson",
      "VAY",
      "Hoenir"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned and pictured only)",
      "The Lost Pages of Norse Myth (mentioned only)"
    ],
    "about": "Vé also known as Vé Borrson (Translation: Vé, Son of Borr) is the Norse God of countenance, speech, hearing, and sight. He is the younger brother of Odin and Vili. He is the uncle of Thor, Týr, Heimdall and Baldur.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Vé, también conocido como Vé Borrson (traducción: Vé, hijo de Borr), es el dios nórdico del semblante, el habla, el oído y la vista. Es el hermano menor de Odín y Vili. Es tío de Thor, Týr, Heimdall y Baldur.",
      "quote": null,
      "species": [
        "Dios (Aesir)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Vé Borrson",
        "VAY",
        "Hoenir"
      ]
    }
  },
  {
    "id": 135,
    "slug": "ymir",
    "name": "Ymir",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛁᛗᛁᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/4/43/The_progenitor_of_all_giants.jpg/revision/latest?cb=20221211125912",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Jötunn (Primordial)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018) (mentioned and pictured only)",
      "God of War: Ragnarok (mentioned only)"
    ],
    "about": "Ymir was the original Jötunn, the first being that came into existence in the Nine Realms and the progenitor of all living creatures.",
    "quote": "Tell me, can you murder a landslide? Smother a storm? He was more... a force of nature. A vessel of power. –Odin to Atreus about Ymir",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Ymir fue el jötunn original, el primer ser que llegó a existir en los Nueve Reinos y el progenitor de todas las criaturas vivientes.",
      "quote": "Dime, ¿se puede asesinar a un deslizamiento de tierra? ¿Sofocar una tormenta? Él era más bien... una fuerza de la naturaleza. Un recipiente de poder. –Odín a Atreus sobre Ymir",
      "species": [
        "Jötunn (primordial)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 136,
    "slug": "aegir",
    "name": "Ægir",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚨᚷᛁᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/b/b2/%C3%86gir.jpg/revision/latest?cb=20240205230050",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God (Aesir)"
    ],
    "aliases": [
      "Aegir",
      "Hlér",
      "Gymir"
    ],
    "appearsIn": [
      "God of War (2018) (Mentioned Only)",
      "God of War: Ragnarök (Mentioned Only)"
    ],
    "about": "Ægir is a Aesir God of the Sea and the maternal grandfather of Heimdall, the Watchman of the Aesir.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Ægir es un dios Aesir del mar y el abuelo materno de Heimdall, el Vigilante de los Aesir.",
      "quote": null,
      "species": [
        "Dios (Aesir)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Aegir",
        "Hlér",
        "Gymir"
      ]
    }
  },
  {
    "id": 137,
    "slug": "althjof",
    "name": "Althjof",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚨᛚᚦᛃᛟᚠ",
    "image": null,
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Dwarf"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök (mentioned)"
    ],
    "about": "Althjof was a Dwarven Thief, living in Svartalfheim who constantly rallied against the Aesir until his demise.",
    "quote": "I recall Althjof the Thief's antics. He understood one of the most important rules of resistance: you don't always need to win major battles. You just need to inconvenience your invaders. –Mimir",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Althjof fue un ladrón enano que vivía en Svartalfheim y que se rebeló constantemente contra los Aesir hasta su muerte.",
      "quote": "Recuerdo las travesuras de Althjof el Ladrón. Entendía una de las reglas más importantes de la resistencia: no siempre hace falta ganar grandes batallas. Basta con incomodar a los invasores. –Mimir",
      "species": [
        "Enano"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 138,
    "slug": "alva",
    "name": "Alva",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚨᛚᚹᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/7/7a/Fj9zBztWIAAlqq-.jpeg/revision/latest/scale-to-width-down/394?cb=20230106235028",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Elf (Light)"
    ],
    "aliases": [
      "Light Elf Queen"
    ],
    "appearsIn": [
      "God of War Ragnarök",
      "God of War Ragnarök: Valhalla"
    ],
    "about": "Alva was the Light Elf Queen of Alfheim and a boss in God of War Ragnarök.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Alva fue la reina de los elfos de la luz de Alfheim y un jefe en God of War Ragnarök.",
      "quote": null,
      "species": [
        "Elfo (de la luz)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Reina de los Elfos de la Luz"
      ]
    }
  },
  {
    "id": 139,
    "slug": "alviss-stonefoot",
    "name": "Alvíss Stonefoot",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚨᛚᚹᛁᛊ᛫ᛊᛏᛟᚾᛖᚠᛟᛏ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/1/1d/Sanket-tonde-statue01.jpg/revision/latest/scale-to-width-down/700?cb=20240204192544",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Dwarf"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök (mentioned)"
    ],
    "about": "Alvíss was a male dwarf living in Svartalfheim, he was the warden and there was a giant statue built in his honor.",
    "quote": "Alvíss Stonefoot, Warden of Svartalfheim. He used his wisdom and might to imprison some of the most dangerous creatures in all the realm. –Mimir",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Alvíss fue un enano que vivía en Svartalfheim; era el guardián, y se construyó una estatua gigante en su honor.",
      "quote": "Alvíss Pie de Piedra, guardián de Svartalfheim. Usó su sabiduría y su fuerza para encarcelar a algunas de las criaturas más peligrosas de todo el reino. –Mimir",
      "species": [
        "Enano"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 140,
    "slug": "angrboda",
    "name": "Angrboda",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚨᚾᚷᚱᛒᛟᛞᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/94/Angrboda.png/revision/latest/scale-to-width-down/509?cb=20231111175323",
    "voiceActor": "Laya De Leon Hayes",
    "gender": "Female",
    "species": [
      "Jötunn (Frost Giant)"
    ],
    "aliases": [
      "Young Woman",
      "Granddaughter (by Grýla)",
      "Little giant lady (by Brok)",
      "Cutie patootie (by Lúnda)"
    ],
    "appearsIn": [
      "God of War (pictured only)",
      "God of War Ragnarök"
    ],
    "about": "Angrboda (Old Norse: Angrboða, Nordic: ᚨᚾᚷᚱᛒᛟᛞᚨ) is a Jötunn, the best friend and love interest of Loki, and the current owner of Fenrir. She is also one of the last remaining giants of Jötunheim, the other being her Grandmother Grýla.",
    "quote": "I decided that it would better if I wrote the ending myself. –Angrboda to Atreus",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Angrboda (nórdico antiguo: Angrboða, rúnico: ᚨᚾᚷᚱᛒᛟᛞᚨ) es una jötunn, la mejor amiga e interés amoroso de Loki, y la actual dueña de Fenrir. También es una de las últimas gigantes que quedan en Jötunheim; la otra es su abuela Grýla.",
      "quote": "Decidí que sería mejor escribir el final yo misma. –Angrboda a Atreus",
      "species": [
        "Jötunn (gigante de escarcha)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Joven mujer",
        "Nieta (según Grýla)",
        "Pequeña dama gigante (según Brok)",
        "Cosita preciosa (según Lúnda)"
      ]
    }
  },
  {
    "id": 141,
    "slug": "astrid",
    "name": "Astrid",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚨᛊᛏᚱᛁᛞ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/0/0a/Astrid.png/revision/latest?cb=20240205181213",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Vanir (mortal)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Astrid was a female Vanir worshiper of the Goddess Freya, she was the caretaker and creator of Noatun's Garden. Her goal was to keep the plants in bloom until her Queen would one day return to her rightful home, Vanaheim.",
    "quote": "Astrid: Freya... you return. Freya: Astrid... What happened to you? To your garden? Astrid: The Einherjar. My life's work, rotted. My monument to your glory, reduced to this. I am sorry, my queen. –Astrid and Freya",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Astrid fue una Vanir devota de la diosa Freya; fue la cuidadora y creadora del Jardín de Noatun. Su objetivo era mantener las plantas en flor hasta que su reina regresara algún día a su legítimo hogar, Vanaheim.",
      "quote": "Astrid: Freya... has vuelto. Freya: Astrid... ¿Qué te pasó? ¿Y a tu jardín? Astrid: Los einherjar. La obra de mi vida, podrida. Mi monumento a tu gloria, reducido a esto. Lo siento, mi reina. –Astrid y Freya",
      "species": [
        "Vanir (mortal)"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 142,
    "slug": "bari",
    "name": "Bari",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᚨᚱᛁ",
    "image": null,
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Dwarf"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök (mentioned)"
    ],
    "about": "Bari was a dwarf living in Svartalfheim who dedicated his entire life to building the great mead hall until his untimely death.",
    "quote": "Bari the Dwarf spent his entire life building the great mead-hall known as Lyr. Brick by brick, stone by stone, he built it as wide and as tall as he could so that the songs and merriment of the Dwarves could echo within its walls until the end of time. –Mimir",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Bari fue un enano que vivía en Svartalfheim y que dedicó toda su vida a construir el gran salón de hidromiel hasta su prematura muerte.",
      "quote": "Bari el Enano pasó toda su vida construyendo el gran salón de hidromiel conocido como Lyr. Ladrillo a ladrillo, piedra a piedra, lo construyó tan ancho y tan alto como pudo para que las canciones y el jolgorio de los enanos resonaran entre sus muros hasta el fin de los tiempos. –Mimir",
      "species": [
        "Enano"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 143,
    "slug": "beigadr-the-feared",
    "name": "Beigaðr the Feared",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᛖᛁᚷᚨᚦᚱ᛫ᚦᛖ᛫ᚠᛖᚨᚱᛖᛞ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/3/34/Beigadr.png/revision/latest/scale-to-width-down/466?cb=20230323205823",
    "voiceActor": "Yugo Sekiguchi (Japanese dub)",
    "gender": "Male",
    "species": [
      "Mortal (formerly)",
      "Berserker"
    ],
    "aliases": [
      "Beigaðr the Feared"
    ],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Beigaðr the Feared is one of the twelve Berserkers that can be fought as an optional boss in God of War Ragnarök. Located in Svartalfheim, Beigaðr is one of the slightly stronger Berserkers the player can choose to face after getting the Hilt of Skofnung.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Beigaðr el Temido es uno de los doce berserkers contra los que se puede luchar como jefe opcional en God of War Ragnarök. Ubicado en Svartalfheim, Beigaðr es uno de los berserkers un poco más fuertes a los que el jugador puede elegir enfrentarse después de obtener la Empuñadura de Skofnung.",
      "quote": null,
      "species": [
        "Mortal (antes)",
        "Berserker"
      ],
      "gender": "Masculino",
      "aliases": [
        "Beigaðr el Temido"
      ]
    }
  },
  {
    "id": 144,
    "slug": "berserkers",
    "name": "Berserkers",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᛖᚱᛊᛖᚱᚲᛖᚱᛊ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/7/73/Gowr-berserker-souls-concepts.jpeg/revision/latest/scale-to-width-down/700?cb=20250630151646",
    "voiceActor": "Various",
    "gender": "Various",
    "species": [
      "Mortal (formerly)",
      "Berserker (Undead)"
    ],
    "aliases": [
      "Various"
    ],
    "appearsIn": [
      "God of War Ragnarök",
      "God of War Ragnarök: Valhalla"
    ],
    "about": ":This article is about the optional bosses in God of War Ragnarök. You may be looking for the cult featured in the Dark Horse Comics.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": ":Este artículo trata sobre los jefes opcionales de God of War Ragnarök. Quizá busques el culto que aparece en los cómics de Dark Horse Comics.",
      "quote": null,
      "species": [
        "Mortal (antes)",
        "Berserker (no muerto)"
      ],
      "gender": "Varios",
      "aliases": [
        "Varios"
      ]
    }
  },
  {
    "id": 145,
    "slug": "bestla",
    "name": "Bestla",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᛖᛊᛏᛚᚨ",
    "image": null,
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Goddess (Aesir)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War Ragnarök (mentioned)"
    ],
    "about": "Bestla is an Aesir Goddess. She is a member of the Aesir Royal Family, being wife of Borr, the mother of Odin, Vili and Vé, grandmother of Thor, Týr, Heimdall, and, Baldur, and great-grandmother of Magni, Modi, Forseti and Thrúd.",
    "quote": "You know it doesn't work that way! Though sweet Bestla I wish it did. –Sindri mentions Bestla to Atreus, during their mission.",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Bestla es una diosa Aesir. Es miembro de la familia real Aesir: esposa de Borr, madre de Odín, Vili y Vé, abuela de Thor, Týr, Heimdall y Baldur, y bisabuela de Magni, Modi, Forseti y Thrúd.",
      "quote": "¡Sabes que no funciona así! Aunque, por la dulce Bestla, ojalá así fuera. –Sindri menciona a Bestla a Atreus durante su misión.",
      "species": [
        "Diosa (Aesir)"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 146,
    "slug": "beyla",
    "name": "Beyla",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᛖᛁᛚᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/a/ac/Raf-grassetti-darkone01.jpg/revision/latest/scale-to-width-down/420?cb=20230203093314",
    "voiceActor": "Morla Gorrondona",
    "gender": "Female",
    "species": [
      "Dark Elf"
    ],
    "aliases": [
      "Bœylɑ"
    ],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Beyla is a Dark Elf Warrior. She is the wife of Byggvir and ally to Freyr.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Beyla es una guerrera elfa oscura. Es la esposa de Byggvir y aliada de Freyr.",
      "quote": null,
      "species": [
        "Elfo oscuro"
      ],
      "gender": "Femenino",
      "aliases": [
        "Bœylɑ"
      ]
    }
  },
  {
    "id": 147,
    "slug": "birgir",
    "name": "Birgir",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᛁᚱᚷᛁᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/8/87/Ascaac.png/revision/latest/scale-to-width-down/510?cb=20250107020838",
    "voiceActor": "Jim Pirri",
    "gender": "Male",
    "species": [
      "Mortal"
    ],
    "aliases": [
      "Birgir the Oath Guard (formerly)"
    ],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Birgir is a Midgardian Mortal who fought alongside the Vanir Gods. He was a former Traveler before he saw the lies behind Odin's path and chose to side with Vanaheim, causing other Travelers to label him a heretic.",
    "quote": "FOR VANAHEIM! –Birgir",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Birgir es un mortal de Midgard que luchó junto a los dioses Vanir. Fue un antiguo Viajero hasta que vio las mentiras detrás del camino de Odín y decidió ponerse del lado de Vanaheim, lo que llevó a otros Viajeros a tacharlo de hereje.",
      "quote": "¡POR VANAHEIM! –Birgir",
      "species": [
        "Mortal"
      ],
      "gender": "Masculino",
      "aliases": [
        "Birgir el Guardián del Juramento (antes)"
      ]
    }
  },
  {
    "id": 148,
    "slug": "blatonn",
    "name": "Blatönn",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᛚᚨᛏᛟᚾ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/7/77/Blat%C3%B6nn.jpg/revision/latest/scale-to-width-down/483?cb=20231227043925",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Wulver"
    ],
    "aliases": [
      "The Alpha"
    ],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Blatönn is an alpha-werewolf encountered in Vanaheim.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Blatönn es un hombre lobo alfa que se encuentra en Vanaheim.",
      "quote": null,
      "species": [
        "Wulver"
      ],
      "gender": "Masculino",
      "aliases": [
        "El Alfa"
      ]
    }
  },
  {
    "id": 149,
    "slug": "blodugr-steinn",
    "name": "Blóðugr Steinn",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᛚᛟᚦᚢᚷᚱ᛫ᛊᛏᛖᛁᚾ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/0/0a/Steinn.png/revision/latest?cb=20230806022834",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Troll (Stone)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War Ragnarok"
    ],
    "about": "Blóðugr Steinn is a troll that appears as an optional boss in God of War Ragnarök.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Blóðugr Steinn es un trol que aparece como jefe opcional en God of War Ragnarök.",
      "quote": null,
      "species": [
        "Trol (de piedra)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 150,
    "slug": "brenna-banamadr",
    "name": "Brenna Banamaðr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᚱᛖᚾᚨ᛫ᛒᚨᚾᚨᛗᚨᚦᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/b/b9/Fire_Troll_in_Vanaheim.jpg/revision/latest/scale-to-width-down/566?cb=20230301164758",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Troll (Fire)"
    ],
    "aliases": [
      "Fire Killer",
      "Fire Slayer"
    ],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Brenna Banamaðr is a fire troll and an optional boss in God of War Ragnarök.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Brenna Banamaðr es un trol de fuego y un jefe opcional en God of War Ragnarök.",
      "quote": null,
      "species": [
        "Trol (de fuego)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Asesino de Fuego",
        "Matador de Fuego"
      ]
    }
  },
  {
    "id": 151,
    "slug": "byggvir",
    "name": "Byggvir",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᛁᚷᚹᛁᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/9a/FkRTKJkXoAMXO8d.jpeg/revision/latest/scale-to-width-down/394?cb=20230113100331",
    "voiceActor": "Daniel Kountz",
    "gender": "Male",
    "species": [
      "Light Elf"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Byggvir is a Light Elf and is the husband of Beyla. He is an ally of the Vanir God Freyr.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Byggvir es un elfo de la luz y el esposo de Beyla. Es aliado del dios Vanir Freyr.",
      "quote": null,
      "species": [
        "Elfo de la luz"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 152,
    "slug": "bara",
    "name": "Bára",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᚨᚱᚨ",
    "image": null,
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Jötunn"
    ],
    "aliases": [],
    "appearsIn": [],
    "about": null,
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": null,
      "quote": null,
      "species": [
        "Jötunn"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 153,
    "slug": "bodvar-the-fierce",
    "name": "Bödvar the Fierce",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛒᛟᛞᚹᚨᚱ᛫ᚦᛖ᛫ᚠᛁᛖᚱᚲᛖ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/b/b6/B%C3%B6dvar.png/revision/latest/scale-to-width-down/466?cb=20230323210229",
    "voiceActor": "Alejandro Saab",
    "gender": "Male",
    "species": [
      "Mortal (formerly)",
      "Berserker"
    ],
    "aliases": [
      "Bödvar the Fierce"
    ],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Bödvar the Fierce is one of the twelve Berserkers that can be fought as an optional boss in God of War Ragnarök. Bödvar along with Starólfr the Troublesome can be found in Svartalfheim, in the region between the Jarnsmida Pitmines and Applecore.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Bödvar el Feroz es uno de los doce berserkers contra los que se puede luchar como jefe opcional en God of War Ragnarök. Bödvar, junto con Starólfr el Problemático, se encuentra en Svartalfheim, en la región entre las Minas de Jarnsmida y Corazón de Manzana (Applecore).",
      "quote": null,
      "species": [
        "Mortal (antes)",
        "Berserker"
      ],
      "gender": "Masculino",
      "aliases": [
        "Bödvar el Feroz"
      ]
    }
  },
  {
    "id": 154,
    "slug": "cobweb",
    "name": "Cobweb",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚲᛟᛒᚹᛖᛒ",
    "image": null,
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Fae"
    ],
    "aliases": [
      "Cobweb",
      "Cobweb of the Goodfellows",
      "Titania's Faerie",
      "Ne'er-do-well (by Mimir)"
    ],
    "appearsIn": [
      "God of War Valhalla DLC (mentioned)"
    ],
    "about": "Cobweb of the goodfellows was one of Mimir's faerie-folk friends and the male maid of Queen Titania. He is only ever mentioned in God of War Ragnarök: Valhalla by Mimir.",
    "quote": "I found myself reliving old times with my former crew of fairie-folk. Cobweb, Mustardseed, the whole pack of ne'er-do-wells. Such warm greetings for their old ringleader, like nary a day had passed. –Mimir talking about the Goodfellows to Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Telaraña (Cobweb), de los Goodfellows, fue uno de los amigos hadas de Mimir y el doncel de la reina Titania. Solo lo menciona Mimir en God of War Ragnarök: Valhalla.",
      "quote": "Me encontré reviviendo viejos tiempos con mi antigua banda de hadas. Telaraña, Semilla de Mostaza, toda la pandilla de bribones. Qué cálida bienvenida para su antiguo cabecilla, como si no hubiera pasado ni un día. –Mimir hablando de los Goodfellows con Kratos",
      "species": [
        "Hada"
      ],
      "gender": "Masculino",
      "aliases": [
        "Cobweb",
        "Cobweb de los Goodfellows",
        "Hada de Titania",
        "Bueno para nada (según Mimir)"
      ]
    }
  },
  {
    "id": 155,
    "slug": "dagr",
    "name": "Dagr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛞᚨᚷᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/2/27/Corpse_of_Dagr.png/revision/latest/scale-to-width-down/570?cb=20240217063416",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Midgardian"
    ],
    "aliases": [
      "Dagr Högnison",
      "Dag"
    ],
    "appearsIn": [
      "God of War Ragnarök (mentioned)"
    ],
    "about": "Dagr was a Prince of Östergötland, brother of Sigrún and son of Högni. He appears in minimal sources of Norse mythology. He is known as the one with the help of the war God Odin slain the mad King Helgi.",
    "quote": "1=My spear drips righteous and red from the blood of that cad, King Helgi. My father, in his wisdom denied him the hand of my sister, Princess Sigrún, knowing his true and dark nature. Enraged by his slight, King Helgi gathered his forces and invaded our land, determined to claim his bride. –2=Dagr's letter",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Dagr fue un príncipe de Östergötland, hermano de Sigrún e hijo de Högni. Aparece en pocas fuentes de la mitología nórdica. Se le conoce como quien, con la ayuda del dios de la guerra Odín, dio muerte al rey loco Helgi.",
      "quote": "1=Mi lanza gotea, justa y roja, con la sangre de ese canalla, el rey Helgi. Mi padre, en su sabiduría, le negó la mano de mi hermana, la princesa Sigrún, pues conocía su verdadera y oscura naturaleza. Enfurecido por el desaire, el rey Helgi reunió a sus fuerzas e invadió nuestras tierras, decidido a reclamar a su novia. –2=Carta de Dagr",
      "species": [
        "Midgardiano"
      ],
      "gender": "Masculino",
      "aliases": [
        "Dagr Högnison",
        "Dag"
      ]
    }
  },
  {
    "id": 156,
    "slug": "daudi-vordr",
    "name": "Daudi Vörðr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛞᚨᚢᛞᛁ᛫ᚹᛟᚱᚦᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/5/52/Death_Warden.jpg/revision/latest/scale-to-width-down/700?cb=20230301155519",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Troll (Fire)"
    ],
    "aliases": [
      "Death Warden",
      "Death Watcher"
    ],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Daudi Vörðr (meaning Death Warden or Death Watcher) was a Troll that appears as a minor enemy in God of War Ragnarök. Like Dauði Kaupmaðr from the previous game, he is the first fire troll to be encountered, however, unlike the former, he is the only one canonically encountered in the main storyline as all other troll encounters throughout the game are optional.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Daudi Vörðr (que significa Guardián de la Muerte o Vigía de la Muerte) fue un trol que aparece como enemigo menor en God of War Ragnarök. Al igual que Dauði Kaupmaðr en el juego anterior, es el primer trol de fuego con el que uno se encuentra; sin embargo, a diferencia de aquel, es el único que aparece canónicamente en la historia principal, ya que todos los demás encuentros con troles a lo largo del juego son opcionales.",
      "quote": null,
      "species": [
        "Trol (de fuego)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Guardián de la Muerte",
        "Vigía de la Muerte"
      ]
    }
  },
  {
    "id": 157,
    "slug": "duneyrr",
    "name": "Duneyrr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛞᚢᚾᛖᛁᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/98/Duneyrr.webp/revision/latest/scale-to-width-down/700?cb=20240215232549",
    "voiceActor": null,
    "gender": "Unknown",
    "species": [
      "Seasonal Stag"
    ],
    "aliases": [
      "Stag of Autumn",
      "Thundering in the Ear"
    ],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Duneyrr is a Seasonal Stag from Yggdrasil, representing the season of Autumn.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Duneyrr es un ciervo estacional de Yggdrasil que representa la estación del otoño.",
      "quote": null,
      "species": [
        "Ciervo de las estaciones"
      ],
      "gender": "Desconocido",
      "aliases": [
        "Ciervo del Otoño",
        "Trueno en el Oído"
      ]
    }
  },
  {
    "id": 158,
    "slug": "durinn",
    "name": "Durinn",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛞᚢᚱᛁᚾ",
    "image": null,
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Dwarf"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök (mentioned)"
    ],
    "about": "Durinn was a Dwarven Smith, living in Svartalfheim who truly believed Svartalfheim could flourish from his creation and hoped to give the Dwarves independence.",
    "quote": "Durinn the Generous built the World-Mill over the course of decades, He foresaw a future in which Svartalfheim was as lush and verdant as the most overgrown fields in Vanaheim, and the World-Mill was the first step toward that future. He'd sell fertile, high-quality soil to the other Dwarves and pour all the proceeds into keeping the World-Mill running. –Mimir",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Durinn fue un herrero enano que vivía en Svartalfheim y que creía de verdad que Svartalfheim podía florecer gracias a su creación; esperaba darles la independencia a los enanos.",
      "quote": "Durinn el Generoso construyó el Molino del Mundo a lo largo de décadas. Vislumbraba un futuro en el que Svartalfheim fuera tan exuberante y verde como los campos más frondosos de Vanaheim, y el Molino del Mundo era el primer paso hacia ese futuro. Vendía tierra fértil y de alta calidad a los demás enanos y destinaba todas las ganancias a mantener en marcha el Molino del Mundo. –Mimir",
      "species": [
        "Enano"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 159,
    "slug": "durlin",
    "name": "Durlin",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛞᚢᚱᛚᛁᚾ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/3/30/Durlin_profile_full.png/revision/latest?cb=20240225233831",
    "voiceActor": "Usman Ally",
    "gender": "Male",
    "species": [
      "Dwarf"
    ],
    "aliases": [
      "Cousin (by Sindri)",
      "Inveterate Inebriate (by Sindri)",
      "Rebel leader (by Atreus)",
      "You-know-who (by Sif)",
      "Chief (by Odin)",
      "Pain in my ass (by Odin)",
      "Friend (by Odin)"
    ],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Durlin is a dwarf and an official in Svartalfheim. He was also a former rebel leader, who, alongside Laufey, led a failed coup against the Aesir, in which he was severely punished by Heimdall. He has a pet Kraken named Dínner.",
    "quote": "Here to collect on something, pal? Think, uh, parading a severed head around on your hip is gonna scare me into somehow approving Estrid's accretion proposal, eh? –Durlin meeting Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Durlin es un enano y funcionario de Svartalfheim. También fue un antiguo líder rebelde que, junto a Laufey, encabezó un golpe fallido contra los Aesir, por el que Heimdall lo castigó severamente. Tiene un kraken como mascota llamado Dínner.",
      "quote": "¿Vienes a cobrar algo, amigo? ¿Crees, eh, que pasearte con una cabeza cortada colgando de la cadera me va a asustar para que de algún modo apruebe la propuesta de acreción de Estrid, eh? –Durlin al conocer a Kratos",
      "species": [
        "Enano"
      ],
      "gender": "Masculino",
      "aliases": [
        "Primo (según Sindri)",
        "Borracho empedernido (según Sindri)",
        "Líder rebelde (según Atreus)",
        "Ya-sabes-quién (según Sif)",
        "Jefe (según Odín)",
        "Dolor de culo (según Odín)",
        "Amigo (según Odín)"
      ]
    }
  },
  {
    "id": 160,
    "slug": "dvalinn",
    "name": "Dvalinn",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛞᚹᚨᛚᛁᚾ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/c/c4/Dvalinn.webp/revision/latest/scale-to-width-down/700?cb=20240215230926",
    "voiceActor": null,
    "gender": "Unknown",
    "species": [
      "Seasonal Stag"
    ],
    "aliases": [
      "Stag of Summer",
      "The Unconscious one"
    ],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Dvalinn is a Seasonal Stag from Yggdrasil, representing the season of Summer.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Dvalinn es un ciervo estacional de Yggdrasil que representa la estación del verano.",
      "quote": null,
      "species": [
        "Ciervo de las estaciones"
      ],
      "gender": "Desconocido",
      "aliases": [
        "Ciervo del Verano",
        "El Inconsciente"
      ]
    }
  },
  {
    "id": 161,
    "slug": "dainn",
    "name": "Dáinn",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛞᚨᛁᚾ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/1/1f/D%C3%A1inn.webp/revision/latest/scale-to-width-down/700?cb=20240215225318",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Seasonal Stag"
    ],
    "aliases": [
      "Stag of Spring",
      "The Dead one"
    ],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Dáinn is a Seasonal Deer from Yggdrasil, representing the season of Spring.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Dáinn es un ciervo estacional de Yggdrasil que representa la estación de la primavera.",
      "quote": null,
      "species": [
        "Ciervo de las estaciones"
      ],
      "gender": "Masculino",
      "aliases": [
        "Ciervo de la Primavera",
        "El Muerto"
      ]
    }
  },
  {
    "id": 162,
    "slug": "egil-the-oath-guard",
    "name": "Egil The Oath Guard",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛖᚷᛁᛚ᛫ᚦᛖ᛫ᛟᚨᚦ᛫ᚷᚢᚨᚱᛞ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/2/23/Egil_The_Oath_Guard.jpg/revision/latest?cb=20230416043150",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Midgardian",
      "Traveler"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Egil the Oath Guard is an optional boss introduced in God of War: Ragnarök. He is one of the Oath Guards and a former brother of Birgir.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Egil, el Guardián del Juramento, es un jefe opcional introducido en God of War: Ragnarök. Es uno de los Guardianes del Juramento y un antiguo hermano de Birgir.",
      "quote": null,
      "species": [
        "Midgardiano",
        "Viajero"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 163,
    "slug": "einherjar-thief",
    "name": "Einherjar Thief",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛖᛁᚾᚺᛖᚱᛃᚨᚱ᛫ᚦᛁᛖᚠ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/8/8e/Einherjar_Thief.png/revision/latest/scale-to-width-down/657?cb=20240413181850",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Midgardian (Formerly)",
      "Einherjar"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "The Einherjar Thief is an enemy Einherjar Tamer, which prevents Kratos and Atreus from recovering the Moon.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "El Ladrón Einherjar es un enemigo, un Domador Einherjar, que impide que Kratos y Atreus recuperen la Luna.",
      "quote": null,
      "species": [
        "Midgardiano (antes)",
        "Einherjar"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 164,
    "slug": "eisa",
    "name": "Eisa",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛖᛁᛊᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/3/33/Eisa.jpg/revision/latest/scale-to-width-down/700?cb=20230802223816",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Fox"
    ],
    "aliases": [],
    "appearsIn": [],
    "about": "Eisa is a fox that accompany the giantess Angrboda that she rides when she raced Atreus in Jötunheim.",
    "quote": "First the wolves, then a yak, and now a magical fox with huge ears?! Angrboda sure has a lot of animal friends. During our race rematch, Eisa was fast–like, REALLY fast–even with Angrboda on her back! I almost kept up with her, but yeah... I still lost. It felt good to finally be in control of my wolf form though. I just had to think about Angrboda and what she must be felling–holding ono, I dunno, compassion or sometheing to keep the rage in check? Huh. I wonder if that's how father does it?\" –Atreus' description of Eisa",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Eisa es una zorra que acompaña a la giganta Angrboda y que esta monta cuando compite en una carrera contra Atreus en Jötunheim.",
      "quote": "Primero los lobos, luego un yak, ¡¿y ahora una zorra mágica con orejas enormes?! Angrboda sí que tiene muchos amigos animales. Durante la revancha de nuestra carrera, Eisa fue rápida, o sea, MUY rápida, ¡incluso con Angrboda en el lomo! Casi logré seguirle el ritmo, pero sí... volví a perder. Aun así, se sintió bien por fin tener el control de mi forma de lobo. Solo tenía que pensar en Angrboda y en lo que ella debía de estar sintiendo, aferrarme a, no sé, ¿la compasión o algo así para mantener la ira bajo control? Mmm. ¿Me pregunto si así es como lo hace padre?\" –Descripción de Eisa según Atreus",
      "species": [
        "Zorro"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 165,
    "slug": "erlend",
    "name": "Erlend",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛖᚱᛚᛖᚾᛞ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/7/78/Erlend.png/revision/latest/scale-to-width-down/376?cb=20240206035725",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Mortal"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Erlend is one of the Asgardians that can briefly be seen in the game God of War: Ragnarök during Atreus' adventure in Asgard",
    "quote": "Erlend, try to stay awake. For me? –Odin to Erlend",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Erlend es uno de los asgardianos que pueden verse brevemente en el juego God of War: Ragnarök durante la aventura de Atreus en Asgard",
      "quote": "Erlend, intenta mantenerte despierto. ¿Por mí? –Odín a Erlend",
      "species": [
        "Mortal"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 166,
    "slug": "fenrir",
    "name": "Fenrir",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚠᛖᚾᚱᛁᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/5/5f/Capture_d%E2%80%99%C3%A9cran_2022-12-14_%C3%A0_23.06.48.png/revision/latest/scale-to-width-down/401?cb=20221214231004",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Wolf (Originally)",
      "Jötunn (Animal giant)"
    ],
    "aliases": [
      "Fen (by Loki)",
      "Boy (by Loki)",
      "Good Boy (by Loki and Kratos)",
      "Loyal Pup (by Mimir)",
      "Garm (without Fenrir's soul)"
    ],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Fenrir (Nordic: ᚠᛖᚾᚱᛁᚱ) is the elderly and sick wolf of Atreus and Kratos. After his death, Atreus subconsciously casts a spell that transfers his part of his soul to his knife. During the fight with Garm, Atreus transfers the piece of Fenrir's soul to the Hound of Helheim, changing its nature and resurrecting Fenrir, who aids them during the events of Ragnarök.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Fenrir (rúnico: ᚠᛖᚾᚱᛁᚱ) es el lobo anciano y enfermo de Atreus y Kratos. Tras su muerte, Atreus lanza de manera inconsciente un hechizo que transfiere su parte del alma a su cuchillo. Durante la pelea con Garm, Atreus transfiere el fragmento del alma de Fenrir al Sabueso de Helheim, lo que cambia su naturaleza y resucita a Fenrir, quien los ayuda durante los acontecimientos del Ragnarök.",
      "quote": null,
      "species": [
        "Lobo (originalmente)",
        "Jötunn (gigante animal)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Fen (según Loki)",
        "Chico (según Loki)",
        "Buen chico (según Loki y Kratos)",
        "Cachorro leal (según Mimir)",
        "Garm (sin el alma de Fenrir)"
      ]
    }
  },
  {
    "id": 167,
    "slug": "fiske",
    "name": "Fiske",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚠᛁᛊᚲᛖ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/93/Fiske_%28Brighter%29.jpg/revision/latest/scale-to-width-down/671?cb=20230218073248",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Midgardian (formerly)",
      "Einherjar"
    ],
    "aliases": [
      "Odin's Captain"
    ],
    "appearsIn": [
      "God of War: Ragnarok",
      "God of War Ragnarök: Valhalla (illusion)"
    ],
    "about": "Fiske is a captain of the Einherjar and a boss in God of War Ragnarök. He is found in Vanaheim.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Fiske es un capitán de los Einherjar y un jefe en God of War Ragnarök. Se encuentra en Vanaheim.",
      "quote": null,
      "species": [
        "Midgardiano (antes)",
        "Einherjar"
      ],
      "gender": "Masculino",
      "aliases": [
        "Capitán de Odín"
      ]
    }
  },
  {
    "id": 168,
    "slug": "forseti",
    "name": "Forseti",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚠᛟᚱᛊᛖᛏᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/c/c2/Capture_d%E2%80%99%C3%A9cran_2022-12-03_%C3%A0_13.48.40.png/revision/latest/scale-to-width-down/700?cb=20221203134920",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God (3/4 Aesir, 1/4 Vanir)"
    ],
    "aliases": [
      "Forseti Baldurson",
      "Fosite"
    ],
    "appearsIn": [
      "God of War Ragnarök (mentioned)"
    ],
    "about": "Forseti (Old Norse: Fosite) also known as Forseti Baldurson (Translation: Forseti, Son of Baldur) is the Norse God of Justice and Reconciliation. He is the son of Baldur and Nanna, grandson of Odin and Freya, the nephew of Thor, Týr and Heimdall, and the cousin of Magni, Modi and Thrúd. He is a member of the Aesir Royal Family.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Forseti (nórdico antiguo: Fosite), también conocido como Forseti Baldurson (traducción: Forseti, hijo de Baldur), es el dios nórdico de la justicia y la reconciliación. Es hijo de Baldur y Nanna, nieto de Odín y Freya, sobrino de Thor, Týr y Heimdall, y primo de Magni, Modi y Thrúd. Es miembro de la familia real de los Aesir.",
      "quote": null,
      "species": [
        "Dios (3/4 Aesir, 1/4 Vanir)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Forseti Baldurson",
        "Fosite"
      ]
    }
  },
  {
    "id": 169,
    "slug": "fraekni-the-zealous",
    "name": "Frækni the Zealous",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚠᚱᚨᚲᚾᛁ᛫ᚦᛖ᛫ᛉᛖᚨᛚᛟᚢᛊ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/b/b8/Fraekni.png/revision/latest/scale-to-width-down/466?cb=20230323040644",
    "voiceActor": "Tara Langella",
    "gender": "Female",
    "species": [
      "Mortal (formerly)",
      "Berserker"
    ],
    "aliases": [
      "Frækni the Zealous"
    ],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Frækni the Zealous is one of the twelve Berserkers that can be fought as an optional boss in God of War Ragnarök. Located in Midgard, Frækni is one of the first Berserkers you can choose to face after obtaining the Hilt of Skofnung.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Frækni el Ferviente es uno de los doce berserkers contra los que se puede luchar como jefe opcional en God of War Ragnarök. Ubicado en Midgard, Frækni es uno de los primeros berserkers a los que puedes elegir enfrentarte después de obtener la Empuñadura de Skofnung.",
      "quote": null,
      "species": [
        "Mortal (antes)",
        "Berserker"
      ],
      "gender": "Femenino",
      "aliases": [
        "Frækni el Fanático"
      ]
    }
  },
  {
    "id": 170,
    "slug": "garm",
    "name": "Garm",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚵᚨᛗᛦ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/d/d2/Fkc_cIoXoAEljb5.jpeg/revision/latest/scale-to-width-down/394?cb=20221222145044",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Jötunn (Animal Giant)"
    ],
    "aliases": [
      "Hróðvitnir (by the Aesir)",
      "Fenrir (after death)",
      "Archwolf",
      "Greatest Enemy of Aesir",
      "Mangy Mutt (by Thrúd)",
      "That Thing (by Heimdall)",
      "Hound of Hel (by Freya)",
      "Hel's Feral Sentinel (by Mimir)",
      "Gigantic Hel Beast (by Mimir)"
    ],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Garm (Nordic: ᚵᚨᛗᛦ), also known Hróðvitnir (Nordic: ᚼᚱᚢᚦᚠᛁᛏᚾᛁᛦ) by the Aesir and Fenrir (Nordic: ᚠᛖᚾᚱᛁᚱ) after his death, was a Jötunn monstrous wolf that was imprisoned in Helheim and is the father of Sköll and Hati.",
    "quote": "If the Hound of Hel is let loose, he'll chew through the fabric of the realms. Hel-Walkers are just the beginning. –Freya's reaction to Atreus freeing Garm",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Garm (rúnico: ᚵᚨᛗᛦ), también conocido como Hróðvitnir (rúnico: ᚼᚱᚢᚦᚠᛁᛏᚾᛁᛦ) por los Aesir y como Fenrir (rúnico: ᚠᛖᚾᚱᛁᚱ) tras su muerte, era un monstruoso lobo jötunn que estaba encarcelado en Helheim y es el padre de Sköll y Hati.",
      "quote": "Si el Sabueso de Hel queda suelto, roerá el tejido de los reinos. Los caminantes de Hel son solo el comienzo. –Reacción de Freya cuando Atreus libera a Garm",
      "species": [
        "Jötunn (gigante animal)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Hróðvitnir (según los Æsir)",
        "Fenrir (tras su muerte)",
        "Archilobo",
        "Mayor enemigo de los Æsir",
        "Chucho sarnoso (según Thrúd)",
        "Esa cosa (según Heimdall)",
        "Sabueso de Hel (según Freya)",
        "Centinela salvaje de Hel (según Mimir)",
        "Gigantesca bestia de Hel (según Mimir)"
      ]
    }
  },
  {
    "id": 171,
    "slug": "geirdriful",
    "name": "Geirdriful",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚷᛖᛁᚱᛞᚱᛁᚠᚢᛚ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/1/15/FlNijZvXoAA1jca.jpeg/revision/latest/scale-to-width-down/394?cb=20230105103910",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Midgardian (formerly)",
      "Valkyrie (formerly)",
      "Shield Maiden"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018)",
      "God of War: Ragnarök"
    ],
    "about": "Geirdriful is a Valkyrie introduced in God of War (2018). She is one of the nine Valkyries who have been cursed by Odin to remain in a corporal form, eventually driving them to insanity. As she became too dangerous, Geirdriful eventually found herself sealed away by the Valkyrie Queen in Midgard. She is nevertheless freed by Kratos and Atreus after they engaged and defeated her physical form. Blessing them with her eternal gratitude, her spirit vanished and eventually reunited with her sisters.",
    "quote": "The Master of Arms in Valhalla. Responsible for arming and training Odin’s Einherjar. His army, come Ragnarök. The Einherjar wait in the Great Hall, endlessly feasting, drinking, and fu— ahem uh... fornicating themselves silly. Once Ragnarök begins, Odin calls them into service to fight on his behalf. Geirdriful had her hands full, training that lot. –Mimir's remarks about Geirdriful",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Geirdriful es una valquiria introducida en God of War (2018). Es una de las nueve valquirias que Odín maldijo para que permanecieran en forma corpórea, lo que terminó por llevarlas a la locura. Como se volvió demasiado peligrosa, Geirdriful acabó sellada por la Reina de las Valquirias en Midgard. Aun así, Kratos y Atreus la liberan después de enfrentarse a su forma física y derrotarla. Tras bendecirlos con su eterna gratitud, su espíritu se desvaneció y finalmente se reunió con sus hermanas.",
      "quote": "La maestra de armas de Valhalla. Responsable de armar y entrenar a los Einherjar de Odín. Su ejército, cuando llegue el Ragnarök. Los Einherjar esperan en el Gran Salón, festejando sin fin, bebiendo y fo... ejem, eh... fornicando hasta perder la cabeza. Cuando comience el Ragnarök, Odín los llamará al servicio para luchar en su nombre. Geirdriful tenía las manos llenas entrenando a ese grupo. –Comentarios de Mimir sobre Geirdriful",
      "species": [
        "Midgardiano (antes)",
        "Valquiria (antes)",
        "Doncella escudera"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 172,
    "slug": "geri-and-freki",
    "name": "Geri & Freki",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚷᛖᚱᛁ᛫ᚠᚱᛖᚲᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/c/c5/FjxUhwTWYAEhmT3.jpeg/revision/latest/scale-to-width-down/393?cb=20230130174313",
    "voiceActor": null,
    "gender": "Females",
    "species": [
      "Wolves"
    ],
    "aliases": [],
    "appearsIn": [],
    "about": "Geri and Freki are two wolves that accompany the god Odin. After a successful battle, Odin walks over the bodies of his defeated opponents while Geri and Freki devour their bodies.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Geri y Freki son dos lobos que acompañan al dios Odín. Después de una batalla victoriosa, Odín camina sobre los cuerpos de sus oponentes derrotados mientras Geri y Freki devoran sus cuerpos.",
      "quote": null,
      "species": [
        "Lobos"
      ],
      "gender": "Femenino (grupo)",
      "aliases": []
    }
  },
  {
    "id": 173,
    "slug": "gna",
    "name": "Gná",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚷᚾᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/3/3f/Capture_d%E2%80%99%C3%A9cran_2023-01-28_%C3%A0_10.55.44.png/revision/latest/scale-to-width-down/376?cb=20230128105017",
    "voiceActor": "Evanne Friedmann",
    "gender": "Female",
    "species": [
      "Goddess (Vanir)",
      "Valkyrie"
    ],
    "aliases": [
      "Queen Gná (by Odin)",
      "Valkyrie Queen (by Atreus)",
      "Traitor (by Eir and Mimir)",
      "Sister (by Freya)"
    ],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Gná (Old Norse: gnɑ) was the Vanir Goddess of Swift Travel, and Freya's former handmaiden. She is introduced in God of War Ragnarök as the new Queen of the Valkyries, since Sigrún regained her freedom following her defeat at the hands of Kratos and Atreus, three years ago.",
    "quote": "GOOD! I will see you PAY for what you have done. –Gná blaming Freya and Kratos for Asgard's destruction.",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Gná (nórdico antiguo: gnɑ) era la diosa vanir de los viajes veloces y la antigua doncella de Freya. Se presenta en God of War Ragnarök como la nueva Reina de las Valquirias, ya que Sigrún recuperó su libertad tras ser derrotada a manos de Kratos y Atreus, tres años atrás.",
      "quote": "¡BIEN! Me encargaré de que PAGUEN por lo que han hecho. –Gná culpando a Freya y a Kratos de la destrucción de Asgard.",
      "species": [
        "Diosa (Vanir)",
        "Valquiria"
      ],
      "gender": "Femenino",
      "aliases": [
        "Reina Gná (según Odín)",
        "Reina de las valquirias (según Atreus)",
        "Traidora (según Eir y Mimir)",
        "Hermana (según Freya)"
      ]
    }
  },
  {
    "id": 174,
    "slug": "gorm",
    "name": "Gorm",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚷᛟᚱᛗ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/0/09/Gorm.png/revision/latest/scale-to-width-down/438?cb=20240206035049",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Midgardian",
      "Einherjar"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": null,
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": null,
      "quote": null,
      "species": [
        "Midgardiano",
        "Einherjar"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 175,
    "slug": "griep",
    "name": "Griep",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚷᚱᛁᛖᛈ",
    "image": null,
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Dwarf"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök (mentioned)"
    ],
    "about": "Griep was a Dwarven Scribe, living in Svartalfheim who constantly rallied against the Aesir until her demise.",
    "quote": "Griep was a fantastically angry Dwarven Scribe. Her furious treatises against Odin's financial imperialism might as well have spurred the Dwarves to outright rebellion, had she continued to distribute them. –Mimir",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Griep fue una escriba enana que vivía en Svartalfheim y que se rebeló constantemente contra los Aesir hasta su muerte.",
      "quote": "Griep era una escriba enana fantásticamente furiosa. Sus airados tratados contra el imperialismo financiero de Odín bien podrían haber impulsado a los enanos a una rebelión abierta, si hubiera seguido distribuyéndolos. –Mimir",
      "species": [
        "Enano"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 176,
    "slug": "gryla",
    "name": "Grýla",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚷᚱᛁᛚᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/e/e5/Gryla.png/revision/latest/scale-to-width-down/348?cb=20230427205741",
    "voiceActor": "Debra Wilson",
    "gender": "Female",
    "species": [
      "Jötunn (Frost Giant)"
    ],
    "aliases": [
      "Grandmother (by Angrboda)"
    ],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Grýla is an elderly Giantess and is the grandmother of Angrboda. She appears as a minor antagonist in God of War Ragnarök.",
    "quote": "She used to leave me food. She'd say she didn't care about me. But sometimes I'd wake up and I'd see a loaf of bread sitting next to the fire. Baked just the way she always used to. She's not a monster, you know? She's lost. –Angrboda to Atreus after breaking the Cauldron",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Grýla es una giganta anciana y la abuela de Angrboda. Aparece como antagonista menor en God of War Ragnarök.",
      "quote": "Solía dejarme comida. Decía que yo no le importaba. Pero a veces me despertaba y veía una hogaza de pan junto al fuego. Horneada justo como ella siempre la hacía. No es un monstruo, ¿sabes? Está perdida. –Angrboda a Atreus tras romper el Caldero",
      "species": [
        "Jötunn (gigante de escarcha)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Abuela (según Angrboda)"
      ]
    }
  },
  {
    "id": 177,
    "slug": "gulltoppr",
    "name": "Gulltoppr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚷᚢᛚᛏᛟᛈᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/3/3c/FljVx_rXoAQ0xne.jpeg/revision/latest/scale-to-width-down/500?cb=20230107131231",
    "voiceActor": null,
    "gender": "Male (female in some dubs)",
    "species": [
      "Graðungr"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Gulltoppr is Heimdall's personal steed that serves as his official mount to protect the kingdom of Asgard.",
    "quote": "Wow, that's almost as impressive as Baldur taming a dragon! –Loki to Heimdall on his mastery of Gulltoppr",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Gulltoppr es el corcel personal de Heimdall, que le sirve como montura oficial para proteger el reino de Asgard.",
      "quote": "¡Vaya, eso es casi tan impresionante como cuando Baldur domó un dragón! –Loki a Heimdall sobre su dominio de Gulltoppr",
      "species": [
        "Graðungr"
      ],
      "gender": "Masculino (femenino en algunos doblajes)",
      "aliases": []
    }
  },
  {
    "id": 178,
    "slug": "gunhild",
    "name": "Gunhild",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚷᚢᚾᚺᛁᛚᛞ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/c/c8/Gunhild.png/revision/latest?cb=20240205213711",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Vanir (mortal)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Gunhild was a female Vanir worshiper of the Goddess Freya, she suggested using Seiðr magic with her friends to defend themselves from the Einherjar's destruction, but her plan backfired. She was murdered and her friends cursed.",
    "quote": "We shouldn't have played with such magic. Regret is my only company. –Gunhild",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Gunhild era una vanir devota de la diosa Freya. Sugirió usar magia seiðr junto con sus amigas para defenderse de la destrucción causada por los Einherjar, pero su plan fracasó. Ella fue asesinada y sus amigas, malditas.",
      "quote": "No debimos jugar con semejante magia. El arrepentimiento es mi única compañía. –Gunhild",
      "species": [
        "Vanir (mortal)"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 179,
    "slug": "gondul",
    "name": "Göndul",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚷᛟᚾᛞᚢᛚ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/8/88/FlMCaAtXEAA4sas.jpeg/revision/latest/scale-to-width-down/394?cb=20230105104041",
    "voiceActor": "Laila Berzins",
    "gender": "Female",
    "species": [
      "Midgardian (formerly)",
      "Valkyrie (formerly)",
      "Shield Maiden"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018)",
      "God of War: Ragnarök"
    ],
    "about": "Göndul is a Valkyrie introduced in God of War (2018). She is one of the nine Valkyries who have been cursed by Odin to remain in a corporal form, eventually driving them to insanity. As she became too dangerous, Göndul eventually found herself sealed away by the Valkyrie Queen in Muspelheim. Widely considered as the most powerful of the Valkyries after Sigrún, she is nevertheless freed by Kratos and Atreus after they engaged and defeated her physical form. Blessing them with her eternal gratitude, her spirit vanished and eventually reunited with her sisters.",
    "quote": "The sight of Gondul always took my breath away. Gondul had a silver tongue, a sharp wit, and struck a figure so stunning, it literally drove men insane. Odin forbid her from setting foot in Midgard after a time, as insanity is not a welcome trait in Valhalla. –Mimir's remarks about Gondul",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Göndul es una valquiria introducida en God of War (2018). Es una de las nueve valquirias que Odín maldijo para que permanecieran en forma corpórea, lo que terminó por llevarlas a la locura. Como se volvió demasiado peligrosa, Göndul acabó sellada por la Reina de las Valquirias en Muspelheim. Considerada ampliamente la más poderosa de las valquirias después de Sigrún, aun así Kratos y Atreus la liberan después de enfrentarse a su forma física y derrotarla. Tras bendecirlos con su eterna gratitud, su espíritu se desvaneció y finalmente se reunió con sus hermanas.",
      "quote": "Ver a Gondul siempre me dejaba sin aliento. Gondul tenía una lengua de plata, un ingenio agudo y una figura tan deslumbrante que literalmente volvía locos a los hombres. Con el tiempo, Odín le prohibió poner un pie en Midgard, ya que la locura no es una cualidad bienvenida en Valhalla. –Comentarios de Mimir sobre Gondul",
      "species": [
        "Midgardiano (antes)",
        "Valquiria (antes)",
        "Doncella escudera"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 180,
    "slug": "hafgufa",
    "name": "Hafgufa",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᚨᚠᚷᚢᚠᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/0/0e/HafgufaAlfeim.jpg/revision/latest/scale-to-width-down/700?cb=20230429031624",
    "voiceActor": null,
    "gender": "Unknown",
    "species": [
      "Jelly-fish creature"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Hafgufa are giant jellyfish-like creatures that live in Alfheim. There are two that can be encountered in God of War Ragnarök.",
    "quote": "Great Gefjon's ghost! That's the largest bloody Hafgufa I've ever laid eyes on! –Mimir upon seeing the Hafgufa",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Los hafgufa son criaturas gigantes parecidas a medusas que viven en Alfheim. Hay dos que pueden encontrarse en God of War Ragnarök.",
      "quote": "¡Por el fantasma de la gran Gefjon! ¡Es el maldito hafgufa más grande que he visto en mi vida! –Mimir al ver al hafgufa",
      "species": [
        "Criatura medusa"
      ],
      "gender": "Desconocido",
      "aliases": []
    }
  },
  {
    "id": 181,
    "slug": "haklangr-the-bearded",
    "name": "Haklangr the Bearded",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᚨᚲᛚᚨᛜᚱ᛫ᚦᛖ᛫ᛒᛖᚨᚱᛞᛖᛞ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/2/25/Haklangr.png/revision/latest/scale-to-width-down/466?cb=20230323205920",
    "voiceActor": "Yusuke Sasaki (Japanese dub)",
    "gender": "Male",
    "species": [
      "Mortal (formerly)",
      "Berserker"
    ],
    "aliases": [
      "Haklangr the Bearded"
    ],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Haklangr the Bearded is one of the twelve Berserkers that can be fought as an optional boss in God of War Ragnarök. Haklangr can be found in The Sinkholes in Vanaheim, near the Mystic Gateway.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Haklangr el Barbudo es uno de los doce berserkers contra los que se puede luchar como jefe opcional en God of War Ragnarök. Haklangr se encuentra en Los Sumideros, en Vanaheim, cerca del Portal Místico.",
      "quote": null,
      "species": [
        "Mortal (antes)",
        "Berserker"
      ],
      "gender": "Masculino",
      "aliases": [
        "Haklangr el Barbudo"
      ]
    }
  },
  {
    "id": 182,
    "slug": "hardrefill-the-callous",
    "name": "Harðrefill the Callous",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᚨᚱᚦᚱᛖᚠᛁᛚ᛫ᚦᛖ᛫ᚲᚨᛚᛟᚢᛊ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/9a/Fkd9lubWYAEBT30.jpeg/revision/latest/scale-to-width-down/394?cb=20230105090640",
    "voiceActor": "Stephen Fu (English)",
    "gender": "Male",
    "species": [
      "Mortal (formerly)",
      "Berserker"
    ],
    "aliases": [
      "Harðrefill the Callous"
    ],
    "appearsIn": [
      "God of War: Ragnarök",
      "God of War Ragnarök: Valhalla"
    ],
    "about": "Harðrefill the Callous is one of the twelve Berserkers that can be fought as an optional boss in God of War Ragnarök. Located in Svartalfheim, Harðrefill is likely the first Berserker the player will encounter after getting the Hilt of Skofnung.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Harðrefill el Despiadado es uno de los doce berserkers contra los que se puede luchar como jefe opcional en God of War Ragnarök. Ubicado en Svartalfheim, Harðrefill probablemente sea el primer berserker que el jugador encuentre después de obtener la Empuñadura de Skofnung.",
      "quote": null,
      "species": [
        "Mortal (antes)",
        "Berserker"
      ],
      "gender": "Masculino",
      "aliases": [
        "Harðrefill el Despiadado"
      ]
    }
  },
  {
    "id": 183,
    "slug": "helgi",
    "name": "Helgi",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᛖᛚᚷᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/a/a3/Helgi_und_Sigrun_by_Johannes_Gehrts.jpg/revision/latest?cb=20240630045310",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Midgardian"
    ],
    "aliases": [
      "Helgi Sigmundson",
      "Helgi Hundingsbane",
      "The mad King (by Dagr, Högni & Mimir)"
    ],
    "appearsIn": [
      "God of War Ragnarök (mentioned)"
    ],
    "about": "King Helgi also known as Helgi Hundingsbane is regarded as a hero in Norse sagas. He is known for his affections towards Princess Sigrún and the responsible for the destruction of the Kingdom Östergötland.",
    "quote": "1=King Helgi massacred her family just because he couldn't have her. Only her brother, Prince Dagr, survived to kill the mad king. –2=Mimir talking about Sigrún's past with Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "El rey Helgi, también conocido como Helgi Hundingsbane, es considerado un héroe en las sagas nórdicas. Es conocido por su afecto hacia la princesa Sigrún y por ser el responsable de la destrucción del reino de Östergötland.",
      "quote": "1=El rey Helgi masacró a su familia solo porque no podía tenerla. Únicamente su hermano, el príncipe Dagr, sobrevivió para matar al rey loco. –2=Mimir hablando con Kratos sobre el pasado de Sigrún",
      "species": [
        "Midgardiano"
      ],
      "gender": "Masculino",
      "aliases": [
        "Helgi Sigmundson",
        "Helgi Hundingsbane",
        "El rey loco (según Dagr, Högni y Mimir)"
      ]
    }
  },
  {
    "id": 184,
    "slug": "helka",
    "name": "Helka",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᛖᛚᚲᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/f/fa/Scr38947rwej.png/revision/latest/scale-to-width-down/700?cb=20240103081340",
    "voiceActor": null,
    "gender": "Female",
    "species": [],
    "aliases": [
      "Helka (everyone)"
    ],
    "appearsIn": [],
    "about": "Helka is Lunda's pet and is the faithful companion of Freyr and his allies. She makes her debut in God of War: Ragnarok",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Helka es la mascota de Lunda y la fiel compañera de Freyr y sus aliados. Hace su debut en God of War: Ragnarok",
      "quote": null,
      "species": [],
      "gender": "Femenino",
      "aliases": [
        "Helka (todos)"
      ]
    }
  },
  {
    "id": 185,
    "slug": "hildr",
    "name": "Hildr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᛁᛚᛞᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/1/18/FlL1j72XoAAIInK.jpeg/revision/latest/scale-to-width-down/394?cb=20230105105629",
    "voiceActor": "Sara Cravens",
    "gender": "Female",
    "species": [
      "Valkyrie (formerly)",
      "Shield Maidens"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War (2018)",
      "God of War: Ragnarök"
    ],
    "about": "Hildr is a Valkyrie introduced in God of War (2018). She is one of the nine Valkyries who have been cursed by Odin to remain in a corporal form, eventually driving them to insanity. As she became too dangerous, Hildr eventually found herself sealed away by the Valkyrie Queen in Niflheim. She is nevertheless freed by Kratos and Atreus after they engaged and defeated her physical form. Blessing them with her eternal gratitude, her spirit vanished and eventually reunited with her sisters.",
    "quote": "Mistress of Battle. She and Odin got on quite well, actually. Her and the other Valkyries... not so much. She would spend most of her time here in Midgard, observing discord between the living, and stirring some up herself from time to time. She lived for conflict. Some say she WAS conflict, personified. I wonder what will become of her, now that she's free. –Mimir’s remarks about Hildr",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Hildr es una valquiria introducida en God of War (2018). Es una de las nueve valquirias que Odín maldijo para que permanecieran en forma corpórea, lo que terminó por llevarlas a la locura. Como se volvió demasiado peligrosa, Hildr acabó sellada por la Reina de las Valquirias en Niflheim. Aun así, Kratos y Atreus la liberan después de enfrentarse a su forma física y derrotarla. Tras bendecirlos con su eterna gratitud, su espíritu se desvaneció y finalmente se reunió con sus hermanas.",
      "quote": "Señora de la Batalla. Ella y Odín se llevaban bastante bien, en realidad. Ella y las demás valquirias... no tanto. Pasaba la mayor parte del tiempo aquí en Midgard, observando la discordia entre los vivos y provocando un poco ella misma de vez en cuando. Vivía para el conflicto. Algunos dicen que ERA el conflicto personificado. Me pregunto qué será de ella ahora que es libre. –Comentarios de Mimir sobre Hildr",
      "species": [
        "Valquiria (antes)",
        "Doncellas escuderas"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 186,
    "slug": "hjalti-the-stolid",
    "name": "Hjalti the Stolid",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᛃᚨᛚᛏᛁ᛫ᚦᛖ᛫ᛊᛏᛟᛚᛁᛞ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/2/2c/Fklzn8iXgAIdAm4.jpeg/revision/latest/scale-to-width-down/394?cb=20230105090207",
    "voiceActor": "Carla Tassara",
    "gender": "Female",
    "species": [
      "Mortal (formerly)",
      "Berserker"
    ],
    "aliases": [
      "Hjalti the Stolid"
    ],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Hjalti the Stolid is one of the twelve Berserkers that can be fought as an optional boss in God of War Ragnarök. Hjalti the Stolid can be found south of The Burrows, in The Forbidden Sands located in Alfheim.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Hjalti el Impasible es uno de los doce berserkers contra los que se puede luchar como jefe opcional en God of War Ragnarök. Hjalti el Impasible se encuentra al sur de Las Madrigueras, en Las Arenas Prohibidas, ubicadas en Alfheim.",
      "quote": null,
      "species": [
        "Mortal (antes)",
        "Berserker"
      ],
      "gender": "Femenino",
      "aliases": [
        "Hjalti el Impasible"
      ]
    }
  },
  {
    "id": 187,
    "slug": "hreidmar",
    "name": "Hreidmar",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᚱᛖᛁᛞᛗᚨᚱ",
    "image": null,
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Dwarf"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök (mentioned)"
    ],
    "about": "Hreidmar was the father of Reginn, Fafnir, and Otr. Hreidmar's Brassard is a Collectible in the unique series of Artifacts known as \"Things Left Behind\" which can only be found in Svartalfheim.",
    "quote": "Hreidmar is known for two things: firstly, he was one of the great armorers of Svartalfheim. Secondly his sons are all dragons. That's right Hreidmar fathered the dragons you know now as Regin, Fafnir, and Otr. –Mimir",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Hreidmar fue el padre de Reginn, Fafnir y Otr. El brazal de Hreidmar es un coleccionable de la serie única de artefactos conocida como \"Cosas que quedaron atrás\", que solo puede encontrarse en Svartalfheim.",
      "quote": "Hreidmar es conocido por dos cosas: primero, fue uno de los grandes armeros de Svartalfheim. Segundo, todos sus hijos son dragones. Así es, Hreidmar fue el padre de los dragones que ahora conoces como Regin, Fafnir y Otr. –Mimir",
      "species": [
        "Enano"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 188,
    "slug": "hrothgar",
    "name": "Hrothgar",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᚱᛟᚦᚷᚨᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/1/1f/Hrothgar.png/revision/latest/scale-to-width-down/346?cb=20240206034921",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Midgardian",
      "Einherjar"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": null,
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": null,
      "quote": null,
      "species": [
        "Midgardiano",
        "Einherjar"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 189,
    "slug": "huginn-and-muninn",
    "name": "Huginn & Muninn",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᚢᚷᛁᚾ᛫ᛗᚢᚾᛁᚾ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/5/58/FlZPwbUXkAA7D-I.jpeg/revision/latest/scale-to-width-down/393?cb=20230104121419",
    "voiceActor": null,
    "gender": "Males",
    "species": [
      "Ravens"
    ],
    "aliases": [
      "Hugin and Munin",
      "Odin's pets (by Loki)",
      "Right pricks (by Mimir)"
    ],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Huginn and Muninn are Odin's eyes and ears. This pair of ravens fly all over the realms, serving as his personal spies and bringing him precious information.",
    "quote": "These two aren't like the spies we see around the realms. Huginn and Muninn are Odin's own weird magical pets. Back at the house, I saw them disappear into his tattoos! Mimir told me once how they came to be that way - how they were normal ravens once, until Odin captured their whole unkindness. Most of them he roasted and ate for supper, but on Huginn and Muninn he experimented, wiping their memories and binding them to his will. Mimir also referred to them as \"right pricks, even for birds.\" –Atreus' description of Huginn and Muninn",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Huginn y Muninn son los ojos y oídos de Odín. Esta pareja de cuervos vuela por todos los reinos, sirviéndole como espías personales y llevándole información valiosa.",
      "quote": "Estos dos no son como los espías que vemos por los reinos. Huginn y Muninn son las extrañas mascotas mágicas del propio Odín. ¡Allá en la casa, los vi desaparecer dentro de sus tatuajes! Mimir me contó una vez cómo llegaron a ser así: cómo alguna vez fueron cuervos normales, hasta que Odín capturó a toda su bandada. A la mayoría los asó y se los comió en la cena, pero con Huginn y Muninn experimentó, borrándoles la memoria y atándolos a su voluntad. Mimir también se refirió a ellos como \"unos verdaderos imbéciles, incluso para ser pájaros\". –Descripción de Huginn y Muninn según Atreus",
      "species": [
        "Cuervos"
      ],
      "gender": "Masculino (grupo)",
      "aliases": [
        "Hugin y Munin",
        "Mascotas de Odín (según Loki)",
        "Un par de imbéciles (según Mimir)"
      ]
    }
  },
  {
    "id": 190,
    "slug": "hvitserkr-the-bold",
    "name": "Hvítserkr the Bold",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᚹᛁᛏᛊᛖᚱᚲᚱ᛫ᚦᛖ᛫ᛒᛟᛚᛞ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/1/19/FlO44hJXkAE_KCC.jpeg/revision/latest/scale-to-width-down/394?cb=20230105084005",
    "voiceActor": "Kosuke Echigoya (Japanese dub)",
    "gender": "Male",
    "species": [
      "Midgardian (formerly)",
      "Berserkers"
    ],
    "aliases": [
      "Hvítserkr the Bold"
    ],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Hvítserkr The Bold is one of the twelve Berserkers that can be fought as an optional boss in God of War Ragnarök. Hvítserkr The Bold can be found in the Southern Wilds in Vanaheim. Head onward to the Pilgrim's Landing, to the circular white structure.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Hvítserkr el Audaz es uno de los doce berserkers contra los que se puede luchar como jefe opcional en God of War Ragnarök. Hvítserkr el Audaz se encuentra en las Tierras Salvajes del Sur, en Vanaheim. Dirígete hacia el Desembarco del Peregrino, hasta la estructura blanca circular.",
      "quote": null,
      "species": [
        "Midgardiano (antes)",
        "Berserkers"
      ],
      "gender": "Masculino",
      "aliases": [
        "Hvítserkr el Audaz"
      ]
    }
  },
  {
    "id": 191,
    "slug": "hogni",
    "name": "Högni",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚺᛟᚷᚾᛁ",
    "image": null,
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Midgardian"
    ],
    "aliases": [
      "Högni",
      "Högne"
    ],
    "appearsIn": [
      "God of War Ragnarök (mentioned)"
    ],
    "about": "Högni was a king of Östergötland, father of Sigrún and Dagr who appears in sources of Norse mythology.",
    "quote": "My father, in his wisdom denied him the hand of my sister, Princess Sigrún, knowing his true and dark nature. –Dagr mentioning his father",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Högni fue un rey de Östergötland, padre de Sigrún y Dagr, que aparece en fuentes de la mitología nórdica.",
      "quote": "Mi padre, en su sabiduría, le negó la mano de mi hermana, la princesa Sigrún, conociendo su verdadera y oscura naturaleza. –Dagr mencionando a su padre",
      "species": [
        "Midgardiano"
      ],
      "gender": "Masculino",
      "aliases": [
        "Högni",
        "Högne"
      ]
    }
  },
  {
    "id": 192,
    "slug": "imposter-tyr",
    "name": "Imposter Tyr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛁᛗᛈᛟᛊᛏᛖᚱ᛫ᛏᛁᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/7/76/Tyr.png/revision/latest/scale-to-width-down/471?cb=20231110164911",
    "voiceActor": "Ben Prendergast",
    "gender": "Male",
    "species": [
      "God (Aesir)"
    ],
    "aliases": [
      "Odin (real identity)",
      "Týr (disguise)",
      "Tyr (in subtitles)",
      "Lord Týr (by Sindri)",
      "Useless Sod (by Mimir)"
    ],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Impostor Tyr, or the ”Týr“ that Kratos and Atreus had freed in Svartalfheim, was actually Odin in disguise, who posed as his own son as a means to infiltrate Kratos' circle of allies and know their plans. This also unexpectedly led him to discover the secret prophecies that the Jötnar had hidden in their shrines. Odin eventually drops his disguise altogether in a moment of anger when he kills Brok.",
    "quote": "I know you... God killer... Have you come for me now? –Odin disguised as Týr for Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "El Týr impostor, o el \"Týr\" que Kratos y Atreus liberaron en Svartalfheim, era en realidad Odín disfrazado, que se hizo pasar por su propio hijo como forma de infiltrarse en el círculo de aliados de Kratos y conocer sus planes. Esto también lo llevó, de manera inesperada, a descubrir las profecías secretas que los jötnar habían ocultado en sus santuarios. Odín finalmente abandona por completo su disfraz en un momento de ira, cuando mata a Brok.",
      "quote": "Te conozco... Asesino de dioses... ¿Has venido por mí ahora? –Odín disfrazado de Týr, a Kratos",
      "species": [
        "Dios (Aesir)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Odín (identidad real)",
        "Týr (disfraz)",
        "Tyr (en los subtítulos)",
        "Lord Týr (según Sindri)",
        "Inútil desgraciado (según Mimir)"
      ]
    }
  },
  {
    "id": 193,
    "slug": "iron-wolves",
    "name": "Iron Wolves",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛁᚱᛟᚾ᛫ᚹᛟᛚᚹᛖᛊ",
    "image": null,
    "voiceActor": null,
    "gender": "Males & Females",
    "species": [
      "Wolves"
    ],
    "aliases": [],
    "appearsIn": [],
    "about": "The Iron wolves are a pack of wolves that accompany the giantess Angrboda.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Los Lobos de Hierro son una manada de lobos que acompañan a la giganta Angrboda.",
      "quote": null,
      "species": [
        "Lobos"
      ],
      "gender": "Masculino y femenino",
      "aliases": []
    }
  },
  {
    "id": 194,
    "slug": "jaana",
    "name": "Jaana",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛃᚨᚾᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/3/3a/Jaana.png/revision/latest/scale-to-width-down/367?cb=20240206035217",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Midgardian",
      "Einherjar"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": null,
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": null,
      "quote": null,
      "species": [
        "Midgardiano",
        "Einherjar"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 195,
    "slug": "jalla",
    "name": "Jalla",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛃᚨᛚᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/8/87/Fv8YWhpWABoZTsO.jpg/revision/latest/scale-to-width-down/700?cb=20230513091533",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Yak"
    ],
    "aliases": [],
    "appearsIn": [],
    "about": "Jalla is a yak that accompanies the giantess Angrboda that she rides when she does her daily routine of feeding the soulless animals her grandmother Grýla created in Ironwood. It is very clear and apparent, Angrboda is great friends with all of her animal friends she cares for, but Jalla is rather special to her. You can tell there is a great bond even on Jalla's part by the way we get to see them briefly interact in specific scenes.",
    "quote": "Angrboda has a yak named Jalla. It was funny—she said \"I want you to meet someone\" and I thought for a moment there might be more giants, but she meant Jalla. I get the sense Jalla might be her best friend which maybe sounds sad I guess, but I think its kind of amazing. Makes me miss Fenrir, though I also still feel like he's with me somehow. I wish she could have met him. It must be lonely living here, but I know how much it helps having a connection to animals. –Atreus' description of Jalla",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Jalla es un yak que acompaña a la giganta Angrboda y que esta monta durante su rutina diaria de alimentar a los animales sin alma que su abuela Grýla creó en el Bosque de Hierro. Es muy claro y evidente que Angrboda es gran amiga de todos los animales que cuida, pero Jalla es bastante especial para ella. Se nota que existe un gran vínculo, incluso por parte de Jalla, por la forma en que los vemos interactuar brevemente en escenas específicas.",
      "quote": "Angrboda tiene un yak llamado Jalla. Fue gracioso: dijo \"quiero que conozcas a alguien\" y por un momento pensé que podría haber más gigantes, pero se refería a Jalla. Tengo la impresión de que Jalla podría ser su mejor amigo, lo cual quizás suena triste, supongo, pero creo que es algo increíble. Me hace extrañar a Fenrir, aunque todavía siento que de algún modo está conmigo. Ojalá ella hubiera podido conocerlo. Debe ser solitario vivir aquí, pero sé cuánto ayuda tener una conexión con los animales. –Descripción de Jalla según Atreus",
      "species": [
        "Yak"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 196,
    "slug": "jari",
    "name": "Jari",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛃᚨᚱᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/e/e3/S%C3%B3rm-and-Jari-tribute.jpg/revision/latest/scale-to-width-down/467?cb=20240207205800",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Mortal"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök (mentioned)"
    ],
    "about": null,
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": null,
      "quote": null,
      "species": [
        "Mortal"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 197,
    "slug": "jorgen",
    "name": "Jörgen",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛃᛟᚱᚷᛖᚾ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/e/ea/Jorgen.png/revision/latest?cb=20240206001439",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Mortal"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Jörgen is a minor character who appears in God of War Ragnarök. Little is known about him, except that he is an Asgardian resident and possible cook for the Aesir Gods. Jörgen is encountered during Atreus' visit to Asgard, where Odin will casually strike up one-sided conversation with him and warn against the use of mushrooms in his meals.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Jörgen es un personaje menor que aparece en God of War Ragnarök. Poco se sabe de él, excepto que es un residente de Asgard y posiblemente cocinero de los dioses Aesir. Jörgen aparece durante la visita de Atreus a Asgard, donde Odín entablará casualmente con él una conversación unilateral y le advertirá contra el uso de hongos en sus comidas.",
      "quote": null,
      "species": [
        "Mortal"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 198,
    "slug": "jorgen-the-oath-guard",
    "name": "Jørgen The Oath Guard",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛃᛟᚱᚷᛖᚾ᛫ᚦᛖ᛫ᛟᚨᚦ᛫ᚷᚢᚨᚱᛞ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/f/ff/Jorgen_the_oath_Guard.png/revision/latest?cb=20230414015854",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Midgardian",
      "Traveler"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Jørgen The Oath Guard is a Traveler and a boss that is introduced in God of War: Ragnarök. He is one of Birgir's sworn brothers, who blindly follow The Path.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Jørgen, el Guardián del Juramento, es un viajero y un jefe introducido en God of War: Ragnarök. Es uno de los hermanos juramentados de Birgir, que siguen ciegamente El Camino.",
      "quote": null,
      "species": [
        "Midgardiano",
        "Viajero"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 199,
    "slug": "kara",
    "name": "Kara",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚲᚨᚱᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/a/aa/FlMCaVLXgAEieRy.jpeg/revision/latest/scale-to-width-down/358?cb=20230105104050",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Valkyrie (formerly)",
      "Shield Maiden"
    ],
    "aliases": [
      "Wild Storm (by Mimir)"
    ],
    "appearsIn": [
      "God of War (2018)",
      "God of War Ragnarök"
    ],
    "about": "Kara is a Valkyrie introduced in God of War (2018). She is one of the nine Valkyries who have been cursed by Odin to remain in a corporal form, eventually driving them to insanity. As she became too dangerous, Kara eventually found herself sealed away by the Valkyrie Queen in Midgard. She is nevertheless freed by Kratos and Atreus after they engaged and defeated her physical form. Blessing them with her eternal gratitude, her spirit vanished and eventually reunited with her sisters.",
    "quote": "Wild Storm personified. Calm and collected... Then the air would shift, and the fury of her storm would unleash. It was beautiful, in a way, assuming you could find proper shelter. Her tears would cleanse the blood-soaked battlefields. –Mimir's remarks about Kara",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Kara es una valquiria introducida en God of War (2018). Es una de las nueve valquirias que Odín maldijo para que permanecieran en forma corpórea, lo que terminó por llevarlas a la locura. Como se volvió demasiado peligrosa, Kara acabó sellada por la Reina de las Valquirias en Midgard. Aun así, Kratos y Atreus la liberan después de enfrentarse a su forma física y derrotarla. Tras bendecirlos con su eterna gratitud, su espíritu se desvaneció y finalmente se reunió con sus hermanas.",
      "quote": "La tormenta salvaje personificada. Tranquila y serena... Luego el aire cambiaba y la furia de su tormenta se desataba. Era hermoso, en cierto modo, suponiendo que pudieras encontrar un refugio adecuado. Sus lágrimas limpiaban los campos de batalla empapados de sangre. –Comentarios de Mimir sobre Kara",
      "species": [
        "Valquiria (antes)",
        "Doncella escudera"
      ],
      "gender": "Femenino",
      "aliases": [
        "Tormenta salvaje (según Mimir)"
      ]
    }
  },
  {
    "id": 200,
    "slug": "karl",
    "name": "Karl",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚲᚨᚱᛚ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/0/05/Karll.jpg/revision/latest/scale-to-width-down/476?cb=20230103211429",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Mortal"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Karl is a minor character who appears in God of War Ragnarök. Little is known about him, except that he is an Asgardian resident of Gladsheim. Karl is encountered during Atreus' visit to Asgard, where Odin will tell him to steady himself as he drinks.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Karl es un personaje menor que aparece en God of War Ragnarök. Se sabe poco de él, salvo que es un residente asgardiano de Gladsheim. Atreus se encuentra con Karl durante su visita a Asgard, donde Odín le dirá que se controle mientras bebe.",
      "quote": null,
      "species": [
        "Mortal"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 201,
    "slug": "king-aldis",
    "name": "King Aldis",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚲᛁᛜ᛫ᚨᛚᛞᛁᛊ",
    "image": null,
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Mortal"
    ],
    "aliases": [
      "Aldis Ohthereson"
    ],
    "appearsIn": [],
    "about": "King Aldis was a king that was mentioned in God of War Ragnarök. Mimir became the advisor for Aldis before he was murdered by Hrólfr Kraki.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "El rey Aldis fue un rey mencionado en God of War Ragnarök. Mimir se convirtió en consejero de Aldis antes de que este fuera asesinado por Hrólfr Kraki.",
      "quote": null,
      "species": [
        "Mortal"
      ],
      "gender": "Masculino",
      "aliases": [
        "Aldis Ohthereson"
      ]
    }
  },
  {
    "id": 202,
    "slug": "king-hrolf-kraki",
    "name": "King Hrólf Kraki",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚲᛁᛜ᛫ᚺᚱᛟᛚᚠ᛫ᚲᚱᚨᚲᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/7/72/FnQIJnLWAA0b6DS.jpeg/revision/latest/scale-to-width-down/394?cb=20230129122035",
    "voiceActor": "Hinata Tadokoro (Japanese dub)",
    "gender": "Male",
    "species": [
      "Mortal (formerly)",
      "Berserker"
    ],
    "aliases": [
      "Hrólf Kraki Halgason"
    ],
    "appearsIn": [
      "God of War Ragnarök",
      "God of War Ragnarök: Valhalla"
    ],
    "about": "King Hrólf Kraki is a Berserker that appears as an optional boss in God of War Ragnarök. Out of all the berserkers that can be encountered, Hrólf Kraki, like Sigrún of the Valkyries, is the strongest and most powerful out of all of them. He can be found in Midgard.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "El rey Hrólf Kraki es un berserker que aparece como jefe opcional en God of War Ragnarök. De todos los berserkers con los que es posible enfrentarse, Hrólf Kraki, al igual que Sigrún entre las valquirias, es el más fuerte y poderoso de todos. Se le puede encontrar en Midgard.",
      "quote": null,
      "species": [
        "Mortal (antes)",
        "Berserker"
      ],
      "gender": "Masculino",
      "aliases": [
        "Hrólf Kraki Halgason"
      ]
    }
  },
  {
    "id": 203,
    "slug": "kvasir",
    "name": "Kvasir",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚲᚹᚨᛊᛁᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/5/5c/Kvasir.jpg/revision/latest?cb=20240210035754",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "God (Vanir)"
    ],
    "aliases": [],
    "appearsIn": [],
    "about": "Kvasir is the Vanir God of poetry, Peace, Mead and Wisdom.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Kvasir es el dios Vanir de la poesía, la paz, el hidromiel y la sabiduría.",
      "quote": null,
      "species": [
        "Dios (Vanir)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 204,
    "slug": "lofnheid",
    "name": "Lofnheid",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛚᛟᚠᚾᚺᛖᛁᛞ",
    "image": null,
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Dwarf"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök (mentioned)"
    ],
    "about": "Lofnheid was a Dwarven Waitress living in Svartalfheim who secretly killed the Aesir in the night.",
    "quote": "The Einherjar never believed the adorable tavern waitress who served them with a twinkle in her eye and a smile on her lips could also be the one butchering them come nightfall. But butcher them she did. Got eleven of them before she was finally caught. And even when they executed her, they said she had that same twinkle in her eye. That same smile on her lips. –Mimir",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Lofnheid fue una camarera enana que vivía en Svartalfheim y que en secreto mataba a los Aesir durante la noche.",
      "quote": "Los einherjar jamás creyeron que la adorable camarera de la taberna que los atendía con un brillo en la mirada y una sonrisa en los labios pudiera ser también quien los masacraba al caer la noche. Pero vaya que los masacró. Acabó con once de ellos antes de que por fin la atraparan. E incluso cuando la ejecutaron, dicen que tenía ese mismo brillo en la mirada. Esa misma sonrisa en los labios. –Mimir",
      "species": [
        "Enano"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 205,
    "slug": "lunda",
    "name": "Lúnda",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛚᚢᚾᛞᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/f/fb/Fj1wSVeagAEYs0G.jpeg/revision/latest/scale-to-width-down/394?cb=20230107133219",
    "voiceActor": "Milana Vayntrub",
    "gender": "Female",
    "species": [
      "Dwarf"
    ],
    "aliases": [
      "Crusty Hag (by Brok)"
    ],
    "appearsIn": [
      "God of War Ragnarök",
      "Lúnda's Workshop Notes"
    ],
    "about": "is a female dwarven blacksmith who is friends with Brok and Sindri. With smithing skills comparable to the Huldra brothers, she works in support of Freyr's resistance efforts.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "es una herrera enana amiga de Brok y Sindri. Con habilidades de herrería comparables a las de los hermanos Huldra, trabaja apoyando los esfuerzos de la resistencia de Freyr.",
      "quote": null,
      "species": [
        "Enano"
      ],
      "gender": "Femenino",
      "aliases": [
        "Bruja costrosa (según Brok)"
      ]
    }
  },
  {
    "id": 206,
    "slug": "mari",
    "name": "Mari",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛗᚨᚱᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/4/4f/Mari.png/revision/latest?cb=20240205191439",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Vanir (mortal)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Mari was a female Vanir worshiper of the Goddess Freya, she was patiently waiting for Freya to return to Vanaheim in hopes Freya would heal her from her sickness, Mari was unaware she was already dead.",
    "quote": "Please- leave me to my prayers. I await Freya, the great healer... –Mari to Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Mari fue una devota Vanir de la diosa Freya; esperaba pacientemente que Freya regresara a Vanaheim con la esperanza de que la curara de su enfermedad. Mari no sabía que ya estaba muerta.",
      "quote": "Por favor, déjame con mis oraciones. Espero a Freya, la gran sanadora... –Mari a Kratos",
      "species": [
        "Vanir (mortal)"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 207,
    "slug": "miklimunnr",
    "name": "Miklimunnr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛗᛁᚲᛚᛁᛗᚢᚾᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/3/3a/Miklimunnr.jpg/revision/latest?cb=20221128022808",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Troll (Fire)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Miklimunnr is a fire troll that appears as an optional boss in God of War Ragnarök.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Miklimunnr es un trol de fuego que aparece como jefe opcional en God of War Ragnarök.",
      "quote": null,
      "species": [
        "Trol (de fuego)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 208,
    "slug": "moth",
    "name": "Moth",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛗᛟᚦ",
    "image": null,
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Fae"
    ],
    "aliases": [
      "Moth",
      "Moth of the Goodfellows",
      "Titania's Faerie",
      "Ne'er-do-well (by Mimir)"
    ],
    "appearsIn": [
      "God of War Valhalla DLC (mentioned)"
    ],
    "about": "Moth of the goodfellows was one of Mimir's faerie-folk friends and the male maid of Queen Titania. He is only ever hinted at in God of War Ragnarök: Valhalla by Mimir.",
    "quote": "1=I found myself reliving old times with my former crew of fairie-folk. Cobweb, Mustardseed, the whole pack of ne'er-do-wells. Such warm greetings for their old ringleader, like nary a day had passed. –2=Mimir talking about the Goodfellows to Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Moth, de los Goodfellows, era uno de los amigos del pueblo feérico de Mimir y el doncel de la reina Titania. En God of War Ragnarök: Valhalla, Mimir solo hace alusión a él.",
      "quote": "1=Me encontré reviviendo viejos tiempos con mi antigua pandilla del pueblo feérico. Cobweb, Mustardseed, toda la manada de buenos para nada. Qué cálida bienvenida le dieron a su antiguo cabecilla, como si no hubiera pasado ni un día. –2=Mimir hablando de los Goodfellows a Kratos",
      "species": [
        "Hada"
      ],
      "gender": "Masculino",
      "aliases": [
        "Moth",
        "Moth de los Goodfellows",
        "Hada de Titania",
        "Bueno para nada (según Mimir)"
      ]
    }
  },
  {
    "id": 209,
    "slug": "mustardseed",
    "name": "Mustardseed",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛗᚢᛊᛏᚨᚱᛞᛊᛖᛞ",
    "image": null,
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Fae"
    ],
    "aliases": [
      "Mustardseed",
      "Mustardseed of the Goodfellows",
      "Titania's Faerie",
      "Ne'er-do-well (by Mimir)"
    ],
    "appearsIn": [
      "God of War Valhalla DLC (mentioned)"
    ],
    "about": "Mustardseed of the goodfellows was one of Mimir's faerie-folk friends and the male maid of Queen Titania. He is only ever mentioned in God of War Ragnarök: Valhalla by Mimir.",
    "quote": "I found myself reliving old times with my former crew of fairie-folk. Cobweb, Mustardseed, the whole pack of ne'er-do-wells. Such warm greetings for their old ringleader, like nary a day had passed. –Mimir talking about the Goodfellows to Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Mustardseed, de los Goodfellows, era uno de los amigos del pueblo feérico de Mimir y el doncel de la reina Titania. En God of War Ragnarök: Valhalla, Mimir solo lo menciona.",
      "quote": "Me encontré reviviendo viejos tiempos con mi antigua pandilla del pueblo feérico. Cobweb, Mustardseed, toda la manada de buenos para nada. Qué cálida bienvenida le dieron a su antiguo cabecilla, como si no hubiera pasado ni un día. –Mimir hablando de los Goodfellows a Kratos",
      "species": [
        "Hada"
      ],
      "gender": "Masculino",
      "aliases": [
        "Mustardseed",
        "Mustardseed de los Goodfellows",
        "Hada de Titania",
        "Bueno para nada (según Mimir)"
      ]
    }
  },
  {
    "id": 210,
    "slug": "nimue",
    "name": "Nimue",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚾᛁᛗᚢᛖ",
    "image": null,
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Nymph"
    ],
    "aliases": [
      "Ninianne",
      "Viviane",
      "Vivian"
    ],
    "appearsIn": [
      "God of War: Ragnarök (mentioned)"
    ],
    "about": "Nimue is a Celtic Nymph, a woman expert in creating swords, responsible for creating the famous sword Excalibur. She is mentioned by Mimir in God of War Ragnarök",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Nimue es una ninfa celta, una mujer experta en la creación de espadas, responsable de forjar la famosa espada Excalibur. Mimir la menciona en God of War Ragnarök",
      "quote": null,
      "species": [
        "Ninfa"
      ],
      "gender": "Femenino",
      "aliases": [
        "Ninianne",
        "Viviane",
        "Vivian"
      ]
    }
  },
  {
    "id": 211,
    "slug": "oberon",
    "name": "Oberon",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛟᛒᛖᚱᛟᚾ",
    "image": null,
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Fae"
    ],
    "aliases": [
      "Auberon",
      "Lord of the Fae",
      "Consort of Titania",
      "Old master (by Mimir)",
      "Former boss (by Mimir)"
    ],
    "appearsIn": [
      "God of War Ragnarök: Valhalla (mentioned)"
    ],
    "about": "Oberon, also known as the King of the Faeries, is the High King of the Fae, a classification of magical beings, which come from Fairyland, a realm separate from the Human Realm. He is an unseen character in God of War Ragnarök: Valhalla. He is only ever mentioned in passing by Mimir.",
    "quote": "And this time I encountered my former boss, King Oberon. Rather eye-opening actually. Used to be a true believer in him. Would have done anything he asked.\" –Mimir to Kratos while in Valhalla",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Oberon, también conocido como el Rey de las Hadas, es el Gran Rey de los Fae, una clasificación de seres mágicos que provienen del País de las Hadas, un reino separado del reino humano. Es un personaje que no aparece en pantalla en God of War Ragnarök: Valhalla. Mimir solo lo menciona de pasada.",
      "quote": "Y esta vez me encontré con mi antiguo jefe, el rey Oberon. Bastante revelador, la verdad. Antes creía ciegamente en él. Habría hecho cualquier cosa que me pidiera.\" –Mimir a Kratos estando en Valhalla",
      "species": [
        "Hada"
      ],
      "gender": "Masculino",
      "aliases": [
        "Auberon",
        "Señor de las hadas",
        "Consorte de Titania",
        "Antiguo amo (según Mimir)",
        "Exjefe (según Mimir)"
      ]
    }
  },
  {
    "id": 212,
    "slug": "olrun",
    "name": "Olrun",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛟᛚᚱᚢᚾ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/6/6a/FlL1ji_XoAA3HCL.jpeg/revision/latest/scale-to-width-down/394?cb=20230105105637",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Valkyrie (formerly)",
      "Shield Maiden"
    ],
    "aliases": [
      "Valkyrie Historian"
    ],
    "appearsIn": [
      "God of War (2018)",
      "God of War Ragnarök"
    ],
    "about": "Olrun is a Valkyrie introduced in God of War (2018). She is one of the Nine Valkyries who have been cursed by Odin to remain in a corporal form, eventually driving them to insanity. As she became too dangerous, Olrun eventually found herself sealed away by the Valkyrie Queen in Alfheim. She is nevertheless freed by Kratos and Atreus after they engaged and defeated her physical form. Blessing them with her eternal gratitude, her spirit vanished and eventually reunited with her sisters.",
    "quote": "Once the daughter of a powerful chieftain, she fell defending him during a Reaver attack. Olrun was escorted to Valhalla, where she chose to devote her after-life to the pursuit of knowledge above all else. Quite unusual behavior amongst the constant drinking and feasting of her fellow Valhallian-denizens. Odin saw a kindred spirit in Olrun's single-minded pursuit of knowledge and appointed her as the Valkyrie's resident historian. –Mimir's remarks about Olrun",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Olrun es una valquiria que aparece por primera vez en God of War (2018). Es una de las nueve valquirias que Odín maldijo para permanecer en forma corpórea, lo que con el tiempo las llevó a la locura. Como se volvió demasiado peligrosa, Olrun terminó siendo sellada por la Reina Valquiria en Alfheim. Aun así, Kratos y Atreus la liberan tras enfrentarse a su forma física y derrotarla. Bendiciéndolos con su eterna gratitud, su espíritu se desvaneció y finalmente se reunió con sus hermanas.",
      "quote": "Hija de un poderoso caudillo, cayó defendiéndolo durante un ataque de saqueadores. Olrun fue escoltada a Valhalla, donde decidió dedicar su vida después de la muerte a la búsqueda del conocimiento por encima de todo. Un comportamiento bastante inusual entre la constante bebida y los banquetes de sus compañeros habitantes de Valhalla. Odín vio un espíritu afín en la obstinada búsqueda de conocimiento de Olrun y la nombró historiadora oficial de las valquirias. –Comentarios de Mimir sobre Olrun",
      "species": [
        "Valquiria (antes)",
        "Doncella escudera"
      ],
      "gender": "Femenino",
      "aliases": [
        "Historiadora valquiria"
      ]
    }
  },
  {
    "id": 213,
    "slug": "oluf-nautson",
    "name": "Oluf Nautson",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛟᛚᚢᚠ᛫ᚾᚨᚢᛏᛊᛟᚾ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/7/70/Oluf_Nautson.jpg/revision/latest/scale-to-width-down/700?cb=20231220202845",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Mortal"
    ],
    "aliases": [
      "Oluf"
    ],
    "appearsIn": [
      "God of War: Ragnarök",
      "God of War Ragnarök: Valhalla"
    ],
    "about": "Oluf Nautson was a chieftan raider who lived in Midgard along with other Kol Raiders.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Oluf Nautson fue un caudillo saqueador que vivía en Midgard junto con otros saqueadores Kol.",
      "quote": null,
      "species": [
        "Mortal"
      ],
      "gender": "Masculino",
      "aliases": [
        "Oluf"
      ]
    }
  },
  {
    "id": 214,
    "slug": "peaseblossom",
    "name": "Peaseblossom",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛈᛖᚨᛊᛖᛒᛚᛟᛊᛟᛗ",
    "image": null,
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Fae"
    ],
    "aliases": [
      "Peaseblossom",
      "Peaseblossom of the Goodfellows",
      "Titania's Faerie",
      "Ne'er-do-well (by Mimir)"
    ],
    "appearsIn": [
      "God of War Valhalla DLC (mentioned)"
    ],
    "about": "Peaseblossom of the goodfellows was one of Mimir's faerie-folk friends and the male maid of Queen Titania. He is only ever hinted at in God of War Ragnarök: Valhalla by Mimir.",
    "quote": "1=I found myself reliving old times with my former crew of fairie-folk. Cobweb, Mustardseed, the whole pack of ne'er-do-wells. Such warm greetings for their old ringleader, like nary a day had passed. –2=Mimir talking about the Goodfellows to Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Peaseblossom, de los Goodfellows, era uno de los amigos del pueblo feérico de Mimir y el doncel de la reina Titania. En God of War Ragnarök: Valhalla, Mimir solo hace alusión a él.",
      "quote": "1=Me encontré reviviendo viejos tiempos con mi antigua pandilla del pueblo feérico. Cobweb, Mustardseed, toda la manada de buenos para nada. Qué cálida bienvenida le dieron a su antiguo cabecilla, como si no hubiera pasado ni un día. –2=Mimir hablando de los Goodfellows a Kratos",
      "species": [
        "Hada"
      ],
      "gender": "Masculino",
      "aliases": [
        "Peaseblossom",
        "Peaseblossom de los Goodfellows",
        "Hada de Titania",
        "Bueno para nada (según Mimir)"
      ]
    }
  },
  {
    "id": 215,
    "slug": "ran",
    "name": "Rán",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚱᚨᚾ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/c/c4/Ran.jpg/revision/latest?cb=20240205225617",
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Goddess (Aesir)"
    ],
    "aliases": [
      "Mother Nature"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned only)",
      "God of War Ragnarök: Valhalla (mentioned only)"
    ],
    "about": "Rán is the Goddess of the Sea, wife of Ægir and grandmother of Heimdall.",
    "quote": "It won't be long now. Will Aegir be understanding? Will Rán be compassionate? (...) I suppose it is not for me to know. –A sailor's diary",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Rán es la diosa del mar, esposa de Ægir y abuela de Heimdall.",
      "quote": "Ya no falta mucho. ¿Será Aegir comprensivo? ¿Será Rán compasiva? (...) Supongo que no me corresponde saberlo. –El diario de un marinero",
      "species": [
        "Diosa (Aesir)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Madre Naturaleza"
      ]
    }
  },
  {
    "id": 216,
    "slug": "raeb",
    "name": "Ræb",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚱᚨᛒ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/a/ad/Raeb_Promo_Render_GoWR.jpeg/revision/latest/scale-to-width-down/560?cb=20251202185113",
    "voiceActor": "Bear McCreary",
    "gender": "Male",
    "species": [
      "Dwarf"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Ræb is a character in God of War Ragnarök. He is a dwarven musician and proprietor of the tavern in Niðavellir. His creation was inspired and portrayed by Bear McCreary, the composer of the God of War games.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Ræb es un personaje de God of War Ragnarök. Es un músico enano y propietario de la taberna de Niðavellir. Su creación se inspiró en Bear McCreary, el compositor de los juegos de God of War, quien además lo interpreta.",
      "quote": null,
      "species": [
        "Enano"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 217,
    "slug": "rota",
    "name": "Róta",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚱᛟᛏᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/b/b7/FlNijBzXwAAJiZx.jpeg/revision/latest/scale-to-width-down/378?cb=20230105103901",
    "voiceActor": "Nika Futterman",
    "gender": "Female",
    "species": [
      "Valkyrie (formerly)",
      "Shield Maiden"
    ],
    "aliases": [
      "Chooser of the Slain"
    ],
    "appearsIn": [
      "God of War (2018)",
      "God of War: Ragnarök"
    ],
    "about": "Róta is a Valkyrie introduced in God of War (2018). She is one of the nine Valkyries who have been cursed by Odin to remain in a corporal form, eventually driving them to insanity. As she became too dangerous, Róta eventually found herself sealed away by the Valkyrie Queen in Helheim. She is nevertheless freed by Kratos and Atreus after they engaged and defeated her physical form. Blessing them with her eternal gratitude, her spirit vanished and eventually reunited with her sisters.",
    "quote": "One of the Choosers of the Slain. Róta was the first to go mad after being imprisoned in a physical form. Sigrún stashed her in Helheim to keep her away from harming herself or others. Mostly others. –Mimir’s remarks about Róta",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Róta es una valquiria que aparece por primera vez en God of War (2018). Es una de las nueve valquirias que Odín maldijo para permanecer en forma corpórea, lo que con el tiempo las llevó a la locura. Como se volvió demasiado peligrosa, Róta terminó siendo sellada por la Reina Valquiria en Helheim. Aun así, Kratos y Atreus la liberan tras enfrentarse a su forma física y derrotarla. Bendiciéndolos con su eterna gratitud, su espíritu se desvaneció y finalmente se reunió con sus hermanas.",
      "quote": "Una de las Electoras de los Caídos. Róta fue la primera en enloquecer tras ser aprisionada en una forma física. Sigrún la escondió en Helheim para evitar que se hiciera daño a sí misma o a otros. Sobre todo a otros. –Comentarios de Mimir sobre Róta",
      "species": [
        "Valquiria (antes)",
        "Doncella escudera"
      ],
      "gender": "Femenino",
      "aliases": [
        "Electora de los Caídos"
      ]
    }
  },
  {
    "id": 218,
    "slug": "sinmara",
    "name": "Sinmara",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᛁᚾᛗᚨᚱᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/0/03/Sinmara_cut_model.jpg/revision/latest/scale-to-width-down/524?cb=20221217093027",
    "voiceActor": "Janina Gavankar",
    "gender": "Female",
    "species": [
      "Jötunn (Primordial)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Sinmara is a Jötunn who existed before the creation of the Nine Realms and survived the flood caused by Ymir's death. She is the lover and wife of Surtr.",
    "quote": "I had hoped that the next time I left Niflheim. it would be to reunite with Surtr. I suppose, in a way, I still am. We promise to keep ourselves separated for the good of all creation and THIS is the thanks we get? And I'm somehow expected to do this--to go through this without him by my side? I'll see you soon, my love. –Cut dialogue of Sinmara",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Sinmara es una jötunn que existió antes de la creación de los Nueve Reinos y sobrevivió a la inundación causada por la muerte de Ymir. Es la amante y esposa de Surtr.",
      "quote": "Esperaba que la próxima vez que saliera de Niflheim. fuera para reunirme con Surtr. Supongo que, en cierto modo, así es. Prometemos mantenernos separados por el bien de toda la creación, ¿y ESTE es el agradecimiento que recibimos? ¿Y de algún modo se espera que haga esto... que pase por esto sin él a mi lado? Te veré pronto, mi amor. –Diálogo eliminado de Sinmara",
      "species": [
        "Jötunn (primordial)"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 219,
    "slug": "sisters-of-illska",
    "name": "Sisters of Illska",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᛁᛊᛏᛖᚱᛊ᛫ᛟᚠ᛫ᛁᛚᛊᚲᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/0/0c/V8napyG.png/revision/latest?cb=20230114200443",
    "voiceActor": "Hrómundr the Cruel: Kozue Saito (Japanese dub)",
    "gender": "Female",
    "species": [
      "Mortal (formerly)",
      "Berserker"
    ],
    "aliases": [
      "Hrómundr the Cruel",
      "Vöttr the Prideful",
      "Sisters of Illska"
    ],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Hrómundr the Cruel and Vöttr the Prideful, known together as the Sisters of Illska, are two of the twelve Berserkers that can be fought as an optional boss in God of War Ragnarök. Fighting them will also require to fight Svipdagr the Cold. The Sisters, along with Svipdagr, can be found in Alfheim.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Hrómundr la Cruel y Vöttr la Orgullosa, conocidas en conjunto como las Hermanas de Illska, son dos de los doce berserkers que pueden enfrentarse como jefes opcionales en God of War Ragnarök. Luchar contra ellas también exige enfrentarse a Svipdagr la Fría. Las Hermanas, junto con Svipdagr, se encuentran en Alfheim.",
      "quote": null,
      "species": [
        "Mortal (antes)",
        "Berserker"
      ],
      "gender": "Femenino",
      "aliases": [
        "Hrómundr la Cruel",
        "Vöttr la Orgullosa",
        "Hermanas de Illska"
      ]
    }
  },
  {
    "id": 220,
    "slug": "skjothendi-the-unerring",
    "name": "Skjóthendi the Unerring",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᚲᛃᛟᚦᛖᚾᛞᛁ᛫ᚦᛖ᛫ᚢᚾᛖᚱᛁᛜ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/1/18/Skjothendi.png/revision/latest/scale-to-width-down/466?cb=20230323035241",
    "voiceActor": "Maggie Robertson",
    "gender": "Female",
    "species": [
      "Mortal (formerly)",
      "Berserker"
    ],
    "aliases": [
      "Skjóthendi the Unerring"
    ],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Skjóthendi the Unerring is one of the twelve Berserkers that can be fought as an optional boss in God of War Ragnarök. Skjothendi can be encountered in the Mist Fields of Niflheim.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Skjóthendi el Infalible es uno de los doce berserkers que pueden enfrentarse como jefe opcional en God of War Ragnarök. Es posible encontrar a Skjothendi en los Campos de Niebla de Niflheim.",
      "quote": null,
      "species": [
        "Mortal (antes)",
        "Berserker"
      ],
      "gender": "Femenino",
      "aliases": [
        "Skjóthendi el Certero"
      ]
    }
  },
  {
    "id": 221,
    "slug": "skjoldr",
    "name": "Skjöldr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᚲᛃᛟᛚᛞᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/c/cc/Skjoldr_profile_.png/revision/latest?cb=20240225234304",
    "voiceActor": "A.J. LoCascio",
    "gender": "Male",
    "species": [
      "Mortal"
    ],
    "aliases": [
      "Young Man",
      "Midgardian Boy (by Thrúd)"
    ],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Skjöldr is a Midgardian mortal who was taken in by Odin to the realm Asgard. Skjöldr, along with the other Midgardians are placed in a settlement named \"New Midgard\".",
    "quote": "I may owe Odin my life but I don't owe him my death. –Skjöldr",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Skjöldr es un mortal de Midgard al que Odín acogió en el reino de Asgard. Skjöldr, junto con los demás habitantes de Midgard, fue ubicado en un asentamiento llamado \"Nuevo Midgard\".",
      "quote": "Puede que le deba la vida a Odín, pero no le debo mi muerte. –Skjöldr",
      "species": [
        "Mortal"
      ],
      "gender": "Masculino",
      "aliases": [
        "Joven",
        "Chico de Midgard (según Thrúd)"
      ]
    }
  },
  {
    "id": 222,
    "slug": "skuld",
    "name": "Skuld",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᚲᚢᛚᛞ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/2/2d/OfficialSkuld.jpg/revision/latest/scale-to-width-down/397?cb=20230203094436",
    "voiceActor": "Shelby Young",
    "gender": "Female",
    "species": [
      "Norse Goddess (Primordial)"
    ],
    "aliases": [
      "Skuld Völuspasdottir",
      "Skulu"
    ],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Skuld is a Norse Goddess of Fate and one of the three Norns encountered during The Word of Fate.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Skuld es una diosa nórdica del destino y una de las tres nornas que se encuentran durante La palabra del destino.",
      "quote": null,
      "species": [
        "Diosa nórdica (primordial)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Skuld Völuspasdottir",
        "Skulu"
      ]
    }
  },
  {
    "id": 223,
    "slug": "speki-and-svanna",
    "name": "Speki & Svanna",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᛈᛖᚲᛁ᛫ᛊᚹᚨᚾᚨ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/7/71/FjyP0O7WAAAL-d_.jpeg/revision/latest/scale-to-width-down/394?cb=20221226155718",
    "voiceActor": null,
    "gender": "Both Females",
    "species": [
      "Wolves"
    ],
    "aliases": [
      "Good Girls"
    ],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Speki and Svanna are two wolves introduced in God of War Ragnarök. They are both Atreus and Kratos' pet wolves (besides Fenrir).",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Speki y Svanna son dos lobos que aparecen por primera vez en God of War Ragnarök. Ambos son los lobos mascota de Atreus y Kratos (además de Fenrir).",
      "quote": null,
      "species": [
        "Lobos"
      ],
      "gender": "Ambas femeninas",
      "aliases": [
        "Buenas chicas"
      ]
    }
  },
  {
    "id": 224,
    "slug": "starolfr-the-troublesome",
    "name": "Starólfr the Troublesome",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᛏᚨᚱᛟᛚᚠᚱ᛫ᚦᛖ᛫ᛏᚱᛟᚢᛒᛚᛖᛊᛟᛗᛖ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/6/64/Star%C3%B3lfr.png/revision/latest/scale-to-width-down/466?cb=20230324002124",
    "voiceActor": "Misa Ishii (Japanese dub)",
    "gender": "Female",
    "species": [
      "Mortal (formerly)",
      "Berserker"
    ],
    "aliases": [
      "Staróflr the Troublesome"
    ],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Staróflr the Troublesome is one of the twelve Berserkers that can be fought as an optional boss in God of War Ragnarök. Staróflr, along with Bödvar the Fierce can be found in Svartalfheim in the region between the Jarnsmida Pitmines and Applecore.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Staróflr el Problemático es uno de los doce berserkers que pueden enfrentarse como jefe opcional en God of War Ragnarök. Staróflr, junto con Bödvar el Feroz, se encuentra en Svartalfheim, en la región entre las Minas de Jarnsmida y Applecore.",
      "quote": null,
      "species": [
        "Mortal (antes)",
        "Berserker"
      ],
      "gender": "Femenino",
      "aliases": [
        "Staróflr el Problemático"
      ]
    }
  },
  {
    "id": 225,
    "slug": "stinnr-and-sterkr",
    "name": "Stinnr & Sterkr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᛏᛁᚾᚱ᛫ᛊᛏᛖᚱᚲᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/5/58/Stinnr_%26_Sterkr.jpg/revision/latest/scale-to-width-down/700?cb=20230726061628",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Midgardian (Formerly)",
      "Einherjar"
    ],
    "aliases": [
      "Stinnr",
      "Sterkr"
    ],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Stinnr and Sterkr are a pair of optional postgame bosses introduced in God of War: Ragnarök.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Stinnr y Sterkr son una pareja de jefes opcionales del posjuego que aparecen por primera vez en God of War: Ragnarök.",
      "quote": null,
      "species": [
        "Midgardiano (antes)",
        "Einherjar"
      ],
      "gender": "Masculino",
      "aliases": [
        "Stinnr",
        "Sterkr"
      ]
    }
  },
  {
    "id": 226,
    "slug": "surtr",
    "name": "Surtr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᚢᚱᛏᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/a/a6/Capture_d%E2%80%99%C3%A9cran_2022-12-01_%C3%A0_20.33.02.png/revision/latest/scale-to-width-down/419?cb=20221201203719",
    "voiceActor": "Chris Browning",
    "gender": "Male",
    "species": [
      "Jötunn (Primordial)"
    ],
    "aliases": [
      "First Fire Jötunn",
      "The Last Fire Giant",
      "Chief of Muspelheim",
      "Ragnarök"
    ],
    "appearsIn": [
      "God of War (2018) (mentioned only)",
      "God of War Ragnarök"
    ],
    "about": "Surtr, also known as Surt, is the first and last fire giant and the second being to be born in the Norse cosmos. He rules Muspelheim and commands the fire giants. Hidden deep within his realm, he spent millennia training and preparing for Ragnarök, where he was destined to lead his kin against the Aesir and destroy Asgard. He was fated to die in the process, but his actions would ensure the cycle of life could be reborn.",
    "quote": "Sometimes loving someone is about choosing the lesser pain –Surtr",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Surtr, también conocido como Surt, es el primer y último gigante de fuego y el segundo ser en nacer en el cosmos nórdico. Gobierna Muspelheim y está al mando de los gigantes de fuego. Oculto en lo más profundo de su reino, pasó milenios entrenando y preparándose para el Ragnarök, en el que estaba destinado a liderar a los suyos contra los Aesir y destruir Asgard. Su destino era morir en el proceso, pero sus acciones garantizarían que el ciclo de la vida pudiera renacer.",
      "quote": "A veces amar a alguien consiste en elegir el dolor menor –Surtr",
      "species": [
        "Jötunn (primordial)"
      ],
      "gender": "Masculino",
      "aliases": [
        "Primer jötunn de fuego",
        "El último gigante de fuego",
        "Jefe de Muspelheim",
        "Ragnarök"
      ]
    }
  },
  {
    "id": 227,
    "slug": "svadilfari",
    "name": "Svaðilfari",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᚹᚨᚦᛁᛚᚠᚨᚱᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/6/65/Screenshot_2023-01-30_at_19.16.58.png/revision/latest/scale-to-width-down/700?cb=20230130181721",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Horse"
    ],
    "aliases": [],
    "appearsIn": [],
    "about": null,
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": null,
      "quote": null,
      "species": [
        "Caballo"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 228,
    "slug": "svipdagr-the-cold",
    "name": "Svipdagr the Cold",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᚹᛁᛈᛞᚨᚷᚱ᛫ᚦᛖ᛫ᚲᛟᛚᛞ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/7/78/Svipdagr.png/revision/latest/scale-to-width-down/533?cb=20230323034322",
    "voiceActor": "Dawn Bennett",
    "gender": "Female",
    "species": [
      "Mortal (formerly)",
      "Berserker"
    ],
    "aliases": [
      "Svipdagr the Cold"
    ],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Svipdagr the Cold is one of the twelve Berserkers that can be fought as an optional boss in God of War Ragnarök. She is fought alongside the Sisters of Illska. Svipdagr, along with the Sisters, can be found in Alfheim.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Svipdagr la Fría es uno de los doce berserkers que pueden enfrentarse como jefe opcional en God of War Ragnarök. Se lucha contra ella junto con las Hermanas de Illska. Svipdagr, junto con las Hermanas, se encuentra en Alfheim.",
      "quote": null,
      "species": [
        "Mortal (antes)",
        "Berserker"
      ],
      "gender": "Femenino",
      "aliases": [
        "Svipdagr el Frío"
      ]
    }
  },
  {
    "id": 229,
    "slug": "somr",
    "name": "Sómr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛊᛟᛗᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/e/e3/S%C3%B3rm-and-Jari-tribute.jpg/revision/latest/scale-to-width-down/467?cb=20240207205800",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Mortal (presumably)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök (mentioned)"
    ],
    "about": null,
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": null,
      "quote": null,
      "species": [
        "Mortal (presuntamente)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  },
  {
    "id": 230,
    "slug": "tanngrisnir-and-tanngnjostr",
    "name": "Tanngrisnir & Tanngnjóstr",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛏᚨᚾᛜᚱᛁᛊᚾᛁᚱ᛫ᛏᚨᚾᛜᚾᛃᛟᛊᛏᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/c/cb/Tanngrisnir_y_Tanngnj%C3%B3str.jpg/revision/latest?cb=20240119181123",
    "voiceActor": null,
    "gender": "Females",
    "species": [
      "Goats"
    ],
    "aliases": [],
    "appearsIn": [],
    "about": "Tanngrisnir and Tanngnjóstr are the goats who pull the chariot of the god Thor.",
    "quote": "Hey, Thor requested those damned goats-favorite pets who had long since expired. –Sindri about Mjölnir's pommel",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Tanngrisnir y Tanngnjóstr son las cabras que tiran del carro del dios Thor.",
      "quote": "Oye, Thor pidió esas malditas cabras, sus mascotas favoritas que habían muerto hacía mucho. –Sindri sobre el pomo de Mjölnir",
      "species": [
        "Cabras"
      ],
      "gender": "Femenino (grupo)",
      "aliases": []
    }
  },
  {
    "id": 231,
    "slug": "the-everlasting",
    "name": "The Everlasting",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚦᛖ᛫ᛖᚹᛖᚱᛚᚨᛊᛏᛁᛜ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/98/Evtu.jpg/revision/latest?cb=20241218174221",
    "voiceActor": null,
    "gender": "Unknown",
    "species": [
      "Dragon (Svartalfheimian Dragons), guardian"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "The Everlasting is introduced as a boss in God of War: Ragnarök.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "El Eterno aparece como jefe en God of War: Ragnarök.",
      "quote": null,
      "species": [
        "Dragón (dragones de Svartalfheim), guardián"
      ],
      "gender": "Desconocido",
      "aliases": []
    }
  },
  {
    "id": 232,
    "slug": "the-huntress",
    "name": "The Huntress",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚦᛖ᛫ᚺᚢᚾᛏᚱᛖᛊ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/e/e0/Flj1T6AXEAcYf40.jpeg/revision/latest/scale-to-width-down/408?cb=20230106140254",
    "voiceActor": "Natalia del Riego",
    "gender": "Female",
    "species": [
      "Stalker"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "The Huntress is a powerful Stalker and a boss in God of War: Ragnarök.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "La Cazadora es una poderosa acechadora y un jefe en God of War: Ragnarök.",
      "quote": null,
      "species": [
        "Acechador"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 233,
    "slug": "the-lady-of-the-forge",
    "name": "The Lady of the Forge",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚦᛖ᛫ᛚᚨᛞᛁ᛫ᛟᚠ᛫ᚦᛖ᛫ᚠᛟᚱᚷᛖ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/9/9c/FnyttcYXgAAalzL.jpeg/revision/latest/scale-to-width-down/394?cb=20230201155330",
    "voiceActor": "Sarah Sokolovic",
    "gender": "Female",
    "species": [
      "Mermaid"
    ],
    "aliases": [
      "The Lady",
      "The Forge"
    ],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "The Lady of the Forge, or simply known as The Lady, is a mystical mermaid like creature who appears as a supporting character in God of War Ragnarök. She is well known for forging weapons by melding different resources together with her magic. The Lady is the creator of the Draupnir Spear.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "La Dama de la Forja, o simplemente conocida como la Dama, es una criatura mística parecida a una sirena que aparece como personaje secundario en God of War Ragnarök. Es muy conocida por forjar armas fusionando distintos recursos con su magia. La Dama es la creadora de la Lanza de Draupnir.",
      "quote": null,
      "species": [
        "Sirena"
      ],
      "gender": "Femenino",
      "aliases": [
        "La Dama",
        "La Forja"
      ]
    }
  },
  {
    "id": 234,
    "slug": "the-raven-keeper",
    "name": "The Raven Keeper",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚦᛖ᛫ᚱᚨᚹᛖᚾ᛫ᚲᛖᛈᛖᚱ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/d/d0/20240402_004636.png/revision/latest/scale-to-width-down/386?cb=20240402053823",
    "voiceActor": "Lani Minella",
    "gender": "Female",
    "species": [
      "Revenant"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "The Raven Keeper was a minor antagonist in God of War Ragnarök. She was Odin's trusted acolyte and was responsible for creating the Mystical Ravens that were sent as spies throughout the Nine Realms.",
    "quote": "Get away from my children. Have you any idea how long it took to shape their spirits into something useful? Have you any idea of the EFFORT? The FOCUS? Were it not for me, these misbegotten urchins would have perished in the winds of Fimbulwinter. But instead? They became something greater. Something magnificent. They MATTERED to the All-Father...and they mattered to ME. –The Raven Keeper to Kratos",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "La Guardiana de los Cuervos fue una antagonista menor en God of War Ragnarök. Era la acólita de confianza de Odín y la responsable de crear los Cuervos Místicos que se enviaban como espías por los Nueve Reinos.",
      "quote": "Aléjate de mis hijos. ¿Tienes idea de cuánto tiempo me llevó moldear sus espíritus en algo útil? ¿Tienes idea del ESFUERZO? ¿De la CONCENTRACIÓN? De no ser por mí, estos pilluelos malnacidos habrían perecido en los vientos del Fimbulwinter. ¿Pero en cambio? Se convirtieron en algo más grande. Algo magnífico. LE IMPORTABAN al Padre de Todo... y me importaban a MÍ. –La Guardiana de los Cuervos a Kratos",
      "species": [
        "Aparecido"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 235,
    "slug": "thrud",
    "name": "Thrúd",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚦᚱᚢᛞ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/3/35/Thrud_lunda.png/revision/latest/scale-to-width-down/456?cb=20240108161517",
    "voiceActor": "Mina Sundwall",
    "gender": "Female",
    "species": [
      "1/4 Jötunn",
      "3/4 Goddess (Aesir)",
      "Valkyrie (in training)"
    ],
    "aliases": [
      "Thrúd Thorsdóttir",
      "Daughter of Thor",
      "Thrúdie (by Thor)",
      "Smart Girl (by Thor)",
      "Little Girl (by Heimdall)",
      "Guppy (by Heimdall)",
      "Finest Valkyrie These Realms Have Ever Seen (by Sif)"
    ],
    "appearsIn": [
      "God of War (2018) (indirectly mentioned only)",
      "God of War Ragnarök"
    ],
    "about": "Thrúd (Old Norse: Þrúðr, Nordic: ᚦᚱᚢᛞ) also known as Thrúd Thorsdóttir (Thrúd, Daughter of Thor), is the daughter of Thor and Sif, the granddaughter of Odin and Fjörgyn, the niece of Týr, Heimdall and Baldur, the younger sister of Modi and half-sister of Magni. After her father's death in Ragnarök, she inherits his hammer Mjölnir and his mantle titles as the Goddess of Thunder for herself.",
    "quote": "Seeing the Valkyries fight- all strength and style, no apologies- it gave me clarity. For the first time, I saw my path forward. Clear as day. –Thrúd to Loki",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Thrúd (nórdico antiguo: Þrúðr, rúnico: ᚦᚱᚢᛞ), también conocida como Thrúd Thorsdóttir (Thrúd, hija de Thor), es la hija de Thor y Sif, nieta de Odín y Fjörgyn, sobrina de Týr, Heimdall y Baldur, hermana menor de Modi y media hermana de Magni. Tras la muerte de su padre en el Ragnarök, hereda su martillo Mjölnir y asume para sí sus títulos como la Diosa del Trueno.",
      "quote": "Ver pelear a las valquirias, pura fuerza y estilo, sin disculpas, me dio claridad. Por primera vez, vi mi camino a seguir. Claro como el día. –Thrúd a Loki",
      "species": [
        "1/4 jötunn",
        "3/4 diosa (Aesir)",
        "Valquiria (en entrenamiento)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Thrúd Thorsdóttir",
        "Hija de Thor",
        "Thrúdie (según Thor)",
        "Niña lista (según Thor)",
        "Niñita (según Heimdall)",
        "Pececito (según Heimdall)",
        "La mejor valquiria que estos reinos hayan visto jamás (según Sif)"
      ]
    }
  },
  {
    "id": 236,
    "slug": "titania",
    "name": "Titania",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᛏᛁᛏᚨᚾᛁᚨ",
    "image": null,
    "voiceActor": null,
    "gender": "Female",
    "species": [
      "Fae"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War: Ragnarök (Mentioned)",
      "God of War Ragnarök: Valhalla (Mentioned)"
    ],
    "about": "Titania is the wife of King Oberon, thus making her the Queen of the Faeries. They reside in Fairyland also known as Avalon. Queen Titania's four maids were Mimir's friends Mustardseed, Peaseblossom, Moth and Cobweb.",
    "quote": "Were you an ally to Freya in her suffering? To Skaði? To Gróa? Or Titania? No! –The illusion of Sigrún during the trip to the Norns to Mimir",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Titania es la esposa del rey Oberon, lo que la convierte en la Reina de las Hadas. Residen en el País de las Hadas, también conocido como Avalon. Las cuatro doncellas de la reina Titania eran los amigos de Mimir: Mustardseed, Peaseblossom, Moth y Cobweb.",
      "quote": "¿Fuiste un aliado para Freya en su sufrimiento? ¿Para Skaði? ¿Para Gróa? ¿O para Titania? ¡No! –La ilusión de Sigrún a Mimir durante el viaje hacia las nornas",
      "species": [
        "Hada"
      ],
      "gender": "Femenino",
      "aliases": []
    }
  },
  {
    "id": 237,
    "slug": "urd",
    "name": "Urð",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚢᚱᚦ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/c/cc/Raf-grassetti-norn03.jpg/revision/latest/scale-to-width-down/548?cb=20230203093623",
    "voiceActor": "Kate Miller",
    "gender": "Female",
    "species": [
      "Norse Goddess (Primordial)"
    ],
    "aliases": [
      "Urð Völuspasdottir",
      "Urðr",
      "Urth"
    ],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Urð (Nordic: Urðr) is a Norse Goddess of Fate and one of the three Norns encountered during The Word of Fate.",
    "quote": "You are looking for what all those who search for us seek, to know the end to your story. –Urð",
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Urð (nórdico: Urðr) es una diosa nórdica del destino y una de las tres nornas que se encuentran durante La palabra del destino.",
      "quote": "Buscas lo que buscan todos los que vienen a nosotras: conocer el final de tu historia. –Urð",
      "species": [
        "Diosa nórdica (primordial)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Urð Völuspasdottir",
        "Urðr",
        "Urth"
      ]
    }
  },
  {
    "id": 238,
    "slug": "verdandi",
    "name": "Verðandi",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚹᛖᚱᚦᚨᚾᛞᛁ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/b/bb/OfficialVerdandi.jpg/revision/latest/scale-to-width-down/548?cb=20230203094149",
    "voiceActor": "Emily O'Brien",
    "gender": "Female",
    "species": [
      "Norse Goddess (Primordial)"
    ],
    "aliases": [
      "Verðandi Völuspasdottir",
      "Verdandi",
      "Veroandi",
      "Verthandi"
    ],
    "appearsIn": [
      "God of War: Ragnarök"
    ],
    "about": "Verðandi is a Norse Goddess of Fate and one of the three Norns encountered during The Word of Fate.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Verðandi es una diosa nórdica del destino y una de las tres nornas que se encuentran durante La palabra del destino.",
      "quote": null,
      "species": [
        "Diosa nórdica (primordial)"
      ],
      "gender": "Femenino",
      "aliases": [
        "Verðandi Völuspasdottir",
        "Verdandi",
        "Veroandi",
        "Verthandi"
      ]
    }
  },
  {
    "id": 239,
    "slug": "visi-haglkorn",
    "name": "Vísi Haglkorn",
    "mythology": "nordica",
    "realm": "Nine Realms",
    "nativeName": "ᚹᛁᛊᛁ᛫ᚺᚨᚷᛚᚲᛟᚱᚾ",
    "image": "https://static.wikia.nocookie.net/godofwar/images/8/8c/V%C3%ADsi_Haglkorn.jpg/revision/latest/scale-to-width-down/700?cb=20221128022705",
    "voiceActor": null,
    "gender": "Male",
    "species": [
      "Troll (Frost)"
    ],
    "aliases": [],
    "appearsIn": [
      "God of War Ragnarök"
    ],
    "about": "Vísi Haglkorn is an ice troll that appears in God of War Ragnarök as an optional boss Kratos can fight.",
    "quote": null,
    "es": {
      "realm": "Los Nueve Reinos",
      "about": "Vísi Haglkorn es un trol de hielo que aparece en God of War Ragnarök como un jefe opcional al que Kratos puede enfrentarse.",
      "quote": null,
      "species": [
        "Trol (de escarcha)"
      ],
      "gender": "Masculino",
      "aliases": []
    }
  }
]
