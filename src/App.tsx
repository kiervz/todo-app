import CreateTodo from "./components/todo/CreateTodo"
import Navbar from "./layouts/Navbar"
import TodoList from "./layouts/TodoList"

const App = () => {
  return (
    <div className="h-screen py-4 px-8 flex flex-col items-center">
      <Navbar />
      <div className="flex flex-col md:w-[600px] justify-center">
        <CreateTodo />
        <TodoList />
      </div>
    </div>
  )
}

export default App
