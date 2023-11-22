import { bindActionCreators } from "@reduxjs/toolkit"
import * as taskActions from "../actions/todos.js"
import { connect } from "react-redux"
import { useState } from "react"
function TodoList({ tasks, addTask }) {
  const [text, setText] = useState("")
  return (
    <div>
      <ul>
        {tasks.map((el) => (
          <li key={el.id}>{el.text}</li>
        ))}
      </ul>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={() => {
          addTask(text)
        }}
      >
        Nova tarefa
      </button>
    </div>
  )
}
const mapStateToProps = (state) => ({
  tasks: state.tasks,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(taskActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
