import React from 'react';

function Characters(props) {
    console.log(props)
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h3>Gender: {props.gender}</h3>
            {!props.patronus
                ? <p>Patronus: He doesn't have a patronus</p>
                : <p>Patronus: {props.patronus}</p>}
            {!props.wand.wood
                ? <span></span>
                : <p>Wand wood: {props.wand.wood}</p>}
            <img src={props.image} alt={props.name} className="img-characters"></img>





        </div>

    )
}

export default Characters;