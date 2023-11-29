import React, { ChangeEvent, FormEvent, useState } from 'react';
import Typography from '@mui/material/Typography';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import '../assets/DetailsPage.css';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Grid from '@mui/material/Grid';
import { createBrowserHistory } from 'history';
import Container from '@mui/material/Container';
import { TextField, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import deleteIcon from '../assets/icons/bin.svg'
import viewIcon from '../assets/icons/pen.png'
import editIcon from '../assets/icons/view.png'
import addIcon from '../assets/icons/plus.svg'
import Modal from 'react-modal';
import ColorBox from '../components/ColorBox';




const items: [string, string, string, string, string][] = [
  ["Item 1a", "1", "Statut 1", "NFT 1", "2023-11-27"],
  ["Item 2a", "2", "Statut 2", "NFT 2", "2023-11-28"],
  ["Item 3a", "3", "Statut 3", "NFT 3", "2023-11-29"],
  ["Item 4a", "4", "Statut 4", "NFT 4", "2023-11-30"],
  ["Item 5a", "5", "Statut 5", "NFT 5", "2023-12-01"],
];

const history = createBrowserHistory();


export const DetailsPage = () => {



  const [selectedTuple, setSelectedTuple] = useState<[string, string, string, string, string] | null>(null);
  const navigate = useNavigate();
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

  const { id } = useParams();
  const location = useLocation();
  const tuple = location.state?.tuple || [];


  const statut: number = 0;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  function handleFileChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.');
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    alert("initiating smart contract");
    alert("calculating risk assessment");
    throw new Error('Function not implemented.');
  }

  return (

    <div className='total-boxe_sf'>

      <div className='inline-div'>


        <div className='title_sf_left'>

          <Typography variant="h1"><span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>{tuple[0]}</span></Typography>

        </div>

        <div className='sf_right'>
          <div className='color-box'>
            <ColorBox statut={statut} /> {/* Ajoutez la boîte de couleur ici */}
          </div>

          <div className='popup-Button_div'>
            <button onClick={openModal} className='popup-Button'>Risk Evaluation</button>

            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              overlayClassName="Overlay"
              className="Modal"
            >
              <div className="Modal-header">
                <h2>Risk assessment</h2>
                <button className="Modal-close"
                  onClick={closeModal}>
                  X
                </button>
              </div>
              <div className="Modal-body">
                <p>Before initiating the smart contract for risk calculation and NFT creation, you need to upload evidence files</p>
                <form onSubmit={handleSubmit}>
                  <h2>Upload Document:</h2>
                  <input type="file" onChange={handleFileChange} />
                  <button type="submit">Submit</button>
                </form>
              </div>
              <div className="Modal-footer">
                <button onClick={closeModal}>Cancel</button>
              </div>
            </Modal>
          </div>

        </div>
      </div>


      <div className='id_table_sf'>
        <div className="identite_fond">
          <div className="identite_fond_texte">
            <Typography variant="h1"><span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>{tuple[0]}</span></Typography>
            <Typography variant="h4"><span style={{ fontWeight: 'bold' }}>Nom : </span>{tuple[0]}</Typography>
            <Typography variant="h4"><span style={{ fontWeight: 'bold' }}>ID : </span>{tuple[1]}</Typography>
            <Typography variant="h4"><span style={{ fontWeight: 'bold' }}>Statut : </span>{tuple[2]}</Typography>
            <Typography variant="h4"><span style={{ fontWeight: 'bold' }}>NFT : </span>{tuple[3]}</Typography>
            <Typography variant="h4"><span style={{ fontWeight: 'bold' }}>Date : </span>{tuple[4]}</Typography>
          </div>
        </div>

        <div className='table_sf'>
          <Grid container direction="column" justifyContent="center">


            {/* Titre de la liste */}
            <Grid item xs={12} sx={{ mt: '20px' }}>
              <Typography variant="h3" sx={{ mt: '40px', mb: '10px', justifyContent: 'center' }}>
                Liste des sous-fonds
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

                  {/* Bouton upload via excel */}
                  <Button
                    component={Link}
                    to="/addFund"
                    variant="outlined"
                    sx={{ ml: '18px', mt: '4px', color: 'black', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}
                  >
                    <img src={addIcon} alt="Add" style={{ width: '24px', height: '24px' }} />   . Upload via Excel
                  </Button>



                  <Button
                    component={Link}
                    to="/addFund"
                    variant="outlined"
                    sx={{ ml: '18px', mt: '4px', color: 'black', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}
                  >
                    <img src={addIcon} alt="Add" style={{ width: '24px', height: '24px' }} />   . Add a fund
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
                      <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
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
        </div>
        {/* Conditionnellement rendre DetailsPage */}
        {/*selectedTuple && <DetailsPage {...{ selectedTuple }} />*/}
      </div>
    </div>
  );
};

export default DetailsPage;
function setIsModalOpen(arg0: boolean) {
  throw new Error('Function not implemented.');
}

