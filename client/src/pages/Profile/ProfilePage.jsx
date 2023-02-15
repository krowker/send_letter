import {
    TextField,
    Typography,
    Grid,
    Stack,
    Box,
   } from '@mui/material'
import React from 'react'

import BottomBar from '../../components/BottomNavigation.jsx'
import Header from './components/Header.jsx'
import useAuthStore from '../../store/useAuthStore'

export default function  ProfilePage () {
   const user = useAuthStore((state) => state.user)

   return (
      <>
       <Box sx={{ flexGrow: 1 }}>
         <Stack>
            <Header/>
         </Stack>
       </Box>
         
         <BottomBar/>
      </>
   )
}