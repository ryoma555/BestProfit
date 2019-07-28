import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import BestProfitSummary from './components/bestProfitSummary';

const App = () => {
  return (
    <Box textAlign="center">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Welcome</Typography>
          </Toolbar>
        </AppBar>
        <BestProfitSummary />
    </Box>
  );
}

export default App;
