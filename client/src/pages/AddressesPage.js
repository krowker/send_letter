import React from 'react'
import {
   Grid,
   Fab
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { AddressCard } from '../components/AddressCard'

export const AddressesPage = () => {
   return (
      <Grid container spacing={1}
      
      >
         <AddressCard></AddressCard>
         <AddressCard></AddressCard>
         <Fab
            color='primary'
            sx={{
               position: 'absolute',
               bottom: '65px',
               right: '15px',
            }}

         >
            <AddIcon />
         </Fab>
      </Grid>
   )
}