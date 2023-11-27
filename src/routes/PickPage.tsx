import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
//import Grid2 from '@mui/material/Grid2';
import Grid2 from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const Pick = () => {
  return <Container>
    <Grid2 container direction="row" justifyContent="center" alignItems="center">
      <Grid2 container direction="row" justifyContent="center" alignItems="center" sx={{ mt : '12px', mb: '18px' }}>
        <Grid2>
          <Button component={Link} to="add" sx={{ ml: '18px', mt : '4px' }}>Click Here</Button>
        </Grid2>
      </Grid2>
    </Grid2>
  </Container>
}