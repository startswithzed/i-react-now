import './index.css'
import Todo from './components/Todo'
import Modal from './components/Modal'
import Backdrop from './components/Backdrop'

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title='First todo'/>
      <Todo title='Second todo'/>
      <Todo title='Third todo'/>
      <Modal />
      <Backdrop />
    </div>
  )
}

export default App