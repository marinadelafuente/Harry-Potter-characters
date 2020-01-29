import React from 'react';
import '../stylesheets/App.scss';
import data from '../services/data.json'
import CharacterList from './CharacterList';
import Characters from './Characters';
import CharacterCard from './CharacterCard';
import Footer from './Footer';
import Header from './Header';
import Form from './Form';
import getDataFromApi from '../services/fetch'
import { Route, Switch } from 'react-router-dom';

// console.log(data)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      searchCharacter: "",
      house: ""
    }
    this.handleSearchCharacter = this.handleSearchCharacter.bind(this);
    this.handleSelectHouse = this.handleSelectHouse.bind(this);

    // this.renderCharacters = this.renderCharacters.bind(this);
  }

  componentDidMount() {
    getDataFromApi()
      .then(data => {
        const characters = data.map((character, index) => {
          return { ...character, id: index }
        })
        this.setState({ characters })
      })
  }

  handleSearchCharacter(searchCharacter) {
    this.setState({ searchCharacter });
  }

  handleSelectHouse(house) {
    this.setState({ house });
  }

  render() {
    console.log(this.state.characters)
    // console.log(this.state.searchCharacter)
    // console.log(this.state.house);
    return (
      <div>
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/" render={() =>
              <React.Fragment>
                <Form
                  handleSearchCharacter={this.handleSearchCharacter}
                  handleSelectHouse={this.handleSelectHouse}
                  searchCharacter={this.state.searchCharacter}
                  house={this.state.house}
                />
                <p className="character-text">The character I am searching for is: {this.state.searchCharacter}</p>
                <h1 className="title">Professors at Hogwarts</h1>
                <CharacterList>
                  {this.state.characters
                    .filter((character) =>
                      this.state.house === ""
                        ? (character)
                        : (character.house.includes(this.state.house))
                    )
                    .filter(character => character.name.toUpperCase().includes(this.state.searchCharacter.toUpperCase()))
                    .map((characters, id) => {
                      return <Characters
                        key={id}
                        image={characters.image}
                        name={characters.name}
                        gender={characters.gender}
                        patronus={characters.patronus}
                        emptyPatronus="no patronus"
                        emptyWandWood="no clue"
                        alive={characters.alive}
                        wand={characters.wand}
                        house={characters.house}
                        id={characters.id}
                      />
                    })}}
                </CharacterList>
              </React.Fragment>
            } />
            <Route path="/character/:id" render={routerProps =>
              <CharacterCard idparam={routerProps} data={data} />
            } />
          </Switch>
        </main>
        <Footer />
      </div >
    );
  }
}

export default App;
