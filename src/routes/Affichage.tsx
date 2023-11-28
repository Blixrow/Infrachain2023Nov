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
import { funds_key, sub_funds_key } from '../bindings/main';

export const Affich = () => {
  const connect = useConnect()
  const is_connected = useIsConnected()
  const [loading, setLoading] = React.useState(false)
  const [fundsID, setfundsID] = React.useState("")
  const [funds, setfunds] = React.useState("")
  const [status, setstatus] = React.useState("")
  const [subfundsID, setsubfundsID] = React.useState("")
  const [subfunds, setsubfunds] = React.useState("")

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
          funds.push(fund.f_name+"/"+fund.f_subs.toString())
        }
      }));
      setfunds(funds.toString())
    }
  }
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
          subfunds.push(value+"/"+subfund.sf_name+"/"+subfund.sf_country+"/"+subfund.sf_currency+"/"+subfund.sf_sector+"/"+subfund.sf_nav)
        }
      }));
      setsubfunds(subfunds.toString())
    }
  }

  function test() {
    getFunds()
    getSubFunds("1")
  }
  
  return <Container>
      <Grid2 container direction="row" justifyContent="center" alignItems="center" sx={{ mt : '120px', mb: '18px' }}>
        <Grid2 container direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h5" sx={{ fontFamily : 'Dancing Script' }}>Other Page :</Typography>
          <Button component={Link} to="../main" sx={{ mt : '7px'}}>Click Here</Button>
        </Grid2>
        <Grid2 container direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h5" sx={{ fontFamily : 'Dancing Script' }}>Update :</Typography>
          <Button onClick={() => test()} >Click Here</Button>
        </Grid2>
        <Typography variant="h5">{funds}</Typography>
        <Typography variant="h5">{subfunds}</Typography>
      </Grid2>
  </Container>
}