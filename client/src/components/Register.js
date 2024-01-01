import React from 'react';
import { Box, Grid, Paper, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import profileImg from './image/register img.jpg';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const ButtonColor = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.purple,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.lightpurple,
      color: 'white',
    },
  }));

  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await fetch('http://localhost:8202/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const result = await res.json();

      if (res.status === 422 || !result) {
        console.log('Not registered successfully');
        alert('Not registered successfully');
      } else {
        console.log('Registered successfully');
        alert('Registered successfully');
        navigate('/home');
        localStorage.setItem('userregisterdata', JSON.stringify(result));
        toast.success('Registration successful');
        setSubmitting(false);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Error during registration');
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <ToastContainer />
      <Box sx={{ background: 'linear-gradient(to top, #fbc2eb 0%, #a18cd1 100%)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper component={Box} elevation={3} sx={{ maxWidth: { xs: '100%', md: '60%' } }}>
          <Grid container>
            <Grid item xs={12} sm={6} md={6}>
              <Box
                component="img"
                sx={{
                  maxHeight: { xs: '100%' },
                  maxWidth: { xs: '100%', md: '100%' },
                  objectFit: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                }}
                alt="Register Img."
                src={profileImg}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} elevation={6} square>
              <div>
                <Typography component="h1" variant="h5" sx={{ textAlign: 'center', margin: '20px 10px' }}>
                  Sign in
                </Typography>
                <form onSubmit={formik.handleSubmit} style={{ margin: '20px 0' }}>
                  <TextField
                    variant="standard"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                  <TextField
                    variant="standard"
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                  />
                  <ButtonColor type="submit" fullWidth variant="contained" style={{ margin: '3px 0 2px' }} disabled={formik.isSubmitting}>
                    Sign In
                  </ButtonColor>
                </form>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default Register;
