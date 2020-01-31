import React from 'react';
import '../stylesheets/CharacterList.scss';

function CharacterList(props) {
    return (
        <React.Fragment>
            <ul className="characterList">{props.children}</ul>
        </React.Fragment>
    )
}

export default CharacterList;