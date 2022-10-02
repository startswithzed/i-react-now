import { useNavigate } from 'react-router-dom'

import NewMeetupForm from '../components/meetup/NewMeetupForm'

function NewMeetupPage() {
  const navigateTo = useNavigate()

  function addMeetupHandler(meetupData) {
    const DB_URL = '<DB_URL>'
    fetch(DB_URL,
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        navigateTo('/', { replace: true })
      })
  }

  return <section>
    <h1>New Meetup Page</h1>
    <NewMeetupForm onAddNewMeetup={addMeetupHandler} />
  </section>
}

export default NewMeetupPage