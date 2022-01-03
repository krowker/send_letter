import { BottomBar } from './components/BottomNavigation'
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { AddressesPage } from './pages/AddressesPage'
import { AuthPage } from './pages/AuthPage'
import { NotificationsPage } from './pages/NotificationsPage'
import { ProfilePage } from './pages/ProfilePage'


export const useRoutes = (isAuthenticated) => {

   isAuthenticated=true

   if (isAuthenticated) {
      return (
         <Routes>
            <Route path='/' element={<BottomBar/>}>
               <Route path='addresses' element={<AddressesPage/>}/>
               <Route path='notifications' element={<NotificationsPage/>}/>
               <Route path='profile' element={<ProfilePage/>}/>
            </Route>
         </Routes>
      )
   }

   return (
      <Routes>
         <Route path='/auth' element={<AuthPage/>} exact/>
      </Routes>
   )
}