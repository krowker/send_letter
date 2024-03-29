import React, { useState } from "react";

import { Grid } from "@mui/material";
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HouseIcon from '@mui/icons-material/House';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

import { Link} from "react-router-dom";

export default function BottomBar() {
   const [value, setValue] = useState(0)

   return (
      <>
         <Paper
            sx={{
               position: 'fixed',
               bottom: 0,
               left: 0,
               right: 0
            }}
            elevation={3}
         >
            <BottomNavigation
               showLabels
               value={value}
               onChange={(event, newValue) => {
                  setValue(newValue);
               }}
            >
               <BottomNavigationAction
                  component={Link}
                  to='/addresses' 
                  label='Addresses'
                  icon={<HouseIcon />}
               ></BottomNavigationAction>
               <BottomNavigationAction   
                  component={Link}
                  to='/notifications'               
                  label='Notifications'
                  icon={<NotificationsIcon />}
               />
               <BottomNavigationAction
                  component={Link}
                  to='/profile'
                  label='Profile'
                  icon={<PersonIcon />}
               />
            </BottomNavigation>
         </Paper>
      </>
   )
}