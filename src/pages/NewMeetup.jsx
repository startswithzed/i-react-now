import NewMeetupForm from '../components/meetup/NewMeetupForm'

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    const DB_URL = '<DB_URL>'
    fetch(DB_URL,
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  }

  return <section>
    <h1>New Meetup Page</h1>
    <NewMeetupForm onAddNewMeetup={addMeetupHandler} />
  </section>
}

export default NewMeetupPage