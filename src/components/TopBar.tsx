import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { GitHubLink } from './GitHubLink';
import { HelpLink } from './HelpLink';
import { LoginButton } from './LoginButton';
import { TezosIcon } from './TezosIcon';
import { ThemeSwitch } from './ThemeSwitch';

import Typography from '@mui/material/Typography';

import UserDisplayName from './UserDisplayName';
export const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <TezosIcon />
          <Typography><span style={{ fontSize: '40px', fontWeight: 'bold'}}>CompliChain</span></Typography>
          <HelpLink />
          <LoginButton />
          <UserDisplayName />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
