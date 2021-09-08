import React from 'react';
import GitHubCards from './components/GitHubCards';
import StickyFooter from './components/StickyFooter';
import { ButtonGroup, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete';
import { Checkbox } from '@material-ui/core';


function CheckboxExample() { 
  const [checked, setChecked] = React.useState(true)
  return (
    <div>
      <Checkbox 
        checked={checked}
        onChange={(e)=> setChecked(e.target.checked)}
        color="primary"
      />
    </div>
  )
}

function App() {
  return (
    <Container maxWidth="xl">
      <GitHubCards />
      <CheckboxExample />
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
