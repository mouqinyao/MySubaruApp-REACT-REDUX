import {ADD_PIN, DELETE_PIN, CLEAR_PIN} from './actionTypes.js';

export const addPin = (pins) => ({
	type: ADD_PIN,
	pins: pins
});

export const deletePin = (pins) => ({
	type: DELETE_PIN,
	pins: pins
});

export const clearPin = (pins) => ({
	type: CLEAR_PIN,
	pins: pins
});