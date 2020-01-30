import React from 'react';
import '../stylesheets/CharacterCard.scss';
import { Link } from 'react-router-dom';
import Slytherin from '../images/Slytherin.png';
import Gryffindor from '../images/Gryffindor.png';
import Hufflepuff from '../images/Hufflepuff.png';
import Ravenclaw from '../images/Ravenclaw.png';


function CharacterCard(props) {

    // const equalId = props.idparam.match.params.id;
    // const character = props.characters[equalId];
    console.log(props.character)
    const { house, alive, image, name } = props.character;

    let characterHouse;
    let cardColor;
    if (house === "Slytherin") {
        characterHouse = <img className="house-shield" src={Slytherin} alt="Slytherin logo" />
        cardColor = "card-character card-character-Slytherin"
    }
    else if (house === "Gryffindor") {
        characterHouse = <img className="house-shield" src={Gryffindor} alt="Gryffindor logo" />
        cardColor = "card-character"
    }
    else if (house === "Ravenclaw") {
        characterHouse = <img className="house-shield" src={Ravenclaw} alt="Ravenclaw logo" />
        cardColor = "card-character card-character-Ravenclaw"
    }
    else if (house === "Hufflepuff") {
        characterHouse = <img className="house-shield" src={Hufflepuff} alt="Hufflepuff logo" />
        cardColor = "card-character card-character-Hufflepuff"
    }
    else {
        characterHouse = <p className="no-house">I don't belong to any house</p>
        cardColor = "card-character card-character-NoHouse"
    };

    return (
        <React.Fragment>
            <div className="card">
                <Link to={'/'}>
                    < button className="button-return"> Return to Characters</button>
                </Link>
                <div className={cardColor}>
                    <img className="card-character__img" src={image} alt={name}></img>
                    <div className="card-character__info">
                        <h1 className="card-character__name">{name.toUpperCase()}</h1>
                        {characterHouse}
                        {alive
                            ? <p className="card-character__live">I am Alive!!</p>
                            : <p className="card-character__live">DEAD <i className={"fas fa-skull-crossbones"}></i></p>
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default CharacterCard;