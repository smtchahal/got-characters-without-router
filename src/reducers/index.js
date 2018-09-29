import { combineReducers } from 'redux';
import selectedCharacter from './selectedCharacter';
import characters from './characters';
import connectedRoutes from '../connectedRoutes';

const { reducer: location } = connectedRoutes;

export default combineReducers({ selectedCharacter, characters, location });
