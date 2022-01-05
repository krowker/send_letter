import React from 'react'
import { Grid } from '@mui/material'
import { AddressCard } from '../components/AddressCard'

export const AddressesPage = () => {
   return (
      <Grid container spacing={1}>
         <AddressCard></AddressCard>
         <AddressCard></AddressCard>
      </Grid>
   )
}