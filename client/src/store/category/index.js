const initState = {
  task: [],
};

const actionType = {
  ADD_TASK: "ADD_TASK",
  DELEIE_TASK: "DELETE_TASK",
  SET_TODOS_LOCALSTORAGE: "SET_TODOS_LOCALSTORAGE",
  REMOVE_ALL_TODOS: "REMOVE_ALL_TODOS",
  EDIT_TASK: "EDIT_TASK",
};

export const actionCreateTodo = (payload) => {
  return {
    type: actionType.ADD_TASK,
    payload,
  };
};

export const actionDeleteTodo = (payload) => {
  return {
    type: actionType.DELEIE_TASK,
    payload,
  };
};

export const actionSetTodosLocalStorage = (payload) => {
  return {
    type: actionType.SET_TODOS_LOCALSTORAGE,
    payload,
  };
};

export const actionRemoveAllTodos = () => {
  return {
    type: actionType.REMOVE_ALL_TODOS,
  };
};

export const actionEditTask = (payload) => {
  return {
    type: actionType.EDIT_TASK,
    payload,
  };
};

export default function taskReducer(state = initState, action) {
  switch (action.type) {
    case actionType.ADD_TASK:
      return { ...state, task: [...state.task, action.payload] };
    case actionType.DELEIE_TASK:
      return {
        ...state,
        task: state.task.filter((item) => item.id !== action.payload),
      };
    case actionType.SET_TODOS_LOCALSTORAGE:
      return { ...state, task: [...state.task, ...action.payload] };
    case actionType.REMOVE_ALL_TODOS:
      return { ...state, task: [] };
    case actionType.EDIT_TASK:
      return {
        ...state,
        task: state.task.map((item) =>
          item.id === action.payload.taskId
            ? { ...item, title: action.payload.title }
            : item
        ),
      };
    default:
      return state;
  }
}
