import { useContext } from 'react'
import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'
import FavouritesContext from '../../store/favourites-context'

function MainNavigation() {
  const favouritesCtx = useContext(FavouritesContext)
  
  return <header className={classes.header}>
    <div className={classes.logo}>Meetups</div>
    <nav>
      <ul>
        <li>
          <Link to='/'>All Meetups</Link>
        </li>
        <li>
          <Link to='/new'>New Meetup</Link>
        </li>
        <li>
          <Link to='/favs'>Favourite Meetups
          <span className={classes.badge}>{favouritesCtx.totalFavourites}</span>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
}

export default MainNavigation