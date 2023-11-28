// ListeFonds.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createBrowserHistory } from 'history';
//import DetailsPage from './DetailsPage';
import { useNavigate } from 'react-router-dom';

const items: [string, string, string, string, string][] = [
  ["Item 1a", "1", "Statut 1", "NFT 1", "2023-11-27"],
  ["Item 2a", "2", "Statut 2", "NFT 2", "2023-11-28"],
  ["Item 3a", "3", "Statut 3", "NFT 3", "2023-11-29"],
  ["Item 4a", "4", "Statut 4", "NFT 4", "2023-11-30"],
  ["Item 5a", "5", "Statut 5", "NFT 5", "2023-12-01"],
];

const history = createBrowserHistory();

const ListeFonds: React.FC = (): JSX.Element => {
  const [selectedTuple, setSelectedTuple] = useState<[string, string, string, string, string] | null>(null);
  const navigate=useNavigate();
  const handleTableRowClick = (tuple: [string, string, string, string, string], index: number) => {
    setSelectedTuple(tuple);
    //history.push(`/details/${index}`);
    navigate("../details/"+1)
  };

  return (
    <Container>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ mt: '140px', mb: '60px', fontFamily: 'Dancing Script', justifyContent: 'center' }}>
            Liste des fonds
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px' }}>Nom</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Statut</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>NFT</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {items.map((tuple, index) => (
                <tr
                  key={index}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleTableRowClick(tuple, index)}
                >
                  {tuple.map((item, i) => (
                    <td key={i} style={{ border: '1px solid black', padding: '8px' }}>
                      {item}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: '12px', mb: '18px' }}>
          <Grid item>
            <Typography variant="h5" sx={{ fontFamily: 'Dancing Script' }}>
              Ajouter un fond
            </Typography>
          </Grid>
          <Grid item>
            <Button component={Link} to="/addFund" sx={{ ml: '18px', mt: '4px' }}>
              Cliquez ici
            </Button>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: '12px', mb: '18px' }}>
          <Grid item>
            <Typography variant="h5" sx={{ fontFamily: 'Dancing Script' }}>
              Voir les données publiques :
            </Typography>
          </Grid>
          <Grid item>
            <Button component={Link} to="/data" sx={{ ml: '18px', mt: '4px' }}>
              Cliquez ici
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* Conditionnellement rendre DetailsPage */}
      {/*selectedTuple && <DetailsPage {...{ selectedTuple }} />*/}
    </Container>
  );
};

export default ListeFonds;
