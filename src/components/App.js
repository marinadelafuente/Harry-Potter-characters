import React from 'react';
import '../stylesheets/App.scss';
import data from '../services/data.json'
import CharacterList from './CharacterList';
import Characters from './Characters';
import Footer from './Footer';
import Header from './Header';
import Form from './Form';
import getDataFromApi from '../services/fetch'


// console.log(data)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // characters: data,
      characters: [],
      searchCharacter: ""
      // house: "Houses"
    }
    this.handleSearchCharacter = this.handleSearchCharacter.bind(this);
    this.handleSelectHouse = this.handleSelectHouse.bind(this);
    this.search = this.search.bind(this);
  }

  handleSearchCharacter(searchCharacter) {
    console.log(searchCharacter);
    this.setState({
      searchCharacter: searchCharacter
    });
  }

  // search() {
  //   getDataFromApi()
  //     .then(data => {
  //       data.map((character) => {
  //         return { ...character }
  //       })
  //       this.setState({ characters: data })
  //     })
  // }

  search() {
    // console.log("Buscando...", this.state.searchCharacter)
    getDataFromApi(this.state.searchCharacter)
      .then(data => {
        // console.log(data)
        this.setState({ characters: data })
      });
  }

  handleSelectHouse(house) {
    console.log(house);
    const houses = this.state.characters.map(character => character.house)
    console.log(houses);
    // this.setState({ [house]: event.target.value });
  }

  render() {
    // console.log(this.state)
    return (
      <React.Fragment>
        <Header />
        <main className="main">
          <Form
            handleSearchCharacter={this.handleSearchCharacter}
            search={this.search}
            handleSelectHouse={this.handleSelectHouse} />
          <p className="character-text">The character I am searching for is: {this.state.searchCharacter}</p>
          <h1 className="title">Professors at Hogwarts</h1>
          <div>
            <CharacterList>
              {this.state.characters.map((characters, index) => {
                return <Characters
                  key={index}
                  image={characters.image}
                  name={characters.name}
                  gender={characters.gender}
                  patronus={characters.patronus}
                  emptyPatronus="no patronus"
                  emptyWandWood="no clue"
                  wand={characters.wand}
                  house={characters.house}
                />
              })}
            </CharacterList>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
