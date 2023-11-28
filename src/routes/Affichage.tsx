import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useContract } from "../contexts/Contract";
import { Nat, Address } from '@completium/archetype-ts-types';
import { useConnect, useIsConnected, useWalletAddress } from "../contexts/Beacon";
import React, { useEffect } from 'react';
import { log } from 'console';
import { funds_key } from '../bindings/main';

export const Affich = () => {
  const connect = useConnect()
  const is_connected = useIsConnected()
  const [loading, setLoading] = React.useState(false)
  const [fundsID, setfundsID] = React.useState("")
  const [funds, setfunds] = React.useState("")

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
      var funds : String[] = []
      await Promise.all(ids.map(async value => {
        const fund = await contract.get_funds_value(new funds_key(new Nat(parseInt(value)),new Address(wallet_address)))
        if (fund) {
          funds.push(fund.f_name)
          funds.push(fund.f_subs.toString())
        }
      }));
      setfunds(funds.toString())
    }
  }
  
  getFunds()
  return <Container>
      <Grid2 container direction="row" justifyContent="center" alignItems="center" sx={{ mt : '120px', mb: '18px' }}>
        <Grid2 container direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h5" sx={{ fontFamily : 'Dancing Script' }}>Other Page :</Typography>
          <Button component={Link} to="../main" sx={{ mt : '7px'}}>Click Here</Button>
        </Grid2>
        <Typography variant="h5">{funds}</Typography>
      </Grid2>
  </Container>
}