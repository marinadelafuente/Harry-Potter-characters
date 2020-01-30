import React from 'react';
import '../stylesheets/App.scss';
import CharacterList from './CharacterList';
import Characters from './Characters';
import CharacterCard from './CharacterCard';
import Footer from './Footer';
import Header from './Header';
import Form from './Form';
import getDataFromApi from '../services/fetch'
import { Route, Switch } from 'react-router-dom';


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
    this.renderCharacterCard = this.renderCharacterCard.bind(this);
  }

  componentDidMount() {
    getDataFromApi()
      .then(data => {
        const characters = data.map((character, index) => {
          return { ...character, id: index }
        })
        this.setState({ characters: characters })
      })
  }

  handleSearchCharacter(searchCharacter) {
    this.setState({ searchCharacter });
  }

  handleSelectHouse(house) {
    this.setState({ house });
  }

  renderCharacterCard(props) {
    console.log(props)
    const equalId = parseInt(props.match.params.id);
    console.log(this.state.characters, equalId);
    const character = this.state.characters.find((character) => {
      console.log(character.id, equalId);
      return character.id === equalId;
    })
    if (!character) {
      return <p className="unfound-character">Nope</p>
    }
    else {
      return <CharacterCard character={character} />
    }
  }

  render() {
    return (
      <div className="App">
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
                    })}
                </CharacterList>
              </React.Fragment>
            } />
            <Route path="/character/:id" render={this.renderCharacterCard} />
          </Switch>
        </main>
        <Footer />
      </div >
    );
  }
}

export default App;
