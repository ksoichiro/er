export const ADD_MODEL = 'ADD_MODEL';
export const ADD_INDEX = 'ADD_INDEX';
export const SAVE_FILE = 'SAVE_FILE';

export function addModel(name) {
  return {
    type: ADD_MODEL,
    name
  };
}

export function addIndex(name) {
  return {
    type: ADD_INDEX,
    name
  };
}

export function saveFile() {
  return {
    type: SAVE_FILE
  }
}
