import { connectRoutes } from 'redux-first-router';
import { SELECT_CHARACTER } from './actionTypes';

const routesMap = {
  [SELECT_CHARACTER]: '/:characterId?',
};

export default connectRoutes(routesMap, {
  basename: process.env.PUBLIC_URL + '/' || '',
});
