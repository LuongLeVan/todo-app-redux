
export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchTodo = (text) => {
  return {
    type: "filters/searchTodo",
    payload: text,
  };
};

export const filterByStatus = (status) => {
  return {
    type: "filters/statusTodo",
    payload: status,
  };
};

export const filterByPriorities = (value) => {
  return {
    type: "filters/prioritiesTodo",
    payload: value,
  };
};

export const handleToggleStatus = (todoId) => {
  return {
    type: "todoList/toggleStatus",
    payload: todoId
  };
};