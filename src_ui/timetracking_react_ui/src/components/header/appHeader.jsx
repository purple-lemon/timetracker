import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';

function AppHeader(){
    return <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
      <Button href="/" variant="contained" sx={{ marginRight: 2 }}>
        Home
      </Button>
      <Button href="/timesheet" variant="contained">
        Timesheet
      </Button>
      </Toolbar>
    </AppBar>
  </Box>
}
export default AppHeader;