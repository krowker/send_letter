import React, {useLayoutEffect, useState} from 'react'
import useUserStore from "../../../store/useUserStore.jsx";
import {TextField, Stack} from '@mui/material'

export default function UserInfo({user}) {
   return(<>
      <Stack spacing={1}>
         <TextField
            label='Username'
            value={user.email}
            variant='outlined'
            // onChange={ e => {
            //    setUser({
            //       ...user,
            //       email: e.target.value
            //    })
            // }}
         />
         <TextField
            label='Name'
            value={user.address.name}
            variant='outlined'
         />
         <TextField
            label='Surname'
            value={user.address.surname}
            variant='outlined'
         />
         <TextField
            label="Father's name"
            value={user.address.fathersName}
            variant='outlined'
         />
         <TextField
            label='Country'
            value={user.address.country}
            variant='outlined'
         />
         <TextField
            label='City'
            value={user.address.city}
            variant='outlined'
         />
         <TextField
            label='Zip code'
            value={user.address.zipCode}
            variant='outlined'
         />
         <TextField
            label='Street and building'
            value={user.address.streetAndBuilding}
            variant='outlined'
         />
         <TextField
            label='Apartment'
            value={user.address.apartment}
            variant='outlined'
         />
         <TextField
            label='Remark'
            value={user.address.Remark}
            variant='outlined'
         />
      </Stack>
   </>)
}