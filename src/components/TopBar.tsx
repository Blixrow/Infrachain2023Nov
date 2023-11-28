import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { GitHubLink } from './GitHubLink';
import { HelpLink } from './HelpLink';
import { LoginButton } from './LoginButton';
import { TezosIcon } from './TezosIcon';
import { ThemeSwitch } from './ThemeSwitch';
import { ExportImg } from './ExportImg';

import UserDisplayName from './UserDisplayName';
export const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <TezosIcon />
          <ExportImg logoUrl="C:\Users\bapti\Pictures\Screenshots\Neom.png" altText="Oups" />
          <HelpLink />
          <GitHubLink />
          <ThemeSwitch />
          <LoginButton />
          <UserDisplayName />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
