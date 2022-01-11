import { Box, TextField } from '@mui/material'
import React from 'react'

export const RegistrationPage = () => {

   return (
      <>
         <Box
            sx={{
               height: '100vh',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               flexDirection: 'column'
            }}
         >
            <TextField
               label='Name'
               variant="outlined"
               sx={{
                  m: 1
               }}
            />
            <TextField
               label='Surname'
               variant="outlined"
               sx={{
                  m: 1
               }}
            />
            <TextField
               label='Patronymic'
               variant="outlined"
               sx={{
                  m: 1
               }}
            />
         </Box>
      </>
   )
}