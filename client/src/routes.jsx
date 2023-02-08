import React, { useEffect } from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'

import { AddressesPage } from './pages/AddressesPage'
import { AuthPage } from './pages/AuthPage'
import { NotificationsPage } from './pages/NotificationsPage'
import { ProfilePage } from './pages/ProfilePage'
import { RegistrationPage } from './pages/RegistrationPage'
import useAuthStore from './store/useAuthStore'



export function useRoutes() {
   const isAuth = useAuthStore((state) => state.isAuth)
   const checkAuth = useAuthStore((state) => state.checkAuth)
   useEffect(() => {
      if(localStorage.getItem('token')) {
         checkAuth(); 
         console.log('check '+ isAuth);
      }
   }, [])
   console.log('check 2 '+ isAuth);

   if(isAuth) {
      return (
         <Routes>
               <Route path='addresses' element={<AddressesPage />} />
               <Route path='notifications' element={<NotificationsPage />} />
               <Route path='profile' element={<ProfilePage />} />
               {/* <Route path='/auth' element={<AuthPage />} /> */}
               <Route path='*' element={<Navigate to='/addresses' />} />
         </Routes>
      )
   } else {
      return (
         <Routes>
            <Route path='/auth' element={<AuthPage />} />
            <Route path='/registration' element={<RegistrationPage />} />
            <Route path='*' element={<Navigate to='/auth' />} />
         </Routes>
      )
   }   
}