import './index.css'
import { Route, Routes } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetup'
import FavouritesPage from './pages/Favourites'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={ <AllMeetupsPage />} />
        <Route exact path='/new' element={ <NewMeetupPage />} />
        <Route exact path='/favs' element={ <FavouritesPage />} />
      </Routes>
    </Layout>
  )
}

export default App