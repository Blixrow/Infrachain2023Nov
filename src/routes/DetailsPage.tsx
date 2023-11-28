// DetailsPage.tsx
import React from 'react';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

// Définissez le type de la prop pour DetailsPage
/*interface DetailsPageProps {
  selectedTuple: [string, string, string, string, string];
}

const DetailsPage: React.FC<DetailsPageProps> = ({ selectedTuple }): JSX.Element => {
  return (
    <div>
      <Typography variant="h4">Informations supplémentaires</Typography>
      <Typography variant="body1">Nom: {selectedTuple[0]}</Typography>
      <Typography variant="body1">ID: {selectedTuple[1]}</Typography>
      <Typography variant="body1">Statut: {selectedTuple[2]}</Typography>
      <Typography variant="body1">NFT: {selectedTuple[3]}</Typography>
      <Typography variant="body1">Date: {selectedTuple[4]}</Typography>
    </div>
  );
};

export default DetailsPage;*/
export const DetailsPage = () => {
  const {id} = useParams()
  return (
    <div>
      <Typography variant="h4">Informations supplémentaires</Typography>
      <Typography variant="body1">Nom: {id}</Typography>
      <Typography variant="body1">ID: {id}</Typography>
      <Typography variant="body1">Statut: {id}</Typography>
      <Typography variant="body1">NFT: {id}</Typography>
      <Typography variant="body1">Date: {id}</Typography>
    </div>
  );
};

export default DetailsPage;