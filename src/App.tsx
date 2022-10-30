import CreateTodo from "./layouts/CreateTodo"
import Navbar from "./layouts/Navbar"
import TodoList from "./layouts/TodoList"

const App = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <CreateTodo />
      <TodoList />
    </div>
  )
}

export default App
