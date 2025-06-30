import { useEffect, useState } from "react"
import Todo from './Todo.jsx'
import NewTodo from "./NewTodo.jsx"
import Header from "./Header.jsx"
import Footer from './Footer.jsx'

function App() {
  const [todos, setTodos] = useState([])
  const [hasLoaded, setHasLoaded] = useState(false)
  
  useEffect(() => {
    const todoslist = JSON.parse(localStorage.getItem("todoslist") || "[]")
    
    setTodos(todoslist) // this triggers a re-render
    setHasLoaded(true) // this also

  }, [])

  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem("todoslist", JSON.stringify(todos))
    }
  }, [todos, hasLoaded])
  

  const addTodo = (title) => {
    const newID = String(Math.round(Math.random()*10000))

    const updatedTodos = [...todos, {id: newID, title: title, checked: false}]

    setTodos(updatedTodos)
  }

  const editTodo = (todoID, newTitle) => {
    const updatedTodos = todos.map(todo => {
      return todo.id == todoID ? {...todo, title: newTitle} : todo
    })
    setTodos(updatedTodos)
    
  }

  const deleteTodo = (todoID) => {
    const updatedTodos = todos.filter(todo => {
        return todo.id != todoID
    })
    setTodos(updatedTodos)
    
  }

  const checkTodo = (todoID) => {
    const updatedTodos = todos.map(todo => {
        return todo.id == todoID ? {...todo, checked: !todo.checked} : todo
    })
    setTodos(updatedTodos)
    
  }

  return (
    <>
    <Header title="Rana ka react-app"></Header>
      <div className="parent">
        {
            todos.map((todo, index) => (
                <div key={todo.id}>
                    <Todo 
                    id={todo.id} 
                    title={todo.title} 
                    checked={todo.checked} 
                    deleteTodo={deleteTodo} 
                    checkTodo={checkTodo}
                    editTodo={editTodo}
                    >
                    </Todo>
                </div>
            ))
        }
        <div className="newtodo-div">
          <NewTodo 
            addTodo={addTodo}>
          </NewTodo>
        </div>
        
        </div>
      <Footer></Footer>

        
    </>
  )
  
}

export default App
