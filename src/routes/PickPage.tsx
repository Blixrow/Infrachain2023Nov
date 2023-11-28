import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useContract } from "../contexts/Contract";
import { Nat } from '@completium/archetype-ts-types';
import { useConnect, useIsConnected, useWalletAddress } from "../contexts/Beacon";
import React from 'react';

export const Pick = () => {
  const connect = useConnect()
  const is_connected = useIsConnected()
  const [loading, setLoading] = React.useState(false)
  const contract = useContract()

  const createFund = async (id : number,name : string) => {
    setLoading(true)
    try {
      if (!is_connected()) {
        await connect()
      }
      await contract.create_fund(new Nat(id),name,{})
      setLoading(false)
    } catch (e) {
      setLoading(false)
    }
  }
  const deleteFund = async (id : number) => {
    setLoading(true)
    try {
      if (!is_connected()) {
        await connect()
      }
      await contract.delete_fund(new Nat(id),{})
      setLoading(false)
    } catch (e) {
      setLoading(false)
    }
  }
  const updateFund = async (id : number, name : string) => {
    setLoading(true)
    try {
      if (!is_connected()) {
        await connect()
      }
      await contract.update_fund(new Nat(id),name,{})
      setLoading(false)
    } catch (e) {
      setLoading(false)
    }
  }
  const createSubFund = async (fundid : number,subfundid : number, name : string, country : string, currency : string, sector : string, nav : number) => {
    setLoading(true)
    try {
      if (!is_connected()) {
        await connect()
      }
      await contract.create_sub_fund(new Nat(fundid),new Nat(subfundid),name,country,currency,sector,new Nat(nav),{})
      setLoading(false)
    } catch (e) {
      setLoading(false)
    }
  }
  const updateSubFund = async (fundid : number,subfundid : number, name : string, country : string, currency : string, sector : string, nav : number) => {
    setLoading(true)
    try {
      if (!is_connected()) {
        await connect()
      }
      await contract.update_sub_fund(new Nat(fundid),new Nat(subfundid),name,country,currency,sector,new Nat(nav),{})
      setLoading(false)
    } catch (e) {
      setLoading(false)
    }
  }
  const deleteSubFund = async (fundid : number,subfundid : number) => {
    setLoading(true)
    try {
      if (!is_connected()) {
        await connect()
      }
      await contract.delete_sub_fund(new Nat(fundid),new Nat(subfundid),{})
      setLoading(false)
    } catch (e) {
      setLoading(false)
    }
  }
  const score = async (fundid : number, time : string, data : string, files : string) => {
    setLoading(true)
    try {
      if (!is_connected()) {
        await connect()
      }
      await contract.score(new Nat(fundid), time, data, files,{})
      setLoading(false)
    } catch (e) {
      setLoading(false)
    }
  }
  const audit = async (tokenid : number, validate : boolean) => {
    setLoading(true)
    try {
      if (!is_connected()) {
        await connect()
      }
      await contract.update_token(new Nat(tokenid), validate,{})
      setLoading(false)
    } catch (e) {
      setLoading(false)
    }
  }
  return <Container>
      <Grid2 container direction="row" justifyContent="center" alignItems="center" sx={{ mt : '120px', mb: '18px' }}>
        <Grid2 container direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h5" sx={{ fontFamily : 'Dancing Script' }}>Create Fund :</Typography>
          <Button onClick={() => createFund(1,"Test")} sx={{ mt : '7px'}}>Click Here</Button>
        </Grid2>
        <Grid2 container direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h5" sx={{ fontFamily : 'Dancing Script' }}>Delete Fund :</Typography>
          <Button onClick={() => deleteFund(1)} sx={{ mt : '7px'}}>Click Here</Button>
        </Grid2>
        <Grid2 container direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h5" sx={{ fontFamily : 'Dancing Script' }}>Update Fund :</Typography>
          <Button onClick={() => updateFund(1,"Other Test")} sx={{ mt : '7px'}}>Click Here</Button>
        </Grid2>
        <Grid2 container direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h5" sx={{ fontFamily : 'Dancing Script' }}>Create Sub_Fund :</Typography>
          <Button onClick={() => createSubFund(1, 15, "SubFund Test", "France", "EUR", "Finance", 30)} sx={{ mt : '7px'}}>Click Here</Button>
        </Grid2>
        <Grid2 container direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h5" sx={{ fontFamily : 'Dancing Script' }}>Update Sub_Fund :</Typography>
          <Button onClick={() => updateSubFund(1, 10, "Other SubFund Test", "UK", "LIVRE", "Manufacture", 62)} sx={{ mt : '7px'}}>Click Here</Button>
        </Grid2>
        <Grid2 container direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h5" sx={{ fontFamily : 'Dancing Script' }}>Delete Sub_Fund :</Typography>
          <Button onClick={() => deleteSubFund(1, 10)} sx={{ mt : '7px'}}>Click Here</Button>
        </Grid2>
        <Grid2 container direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h5" sx={{ fontFamily : 'Dancing Script' }}>Calculate Score :</Typography>
          <Button onClick={() => score(1, "28/11/2023 - 14h10", "link 1", "link 2")} sx={{ mt : '7px'}}>Click Here</Button>
        </Grid2>
        <Grid2 container direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h5" sx={{ fontFamily : 'Dancing Script' }}>Validate NFT :</Typography>
          <Button onClick={() => audit(0, true)} sx={{ mt : '7px'}}>Click Here</Button>
        </Grid2>
        <Grid2 container direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h5" sx={{ fontFamily : 'Dancing Script' }}>Cancel NFT :</Typography>
          <Button onClick={() => audit(0, false)} sx={{ mt : '7px'}}>Click Here</Button>
        </Grid2>
        <Grid2 container direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h5" sx={{ fontFamily : 'Dancing Script' }}>Other Page :</Typography>
          <Button component={Link} to="../affich" sx={{ mt : '7px'}}>Click Here</Button>
        </Grid2>
      </Grid2>
  </Container>
}