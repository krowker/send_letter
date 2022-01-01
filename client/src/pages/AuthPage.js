import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const AuthPage = () => {
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
               id="input-with-icon-textfield"
               label="Username"
               variant="outlined"
               sx={{
                  m: 1,
               }}
               InputProps={{
                  endAdornment: (
                     <InputAdornment position="end">
                        <AccountCircle
                           sx={{
                              padding: '8px'
                           }}
                        />
                     </InputAdornment>
                  ),
               }}
            />
            <TextField
               id="input-with-icon-textfield"
               label="Password"
               variant="outlined"
               type='password'
               sx={{
                  m: 1
               }}
               InputProps={{
                  endAdornment: (
                     <InputAdornment position="end">
                        <IconButton
                        >
                           <Visibility />
                        </IconButton>
                     </InputAdornment>
                  ),
               }}
            />
            <Button
               variant="contained"
               sx={{
                  m: 1,
               }}
            >Log In</Button>
            <Link href='#'
               underline="none"
               sx={{
                  p: 1
               }}
            >Forgot password?</Link>
            {/* <Divider
               variant='middle'
               sx={{
                  m: 1
               }}
            >
               <Chip label="or"/>
            </Divider> */}
            <Button
               variant='outlined'
               sx={{
                  m: 3
               }}
            >Registration</Button>
         </Box>
      </>
   )
}