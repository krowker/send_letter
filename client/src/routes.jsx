import React, { useEffect, lazy, Suspense } from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'

import { AddressesPage } from './pages/AddressesPage'
import { AuthPage } from './pages/AuthPage'
import { NotificationsPage } from './pages/NotificationsPage'
// import { ProfilePage } from './pages/ProfilePage'
import { RegistrationPage } from './pages/RegistrationPage'

import useAuthStore from './store/useAuthStore'

const ProfilePage = lazy(() => 
   import("./pages/ProfilePage").then(module => {
      return{default: module.ProfilePage}
   })
)


export function useRoutes() {
   const checkAuth = useAuthStore((state) => state.checkAuth)
   useEffect(() => {
      if(!localStorage.getItem('token')) return

      checkAuth(); 
   }, [])

   const isAuth = useAuthStore((state) => state.isAuth)
   
   if(isAuth) {
      return (
         <Routes>
               <Route path='addresses' element={<AddressesPage />} />
               <Route path='notifications' element={<NotificationsPage />} />
               {/* <Suspense fallback={<h1>Loading...</h1>}><ProfilePage /></Suspense> */}
               <Route path='profile' element={<Suspense fallback={<h1>Loading...</h1>}><ProfilePage /></Suspense>} />
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