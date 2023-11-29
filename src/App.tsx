import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';

import { TopBar } from './components/TopBar'
import { ErrorPage } from './routes/ErrorPage'
import { Pick } from './routes/PickPage'
import { BeaconProvider } from './contexts/Beacon'
import { ContractProvider } from './contexts/Contract';
import { SettingsProvider, Theme, useTheme } from './contexts/Settings';
import { TaquitoProvider } from './contexts/Taquito';

import ListeFonds from './routes/ListeFonds';
import DetailsPage from './routes/DetailsPage';
import Data from './routes/Data';
import AddFund from './routes/AddFund';

import './App.css'

import backgroundImage from './assets/images/background.jpg';
import { Pop } from './routes/populate';
import ValidatedDetailsPage from './routes/ValidatedDetailsPage';


const backgroundStyle = { 
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 1)', // Adjust the alpha value for transparency (not working)
};

const router = createBrowserRouter([
  {
    path: "/main",
    element: <Pick />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/Liste",
    element: <ListeFonds />,
  },
  {
    path: "/Details",
    //element: <DetailsPage selectedTuple={["", "", "", "", ""]} />,
    element: <DetailsPage />,
  },
  {
    path: "/data",
    element: <Data />,
  },
  {
    path: "/pop",
    element: <Pop />,
  },
  {
    path: "/ValidatedDetails",
    element: <ValidatedDetailsPage/>,
  },
  {
    path: "/addFund",
    element: <AddFund />,
  },
]);

function DApp() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme   = useTheme()
  const uiTheme = createTheme({
    palette: {
      mode: theme === Theme.Default && prefersDarkMode ? 'dark' : (theme === Theme.Dark ? 'dark' : 'light'),
    },
  });


  return (
    <ThemeProvider theme={uiTheme}>
      <TaquitoProvider>
        <BeaconProvider>
          <ContractProvider>
                  <Paper elevation={0} style={backgroundStyle}>
                    <div style={{ height: '100vh', overflow: 'auto' }}>
                    <TopBar></TopBar>
                    <RouterProvider router={router} />
                    </div>
                  </Paper>
          </ContractProvider>
        </BeaconProvider>
      </TaquitoProvider>
    </ThemeProvider>
  )
}

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <SettingsProvider>
        <DApp />
      </SettingsProvider>
    </div>
  );
}

export default App;
