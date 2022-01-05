import {
   Card,
   CardHeader,
   CardContent,
   CardActionArea,
   Grid,
   Typography,
   Button,
} from '@mui/material'
import React from 'react'

export const AddressCard = () => {

   return (
      <>
         <Grid item xs={6}>
            <Card>
               <CardHeader 
               title='Name Surname Morename'
               subheader='11111'
               sx={{
                  p: 1
               }}
               />
               <CardContent
               sx={{
                  p: 1
               }}
               >
                  <Typography>
                     Belarus, Minsk, 31 Pushkin street, 27 kvartira
                  </Typography>
                  
               </CardContent>
               <Button>Sended</Button>
            </Card>
         </Grid>
      </>
   )
}