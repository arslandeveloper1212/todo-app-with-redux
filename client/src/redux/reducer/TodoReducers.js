import { v4 as uuidv4 } from 'uuid';

const initialState = {
  notes: [],
};

const TodoReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      const newNote = {
        id: uuidv4(),
        text: action.payload.text,
        title:action.payload.title, 
      };
      return {
        ...state,
        notes: [...state.notes, newNote],
      };

    case 'UPDATE_NOTE':
      return {
        ...state,
        notes: state.notes.map((item) =>
          item.id === action.payload.id
            ? { ...item, ...action.payload.updatedNotes }
            : item
        ),
      };

    case 'REMOVE_NOTE':
      return {
        ...state,
        notes: state.notes.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default TodoReducers;
