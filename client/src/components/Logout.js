import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';



// Define a styled component to apply Bootstrap-like utility classes
const StyledContainer = styled(Container)(
  ({ theme }) => ({
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  })
);

const StyledTypography = styled(Typography)(
  ({ theme }) => ({
    marginBottom: theme.spacing(4),
  })
);

const StyledButton = styled(Button)(
  ({ theme }) => ({
    marginTop: theme.spacing(2),
  })
);

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.clear();
      navigate('/signin');
    
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <div>
      
      <StyledContainer>
        <StyledTypography variant="h4" gutterBottom>
          Logging Out...
        </StyledTypography>
        {/* You can add a loading spinner or message here if desired */}
        <StyledButton variant="contained" color="primary" onClick={() => navigate('/register')} fullWidth>
          Continue to Login
        </StyledButton>
      </StyledContainer>
      <Navigate to="/login" replace />;
    </div>
  );
};

export default Logout;
