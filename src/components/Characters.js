import React from 'react';
import '../stylesheets/Character.scss';
import logo from '../images/logo.png';


function Characters(props) {
    console.log(props)
    return (
        <li className="character">
            <img className="character__img" src={props.image} alt={props.name}></img>
            <div className="character__info">
                <h1 className="character__name">{props.name.toUpperCase()}</h1>
                <h3 className="character__gender">Gender: {props.gender}</h3>
                {!props.patronus
                    ? <p className="character__patronus">Patronus: No</p>
                    : <p className="character__patronus">Patronus: {props.patronus}</p>}
                {!props.wand.wood
                    ? <p className="character__wand">Wand wood: No info</p>
                    : <p className="character__wand">Wand wood: {props.wand.wood}</p>}
            </div>
        </li>

    )
}

export default Characters;