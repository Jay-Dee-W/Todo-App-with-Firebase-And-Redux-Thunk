import { ADD_TODO, FILTER_TODO, GET_TODOS, TOGGLE_TODO } from '../actions/action-types'

let initialState = {
    todos: [],
    filter: 'All'
}

export default function todoReducer(state = initialState, action) {

    let todosCopy = JSON.parse(JSON.stringify(state.todos))

    switch (action.type) {
        case ADD_TODO:
            console.log(action.payload)
            todosCopy.push({...action.payload })
            return { ...state, todos: todosCopy }
        case TOGGLE_TODO:
            todosCopy[action.payload].completed = !todosCopy[action.payload].completed
            return { ...state, todos: todosCopy }
        case FILTER_TODO:
            return { ...state, filter: action.payload }
        case GET_TODOS:
            todosCopy.push({ ...action.payload })
            return { ...state, todos: todosCopy }
        default:
            return state
    }
}