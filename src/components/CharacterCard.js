import React from 'react';
import '../stylesheets/CharacterCard.scss';
import { Link } from 'react-router-dom';
import Slytherin from '../images/Slytherin.png';
import Gryffindor from '../images/Gryffindor.png';
import Hufflepuff from '../images/Hufflepuff.png';
import Ravenclaw from '../images/Ravenclaw.png';


function CharacterCard(props) {

    const { house, alive, image, name } = props.character;

    let characterHouse;
    let cardColor;
    if (house === "Slytherin") {
        characterHouse = <img className="house-shield" src={Slytherin} alt="Slytherin logo" />
        cardColor = "card-character-Slytherin"
    }
    else if (house === "Gryffindor") {
        characterHouse = <img className="house-shield" src={Gryffindor} alt="Gryffindor logo" />
        cardColor = "card-character-Gryffindor"
    }
    else if (house === "Ravenclaw") {
        characterHouse = <img className="house-shield" src={Ravenclaw} alt="Ravenclaw logo" />
        cardColor = "card-character-Ravenclaw"
    }
    else if (house === "Hufflepuff") {
        characterHouse = <img className="house-shield" src={Hufflepuff} alt="Hufflepuff logo" />
        cardColor = "card-character-Hufflepuff"
    }
    else {
        characterHouse = <p className="no-house">Homeless</p>
        cardColor = "card-character-NoHouse"
    };

    return (
        <React.Fragment>
            <div className="card">
                <Link to={'/'}>
                    < button className="button-return"> Back <span role="img" aria-label="back">⟲</span> </button>
                </Link>
                <div className="card-character">
                    <img className="card-character__img" src={image} alt={name}></img>
                    <div className={cardColor}>
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
            </div>
        </React.Fragment>
    )

}

export default CharacterCard;