import React, { useState } from 'react'
import TodoListItem from './TodoListItem';

const TodoList = () => {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "First Task",
            completed: true
        },
        {
            id: 2,
            text: "Second Task",
            completed: false
        }]);
    
    const [newTask, setNewTask] = useState('');
    
    function addTask(t) {    
        setTasks(
            [...tasks, {id: new Date(), text: t.trim() , completed: false}]
        );
        setNewTask('');
    }

    const toggleTask = (id) => {
       setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed}  : task )  )  
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

  return (
    <div className='grid content-center '>
    <div className=' flex justify-center m-4'>TodoList</div>
    <div className=' flex justify-center m-2'>
       <input className='bg-neutral-300 border text-sm focus:ring-2 px-3 py-2.5 shadow-xs ' type='text' value={newTask} onChange={(e) => setNewTask(e.target.value) } />
       <button className='bg-amber-200 p-2 m-2' onClick={() => addTask(newTask)}>Add</button>        
    </div>

    <div className=' m-2'>
        {tasks.map((task) => (
            <TodoListItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask}/>
        ))}
    </div>
    
    </div>

  )
}

export default TodoList