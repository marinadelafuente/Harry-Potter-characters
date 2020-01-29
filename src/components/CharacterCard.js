import React from 'react';
import '../stylesheets/CharacterCard.scss';
import { Link } from 'react-router-dom';


function CharacterCard(props) {

    // const { data } = props;

    const equalId = props.idparam.match.params.id;
    const character = props.data[equalId];

    console.log(props.data)
    console.log(character.alive)
    return (
        <React.Fragment>
            <ul className="card">
                <li className="card-character">
                    <img className="character__img" src={character.image} alt={character.name}></img>
                    <div className="character__info">
                        <h1 className="character__name">{character.name}</h1>
                        {character.alive === "false"
                            ? <p className="character__alive">I am Alive!!</p>
                            : <p className="character__dead">I am not here anymore</p>}
                        <p>I am{character.alive === "true,"
                            ? <span className="character__text"> an <i className={"fab fa-reddit-alien"}></i></span>
                            : <span className="character__text"> {character.alive} 🤓</span>
                        }
                        </p>

                    </div>
                </li>
            </ul>

        </React.Fragment>

    )
}

export default CharacterCard;