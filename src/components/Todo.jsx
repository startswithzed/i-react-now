import '../index.css'
import { useState } from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo(props) {
  const [isModalOpen, setModalIsOpen] = useState(false)

  function deleteHandler() {
    console.log(props.title)
    setModalIsOpen(true)
  }

  function closeModalHandler() {
    setModalIsOpen(false)
  }

  return (
    <div className='card'>
      <h2>{props.title}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>Delete</button>
      </div>
      { isModalOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      { isModalOpen && <Backdrop onCancel={closeModalHandler}/>}
    </div>
  )
}

export default Todo

// note 
// can also use ternary syntax { isModalOpen ? <Modal /> : null }