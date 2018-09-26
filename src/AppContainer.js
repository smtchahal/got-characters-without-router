import { connect } from 'react-redux';
import App from './App';
import { SELECT_CHARACTER } from './actionTypes';

const mapStateToProps = state => ({
  characters: state.characters.allIds.map(id => state.characters.byId[id]),
  selectedCharacter: state.selectedCharacter
    ? state.characters.byId[state.selectedCharacter]
    : null,
});

const mapDispatchToProps = dispatch => ({
  selectCharacter: characterId =>
    dispatch({
      type: SELECT_CHARACTER,
      payload: { characterId },
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
