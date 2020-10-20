
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('game').del()
    .then(function () {
      // Inserts seed entries
      return knex('game').insert([
        {
          "name": "DOOM",
          "recent_reviews": "Very Positive,(554),- 89% of the 554 user reviews in the last 30 days are positive.",
          "developer_name": "id Software",
          "popular_tags": "FPS,Gore,Action,Demons,Shooter,First-Person,Great Soundtrack,Multiplayer,Singleplayer,Fast-Paced,Sci-fi,Horror,Classic,Atmospheric,Difficult,Blood,Remake,Zombies,Co-op,Memes",
          "genre": "Action"
        },
        {
          "name": "PLAYERUNKNOWN'S BATTLEGROUNDS",
          "recent_reviews": "Mixed,(6,214),- 49% of the 6,214 user reviews in the last 30 days are positive.",
          "developer_name": "PUBG Corporation",
          "popular_tags": "Survival,Shooter,Multiplayer,Battle Royale,PvP,FPS,Third-Person Shooter,Action,Online Co-Op,Tactical,Co-op,First-Person,Early Access,Strategy,Competitive,Third Person,Team-Based,Difficult,Simulation,Stealth",
          "genre": "Action,Adventure,Massively Multiplayer"
        },
        {
          "name": "BATTLETECH",
          "recent_reviews": "Mixed,(166),- 54% of the 166 user reviews in the last 30 days are positive.",
          "developer_name": "Harebrained Schemes",
          "popular_tags": "Mechs,Strategy,Turn-Based,Turn-Based Tactics,Sci-fi,Turn-Based Strategy,Tactical,Singleplayer,Robots,RPG,Action,Multiplayer,Futuristic,Character Customization,Management,Adventure,Space,Story Rich,Great Soundtrack,Difficult",
          "genre": "Action,Adventure,Strategy"
        },
        {
          "name": "DayZ",
          "recent_reviews": "Mixed,(932),- 57% of the 932 user reviews in the last 30 days are positive.",
          "developer_name": "Bohemia Interactive",
          "popular_tags": "Survival,Zombies,Open World,Multiplayer,PvP,Massively Multiplayer,Action,Early Access,Simulation,FPS,Post-apocalyptic,Survival Horror,Shooter,Sandbox,Adventure,Indie,Co-op,Atmospheric,Horror,Military",
          "genre": "Action,Adventure,Massively Multiplayer"
        },
        {
          "name": "EVE Online",
          "recent_reviews": "Mixed,(287),- 54% of the 287 user reviews in the last 30 days are positive.",
          "developer_name": "CCP",
          "popular_tags": "Space,Massively Multiplayer,Sci-fi,Sandbox,MMORPG,Open World,RPG,PvP,Multiplayer,Free to Play,Economy,Strategy,Space Sim,Simulation,Action,Difficult,Tactical,Capitalism,PvE,Atmospheric",
          "genre": "Action,Free to Play,Massively Multiplayer,RPG,Strategy"
        },
        {
          "name": "Grand Theft Auto V: Premium Online Edition",
          "recent_reviews": "NaN",
          "developer_name": "Rockstar North",
          "popular_tags": "NaN",
          "genre": "Action,Adventure"
        },
        {
          "name": "Devil May Cry 5",
          "recent_reviews": "Very Positive,(408),- 87% of the 408 user reviews in the last 30 days are positive.",
          "developer_name": "CAPCOM Co., Ltd.",
          "popular_tags": "Action,Hack and Slash,Great Soundtrack,Demons,Character Action Game,Spectacle fighter,Third Person,Violent,Singleplayer,Classic,Stylized,Gore,Story Rich,Nudity,Multiplayer,Controller,Difficult,Adventure,Anime,Family Friendly",
          "genre": "Action"
        },
        {
          "name": "Human: Fall Flat",
          "recent_reviews": "Very Positive,(629),- 91% of the 629 user reviews in the last 30 days are positive.",
          "developer_name": "No Brakes Games",
          "popular_tags": "Funny,Multiplayer,Co-op,Puzzle,Physics,Local Co-Op,Comedy,Adventure,Indie,Parkour,Puzzle-Platformer,Local Multiplayer,Sandbox,Casual,Open World,Singleplayer,3D Platformer,Split Screen,Simulation,Survival",
          "genre": "Adventure,Indie"
        },
        {
          "name": "They Are Billions",
          "recent_reviews": "Very Positive,(192),- 83% of the 192 user reviews in the last 30 days are positive.",
          "developer_name": "Numantian Games",
          "popular_tags": "Early Access,Base Building,Strategy,Zombies,Survival,RTS,Steampunk,City Builder,Tower Defense,Post-apocalyptic,Building,Singleplayer,Resource Management,Real-Time with Pause,Early Access,Difficult,Tactical,Management,Indie,Isometric",
          "genre": "Strategy,Early Access"
        },
        {
          "name": "Warhammer: Chaosbane",
          "recent_reviews": "",
          "developer_name": "Eko Software",
          "popular_tags": "RPG,Adventure,Hack and Slash,Action,Action RPG,Games Workshop,Violent,Fantasy,Co-op,War,Isometric,Dark Fantasy,Warhammer 40K,Historical,Colorful",
          "genre": "Action,Adventure,RPG"
        },
        {
          "name": "For The King",
          "recent_reviews": "Very Positive,(67),- 80% of the 67 user reviews in the last 30 days are positive.",
          "developer_name": "IronOak Games",
          "popular_tags": "RPG,Turn-Based Combat,Adventure,Online Co-Op,Co-op,Strategy,Rogue-like,Turn-Based,Multiplayer,Turn-Based Strategy,Party-Based RPG,Indie,Fantasy,Board Game,Strategy RPG,Hex Grid,Rogue-lite,Difficult,Local Co-Op,Early Access",
          "genre": "Adventure,Indie,RPG,Strategy"
        },
        {
          "name": "Danganronpa V3: Killing Harmony",
          "recent_reviews": "Very Positive,(78),- 82% of the 78 user reviews in the last 30 days are positive.",
          "developer_name": "Spike Chunsoft Co., Ltd.",
          "popular_tags": "Story Rich,Anime,Visual Novel,Detective,Mystery,Great Soundtrack,Female Protagonist,Singleplayer,Adventure,Psychological Horror,Dark Humor,Horror,Dark Comedy,Puzzle,Atmospheric,Memes,Dark,Funny,Comedy,Dating Sim",
          "genre": "Adventure"
        },
        {
          "name": "TERA",
          "recent_reviews": "Mixed,(76),- 63% of the 76 user reviews in the last 30 days are positive.",
          "developer_name": "Bluehole, Inc.",
          "popular_tags": "Free to Play,MMORPG,Massively Multiplayer,RPG,Open World,Action,Fantasy,Adventure,Anime,Third Person,Character Customization,Action RPG,Multiplayer,Co-op,PvP,Hack and Slash,PvE,Cute,Controller,Nudity",
          "genre": "Action,Adventure,Free to Play,Massively Multiplayer,RPG"
        },
        {
          "name": "Call of Duty: Modern Warfare Remastered",
          "recent_reviews": "Mixed,(33),- 51% of the 33 user reviews in the last 30 days are positive.",
          "developer_name": "Raven Software,Beenox",
          "popular_tags": "FPS,Action,Shooter,Multiplayer,Violent,War,Singleplayer,First-Person,Military,Remake,Controller,Casual,Classic",
          "genre": "Action"
        },
        {
          "name": "Stonehearth",
          "recent_reviews": "Mixed,(66),- 40% of the 66 user reviews in the last 30 days are positive.",
          "developer_name": "Radiant Entertainment",
          "popular_tags": "City Builder,Building,Sandbox,Strategy,Survival,Simulation,Crafting,Voxel,Early Access,Indie,Singleplayer,Open World,RPG,Management,Multiplayer,Fantasy,Cute,Adventure,God Game,RTS",
          "genre": "Indie,Simulation,Strategy"
        },
        {
          "name": "Hearts of Iron IV: Mobilization Pack",
          "recent_reviews": "NaN",
          "developer_name": "Paradox Development Studio",
          "popular_tags": "NaN",
          "genre": "Simulation,Strategy"
        },
        {
          "name": "Clone Drone in the Danger Zone",
          "recent_reviews": "Very Positive,(88),- 94% of the 88 user reviews in the last 30 days are positive.",
          "developer_name": "Doborog Games",
          "popular_tags": "Early Access,Robots,Action,Swordplay,Fighting,Early Access,Indie,Funny,Singleplayer,Voxel,Futuristic,Pixel Graphics,Multiplayer,Third Person,Comedy,Difficult,Survival,Dark Humor,Philisophical,Rogue-like",
          "genre": "Action,Indie,Early Access"
        },
        {
          "name": "GOD EATER 3",
          "recent_reviews": "Mostly Positive,(56),- 71% of the 56 user reviews in the last 30 days are positive.",
          "developer_name": "BANDAI NAMCO Studios Inc.",
          "popular_tags": "Anime,Action,Character Customization,Co-op,Hunting,Hack and Slash,JRPG,Multiplayer,RPG,Singleplayer,Great Soundtrack,Post-apocalyptic,Online Co-Op,Third Person,Story Rich,Action RPG,Adventure,Female Protagonist",
          "genre": "Action"
        },
        {
          "name": "War Robots",
          "recent_reviews": "Mixed,(91),- 49% of the 91 user reviews in the last 30 days are positive.",
          "developer_name": "Pixonic",
          "popular_tags": "Free to Play,Robots,Action,Multiplayer,FPS,Mechs,Massively Multiplayer,Shooter,PvP,Controller,Third-Person Shooter,Co-op,War",
          "genre": "Action,Free to Play"
        },
        {
          "name": "Halo Wars: Definitive Edition",
          "recent_reviews": "Very Positive,(28),- 82% of the 28 user reviews in the last 30 days are positive.",
          "developer_name": "Ensemble Studios,Behaviour Interactive,343 Industries",
          "popular_tags": "Strategy,RTS,Sci-fi,Singleplayer,Multiplayer,War,Base Building,Action,Co-op,Great Soundtrack,Military,Simulation,Aliens,Classic,Masterpiece,Online Co-Op,Atmospheric,Sandbox,Tactical,Story Rich",
          "genre": "Strategy"
        },
        {
          "name": "Grand Theft Auto IV",
          "recent_reviews": "Mixed,(303),- 66% of the 303 user reviews in the last 30 days are positive.",
          "developer_name": "Rockstar North,Rockstar Toronto",
          "popular_tags": "Open World,Action,Bowling,Multiplayer,Third Person,Crime,Adventure,Third-Person Shooter,Sandbox,Singleplayer,Moddable,Shooter,Physics,Atmospheric,Funny,Classic,Dark Humor,Co-op,Gore,Satire",
          "genre": "Action,Adventure"
        },
        {
          "name": "Portal Bundle",
          "recent_reviews": "NaN",
          "developer_name": "Valve",
          "popular_tags": "NaN",
          "genre": "Action,Adventure"
        },
        {
          "name": "Portal",
          "recent_reviews": "Overwhelmingly Positive,(352),- 98% of the 352 user reviews in the last 30 days are positive.",
          "developer_name": "Valve",
          "popular_tags": "Puzzle,First-Person,Singleplayer,Sci-fi,Comedy,Female Protagonist,Funny,Physics,Action,Story Rich,Platformer,Classic,Science,FPS,Atmospheric,Short,Adventure,Masterpiece,Dark Humor,Great Soundtrack",
          "genre": "Action"
        },
        {
          "name": "Viscera Cleanup Detail",
          "recent_reviews": "Very Positive,(61),- 91% of the 61 user reviews in the last 30 days are positive.",
          "developer_name": "RuneStorm",
          "popular_tags": "Simulation,Gore,First-Person,Multiplayer,Co-op,Physics,Funny,Indie,Sci-fi,Masterpiece,Comedy,Space,Horror,Singleplayer,Walking Simulator,Casual,Blood,Parody,Sandbox,Adventure",
          "genre": "Indie,Simulation"
        },
        {
          "name": "Neverwinter Nights: Enhanced Edition",
          "recent_reviews": "Mixed,(61),- 68% of the 61 user reviews in the last 30 days are positive.",
          "developer_name": "Beamdog",
          "popular_tags": "RPG,Dungeons & Dragons,Fantasy,Classic,CRPG,Multiplayer,Singleplayer,Character Customization,Co-op,Story Rich,Real-Time with Pause,Adventure,Moddable,Female Protagonist,Cult Classic",
          "genre": "RPG"
        },
        {
          "name": "Ni no Kuni II: Revenant Kingdom",
          "recent_reviews": "Mostly Positive,(95),- 76% of the 95 user reviews in the last 30 days are positive.",
          "developer_name": "Level-5",
          "popular_tags": "RPG,JRPG,Anime,Adventure,Singleplayer,Open World,Fantasy,Story Rich,Cute,Great Soundtrack,Action RPG,Dungeon Crawler,Hack and Slash,Action,Strategy,City Builder,Cartoony,Multiplayer,Survival,Co-op",
          "genre": "Adventure,RPG"
        },
        {
          "name": "Tree of Savior (English Ver.)",
          "recent_reviews": "Mixed,(198),- 46% of the 198 user reviews in the last 30 days are positive.",
          "developer_name": "IMCGAMES Co.,Ltd.",
          "popular_tags": "MMORPG,Massively Multiplayer,Free to Play,RPG,Anime,Fantasy,Adventure,Cute,Great Soundtrack,Action,Multiplayer,JRPG,Open World,Isometric,Nudity,Co-op,Action RPG,Hack and Slash,Memes,Dating Sim",
          "genre": "Free to Play,Massively Multiplayer,RPG"
        },
        {
          "name": "Hellblade: Senua's Sacrifice",
          "recent_reviews": "Very Positive,(413),- 91% of the 413 user reviews in the last 30 days are positive.",
          "developer_name": "Ninja Theory",
          "popular_tags": "Atmospheric,Psychological,Female Protagonist,Story Rich,Mythology,Singleplayer,Dark,Adventure,Third Person,Horror,Dark Fantasy,Action,Violent,Indie,Hack and Slash,Fantasy,Walking Simulator,Realistic,Action-Adventure,Blood",
          "genre": "Action,Adventure,Indie"
        },
        {
          "name": "Danganronpa 2: Goodbye Despair",
          "recent_reviews": "Very Positive,(95),- 92% of the 95 user reviews in the last 30 days are positive.",
          "developer_name": "Spike Chunsoft Co., Ltd.,Abstraction Games",
          "popular_tags": "Anime,Detective,Visual Novel,Mystery,Story Rich,Great Soundtrack,Singleplayer,Adventure,Psychological Horror,Dark Comedy,Horror,Atmospheric,Memes,Puzzle,Comedy,Dark,Dating Sim,Mature,Funny,Walking Simulator",
          "genre": "Adventure"
        },
        {
          "name": "Yakuza 0",
          "recent_reviews": "Very Positive,(148),- 93% of the 148 user reviews in the last 30 days are positive.",
          "developer_name": "SEGA",
          "popular_tags": "Story Rich,Action,Beat 'em up,Great Soundtrack,Open World,Crime,RPG,Violent,Minigames,Mature,Funny,Singleplayer,Adventure,Sexual Content,Comedy,Drama,Third Person,Atmospheric,Anime,Dating Sim",
          "genre": "Action,Adventure,RPG"
        },
        {
          "name": "The Escapists 2",
          "recent_reviews": "Mostly Positive,(133),- 77% of the 133 user reviews in the last 30 days are positive.",
          "developer_name": "Team17 Digital Ltd,Mouldy Toof Studios",
          "popular_tags": "Multiplayer,Strategy,Pixel Graphics,Online Co-Op,Co-op,2D,Crafting,Singleplayer,Indie,Simulation,Stealth,Sandbox,Local Co-Op,Character Customization,Funny,Puzzle,Difficult,Action,Open World,Split Screen",
          "genre": "Indie,Simulation,Strategy"
        },
        {
          "name": "Star Wars: Battlefront 2 (Classic, 2005)",
          "recent_reviews": "Very Positive,(153),- 91% of the 153 user reviews in the last 30 days are positive.",
          "developer_name": "Pandemic Studios",
          "popular_tags": "Star Wars,Action,Multiplayer,Shooter,Third-Person Shooter,Sci-fi,Classic,Space,FPS,First-Person,Singleplayer,Moddable,Third Person,Military,Masterpiece,Tactical,Co-op,Strategy,Great Soundtrack,Adventure",
          "genre": "Action"
        },
        {
          "name": "Wizard101",
          "recent_reviews": "Mixed,(40),- 62% of the 40 user reviews in the last 30 days are positive.",
          "developer_name": "KingsIsle Entertainment",
          "popular_tags": "Massively Multiplayer,RPG,Magic,Card Game,Free to Play,Family Friendly,MMORPG,Strategy,Fantasy,Turn-Based,Multiplayer,Adventure,Psychological Horror,Anime,Online Co-Op,Turn-Based Combat,Co-op",
          "genre": "Free to Play,Massively Multiplayer,RPG"
        },
        {
          "name": "Life is Strange 2",
          "recent_reviews": "Mostly Positive,(155),- 72% of the 155 user reviews in the last 30 days are positive.,This product has experienced one or more periods of off-topic review activity.  Based on your preferences",
          "developer_name": "DONTNOD Entertainment",
          "popular_tags": "Choices Matter,Story Rich,Adventure,Great Soundtrack,Singleplayer,Atmospheric,Episodic,Drama,Sexual Content,Third Person,Choose Your Own Adventure,Walking Simulator,Mystery,Point & Click",
          "genre": "Adventure"
        },
        {
          "name": "Kingdoms of Amalur: Reckoning",
          "recent_reviews": "Very Positive,(52),- 88% of the 52 user reviews in the last 30 days are positive.",
          "developer_name": "Big Huge Games,38 Studios",
          "popular_tags": "RPG,Fantasy,Open World,Singleplayer,Action RPG,Action,Adventure,Third Person,Loot,Story Rich,Magic,Character Customization,Hack and Slash,Exploration,Controller,Sandbox",
          "genre": "Action,RPG"
        },
        {
          "name": "The Evil Within",
          "recent_reviews": "Mostly Positive,(51),- 76% of the 51 user reviews in the last 30 days are positive.",
          "developer_name": "Tango Gameworks",
          "popular_tags": "Horror,Survival Horror,Psychological Horror,Gore,Atmospheric,Action,Singleplayer,Third Person,Survival,Zombies,Dark,Stealth,Adventure,Third-Person Shooter,Difficult,Cinematic",
          "genre": "Action"
        },
        {
          "name": "The Binding of Isaac: Rebirth Complete Bundle",
          "recent_reviews": "NaN",
          "developer_name": "Nicalis, Inc.",
          "popular_tags": "NaN",
          "genre": "Action,Adventure,Indie"
        },
        {
          "name": "RimWorld",
          "recent_reviews": "Overwhelmingly Positive,(519),- 96% of the 519 user reviews in the last 30 days are positive.",
          "developer_name": "Ludeon Studios",
          "popular_tags": "Base Building,Survival,Strategy,Sandbox,Management,Building,Simulation,Singleplayer,Open World,Sci-fi,Crafting,Moddable",
          "genre": "Indie,Simulation,Strategy"
        },
        {
          "name": "Stardew Valley",
          "recent_reviews": "Very Positive,(1,279),- 94% of the 1,279 user reviews in the last 30 days are positive.",
          "developer_name": "ConcernedApe",
          "popular_tags": "RPG,Pixel Graphics,Agriculture,Simulation,Relaxing,Crafting,Multiplayer,Sandbox,Indie,Building,Singleplayer,Casual",
          "genre": "Indie,RPG,Simulation"
        },
        {
          "name": "ARK: Survival Evolved",
          "recent_reviews": "Mostly Positive,(932),- 73% of the 932 user reviews in the last 30 days are positive.",
          "developer_name": "Studio Wildcard,Instinct Games,Efecto Studios,Virtual Basement LLC",
          "popular_tags": "Survival,Open World,Dinosaurs,Multiplayer,Crafting,Building,Adventure,Base Building,Co-op,Action,First-Person,Sandbox,Early Access",
          "genre": "Action,Adventure,Indie,Massively Multiplayer,RPG"
        },
        {
          "name": "DARK SOULS II: Scholar of the First Sin",
          "recent_reviews": "Mostly Positive,(267),- 74% of the 267 user reviews in the last 30 days are positive.",
          "developer_name": "FromSoftware, Inc",
          "popular_tags": "Dark Fantasy,RPG,Difficult,Third Person,Action,Atmospheric,Action RPG",
          "genre": "Action,RPG"
        },
      ]);
    });
};
