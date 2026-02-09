import React from 'react'

const TodoListItem = ({task, onToggle, onDelete}) => {

  return (
    <div className='flex justify-center'>
        <input type='checkbox' className="mr-2" checked={task.completed} onChange={() => onToggle(task.id)}/>
        <p className={` ${task.completed ? ' line-through mr-2' : 'mr-2'}`}>{task.text}</p>
        <button className="bg-black text-amber-50 rounded-sm text-sm w-5 h-5" onClick={() => onDelete(task.id)}>X</button>
        
    </div>


  )
}

export default TodoListItem