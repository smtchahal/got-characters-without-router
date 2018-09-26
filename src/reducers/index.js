import { combineReducers } from 'redux';
import selectedCharacter from './selectedCharacter';
import characters from './characters';

export default combineReducers({ selectedCharacter, characters });
