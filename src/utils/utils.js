import React from 'react';

export const q = (incoming) => { return document.querySelector(incoming); };
export const MAX_WIDTH_FOR_SEARCH_PLACEHOLDER = 500;
export const MAX_SEARCH_POPOP_LENGTH = 8;

export const GlobalState = React.createContext(null);
export const SEARCHABLE_URL = "/games";

export const NOT_FOUND_GAME_ITEM = {
    "id": "not-found",
    "title": "Oops, nothing found for that search!",
    "image": "/game-browser-images/vector/default-monochrome-black.svg",
    "views": "",
    "tags": []
};
export const NOT_FOUND_GAME_VIEW_ITEM = {
    "id": "not-found",
    "title": "Oops, nothing found for that game view!",
    "image": "/game-browser-images/vector/default-monochrome-black.svg",
    "views": "",
    "tags": []
};

export const GAME_ITEMS = [
    {
        "id": "sc2",
        "title": "Starcraft II",
        "image": "/games/sc2.jpeg",
        "views": "1.1k views",
        "tags": ["RTS", "Strategy"],
        "game_videos": [
            { id:"sc1", title:"Probe takes out 3 marines!", url: "nPNL4Ju0q4w" },
            { id:"sc2", title:"Sc2 cinematic", url: "MVbeoSPqRs4" },
            { id:"sc3", title:"Probe takes out 3 marines!", url: "nPNL4Ju0q4w" },
            { id:"sc4", title:"Sc2 cinematic", url: "MVbeoSPqRs4" }
        ]
    },
    {
        "id": "lol",
        "title": "League of Legends",
        "image": "/games/lol.jpeg",
        "views": "2.3k views",
        "tags": ["Action", "MOBA"],
        "game_videos": [
            { id:"lol1", title:"Star nemesis", url: "XibTfNrcYk8" },
            { id:"lol2", title:"League cinematic", url: "Ohgtglx6SRM" }
        ]
    },
    {
        "id": "wow",
        "title": "World of Warcraft",
        "image": "/games/wow.jpeg",
        "views": "3.7k views",
        "tags": ["RPG", "Adventure"],
        "game_videos": [
        ]
    },
    {
        "id": "hearthstone",
        "title": "Hearthstone",
        "image": "/games/hearthstone.jpeg",
        "views": "4.1k views",
        "tags": ["Card Game"],
        "game_videos": [
        ]
    },
    {
        "id": "wc3",
        "title": "Warcraft III",
        "image": "/games/warcraft3.jpeg",
        "views": "2.4k views",
        "tags": ["RTS", "Adventure"],
        "game_videos": [
        ]
    },
    {
        "id": "teamfight",
        "title": "Teamfight Tactics",
        "image": "/games/teamfight.jpeg",
        "views": "1.9k views",
        "tags": ["Strategy"],
        "game_videos": [
        ]
    },
    {
        "id": "apex",
        "title": "Apex Legends",
        "image": "/games/apex.jpeg",
        "views": "0.9k views",
        "tags": ["FPS", "Shooter"],
        "game_videos": [
        ]
    },
    {
        "id": "age",
        "title": "Age of Empires II",
        "image": "/games/age.jpeg",
        "views": "2.8k views",
        "tags": ["RTS", "Classic"],
        "game_videos": [
        ]
    },
    {
        "id": "lostark",
        "title": "Lost Ark",
        "image": "/games/lostark.jpeg",
        "views": "1.6k views",
        "tags": ["MMO", "Action", "RPG"],
        "game_videos": [
        ]
    },
    {
        "id": "minecraft",
        "title": "Minecraft",
        "image": "/games/minecraft.jpeg",
        "views": "5.2k views",
        "tags": ["Adventure", "Pixels"],
        "game_videos": [
        ]
    }
];
