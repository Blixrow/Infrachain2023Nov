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
import '../assets/ListeFonds.css'
import { TextField, IconButton } from '@mui/material';
import deleteIcon from '../assets/icons/bin.svg'
import viewIcon from '../assets/icons/pen.png'
import editIcon from '../assets/icons/view.png'
import addIcon from '../assets/icons/plus.svg'

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
    navigate(`../details`, { state: { tuple } });
  };

  function handleDeleteAction(index: number) {
    throw new Error('Function not implemented.');
  }

  function handleViewAction(index: number): void {
    throw new Error('Function not implemented.');
  }

  function handleEditAction(index: number): void {
    throw new Error('Function not implemented.');
  }

  return (
    <Container>
      <div className="status-boxes">
        <div className="box green-box">Validated</div>
        <div className="box orange-box">Reported</div>
        <div className="box red-box">To Be Reported</div>
      </div>

      <Grid container direction="column" justifyContent="center">
        

        {/* Titre de la liste */}
        <Grid item xs={12} sx={{mt:'20px'}}>
          <Typography variant="h2" sx={{ mt: '40px', mb: '10px', justifyContent: 'center' }}>
            Liste des fonds
          </Typography>
        </Grid>

        <div className='search-add'>
  {/* Barre de recherche et bouton dans le même conteneur */}
  <Grid container spacing={2} alignItems="center">
    {/* Barre de recherche */}
    <Grid item xs={6}>
      <TextField label="Recherche" variant="outlined" fullWidth />
    </Grid>

    {/* Bouton Ajouter un fond */}
    <Grid item xs={6} sx={{ textAlign: 'right' }}>
      <Button
        component={Link}
        to="/addFund"
        variant="outlined"
        sx={{ ml: '18px', mt: '4px', color: 'black', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}
      >
        <img src={addIcon} alt="Add" style={{ width: '24px', height: '24px' }} />   Add a fund
      </Button>
</Grid>
  </Grid>
</div>
        {/* Tableau */}
        <Grid item xs={12}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px' }}>Nom</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Statut</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>NFT</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Date</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Actions</th>
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
                  <td style={{ border: '1px solid black', padding: '8px', textAlign:'center'}}>
                    {/* Actions */}
                    <IconButton onClick={() => handleDeleteAction(index)}>
                      <img src={deleteIcon} alt="Delete" style={{ width: '24px', height: '24px' }} />
                    </IconButton>
                    <IconButton onClick={() => handleViewAction(index)}>
                      <img src={viewIcon} alt="View" style={{ width: '24px', height: '24px' }} /> 
                    </IconButton>
                    <IconButton onClick={() => handleEditAction(index)}>
                      <img src={editIcon} alt="Delete" style={{ width: '24px', height: '24px' }} />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Grid>

        

        {/* Bouton Voir les données publiques */}
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
