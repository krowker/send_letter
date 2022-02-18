import { Button } from '@mui/material'
import React, {useContext} from 'react'
import { Context } from '../index'

export const ProfilePage = () => {
   const {store} = useContext(Context)

   return (
      <>
         <Button
         onClick={()=>store.logout()}
         variant='contained'
         >
            Logout
         </Button>
      </>
   )
}