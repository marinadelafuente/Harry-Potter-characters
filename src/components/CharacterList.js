import React from 'react';
import '../stylesheets/CharacterList.scss';

function CharacterList(props) {
    console.log(props)
    return (
        <React.Fragment>
            <ul className="characterList">{props.children}</ul>
        </React.Fragment>
    )
}

export default CharacterList;