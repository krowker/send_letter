import React, { useContext, useState } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button'
//import Divider from '@mui/material/Divider'
//import Chip from '@mui/material/Chip'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from '../index'


export const AuthPage = () => {
   const navigate = useNavigate()
   const location = useLocation()

   const fromPage = location.state?.from?.pathname || '/'
   const {store} = useContext(Context)
   const [values, setValues] = useState({
      email: '',
      password: '',
      showpassword: false,
   })

   const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value })
   }

   const handleClickShowPassword = () => {
      setValues({
         ...values,
         showPassword: !values.showPassword,
      })
   }

   const handleMouseDownPassword = (event) => {
      event.preventDefault()
   }

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
            <Typography
               variant="h4"
               sx={{
                  color: '#3b4252',
               }}
            >SendLetter</Typography>
            <TextField
               id="input-with-icon-textfield"
               value={values.email}
               onChange={handleChange('email')}
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
               type={values.showPassword ? 'text' : 'password'}
               value={values.password}
               onChange={handleChange('password')}
               sx={{
                  m: 1
               }}
               InputProps={{
                  endAdornment: (
                     <InputAdornment position="end">
                        <IconButton
                           onClick={handleClickShowPassword}
                           onMouseDown={handleMouseDownPassword}
                        >
                           {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                     </InputAdornment>
                  ),
               }}
            />
            <Button
               onClick={()=>store.login(values.email, values.password)}
               variant="contained"
               sx={{
                  m: 1,
               }}
            >Log In</Button>
            <Button href='#'
               variant='text'
               size='small'
               sx={{
                  p: 1
               }}
            >Forgot password?</Button>
            {/* <Divider
               variant='middle'
               sx={{
                  m: 1
               }}
            >
               <Chip label="or"/>
            </Divider> */}
            <Button
               component={Link}
               to='../registration'
               variant='outlined'
               sx={{
                  m: 3
               }}
            >Registration</Button>
         </Box>
      </>
   )
}