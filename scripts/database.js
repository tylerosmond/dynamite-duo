export const database = {
    heroes: [
        {
            id: 1,
            name: "Aceman",
            power: "Fire Toots"
        },
        {
            id: 2,
            name: "HamJam",
            power: "Deafening Howl"
        },
        {
            id: 3,
            name: "Bastard Benny",
            power: "Slayer of Anthropods"
        },
        {
            id: 4,
            name: "Bandito Supremo",
            power: "Prophet, Seer, and Revelator"
        },
        {
            id: 5,
            name: "Kate",
            power: "Super Mommy"
        },
        {
            id: 6,
            name: "Tyler",
            power: "No powers really..."
        }
    ],
    villains: [
        {
            id: 6,
            name: "June",
            power: "Breaker of Hearts"
        },
        {
            id: 7,
            name: "July",
            power: "Ruiner of Everything"
        },
        {
            id: 8,
            name: "Mack",
            power: "He big, but not so bad"
        }
    ]
}
export const getHeroes = () => {
    return database.heroes.map(hero=> ({...hero}))
}
export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}