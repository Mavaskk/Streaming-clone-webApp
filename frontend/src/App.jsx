import Home from './pages/Home'
import "../src/css/App.css"
import {Routes, Route} from "react-router-dom"
import Favorites from './pages/Favorites'
import Search from './pages/Search'
import NavBar from './components/NavBar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import MovieStreamingPage from './components/MovieStreamingPage'
import MoviePage from './components/MoviePage'


function App() {

  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={ <Home/>}></Route>
      <Route path='/favorites' element={ <Favorites/>}></Route>
      <Route path='/search' element={ <Search/>}></Route>
      <Route path='/movie/streaming/:id' element={ <MovieStreamingPage/>}></Route>
      <Route path='/movie/:id' element={ <MoviePage/>}></Route>
      {/* <Route path='*' element={ <Search/>}></Route>  AGGIUNGERE PAGINA DEL NOT FOUND ERROR 404 */}

    </Routes>
     


    </>
  )
}

export default App
