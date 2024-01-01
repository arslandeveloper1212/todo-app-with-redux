// Note.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateNote, removeNote } from '../redux/action/TodoActions';
import {
  TableCell,
  TableRow,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
} from '@mui/material';


const Note = ({ id, title, text }) => {

  const theme = useTheme();
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedText, setEditedText] = useState(text);
  const [showModal, setShowModal] = useState(false);

  const MAX_CHARACTERS_TRUNCATE = 10;

  const handleRemove = () => {
    dispatch(removeNote(id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    const updatedNote = {
      id,
      title: editedTitle,
      text: editedText,
    };

    dispatch(updateNote(id, updatedNote));
    setIsEditing(false);
    setShowModal(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setIsEditing(false);
  };

  const truncateText = (originalText, maxLength) => {
    return originalText.length > maxLength
      ? originalText.substring(0, maxLength) + '...'
      : originalText;
  };

  return (
    <>
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell>{truncateText(title, MAX_CHARACTERS_TRUNCATE)}</TableCell>
        <TableCell>{truncateText(text, MAX_CHARACTERS_TRUNCATE)}</TableCell>
        <TableCell>
          <Button onClick={handleModalOpen} variant="contained" color="success">
            View
          </Button>
          <Button sx={{
            [theme.breakpoints.up('sm')]: {
             flexdirection:"row",
             marginLeft: "10px"
            }
          }} onClick={() => handleRemove()} variant="contained" color="error">
            Delete
          </Button>
        </TableCell>
      </TableRow>
      <Dialog open={showModal} onClose={handleModalClose} fullWidth maxWidth="sm">
        <DialogTitle>{`Note ID: ${id}`}</DialogTitle>
        <DialogContent>
          {isEditing ? (
            <div>
              <TextField
                label="Title"
                type="text"
                fullWidth
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                style={{ marginBottom: '16px' }}
              />
              <TextField
                label="Text"
                type="text"
                fullWidth
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <h3>Title:</h3>
              <p>{truncateText(title, MAX_CHARACTERS_TRUNCATE)}</p>
              <h3>Text:</h3>
              <p>{truncateText(text, MAX_CHARACTERS_TRUNCATE)}</p>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          {isEditing ? (
            <div style={{ display: "flex" }}>
              <Button onClick={handleUpdate} variant="contained" color="success">
                Update
              </Button>
              <Button sx={{
            [theme.breakpoints.up('sm')]: {
            flexdirection:"row",
             marginLeft: "10px"
            }
          }} onClick={handleCancelEdit} variant="contained" color="secondary">
                Cancel
              </Button>
            </div>
          ) : (
            <Button onClick={handleEdit} variant="contained" color="success">
              Edit
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Note;
