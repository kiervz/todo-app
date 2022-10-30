import CreateTodo from "./components/todo/CreateTodo"
import Navbar from "./layouts/Navbar"
import TodoList from "./layouts/TodoList"

const App = () => {
  return (
    <div className="h-screen py-4 px-8">
      <Navbar />
      <CreateTodo />
      <TodoList />
    </div>
  )
}

export default App
