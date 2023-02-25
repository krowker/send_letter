import React, {useEffect, useState} from 'react'
import useUserStore from "../../../store/useUserStore.jsx";
import {TextField, Stack, Button} from '@mui/material'

export default function UserInfo({user}) {
  const updateUser = useUserStore((state)=>state.updateUser)

   const [newData, setNewData] = useState({...user})
   useEffect(()=>{
      setNewData(({...user}))
   },[user])
   
   const handleChangeData = (prop) => (event) => {
      setNewData({ ...newData, address: {...newData.address, [prop]: event.target.value }})
   }
   return(<>
      <Stack spacing={1}>
         <TextField
            label='Username'
            value={newData.email}
            variant='outlined'
            onChange={ e => {
               setNewData({
                  ...newData,
                  email: e.target.value
               })
            }}
         />
         <TextField
            label='Name'
            value={newData.address.name}
            variant='outlined'
            onChange={handleChangeData('name')}
         />
         <TextField
            label='Surname'
            value={newData.address.surname}
            variant='outlined'
            onChange={handleChangeData('surname')}
         />
         <TextField
            label="Father's name"
            value={newData.address.fathersName}
            variant='outlined'
            onChange={handleChangeData('fathersName')}
         />
         <TextField
            label='Country'
            value={newData.address.country}
            variant='outlined'
            onChange={handleChangeData('country')}
         />
         <TextField
            label='City'
            value={newData.address.city}
            variant='outlined'
            onChange={handleChangeData('city')}
         />
         <TextField
            label='Zip code'
            value={newData.address.zipCode}
            variant='outlined'
            onChange={handleChangeData('zipCode')}
         />
         <TextField
            label='Street and building'
            value={newData.address.streetAndBuilding}
            variant='outlined'
            onChange={handleChangeData('streetAndBuilding')}
         />
         <TextField
            label='Apartment'
            value={newData.address.apartment}
            variant='outlined'
            onChange={handleChangeData('apartment')}
         />
         <TextField
            label='Remark'
            value={newData.address.remark}
            variant='outlined'
            onChange={handleChangeData('remark')}
         />
         <Button
         onClick={()=>{updateUser({...newData})}}
         >
            Update info
         </Button>
      </Stack>
   </>)
}