import { GET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO, SET_COMPLETE } from "../constants"

export const setComplete = (id) => ({ type: SET_COMPLETE, payload: id })

export const getTodos = () => {
    return async (dispatch) => {
        dispatch({ type: GET_TODOS, payload: [] })
    }
}

export const addTodo = (dataInput) => {
    return async (dispatch) => {
        dispatch({ type: ADD_TODO, payload: dataInput })
    }
}

export const updateToDo = (id, title) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_TODO, payload: { id, title } })
    }
}

export const deleteTodo = (id) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_TODO, payload: id })
    }
}
