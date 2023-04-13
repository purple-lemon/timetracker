
import './App.css';
import { router } from './routes/routs'
import {
  RouterProvider,
} from "react-router-dom";
import AppHeader from './components/header/appHeader';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background:{
      default: "#282c34"
    }
  },
});

function App() {
  return <div>
      <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <AppHeader />
          <Box>
            <RouterProvider router={router} />
          </Box>
      </ThemeProvider>
    </div>
}

export default App;
