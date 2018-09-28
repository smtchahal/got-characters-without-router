import React from 'react';
import PropTypes from 'prop-types';

const App = ({ characters, selectedCharacter, selectCharacter }) => (
  <div className="container text-center mt-4">
    <h1>Game of Thrones characters</h1>
    <p>Select a Game of Thrones character to view their bio.</p>
    <select
      className="form-control form-control-lg"
      onChange={e => {
        selectCharacter(e.target.value || null);
      }}
    >
      <option value="">Select a character...</option>
      {characters.map(character => (
        <option value={character.id} key={character.id}>
          {character.name}
        </option>
      ))}
    </select>
    {selectedCharacter && (
      <React.Fragment>
        <img
          src={selectedCharacter.imagePath}
          className="rounded mx-auto d-block img-thumbnail mt-3"
          alt={selectedCharacter.name}
          style={{ width: 100 }}
        />
        <p className="mt-3">{selectedCharacter.bio}</p>
      </React.Fragment>
    )}
  </div>
);

App.propTypes = {
  characters: PropTypes.array.isRequired,
  selectedCharacter: PropTypes.object,
  selectCharacter: PropTypes.func.isRequired,
};

export default App;
