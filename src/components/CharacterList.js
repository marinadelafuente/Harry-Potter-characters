import React from 'react';
import '../stylesheets/CharacterList.scss';

function CharacterList(props) {
    console.log(props)
    return (
        <ul className="characterList">{props.children}</ul>
    )
}

export default CharacterList;