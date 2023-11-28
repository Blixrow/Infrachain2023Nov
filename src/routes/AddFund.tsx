// AddFund.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const AddFund: React.FC = () => {
  const [newFund, setNewFund] = useState<[string, string, string, string, string]>(["", "", "", "", ""]);
  const navigate = useNavigate();

  const handleInputChange = (index: number, value: string) => {
    setNewFund((prev: [string, string, string, string, string]) => {
      const updatedFund = [...prev];
      updatedFund[index] = value;
      return updatedFund as [string, string, string, string, string];
    });
  };

  const handleAddFund = () => {
    // Ajouter la logique pour ajouter le nouveau fond à la liste
    // Pour l'instant, ajoutons simplement une alerte pour montrer les données saisies
    alert(`Nouveau fond ajouté : ${newFund.join(", ")}`);
    
    // Vous pouvez ajouter ici la logique pour mettre à jour la liste d'items
    // items.push(newFund);

    // Naviguer vers la liste après l'ajout
    navigate('/Liste');
  };

  return (
    <Container style={{  padding: '0px 0px 0px 0px', backgroundColor: 'rgba(213, 213, 213, 0.9)' }}> //margin: '0px 0px 0px 0px',
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ mt: '140px', mb: '60px', fontFamily: 'Dancing Script', justifyContent: 'center' }}>
            Ajouter un fond
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form>
            <Grid container spacing={2} alignItems="left" direction='column'>
              <Grid item>
                <label>Nom:</label>
                <input type="text" value={newFund[0]} onChange={(e) => handleInputChange(0, e.target.value)} />
              </Grid>
              <Grid item>
                <label>ID:</label>
                <input type="text" value={newFund[1]} onChange={(e) => handleInputChange(1, e.target.value)} />
              </Grid>
              <Grid item>
                <label>Statut:</label>
                <input onChange={(e) => handleInputChange(2, e.target.value)} />
              </Grid>
              <Grid item>
                <label>NFT:</label>
                <input onChange={(e) => handleInputChange(3, e.target.value)} />
              </Grid>
              <Grid item>
                <label>Date:</label>
                <input type="text" value={newFund[4]} onChange={(e) => handleInputChange(4, e.target.value)} />
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={handleAddFund}>
                  Ajouter
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12}>
          <Button component={Link} to="/Liste" sx={{ mt: '18px' }}>
            Retour à la liste
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddFund;
