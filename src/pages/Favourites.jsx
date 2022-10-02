import { useContext } from 'react'

import FavouritesContext from '../store/favourites-context'
import MeetupList from '../components/meetup/MeetupList'

function FavouritesPage() {
  const favouritesCtx = useContext(FavouritesContext)

  let content 

  if (favouritesCtx.totalFavourites === 0) {
    content = <h3>No Favourites. Add Favourites to see them here.</h3>
  } else {
    <MeetupList meetups={favouritesCtx.favourites}/>
  }
  
  return <section>
    <h1>My Favourites</h1>
    {content}
  </section>
}

export default FavouritesPage