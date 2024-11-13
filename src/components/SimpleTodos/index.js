import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Wakeup at 5 o clock ',
  },
  {
    id: 2,
    title: 'Learn new topics and make them a note',
  },
  {
    id: 3,
    title: 'Make a Call to family members',
  },
  {
    id: 4,
    title: 'Write diary',
  },
  {
    id: 5,
    title: 'Do exercises and Yoga',
  },
  {
    id: 6,
    title: 'Eat healthy food and maintain diet',
  },
  {
    id: 7,
    title: 'Confirm my health checkup slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials On Sunday',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
  }

  deleteTodo = id => {
    const {todosList} = this.state

    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setstate({
      todosList: updatedTodosList,
    })
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
