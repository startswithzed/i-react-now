import './index.css'
import Todo from './components/Todo'

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title='First todo'/>
      <Todo title='Second todo'/>
      <Todo title='Third todo'/>
    </div>
  )
}

export default App