import React from 'react';
import '../stylesheets/Character.scss';
import { Link } from 'react-router-dom';


function CharacterCard(props) {

    // const { data } = props;

    const equalId = props.idparam.match.params.id;
    const character = props.data[equalId];

    console.log(props.data)
    console.log(character)
    return (
        <React.Fragment>
            <ul>
                <li className="card-character">
                    <img className="character__img" src={character.image} alt={character.name}></img>
                    <div className="character__info">
                        <h1 className="character__name">{character.name}</h1>
                        <h3 className="character__gender">Gender: {character.gender}</h3>
                        {!character.patronus
                            ? <p className="character__patronus">Patronus: {character.emptyPatronus}</p>
                            : <p className="character__patronus">Patronus: {character.patronus}</p>}

                    </div>
                </li>
            </ul>

        </React.Fragment>

    )
}

export default CharacterCard;