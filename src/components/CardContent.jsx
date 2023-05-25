import React, { useState } from 'react';
import fetchData from './apiConsumption.js';
import imgB from '../img/button.png'
import femaleImg from '../img/female.png'
import maleImg from '../img/male.png'
import naImg from '../img/n-a.png'

let characterImg
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

    const gender = () => {
        if (character.gender === 'male') {
            characterImg = maleImg
        }
        else if (character.gender === 'female') {
            characterImg = femaleImg
        }
        else {
            characterImg = naImg
        }
    }

    if (character.length === 0) {
        showCharacter();
        gender();
    }

    return (
        <>
            <div className='StarWars-Information'>
                <h1>{character.name}</h1>
                <p>Height: {character.height}</p>
                <p>Gender: {character.gender}</p>
                <p>
                    Star Wars is a science fiction film saga created by George Lucas.
                    Set in a fictional galaxy, the story takes place against a backdrop of
                    intergalactic conflicts between the forces of good and evil.
                </p>
                <div className='StarWars-Button'>
                    <button onClick={nextCharacter}><img src={imgB} /></button>
                </div>
            </div>
            <div className='StarWars-Img'>
                <img src={naImg} alt={character.name} />
            </div>
        </>
    );
};

export default ShowCharacter;
