import {createStore, combineReducers} from 'redux';

import pinAuthentication from '~/routes/Landing/Reducer';

const reducer = combineReducers({
	pinAuthentication
});

const store = createStore(reducer);

export default store;