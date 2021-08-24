import React from 'react';
import GitHubCards from './components/GitHubCards';
import StickyFooter from './components/StickyFooter';
import Button from '@material-ui/core/Button'


function App() {
  return (
    <div>
      <GitHubCards />
      <Button href="#" variant="contained" color="secondary">
        Hello World
      </Button>
      <StickyFooter />
    </div>
  );
}

export default App;
