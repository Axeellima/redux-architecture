export default function tasks(state = [], action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: Math.random(), text: action.text }]
    default:
      return state
  }
}
