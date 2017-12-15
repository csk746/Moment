'use strict'

const {
   ADD_IMAGE 
} = require('../../lib/constants').default


export function addImage(path, name, size, mTime) {

  return dispatch => {
    console.log(" add Image")
      dispatch({ type: ADD_IMAGE, path:path, name:name, size:size, mTime:mTime});
  }
}
