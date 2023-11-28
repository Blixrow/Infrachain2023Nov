import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useContract } from "../contexts/Contract";
import { useConnect, useIsConnected, useWalletAddress } from "../contexts/Beacon";
import React, { useEffect } from 'react';
import { log } from 'console';

import { useIPFSBrowser } from '../contexts/Settings';
import { Readable } from 'stream';

export const Ipfs = () => {
  const connect = useConnect()
  const is_connected = useIsConnected()
  const ipfsBrowser = useIPFSBrowser()
  const contract = useContract() 
  const wallet_address = useWalletAddress()

  const [message, setMessage] = React.useState("")
  
  async function test() {
    const pinataSDK = require('@pinata/sdk')
    const pinata = new pinataSDK('807be971c091f63146df','33a710d6e98b099732e8c382898e5f2363d0e293ad37cf4eb74d50b5a5c12140')
    const fs = require('fs')
    const testaut = await pinata.testAuthentication()
    console.log(testaut)
    const readableStreamForFile = fs.createReadStream('./Affichage.tsx')
    //const readableStreamForFile = fs.createReadStream('./yourfile.png');
    const options = {
        pinataMetadata: {
            name: 'MyCustomName',
            keyvalues: {
                customKey: 'customValue',
                customKey2: 'customValue2'
            }
        },
        pinataOptions: {
            cidVersion: 0
        }
    };
    const res = await pinata.pinFileToIPFS(readableStreamForFile, options)
    console.log(res)
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
        <Typography variant="h5">{message}</Typography>
      </Grid2>
  </Container>
}