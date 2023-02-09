import React, { useState } from 'react'

import useAuthStore from '../store/useAuthStore.jsx'

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

export const RegistrationPage = () => {
   const registration = useAuthStore((state) => state.registration)


   const [values, setValues] = useState({
      email: '',
      password: '',
      showpassword: false,
   })

   const [data, setData] = useState({
      name: '',
      surname: '',
      fathersName: '',
      country: '',
      city: '',
      zipCode: '',
      streetAndBuilding: '',
      apartment: '',
      remark: ''
   })

   const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value })
   }
   const handleChangeData = (prop) => (event) => {
      setData({ ...data, [prop]: event.target.value })
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
               // justifyContent: {xl: 'center'},
               alignItems: 'center',
               // alignContent: 'center',
               flexDirection: 'column'
            }}
         >
            <Box>
               <TextField
                  id="input-with-icon-textfield"
                  label="Username"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange('email')}
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
                  value={data.name}
                  onChange={handleChangeData('name')}
                  variant="outlined"
                  sx={{
                     m: 1
                  }}
               />
               <TextField
                  label='Surname'
                  value={data.surname}
               onChange={handleChangeData('surname')}
                  variant="outlined"
                  sx={{
                     m: 1
                  }}
               />
               <TextField
                  label="Father's name"
                  value={data.fathersName}
                  onChange={handleChangeData('fathersName')}
                  variant="outlined"
                  sx={{
                     m: 1
                  }}
               />
               <Box>
                  <TextField
                     label='Country'
                     value={data.country}
                     onChange={handleChangeData('country')}
                     variant='outlined'
                     sx={{
                        m: 1
                     }}
                  />
                  <TextField
                     label='City'
                     value={data.city}
                     onChange={handleChangeData('city')}
                     variant='outlined'
                     sx={{
                        m: 1
                     }}
                  />
                  <TextField
                     label='Zip code'
                     value={data.zipCode}
                     onChange={handleChangeData('zipCode')}
                     variant='outlined'
                     sx={{
                        m: 1
                     }}
                  />
               </Box>
               <Box>
                  <TextField
                     label='Street and building'
                     value={data.streetAndBuilding}
                     onChange={handleChangeData('streetAndBuilding')}
                     variant='outlined'
                     sx={{
                        m: 1
                     }}
                  />
                  <TextField
                     label='Apartment'
                     value={data.apartment}
                     onChange={handleChangeData('apartment')}
                     type='number'
                     variant='outlined'
                     sx={{
                        m: 1
                     }}
                  />
                  <TextField
                     label='Remark'
                     value={data.remark}
                     onChange={handleChangeData('remark')}
                     variant='outlined'
                     sx={{
                        m: 1
                     }}
                  />
               </Box>
            </Box>
            <Button
               onClick={()=>{registration(values.email, values.password, data)}}
            >Submit
            </Button>
         </Box>
      </>
   )
}