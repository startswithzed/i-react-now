import { useContext } from 'react'

import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavouritesContext from '../../store/favourites-context'


function MeetupItem(props) {
  const favouritesContext = useContext(FavouritesContext)

  const isItemFavourite = favouritesContext.itemIsFavourite(props.id)

  function toggleFavouritesStatusHandler() {
    if (isItemFavourite) {
      favouritesContext.removeFavourite(props.id)
    } else {
      favouritesContext.addFavourite({
        id: props.id,
        title: props.title,
        desc: props.desc,
        image: props.image,
        address: props.address
      })
    }
  }

  return <li className={classes.item}>
    <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.desc}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleFavouritesStatusHandler}>{isItemFavourite ? 'Remove Favourite' : 'Add FAvourite'}</button>
      </div>
    </Card>
  </li>
}

export default MeetupItem