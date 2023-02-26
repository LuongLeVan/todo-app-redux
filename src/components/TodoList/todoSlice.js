const initState = [

    {
        id: 1,
        name: 'Learn React',
        priority: 'Medium',
        completed: true,
    },
    {
        id: 2,
        name: 'Learn Redux',
        priority: 'Low',
        completed: false,
    },
    {
        id: 3,
        name: 'Learn NodeJs',
        priority: 'High',
        completed: false,
    }
]

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [
                ...state,
                action.payload
            ]

        case 'todoList/toggleStatus':
            return (state.map((todo) => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo))
            
        default:
            return state
    }
}

export default todoReducer