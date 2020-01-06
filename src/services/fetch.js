// WAY 1

const formatCharacter = character => {
    return {
        ...character
    }
};

const getDataFromApi = searchCharacter => fetch(`https:hp-api.herokuapp.com/api/${searchCharacter}`)
    .then(response => response.json())
    .then(characters => characters.map(formatCharacter));

export default getDataFromApi;

// WAY 2

// const formatCharacter = character => {
//     return {
//         name: character.name,
//         image: character.image,
//         gender: character.gender,
//         house: character.house,
//         wand: character.wand
//     }
// };

//  const getDataFromApi = searchCharacter => {
//      return fetch(`http:hp-api.herokuapp.com/api/characters/staff${searchCharacter}`)
//          .then(response => response.json())
//          .then(characters => characters.map(formatCharacter));
//  };

// WAY 3

// const getDataFromApi = () => fetch(`https://hp-api.herokuapp.com/api/characters/staff`)
//     .then(response => response.json())

// export default getDataFromApi;
