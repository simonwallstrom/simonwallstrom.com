import { useState } from 'react'
import { Check, ChevronDown } from 'react-feather'
import { Card } from '../../components/Card'
import PageHeader from '../../components/PageHeader'
import { initialTodos } from '../../data/todo-app'

TodoApp.Favicon = '✅'

export default function TodoApp() {
  const [todos, setTodos] = useState(initialTodos)
  const [todoInput, setTodoInput] = useState('')

  const todosNow = todos.filter(
    (todo) => todo.completed === null && todo.status === 'Now'
  )

  const todosLater = todos.filter(
    (todo) => todo.completed === null && todo.status === 'Later'
  )

  const todosCompleted = todos.filter((todo) => todo.completed !== null)

  const handleSubmit = (e) => {
    if (e.shiftKey && e.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: 5,
          title: todoInput,
          status: 'Later',
          completed: null,
        },
      ])
    } else if (e.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: 5,
          title: todoInput,
          status: 'Now',
          completed: null,
        },
      ])
    }
  }

  return (
    <>
      <PageHeader
        title="Todo app"
        text="A simple and opionated way to manage your tasks."
      />
      <div className="space-y-6 sm:space-y-12">
        <div className="relative custom-todo-box">
          <input
            className="w-full shadow-md rounded-lg py-5 px-6 dark:focus:bg-gray-800 dark:bg-gray-800 dark:border-none dark:ring-inset dark:ring-gray-700 dark:ring-1 focus:outline-none dark:focus:ring-blue-300 focus:ring-blue-600 focus:ring-1"
            placeholder="Add new todo..."
            value={todoInput}
            onKeyPress={handleSubmit}
            onChange={(event) => setTodoInput(event.target.value)}
            type="text"
          />
          <div className="custom-todo-box--submit-info invisible dark:text-white absolute left-6 top-full flex space-x-4 mt-2.5 justify-center">
            <div className="text-xs space-x-1">
              <span className="bg-gray-100 dark:bg-gray-700 font-medium py-px rounded px-1">
                Enter
              </span>
              <span>= Today</span>
            </div>
            <div className="text-xs space-x-1">
              <span className="bg-gray-100 dark:bg-gray-700 font-medium py-px rounded px-1">
                ⇧
              </span>
              <span className="bg-gray-100 dark:bg-gray-700 font-medium py-px rounded px-1">
                Enter
              </span>
              <span>= Later</span>
            </div>
          </div>
        </div>
        <Card>
          <div className="min-w-full">
            <div className="px-4 flex justify-between items-center py-4 sm:px-6">
              <h2 className="text-base font-medium flex items-center text-gray-400 space-x-3">
                <ChevronDown size={16} />
                <span>Todays</span>
              </h2>
              <span className="text-sm text-gray-400">{todosNow.length}</span>
            </div>
            <ul className="divide-y border-t border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700">
              {todosNow.map((todo) => (
                <li key={todo.id}>
                  <label
                    className="flex px-4 py-3 sm:px-6 items-center space-x-3 focus-within:bg-gray-900 hover:bg-gray-900 focus-within:bg-opacity-30 hover:bg-opacity-30 mx-px"
                    htmlFor={todo.id}
                  >
                    <input
                      id={todo.id}
                      className="border-gray-600 checked:bg-blue-500 focus:checked:bg-blue-500 focus:ring-blue-500 focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-800 hover:checked:bg-blue-500 bg-gray-800 rounded"
                      type="checkbox"
                    />
                    <span>{todo.title}</span>
                  </label>
                </li>
              ))}
            </ul>
            <div className="flex border-t border-gray-100 dark:border-gray-700 items-center justify-between px-4 py-4 sm:px-6">
              <h2 className="text-base font-medium flex text-gray-400 items-center space-x-1.5">
                <ChevronDown size={16} />
                <span>Later</span>
              </h2>
              <span className="text-sm text-gray-400">{todosLater.length}</span>
            </div>
            <ul className="divide-y border-t border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700">
              {todosLater.map((todo) => (
                <li key={todo.id} className="px-4 py-3 sm:px-6">
                  <label
                    className="flex items-center space-x-2"
                    htmlFor={todo.id}
                  >
                    <input
                      id={todo.id}
                      className="border-gray-300"
                      type="checkbox"
                    />
                    <span>{todo.title}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </Card>
        <Card>
          <div className="min-w-full">
            <div className="px-4 flex justify-between items-center py-4 sm:px-6">
              <h2 className="text-base text-gray-400 font-medium flex items-center space-x-2.5">
                <ChevronDown size={16} />
                <span>Completed</span>
              </h2>
              <span className="text-sm text-gray-400">
                {todosCompleted.length}
              </span>
            </div>
            <div className="px-4 flex border-t dark:border-gray-700 justify-between items-center py-4 sm:px-6">
              <div className="font-mono text-xs tracking-wide text-gray-500 uppercase sm:text-sm">
                Today
              </div>
            </div>
            <ul className="divide-y border-t border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700">
              {todosCompleted.map((todo) => (
                <li key={todo.id} className="px-4 py-3 sm:px-6">
                  <label
                    className="flex items-center space-x-2"
                    htmlFor={todo.id}
                  >
                    <input
                      id={todo.id}
                      defaultChecked={true}
                      className="border-gray-300"
                      type="checkbox"
                    />
                    <span className="line-through text-gray-400">
                      {todo.title}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
            <div className="px-4 flex border-t dark:border-gray-700 justify-between items-center py-4 sm:px-6">
              <div className="font-mono text-xs tracking-wide text-gray-500 uppercase sm:text-sm">
                Yesterday
              </div>
            </div>
            <ul className="divide-y border-t border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700">
              {todosCompleted.map((todo) => (
                <li key={todo.id} className="px-4 py-3 sm:px-6">
                  <label
                    className="flex items-center space-x-2"
                    htmlFor={todo.id}
                  >
                    <input
                      id={todo.id}
                      defaultChecked={true}
                      className="border-gray-300"
                      type="checkbox"
                    />
                    <span className="line-through text-gray-400">
                      {todo.title}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
            <div className="px-4 flex border-t dark:border-gray-700 justify-between items-center py-4 sm:px-6">
              <div className="font-mono text-xs tracking-wide text-gray-500 uppercase sm:text-sm">
                2021-11-19
              </div>
            </div>
            <ul className="divide-y border-t border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700">
              {todosCompleted.map((todo) => (
                <li key={todo.id} className="px-4 py-3 sm:px-6">
                  <label
                    className="flex items-center space-x-2"
                    htmlFor={todo.id}
                  >
                    <input
                      id={todo.id}
                      defaultChecked={true}
                      className="border-gray-300"
                      type="checkbox"
                    />
                    <span className="line-through text-gray-400">
                      {todo.title}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </>
  )
}
