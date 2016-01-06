export const ADD_MODEL = 'ADD_MODEL';
export const ADD_INDEX = 'ADD_INDEX';

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
