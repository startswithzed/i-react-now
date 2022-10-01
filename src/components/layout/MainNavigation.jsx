import { Link } from 'react-router-dom'
import NavigationStyles from './MainNavigation.module.css'

function MainNavigation() {
  return <header className={NavigationStyles.header}>
    <div className={NavigationStyles.logo}>Meetups</div>
    <nav>
      <ul>
        <li>
          <Link to='/'>All Meetups</Link>
        </li>
        <li>
          <Link to='/new'>New Meetup</Link>
        </li>
        <li>
          <Link to='/favs'>Favourite Meetups</Link>
        </li>
      </ul>
    </nav>
  </header>
}

export default MainNavigation