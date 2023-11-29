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
import { useConnect, useIsConnected, useWalletAddress } from '../contexts/Beacon';
import { useContract } from '../contexts/Contract';
import { Score } from './populate';


const history = createBrowserHistory();


export const DetailsPage = () => {
  Score(1, "29/11/2023", "ipfs://QmPibs6dkHjoJAkE9BiPURCnCBfphaT7P6y5MZ4eTYtyS9", "ipfs://QmPibs6dkHjoJAkE9BiPURCnCBfphaT7P6y5MZ4eTYtyS9")

  const connect = useConnect()
  const is_connected = useIsConnected()
  const [loading, setLoading] = React.useState(false)
  const [fundsID, setfundsID] = React.useState("")
  const [funds, setfunds] = React.useState("")
  const [status, setstatus] = React.useState("")
  const [reportsID, setreportsID] = React.useState("")
  const [ipfsLink, setipfsLink] = React.useState("")
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


  const statut: number = 1;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  async function uploadToIpfs() {
    const pinataSDK = require('@pinata/sdk');
    const pinata = new pinataSDK('807be971c091f63146df', '33a710d6e98b099732e8c382898e5f2363d0e293ad37cf4eb74d50b5a5c12140');
    
    const body = {
      message: 'Pinatas are awesome'
    };
    const options = {
        pinataMetadata: {
            name: "MyCustomName",
            keyvalues: {
                customKey: 'customValue',
                customKey2: 'customValue2'
            }
        },
        pinataOptions: {
            cidVersion: 0
        }
    };
    const res1 = await pinata.pinJSONToIPFS(body, options)
    const res2 = await pinata.pinJSONToIPFS(body, options)
    //setipfsLink(res1)
    //setipfsLink(res2)
    //console.log(res1)
  }

  function handleFileChange(): void {
    console.log("TESTTTTTTT")
    setipfsLink(" ipfs://QmPibs6dkHjoJAkE9BiPURCnCBfphaT7P6y5MZ4eTYtyS9")
    uploadToIpfs();
  }

  return (

    <div className='total-boxe_sf'>

      <div className='inline-div'>


        <div className='title_sf_left'>

          <Typography><span style={{fontSize: '90px', fontWeight: 'bold', textDecoration: '' }}>Fund 1A</span></Typography>
        </div>

        <div className='sf_right'>
          <div className='color-box'>
            <ColorBox statut={statut} /> {/* Ajoutez la boîte de couleur ici */}
          </div>


          <div className='Score_div'>
          <table className='Score_table'>
                  <thead>
                    <tr>
                      <th className='table_header' style={{fontSize:'60px', padding:'15px 15px 0px 0px'}}>Country</th>
                      <th className='table_header'style={{fontSize:'60px', padding:'15px 15px 0px 0px'}}>Sector</th>
                      <th className='table_header'style={{fontSize:'60px', padding:'15px 15px 0px 0px'}}>Currency</th>
                    </tr>
                  </thead>
                    <tr>
                      <td className='table_cell'style={{fontSize:'60px', padding:'10px 10px 0px 0px'}}>45%</td>
                      <td className='table_cell'style={{fontSize:'60px', padding:'10px 10px 0px 0px'}}>30%</td>
                      <td className='table_cell'style={{fontSize:'60px', padding:'10px 10px 0px 0px'}}>30%</td>
                    </tr>
          </table>          




          </div>
        </div>
      </div>

        <div className='id_table_sf'>
          <div className="identite_fond">
            <div className="identite_fond_texte">
              <Typography variant="h4"><span style={{ fontWeight: 'bold' }}>Name : </span>Fund 1A</Typography>
              <Typography variant="h4"><span style={{ fontWeight: 'bold' }}>ID : </span>1</Typography>
              <Typography variant="h4"><span style={{ fontWeight: 'bold' }}>Status : </span>Calculated</Typography>
              <Typography variant="h4"><span style={{ fontWeight: 'bold' }}>NFT : </span>YES</Typography>
              <Typography variant="h4"><span style={{ fontWeight: 'bold' }}>Date : </span>2023-11-28</Typography>
            </div>
          </div>

          <div className='table_sf'>
            <Grid container direction="column" justifyContent="center">


              {/* Titre de la liste */}
              <Grid item xs={12} sx={{ mt: '20px' }}>
                <Typography variant="h3" sx={{ mt: '40px', mb: '10px', justifyContent: 'center' }}>
                  Sub-funds list
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
                      <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                      <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
                      <th style={{ border: '1px solid black', padding: '8px' }}>Country</th>
                      <th style={{ border: '1px solid black', padding: '8px' }}>Risked</th>
                      <th style={{ border: '1px solid black', padding: '8px' }}>Currency</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Risked</th>
                      <th style={{ border: '1px solid black', padding: '8px' }}>Sector</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Risked</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>%NAV</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Actions</th>
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



              {/* Bouton Voir les données publiques 
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
              </Grid>*/}
            </Grid>
            {/* Bouton Voir les données publiques /}
          <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: '30px', mb: '18px' }}>
            <Grid item>
              <Typography variant="h5" sx={{ fontSize: '11px' }}>
                Public data:
              </Typography>
            </Grid>
            <Grid item>
              <a href="https://www.google.fr/" style={{ color: 'black', marginLeft: '18px', marginTop: '4px', textDecoration: 'none' }}>
                available here
              </a>
            </Grid>
          </Grid>

                    {/ Bouton Voir les données publiques */}
          <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: '30px', mb: '18px' }}>
            <Grid item>
              <Typography variant="h5" sx={{ fontSize: '11px' }}>
                Follow your transaction:
              </Typography>
            </Grid>
            <Grid item>
              <a href="https://ghostnet.tzkt.io/KT1Jxav5JGBVY8ZULnGZUrH8qbsLbVpMRe9W/operations/" style={{ color: 'black', marginLeft: '18px', marginTop: '4px', textDecoration: 'none' }}>
                available here
              </a>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: '30px', mb: '18px' }}>
            <Grid item>
              <Typography variant="h5" sx={{ fontSize: '11px' }}>
                Follow your NFT:
              </Typography>
            </Grid>
            <Grid item>
              <a href="https://ghostnet.tzkt.io/KT1QBNWmpCZSzx1urbEZWtS5CYZ4EdaHseMB/operations/" style={{ color: 'black', marginLeft: '18px', marginTop: '4px', textDecoration: 'none' }}>
                available here
              </a>
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

