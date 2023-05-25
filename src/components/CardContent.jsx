import React, { useState } from 'react';

const ShowCharacter = () => {
    const url = 'https://swapi.dev/api/people/1/';
    const [character, setCharacter] = useState(null);

    const fetchData = async (apiUrl) => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching character:', error);
        }
    };

    const showCharacter = async () => {
        const data = await fetchData(url);
        setCharacter(data);
    };

    showCharacter();

    if (character === null) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h3>Name: {character.name}</h3>
            <p>Height: {character.height}</p>
            <p>Gender: {character.gender}</p>
        </div>
    );
};

export default ShowCharacter;