import React from 'react';
import '../stylesheets/App.scss';
import data from '../services/data.json'
import CharacterList from './CharacterList';
import Characters from './Characters';
import Footer from './Footer';
import Header from './Header';
import Form from './Form';


console.log(data)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: data,
      // house: "Houses"
    }
    this.handleSearchCharacter = this.handleSearchCharacter.bind(this);
    this.handleSelectHouse = this.handleSelectHouse.bind(this);
  }

  handleSearchCharacter(data) {
    console.log(data);
  }

  handleSelectHouse(house) {
    console.log(house);
    // this.setState({ [house]: event.target.value });
  }

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <Header />
        <main className="main">
          <Form
            handleSearchCharacter={this.handleSearchCharacter}
            handleSelectHouse={this.handleSelectHouse} />
          <h1 className="title">Professors at Hogwarts</h1>
          <div>
            <CharacterList>
              {this.state.characters.map((characters, id) => {
                return <Characters
                  key={id}
                  image={characters.image}
                  name={characters.name}
                  gender={characters.gender}
                  patronus={characters.patronus}
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
