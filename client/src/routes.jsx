import React, { useEffect, lazy, Suspense } from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'

import useAuthStore from './store/useAuthStore'

const AddressesPage = lazy(() => import('./pages/AddressesPage.jsx'))
const ProfilePage = lazy(() => import("./pages/ProfilePage.jsx"))
const AuthPage = lazy(() => import("./pages/AuthPage.jsx"))
const NotificationsPage = lazy(() => import("./pages/NotificationsPage.jsx"))
const RegistrationPage = lazy(() => import("./pages/RegistrationPage.jsx"))

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
            <Route path='addresses' element={<Suspense><AddressesPage /></Suspense>} />
            <Route path='notifications' element={<Suspense><NotificationsPage /></Suspense>} />
            <Route path='profile' element={<Suspense><ProfilePage /></Suspense>} />
            <Route path='*' element={<Navigate to='/addresses' />} />
         </Routes>
      )
   } else {
      return (
         <Routes>
            <Route path='/auth' element={<Suspense><AuthPage /></Suspense>} />
            <Route path='/registration' element={<Suspense><RegistrationPage /></Suspense>} />
            <Route path='*' element={<Navigate to='/auth' />} />
         </Routes>
      )
   }   
}