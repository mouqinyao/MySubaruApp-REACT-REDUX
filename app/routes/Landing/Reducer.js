import * as ActionTypes from './ActionTypes.js';

const pinAuthentication =  (state=[], action) => {
	console.log(state)
	console.log(action.type)
	switch(action.type) {
		case ActionTypes.ADD_PIN: 
			return state + 1;
		case ActionTypes.DELETE_PIN:
			return state - 1;
		case ActionTypes.CLEAR_PIN: 
			return state = 0;
		default: 
			return state;
	}
}

export default pinAuthentication;