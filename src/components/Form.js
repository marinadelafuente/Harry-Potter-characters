import React from 'react';
import '../stylesheets/Form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchCharacter = this.handleSearchCharacter.bind(this);
        this.handleSelectHouse = this.handleSelectHouse.bind(this);
    }

    handleSearchCharacter(ev) {
        this.props.handleSearchCharacter(ev.target.value);
        // this.props.handleSearchCharacter({
        //     id: ev.target.id,
        //     inputValue: ev.target.value
        // });
        this.props.search();
    }

    handleSelectHouse(ev) {
        this.props.handleSelectHouse({
            id: ev.target.id,
            inputValue: ev.target.value
        });
    }

    render() {
        // console.log(this.props.search)
        return (
            <React.Fragment>
                <div className="form">
                    <div>
                        <label
                            htmlFor="search" >
                            Look for your favourite professor
                            </label>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            className="character__search"
                            onChange={this.handleSearchCharacter}
                            placeholder="Characters" />
                    </div>
                    <div>
                        <label
                            htmlFor="select">
                            Choose your favourite house
                            </label>
                        <select
                            name="select"
                            id="select"
                            className="character__select"
                            onChange={this.handleSelectHouse}
                        >
                            <option value="Houses">Houses</option>
                            <option value="Gryffindor">Gryffindor</option>
                            <option value="Slytherin">Slytherin</option>
                            <option value="Hufflepuff">Hufflepuff</option>
                            <option value="Ravenclaw">Ravenclaw</option>
                            <option value="No house">No house</option>
                        </select>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Form;