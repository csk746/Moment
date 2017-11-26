
'use strict'

import InitialState from './imageInitState'

const {
   ADD_IMAGE
} = require('../../lib/constants').default

const initialState = new InitialState()


export default function photoReducer(state = initialState, action) {
    if (!(state instanceof InitialState)) return initialState.merge(state)
  
    switch (action.type) {
      case ADD_IMAGE: {
          console.log ( " name : " +action.name)
      }
    }
    return state;
  
  }