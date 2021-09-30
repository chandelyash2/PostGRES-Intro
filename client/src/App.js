import React from 'react'
import InputTodo from './components/inputTodo'
import TodoList from './components/todoList'
function App() {
  return (
    <div className='container mt-5 d-flex align-items-center justify-content-center flex-column'>
      <InputTodo/>
      <TodoList/>
    </div>
  )
}

export default App
