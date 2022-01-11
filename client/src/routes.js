import React from 'react'
import { BottomBar } from './components/BottomNavigation'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AddressesPage } from './pages/AddressesPage'
import { AuthPage } from './pages/AuthPage'
import { NotificationsPage } from './pages/NotificationsPage'
import { ProfilePage } from './pages/ProfilePage'
import { RegistrationPage } from './pages/RegistrationPage'


export const useRoutes = (isAuthenticated) => {

   isAuthenticated = false

   if (isAuthenticated) {
      return (
         <Routes>
            <Route path='/' element={<BottomBar />}>
               <Route path='addresses' element={<AddressesPage />} />
               <Route path='notifications' element={<NotificationsPage />} />
               <Route path='profile' element={<ProfilePage />} />
               <Route path='*' element={<Navigate to='/addresses' />} />
            </Route>
         </Routes>
      )
   }

   return (
      <Routes>
         <Route path='/auth' element={<AuthPage />} />
         <Route path='/registration' element={<RegistrationPage />} />
         <Route path='*' element={<Navigate to='/auth' />} />
      </Routes>
   )
}