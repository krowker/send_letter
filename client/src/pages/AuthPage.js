import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const AuthPage = () => {
   return (      
         <>
            <Box
            sx={{ display: 'flex',
          alignItems: 'center',}}
            >
               <div>
                  <TextField
                     id="input-with-icon-textfield"
                     label="Username"
                     variant="outlined"
                     sx={{
                        m:1,
                        height:100
                     }}
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position="end">
                              <IconButton
                              >
                                 <AccountCircle />
                              </IconButton>
                           </InputAdornment>
                        ),
                     }}
                  />
               </div>
               <div>
                  <TextField
                     id="input-with-icon-textfield"
                     label="Password"
                     variant="outlined"
                     type='password'
                     sx={{
                        m:1,
                        height:100
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
               </div>
            </Box>  
         </>    
   )
}