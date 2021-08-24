import React from 'react';
import GitHubCards from './components/GitHubCards';
import StickyFooter from './components/StickyFooter';
import { ButtonGroup, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete';


function App() {
  return (
    <Container maxWidth="xl">
      <GitHubCards />
      <ButtonGroup 
      variant="contained" 
      color="primary"
      >
        <Button
          startIcon={<SaveIcon />}
          size="large"
          style={{
            fontSize: "30px"
          }}
          href="#"
          >
          Save
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          size="large"
          style={{
            fontSize: "30px"
          }}
          href="#"
          variant="contained"
          color="secondary">
          Delete
        </Button>
      </ButtonGroup>
      <StickyFooter />
    </Container>
  );
}

export default App;
