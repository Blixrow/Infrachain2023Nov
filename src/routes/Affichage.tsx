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
        console.log(index)
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

  function test() {
    //getFunds()
    //getSubFunds("1")
    //getStatus()
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
        <Typography variant="h5">{status}</Typography>
      </Grid2>
  </Container>
}