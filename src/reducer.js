import { SELECT_CHARACTER } from './actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_CHARACTER: {
      return { ...state, selectedCharacter: action.payload.characterId };
    }

    default: {
      return state;
    }
  }
};
