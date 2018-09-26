import { SELECT_CHARACTER } from '../actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case SELECT_CHARACTER: {
      return action.payload.characterId || state;
    }

    default: {
      return state;
    }
  }
};
