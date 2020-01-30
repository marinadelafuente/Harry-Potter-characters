import React from 'react';
import '../stylesheets/Form.scss';

function Form(props) {
    console.log(props.house)
    const handleSearchCharacter = (ev) => {
        props.handleSearchCharacter(ev.target.value);
    }

    const handleSelectHouse = (ev) => {
        props.handleSelectHouse(ev.target.value);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label
                        htmlFor="search" className="search-text">
                        Look for your favourite professor
                    </label>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="character__search"
                        value={props.search}
                        onChange={handleSearchCharacter}
                        placeholder="Name of the professor" />
                </div>
                <div>
                    <label htmlFor="select" className="search-text">Choose your favourite house</label>
                    <select
                        name="select"
                        id="select"
                        className="character__select"
                        onChange={handleSelectHouse}
                        value={props.house}>

                        <option value="">Houses</option>
                        <option value="Gryffindor">Gryffindor</option>
                        <option value="Slytherin">Slytherin</option>
                        <option value="Hufflepuff">Hufflepuff</option>
                        <option value="Ravenclaw">Ravenclaw</option>
                        <option value="">No house</option>
                    </select>
                </div>
            </form>
        </React.Fragment >
    );
}

export default Form;