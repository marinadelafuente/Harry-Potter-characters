import React from 'react';

function CharacterList(props) {
    console.log(props)
    return (
        <div>{props.children}</div>
    )
}

export default CharacterList;