export const addNote = (noteData) => ({
    type: "ADD_NOTE",
    payload: noteData,
  });
  
  export const removeNote = (id) => ({
    type: "REMOVE_NOTE",
    payload: { id }, 
  });
  
  export const updateNote = (id, updatedNotes) => ({
    type: "UPDATE_NOTE",
    payload: {
      id,
      updatedNotes: { ...updatedNotes }, // Corrected line
    },
  });