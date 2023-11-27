import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const Pick = () => {
  return <Container>
      <Grid2 container direction="row" justifyContent="center" alignItems="center" sx={{ mt : '140px', mb: '18px' }}>
        <Grid2 container direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h5" sx={{ fontFamily : 'Dancing Script' }}>Test 1 :</Typography>
          <Button component={Link} to="add" sx={{ mt : '7px'}}>Click Here</Button>
        </Grid2>
        <Grid2 container direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h5" sx={{ fontFamily : 'Dancing Script' }}>Test 2 :</Typography>
          <Button component={Link} to="add" sx={{ mt : '7px'}}>Click Here</Button>
        </Grid2>
      </Grid2>
  </Container>
}