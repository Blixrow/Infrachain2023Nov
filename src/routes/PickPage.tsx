import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
//import Grid2 from '@mui/material/Grid2';
import Grid2 from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const Pick = () => {
  return <Container>
    <Grid2 container direction="row" justifyContent="center" alignItems="center">
      <Grid2>
        <Typography variant="h2" sx={{ mt: '140px', mb : '60px', fontFamily: 'Dancing Script', justifyContent : 'center' }}>
          This is a test page !
        </Typography>
      </Grid2>
      <Grid2 item xs={12}>
        <Grid2 container justifyContent="center" alignItems="center" spacing={4}>

        </Grid2>
      </Grid2>
      <Grid2 container direction="row" justifyContent="center" alignItems="center" sx={{ mt : '12px', mb: '18px' }}>
        <Grid2>
          <Typography variant="h5" sx={{ fontFamily : 'Dancing Script' }}>Go to the next page :</Typography>
        </Grid2>
        <Grid2>
          <Button component={Link} to="add" sx={{ ml: '18px', mt : '4px' }}>Click Here</Button>
        </Grid2>
      </Grid2>
    </Grid2>
  </Container>
}