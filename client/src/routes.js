import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { AddressesPage } from './pages/AddressesPage'
import { AuthPage } from './pages/AuthPage'
import { NotificationsPage } from './pages/NotificationsPage'
import { ProfilePage } from './pages/ProfilePage'


export const useRoutes = (isAuthenticated) => {
   if (isAuthenticated) {
      return (
         <Routes>
            <Route path='/addresses' element={<AddressesPage/>} exact>
               
            </Route>
            <Route path='/notifications' element={<NotificationsPage/>} exact>
            </Route>
            <Route path='/profile' element={<ProfilePage/>} exact>
            </Route>
         </Routes>
      )
   }

   return (
      <Routes>
         <Route path='/' element={<AuthPage/>} exact>
         </Route>
      </Routes>
   )
}