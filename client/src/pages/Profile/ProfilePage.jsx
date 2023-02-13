import { Button } from '@mui/material'
import React from 'react'
import BottomBar from '../../components/BottomNavigation.jsx'
import useAuthStore from '../../store/useAuthStore'

export default function  ProfilePage () {
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