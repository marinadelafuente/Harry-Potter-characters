const getDataFromApi = () => fetch(`https://hp-api.herokuapp.com/api/characters/staff`)
    .then(response => response.json())

export default getDataFromApi;
