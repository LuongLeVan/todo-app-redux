import { createSelector } from "reselect"

/* The first way */
/* export  const todoListSelector = (state) => {
    const todoRemaining = state.todoList.filter((todo) => {
       return  todo.name.includes(state.filters.search)    
    })

    return todoRemaining
}

export  const SearchSelector = (state) => state.filters.search */


/* The second way */
export const todoListSelector = (state) => state.todoList
export const SearchSelector = (state) => state.filters.search
export const statusSelector = (state) => state.filters.status
export const prioritySelector = (state) => state.filters.priority


export const todoRemainSelector = createSelector(
    todoListSelector,
    statusSelector,
    SearchSelector,
    prioritySelector,
    (todoList, status, searchText, priorities) => {
        return todoList.filter((todo) => {
            if(status === 'All') {
                return priorities.length ? todo.name.includes(searchText) && priorities.includes(todo.priority) : todo.name.includes(searchText)
            }

                return (
                    todo.name.includes(searchText) && (status === 'Completed' ? todo.completed : !todo.completed) && (priorities.length ? priorities.includes(todo.priority) : true)
                )
            



        })


    }
)

