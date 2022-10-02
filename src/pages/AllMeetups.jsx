import { useState, useEffect } from 'react'

import MeetupList from '../components/meetup/MeetupList'

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])
  const DB_URL = '<DB_URL>'

  useEffect(() => {
    setIsLoading(true)
    fetch(DB_URL).then(response => {
      return response.json()
    }).then(data => {
      const meetups = []
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup)
      }
      setIsLoading(false)
      setLoadedMeetups(meetups)
    })
  }, [])

  if (isLoading) {
    return <section>
      <h1>Loading...</h1>
    </section>
  }

  return <section>
    <h1>All Meetups</h1>
    <MeetupList meetups={loadedMeetups} />
  </section>
}

export default AllMeetupsPage