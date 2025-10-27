import { Navigate, Outlet } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../App'

export const PrivateRoute = () => {



  
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)


  

    return (
        isAuthenticated ? <Outlet/> : <Navigate to='/authentication'/>
    )
}