import { Link } from 'react-router-dom'

function MainNavigation() {
  return <header>
    <div>Meetups</div>
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