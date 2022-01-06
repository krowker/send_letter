import React from 'react'
import {
   Grid,
   Fab
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { AddressCard } from '../components/AddressCard'

export const AddressesPage = () => {
   return (
      <Grid container spacing={1}>
         <AddressCard></AddressCard>
         <AddressCard></AddressCard>
         <Fab
            color='primary'
            sx={{
               position: 'fixed',
               bottom: '65px',
               right: '10px',
            }}

         >
            <AddIcon />
         </Fab>
      </Grid>
   )
}