import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/action/TodoActions";
import NoteList from "./NoteList";
import { Box, Typography, TextField, Button, Checkbox, Grid, useTheme } from "@mui/material";
import styled from "@emotion/styled";

const AddNoteForm = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote(form));
    setForm({ title: "", text: "" });
  };

  const theme = useTheme()

  const ButtonColor = styled(Button)({
    backgroundColor: theme.palette.primary.purple,
    '&:hover': {
      backgroundColor: theme.palette.primary.lightpurple,
    }
  })
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Box sx={{margin:"30px 0px"}}>
          <Typography variant="h4" align="center" gutterBottom>
            Note Keeper App In Redux
          </Typography>
          <form onSubmit={handleSubmit}>

            <Box>
              <TextField
                label="Title"
                name="title"
                value={form.title}
                onChange={handleChange}
                fullWidth
                required
                variant="standard"
              />
            </Box>
            <Box>
              <TextField
                label="Text"
                name="text"
                value={form.text}
                onChange={handleChange}
                multiline
                fullWidth
                required
                variant="standard"
              />
            </Box>
            <Box className="text-center">
              <ButtonColor


                className="fw-bold px-3 py-2"
                style={{ borderRadius: "7px" }}
                type="submit"
              >
                Add Note
              </ButtonColor>
            </Box>
          </form>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <NoteList />
      </Grid>
    </Grid>
  );
};

export default AddNoteForm;
