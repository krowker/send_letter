import {useLocation, Navigate} from 'react-router-dom'
import { useContext, useEffect } from 'react' 
import { Context } from '../index'


const RequireAuth =({children})=> {
   const { store } = useContext(Context)
   useEffect(() => {
      if (localStorage.getItem('token')) {
         store.checkAuth()
      }
   }, [])

   const location = useLocation()
   const auth = store.isAuth

   if (!auth) {
      return <Navigate to='/auth' state={{from: location}}/>
   }

   return children
}

export {RequireAuth}