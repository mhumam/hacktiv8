import { GET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO, SET_COMPLETE } from "../constants"

const initialState = [];

function todosReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TODOS:
            return action.payload.map((x) => ({
                ...x,
                completed: false
            }))
        case ADD_TODO:
            const dataInput = { ...action.payload, completed: false }
            return [...state, dataInput]
        case UPDATE_TODO:
            const newData = state?.map((obj) => {
                if (obj?.id === action?.payload?.id) {
                    return { ...obj, id: obj?.id, title: action?.payload?.title }
                }
                return { ...obj }
            });
            return [...newData]
        case DELETE_TODO:
            return state.filter((x) => x.id !== action.payload)
        case SET_COMPLETE:
            return state.map((x) => {
                if (x.id === action.payload) {
                    return {
                        ...x,
                        completed: !x.completed,
                    }
                } else return x
            })
        default:
            return state
    }
}

export default todosReducer
