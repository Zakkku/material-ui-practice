import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function ButtonContainer({ children, tomatoes, setTomatoes }) {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box 
          sx={{
            bgcolor: 'tomato',
            minHeight: '50px',
            display: 'flex',
            flexDirection: 'row', // Make the container a column layout
            justifyContent: 'center', // Vertically center the content
            alignItems: 'center', // Horizontally center the content
          }}
           >
            {children}
            </Box>
          
        </Container>
      </React.Fragment>
    );
  }