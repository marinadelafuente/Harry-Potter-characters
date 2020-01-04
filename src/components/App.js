import React from 'react';
import '../stylesheets/App.scss';
import data from '../services/data.json'
import CharacterList from './CharacterList';
import Characters from './Characters';

console.log(data)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: data
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Professors at Hogwarts</h1>
        <CharacterList>
          {this.state.characters.map((characters, id) => {
            return <Characters
              key={id}
              name={characters.name}
              gender={characters.gender}
              patronus={characters.patronus}
              wand={characters.wand}
              image={characters.image}
            />
          })}
        </CharacterList>
      </div>
    );
  }
}

export default App;
