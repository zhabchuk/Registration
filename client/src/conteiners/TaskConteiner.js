import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '../components/Category';
import { actionCreateTodo, actionRemoveAllTodos, actionSetTodosLocalStorage } from '../store/category';
import { actionShowModal } from '../store/modals';


export default function TaskConteiner() {

    const todos = useSelector((state) => state.categoryReducer);

    const [change, setChange] = useState('');

    const handlerChangeInput = (e) => {
        setChange(e.target.value)
    }
    const dispatch = useDispatch();

    const handlerAddTodo = () => {
        const data = {
            title: change,
            id: Date.now()
        }
        dispatch(actionCreateTodo(data))
        setChange('')
    };


    const handlerDeleteTodo = (idTodo, titleTodo) => {
        dispatch(actionShowModal({ name: 'ModalDelete', id: idTodo, title: titleTodo }))
    };

    // const showModalEditTask = (taskId) => {
    //     dispatch(actionShowModal({name: 'ModalEditTask', taskId }))
    // };

    const saveTodoLocalStorage = () => {
        window.localStorage.setItem('todos', JSON.stringify(todos))
    };

    const getTodoLocalStorage = () => {
        const getTodo = window.localStorage.getItem('todos');
        const { task } = JSON.parse(getTodo)
        dispatch(actionSetTodosLocalStorage(task))
    };

    const componentDidMounte = () => {
        getTodoLocalStorage()
    };

    const removeAllTodoLocalStorage = () => {
        window.localStorage.removeItem('todos')
        dispatch(actionRemoveAllTodos())
    };


    return <Task
    todos={todos}
    saveTodoLocalStorage={saveTodoLocalStorage}
    componentDidMounte={componentDidMounte}
    // showModalEditTask={showModalEditTask}
    getTodoLocalStorage={getTodoLocalStorage}
    removeAllTodoLocalStorage={removeAllTodoLocalStorage}
    change={change}
    handlerChangeInput={handlerChangeInput}
    handlerAddTodo={handlerAddTodo}
    handlerDeleteTodo={handlerDeleteTodo}/>
};