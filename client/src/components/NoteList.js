// NoteList.js
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from '@mui/material';
import Note from './Note';


const NoteList = () => {
  const notes = useSelector((state) => state.mynotes.notes);

  return (
    <Box sx={{margin:"30px 0px"}}>
        
      <Typography variant="h4" align="center" gutterBottom>
        Note List
      </Typography>
      <Box>
        {notes.length === 0 ? (
          <Typography component="h1" variant="body1">
            Data is not available
          </Typography>
        ) : (
          <TableContainer component={Paper}>
            <Table className="table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Text</TableCell>
                  <TableCell>Button</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {notes.map((note) => (
                  <Note key={note.id} title={note.title} text={note.text} id={note.id} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Box>
  );
};

export default NoteList;
