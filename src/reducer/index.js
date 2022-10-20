import {LANGUAGE } from '../actions';

const initialState = {
    language: 'FR'
};

const reducer = (state = initialState, action = {}) => { 
    switch(action.type) { 
        case LANGUAGE: { 
            return { 
                ...state, 
                language: action.language
            };
        }
        default:
            return state; 
    }
};

export default reducer;