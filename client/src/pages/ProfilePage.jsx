import { Button } from '@mui/material'
import React, {useContext} from 'react'
import { BottomBar } from '../components/BottomNavigation'
import useAuthStore from '../store/useAuthStore'

export const ProfilePage = () => {
   const user = useAuthStore((state) => state.user)
   const logout = useAuthStore((state) => state.logout)
   return (
      <>
         <Button
         onClick={() =>{logout()}}
         variant='contained'
         >
            Logout
         </Button>
         <BottomBar/>
      </>
   )
}