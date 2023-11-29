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
import { auto, right } from '@popperjs/core';
import { Address, Nat } from '@completium/archetype-ts-types';
import { funds_key, sub_funds_key } from '../bindings/main';
import { useWalletAddress } from '../contexts/Beacon';
import { useContract } from '../contexts/Contract';


const history = createBrowserHistory();


export const DetailsPage = () => {
  const [loading, setLoading] = React.useState(false)
  const [fundsID, setfundsID] = React.useState("")
  const [funds, setfunds] = React.useState("")
  const [status, setstatus] = React.useState("")
  const [reportsID, setreportsID] = React.useState("")
  const [subfundsID, setsubfundsID] = React.useState("")
  const [subfunds, setsubfunds] = React.useState("")
  const contract = useContract() 
  const wallet_address = useWalletAddress()
  async function getSubFundIDs(fundId : string) {
    if (wallet_address) {
      const subFunds = await contract.get_funds_value(new funds_key(new Nat(parseInt(fundId)),new Address(wallet_address)))
      if (subFunds) {
        setsubfundsID(subFunds.f_subs.toString())
      }
    }
  }
  async function getSubFunds(fundsId : string) {
    if (wallet_address) {
      const [subfundsids] = await Promise.all([getSubFundIDs(fundsId)]);
      const ids = subfundsID.split(",")
      var subfunds : String[] = []
      await Promise.all(ids.map(async value => {
        const subfund = await contract.get_sub_funds_value(new sub_funds_key(new Nat(parseInt(value)),new Nat(parseInt(fundsId)),new Address(wallet_address)))
        if (subfund) {
          var country_risk = await contract.get_country_map_value(subfund.sf_country)
          var currency_risk = await contract.get_currency_map_value(subfund.sf_currency)
          var sector_risk = await contract.get_sector_map_value(subfund.sf_sector)
          if (!country_risk) { country_risk = false}
          if (!currency_risk) { currency_risk = false}
          if (!sector_risk) { sector_risk = false}
          subfunds.push(value+"/"+subfund.sf_name+"/"+subfund.sf_country+"/"+country_risk+"/"+subfund.sf_currency+"/"+currency_risk+"/"+subfund.sf_sector+"/"+sector_risk+"/"+subfund.sf_nav)
        }
      }));
      setsubfunds(subfunds.toString())
    }
  }

  const [selectedTuple, setSelectedTuple] = useState<[string, string, string, string, string] | null>(null);
  const navigate = useNavigate();

  var items: [string, string, string, string, string, string, string, string, string][] = [];
  function updateitems() {
    Promise.all([getSubFunds("1")])
    if (subfunds) {
      subfunds.split(",").map( (value, index, array) => {
        var splitted = value.split("/")
        console.log("TEST 1", splitted)
        items[index] = [splitted[1], splitted[0], splitted[2], splitted[3],splitted[4],splitted[5],splitted[6],splitted[7],splitted[8]]
        console.log("TEST 2: Done")
      })
    }
  }
  
  Promise.all([updateitems()])



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
    console.log("test");
    event.preventDefault();
    console.log("test");
    throw new Error('Function not implemented.');
  }

  return (

    <div className='total-boxe_sf'>

      <div className='inline-div'>


        <div className='title_sf_left'>

          <Typography><span style={{fontSize: '90px', fontWeight: 'bold', textDecoration: 'underline' }}>{tuple[0]}</span><span style={{fontSize: '90px', textDecoration: 'underline' }}>: Sub-Funds</span></Typography>
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
                <h2>Fund Risk Evaluation</h2>
              </div>
              <div className="Modal-body">
                <p>Please find the risk evalaluation simulation below</p>
                <table className='popup-table'>
                  <thead>
                    <tr>
                      <th className='table-header'>Country</th>
                      <th className='table-header'>Sector</th>
                      <th className='table-header'>Currency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='table-cell'>23%</td>
                      <td className='table-cell'>43%</td>
                      <td className='table-cell'>19%</td>
                    </tr>

                  </tbody>
                </table>
                <form onSubmit={handleSubmit}>
                  <h2>Upload Document:</h2>
                  <input type="file" onChange={handleFileChange} />
                  <button type="submit">Submit</button>
                </form>
                <p>IPFS address :</p>
              </div>
              <div className="Modal-footer">
                <div className='validate-button'>
                  <Button component={Link} to="/ValidatedDetails">
                    Valider
                  </Button>
                </div>
                <div className='cancel-button'><button onClick={closeModal}>Cancel</button></div>
              </div>
            </Modal>




          </div>
        </div>
      </div>

        <div className='id_table_sf'>
          <div className="identite_fond">
            <div className="identite_fond_texte">
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
                      <th style={{ border: '1px solid black', padding: '8px' }}>Country</th>
                      <th style={{ border: '1px solid black', padding: '8px' }}>Risked</th>
                      <th style={{ border: '1px solid black', padding: '8px' }}>Currency</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Risked</th>
                      <th style={{ border: '1px solid black', padding: '8px' }}>Sector</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Risked</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>%NAV</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((tuple, index) => (
                      <tr
                        key={index}
                        style={{ cursor: 'pointer' }}
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

