import './index.css'
import { Route, Routes } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetup'
import FavouritesPage from './pages/Favourites'
import MainNavigation from './components/layout/MainNavigation'

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route exact path='/' element={ <AllMeetupsPage />} />
        <Route exact path='/new' element={ <NewMeetupPage />} />
        <Route exact path='/favs' element={ <FavouritesPage />} />
      </Routes>
    </div>
  )
}

export default App