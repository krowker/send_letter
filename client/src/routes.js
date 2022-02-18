import React, { useContext, useEffect} from 'react'
import { BottomBar } from './components/BottomNavigation'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AddressesPage } from './pages/AddressesPage'
import { AuthPage } from './pages/AuthPage'
import { NotificationsPage } from './pages/NotificationsPage'
import { ProfilePage } from './pages/ProfilePage'
import { RegistrationPage } from './pages/RegistrationPage'
import { Context } from './index'


export function useRoutes() {

   const { store } = useContext(Context)

   useEffect(() => {
     if (localStorage.getItem('token')) {
       store.checkAuth()
     }
   }, [])
   console.log(store.isAuth);


   if (store.isLoading){
      return(
         <div>
            Loading////
         </div>
      )
   }
   if (store.isAuth) {
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