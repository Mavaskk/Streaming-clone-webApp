import Home from './pages/Home'
import "../src/css/App.css"
import {Routes, Route} from "react-router-dom"
import Favorites from './pages/Favorites'
import Search from './pages/Search'
import NavBar from './components/NavBar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import MovieStreamingPage from './components/MovieStreamingPage'
import MoviePage from './components/MoviePage'
import { useState,useEffect } from 'react'
import NotAuthenticatedPage from './pages/NotAuthenticatedPage'
import { PrivateRoute } from './components/PrivateRoute'
import { createContext, useContext } from 'react'

	
export const AuthContext = createContext()

function App() {


	const [isAuthenticated,setIsAuthenticated] = useState(() => {return !!localStorage.getItem("__nctoken__")}) //!! trasforma valore in bool e per capire se utente gia loggato


	return (
		<>
		<NavBar></NavBar>
		
			<AuthContext.Provider value={{isAuthenticated,setIsAuthenticated}}>

					<Routes>
						<Route element={<PrivateRoute/>}>
							<Route path='/' element={ <Home/>}></Route>
							<Route path='/favorites' element={ <Favorites/>}></Route>
							<Route path='/search' element={ <Search/>}></Route>
							<Route path='/movie/streaming/:id' element={ <MovieStreamingPage/>}></Route>
							<Route path='/movie/:id' element={ <MoviePage/>}></Route>


						</Route>

						<Route path='/authentication' element={<NotAuthenticatedPage/>}  ></Route>
						{/* <Route path='*' element={ <Search/>}></Route>  AGGIUNGERE PAGINA DEL NOT FOUND ERROR 404 */}

					</Routes>				
			</AuthContext.Provider>

		 


		</>
	)
}

export default App
