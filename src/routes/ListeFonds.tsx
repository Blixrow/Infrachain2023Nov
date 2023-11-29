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
import { useContract } from "../contexts/Contract";
import { Nat, Address } from '@completium/archetype-ts-types';
import { useConnect, useIsConnected, useWalletAddress } from "../contexts/Beacon";
import { funds_key } from '../bindings/main';

const history = createBrowserHistory();

const ListeFonds: React.FC = (): JSX.Element => {
  const [loading, setLoading] = React.useState(false)
  const [fundsID, setfundsID] = React.useState("")
  const [funds, setfunds] = React.useState("")
  const [status, setstatus] = React.useState("")
  const [reportsID, setreportsID] = React.useState("")
  const contract = useContract() 
  const wallet_address = useWalletAddress()

  async function getFundIDs() {
    if (wallet_address) {
      const ledg = await contract.get_ledger_value(new Address(wallet_address))
      if (ledg) {
        var funds = ledg.l_funds
        if (funds) {
          setfundsID(funds.toString())
          return
        }
      }
    }
    return
  }
  async function getFunds() {
    if (wallet_address) {
      const [fundsids] = await Promise.all([getFundIDs()]);
      const ids = fundsID.split(",")
      var fundss : String[] = []
      await Promise.all(ids.map(async value => {
        const fund = await contract.get_funds_value(new funds_key(new Nat(parseInt(value)),new Address(wallet_address)))
        if (fund) {
          fundss.push(value+"/"+fund.f_name+"/"+fund.f_subs.toString())
        }
      }));
      setfunds(fundss.toString())
    }
  }
  async function getReportsIDs() {
    if (wallet_address) {
      const ledg = await contract.get_ledger_value(new Address(wallet_address))
      if (ledg) {
        var reports = ledg.l_reports
        if (reports) {
          setreportsID(reports.toString())
          return
        }
      }
    }
  }
  async function getStatus() {
    if (wallet_address) {
      const [fundsids] = await Promise.all([getReportsIDs()]);
      const ids = reportsID.split(",")
      var reports : String[] = []
      var stat : String[] = []
      console.log(ids[0])
      await Promise.all(ids.map(async (value,index,array) => {
        const report = await contract.get_reports_value(new Nat(parseInt(index.toString())))
        if (report) {
          if (report.t_validated){
            stat.push(report.t_fund_id+"/Validated")
          } else {
            stat.push(report.t_fund_id+"/Calculated")
          }
        }
      }));
      setstatus(stat.toString())
    }
  }

  var items: [string, string, string, string, string][] = [];
  function updateitems() {
    Promise.all([getFunds(),getStatus()])
    funds.split(",").map( (value, index, array) => {
      var splitted = value.split("/")
      var stat = "Not Calculated"
      var stats = status.split(",")
      console.log(stats)
      if (stats.indexOf(splitted[0]+"/Validated") > -1) {
        stat = "Validated"
      }
      if (stats.indexOf(splitted[0]+"/Calculated") > -1) {
        stat = "Calculated"
      }
      items[index] = [splitted[1], splitted[0], stat, "N/A", "2023-11-27"]
    })
  }
  Promise.all([updateitems()])

  
  

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
    <Container style={{ padding: '0px 0px 0px 0px', backgroundColor: 'rgba(213, 213, 213, 0.9)' }}>
      <div className="status-boxes">
        <div className="box green-box"><span className="big-number">2</span> Validated</div>
        <div className="box orange-box"><span className="big-number">4 </span> Reported</div>
        <div className="box red-box"><span className="big-number">10 </span> To Be Reported</div>
      </div>

      <Grid container direction="column" justifyContent="center" style={{ padding: '0px 20px 0px 20px'}}> 
        {/* Titre de la liste */}
        <Grid item xs={12} sx={{ mt: '20px' }}>
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
      {/* Conditionnellement rendre DetailsPage */}
      {/*selectedTuple && <DetailsPage {...{ selectedTuple }} />*/}
    </Container>
  );
};

export default ListeFonds;
