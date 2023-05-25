import React, { useState } from 'react';
import fetchData from './apiConsumption.js';
let characterCount = 1;

const ShowCharacter = () => {
    const [character, setCharacter] = useState([]);

    const showCharacter = async () => {
        const url = 'https://swapi.dev/api/people/1/';
        const data = await fetchData(url);
        console.log(data)
        setCharacter(data);
    };

    const nextCharacter = async () => {
        const data = await fetchData(`https://swapi.dev/api/people/${characterCount += 1}/`);
        console.log(data)
        setCharacter(data);
    }

    if (character.length === 0) {
        showCharacter();
    }

    return (
        <div>
            <h3>Name: {character.name}</h3>
            <p>Height: {character.height}</p>
            <p>Gender: {character.gender}</p>

            <button onClick={nextCharacter}>next character</button>
        </div>
    );
};

export default ShowCharacter;
