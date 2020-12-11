///Films posters

import thorRangnarok from '../assets/posters/thor-ragnarok.jpg';
import shazam from '../assets/posters/shazam.jpg';
import capMarvel from '../assets/posters/cap-marvel.jpg';
import avengers3 from '../assets/posters/avangers.jpg';


//Serials posters

import friends from '../assets/posters/friends.jpg';
import bigBangTheory from '../assets/posters/big-bang-theory.jpg';
import gameOfThrone from '../assets/posters/game-of-throne.jpg';
import vikings from '../assets/posters/viking.jpg';


const films = [
    {id: 'f1', name:"Thor 3: Ragnarok", photo: thorRangnarok, genre: 'Action, Adventure, Comedy', director: 'Taika Waititi', year: 2017, description: `Returning to Asgard, Thor discovers that the actions of his brother. Loki, who seized the throne of Asgard, led to the approach of the most terrible event - Ragnarok. According to legend, this will mark the last battle of Asgard, the consequence of which will be its complete destruction. The heroes will have to face the worst enemy of all nine worlds - the fire demon Surtur, whose goal is to fulfill the prophecy of Ragnarok and destroy the nine worlds.`},
    {id: 'f2', name:"Shazam", photo: shazam, genre: 'Action, Adventure, Comedy', director: 'David F. Sandberg', year: 2019, description: `Thanks to the ancient wizard, the 14-year-old guy turns into a
    completely adult superhero Shazam. In his heart, he remains a child, so he behaves accordingly and is
    drawn to the fullest. Shazam tests his limits with the recklessness of a mischievous child,
    but soon he will have to regain control of his abilities to fight
    the deadly forces of evil Dr. Thaddeus Sivana.`},
    {id: 'f3', name:"Avengers: Infinity War", photo: avengers3, genre: 'Action, Adventure, Sci-Fi', director: 'Anthony Russo, Joe Russo', year: 2018, description: `As the Avengers and their allies continue to defend the world from a
    variety of dangers that a single superhero would not have been able to handle, a new threat emerges from space: Thanos. The intergalactic tyrant pursues the goal of collecting all six. Infinity Stones - artifacts of incredible power, with which you can change reality at will. Everything the Avengers have faced before has led to this moment - the fate of Earth has never been so uncertain.`},
    {id: 'f4', name:"Captain Marvel", photo: capMarvel, genre: 'Action, Adventure, Sci-Fi', director: 'Anna Boden, Ryan Fleck', year: 2019, description: `Captain Marvel is an extraterrestrial Kree warrior who finds herself
    caught in the middle of an intergalactic battle between her people
    and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of
    another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury, Captain Marvel tries to uncover the secrets of her past while harnessing her special superpowers to end the war
    with the evil Skrulls.`},
    {id: 's1', name:"Game of Thrones", photo: gameOfThrone, genre: 'Action, Adventure, Drama', director: 'David Benioff, D.B. Weiss', year: '2011-2019', description: `The time of prosperity is coming to an end, and the summer, which
    lasted almost a decade, is fading away. Around the center of power
    of the Seven Kingdoms, the Iron Throne, a conspiracy is brewing, and
    at this difficult time, the king decides to seek support from his
    youth friend Eddard Stark. In a world where everyone strives for power, weaves intrigues and is
    ready to stab a knife in the back, there is a place for nobility,
    compassion and love. Meanwhile, no one notices the awakening of darkness from the legends
    far in the North - and only the Wall protects the living south of
    it.`},
    {id: 's2', name:"Vikings", photo: vikings, genre: 'Action, Adventure, Drama', director: 'Michael Hirst', year: '2013-...', description: `A saga about the Scandinavian heroes of the Middle Ages. The story of the rise of the powerful Viking leader Ragnar Lothbrok
    and his family, who are leading a campaign to foreign unknown lands. Norse legend says that he was a direct descendant of Odin, god of war
    and warriors.`},
    {id: 's3', name:"Big Bang Theory", photo: bigBangTheory, genre: 'Comedy, Romance', director: 'Chuck Lorre, Bill Prady', year: '2007-2019', description: `Two brilliant physicists, Leonard and Sheldon, are great minds who
    understand how the universe works. But their genius doesn't help them in the least to communicate with
    people, especially with women. Everything begins to change when the beautiful Penny settles in front
    of them.`},
    {id: 's4', name:"Friends", photo: friends, genre: 'Comedy, Romance', director: 'David Crane, Marta Kauffman', year: '1994-2004', description: `The main characters are six friends - Rachel, Monica, Phoebe, Joey,
    Chandler and Ross. Three girls and three guys who are friends, live next door, kill time
    together and confront the harsh reality, share their secrets and
    sometimes fall very deeply in love. Cult comedy television series, recognized by viewers around the
    world.`}
]

function getFilm(itemId) {
    return films.filter((item) => {
        return itemId === item.id
    })
}

function getAllFilms() {
    const filmz = films.filter((item) => {
        return item.id.charAt(0) === 'f'
    })
    return filmz;
}

function getAllSerials() {
    const serialz = films.filter((item) => {
            return item.id.charAt(0) === 's'
    })
    return serialz;
}


export {getFilm, getAllFilms, getAllSerials};