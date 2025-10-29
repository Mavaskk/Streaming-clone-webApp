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
import { PrivateRoute } from './components/PrivateRoute'
import { createContext,  } from 'react'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'

	
export const AuthContext = createContext()
export const watchListContext = createContext()

function App() {

	const [watchList,setWatchList] = useState([])
	const [isAuthenticated,setIsAuthenticated] = useState(() => {return !!localStorage.getItem("__nctoken__")}) //!! trasforma valore in bool e per capire se utente gia loggato
	// per il logout controllare quando il valore sul local storage cambia cambio isAuthenticated

	return (
		<>
			<AuthContext.Provider value={{isAuthenticated,setIsAuthenticated}}>
				<NavBar></NavBar>		
				<watchListContext.Provider value={{watchList,setWatchList}}>
					<Routes>
						<Route element={<PrivateRoute/>}>
							<Route path='/' element={ <Home/>}></Route>
							<Route path='/favorites' element={ <Favorites/>}></Route>
							<Route path='/search' element={ <Search/>}></Route>
							<Route path='/movie/streaming/:id' element={ <MovieStreamingPage/>}></Route>
							<Route path='/movie/:id' element={ <MoviePage/>}></Route>
						</Route>

						<Route path='/authentication/login' element={<LoginForm/>}  ></Route>
						<Route path='/authentication/signup' element={<SignUpForm/>}  ></Route>
						{/* <Route path='*' element={ <Search/>}></Route>  AGGIUNGERE PAGINA DEL NOT FOUND ERROR 404 */}
					</Routes>									
				</watchListContext.Provider>



			</AuthContext.Provider>

		 


		</>
	)
}

export default App
