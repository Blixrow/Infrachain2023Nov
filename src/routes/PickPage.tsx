import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
//import Grid2 from '@mui/material/Grid2';
import Grid2 from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
//import '../assets/PickPage.css'

export const Pick = () => {
  return <Container>
    <Grid2 container direction="row" justifyContent="center" alignItems="center">
      <Grid2>
        <Typography variant="h2" sx={{ mt: '140px', mb : '60px', fontFamily: 'Dancing Script', justifyContent : 'center' }}>
          Welcome !
        </Typography>
      </Grid2>
      <Grid2 item xs={12}>
        <Grid2 container justifyContent="center" alignItems="center" spacing={4}>

        </Grid2>
      </Grid2>
      <Grid2 container direction="row" justifyContent="center" alignItems="center" sx={{ mt : '12px', mb: '18px' }}>
        <Grid2>
          <Typography variant="h5" sx={{ fontFamily : 'Dancing Script' }}></Typography>
        </Grid2>
        <Grid2>
          <Button className='page1-button' component={Link} to="../liste" sx={{ ml: '18px', mt : '4px', color: 'inherit', textDecoration: 'none' , padding: '1000px'}}></Button>
        </Grid2>
      </Grid2>
    </Grid2>
  </Container>
}