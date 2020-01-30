import React from 'react';
import '../stylesheets/Character.scss';
import { Link } from 'react-router-dom';


function Characters(props) {
    const routeId = `/character/${props.id}`;
    return (
        <Link to={routeId}>
            <li className="character" key={props.id}>
                <img className="character__img" src={props.image} alt={props.name}></img>
                <div className="character__info">
                    <h1 className="character__name">{props.name.toUpperCase()}</h1>
                    <h3 className="character__gender">Gender: {props.gender}</h3>
                    {!props.patronus
                        ? <p className="character__patronus">Patronus: {props.emptyPatronus}</p>
                        : <p className="character__patronus">Patronus: {props.patronus}</p>}
                    {!props.wand.wood
                        ? <p className="character__wand">Wand wood: {props.emptyWandWood}</p>
                        : <p className="character__wand">Wand wood: {props.wand.wood}</p>}
                </div>
            </li>
        </Link >
    )
}

export default Characters;