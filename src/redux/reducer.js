import filtersReducer from "../components/Filters/filtersSlice"
import todoReducer from "../components/TodoList/todoSlice"
import { combineReducers } from "redux"


/* The first way */
/* const rootReducer = (state = {}, action) => {
        return {
          filters: filtersReducer(state.filters, action),
          todoList: todoReducer(state.todoList, action)
        }
        
} */

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoReducer
})

export default rootReducer