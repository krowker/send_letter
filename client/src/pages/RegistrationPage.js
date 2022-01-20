import {
   Box,
   TextField,
   IconButton,
   InputAdornment,
   Typography,
   Button
} from '@mui/material'
import {
   Visibility,
   VisibilityOff,
   AccountCircle
} from '@mui/icons-material';
import React, { useState } from 'react'

export const RegistrationPage = () => {
   const [values, setValues] = useState({
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
               justifyContent:'center',
               justifyContent: {xl: 'center'},
               alignItems: 'center',
               flexDirection: 'column'
            }}
         >
            <Box>
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
            </Box>
            <Typography>How to sign a letter for you</Typography>
            <Box>
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
                  label="Father's name"
                  variant="outlined"
                  sx={{
                     m: 1
                  }}
               />
               <Box>
                  <TextField
                     label='Country'
                     variant='outlined'
                     sx={{
                        m: 1
                     }}
                  />
                  <TextField
                     label='City'
                     variant='outlined'
                     sx={{
                        m: 1
                     }}
                  />
                  <TextField
                     label='Zip code'
                     variant='outlined'
                     sx={{
                        m: 1
                     }}
                  />
               </Box>
               <Box>
                  <TextField
                     label='Street and building'
                     variant='outlined'
                     sx={{
                        m: 1
                     }}
                  />
                  <TextField
                     label='Apartment'
                     type='number'
                     variant='outlined'
                     sx={{
                        m: 1
                     }}
                  />
                  <TextField
                     label='Remark'
                     variant='outlined'
                     sx={{
                        m: 1
                     }}
                  />
               </Box>
            </Box>
            <Button>Submit</Button>
         </Box>
      </>
   )
}