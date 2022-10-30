import React, { useState } from 'react'
import { Input } from '../common/input';
import { Button } from '../common/button';
import { TodoItem as TodoItemProps } from './types/TodoItem';
import { FaEdit, FaTrashAlt, FaCheck } from 'react-icons/fa';

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, handleDelete, handleEdit }) => {
  const [newTitle, setNewTitle] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (todo.completed === true) {
      setNewTitle(todo.title)
    } else {
      todo.title = '';
      setNewTitle(e.target.value);
    }
  }

  return (
    <div className='flex justify-between mt-4'>
      <Button
          type='button'
          className='border-none outline-none cursor-pointer text-teal-500 p-1 mr-1 hover:bg-teal-500 hover:text-white ease-in duration-300 rounded-full'
          btnIcon={<FaCheck />}
          onClick={() => toggleComplete(todo)}
        />

      <Input
        type='text'
        value={todo.title === '' ? newTitle : todo.title}
        className={`w-full outline-none ${todo.completed ? 'line-through': ''}`}
        onChange={handleChange}
      />

      <div className='flex justify-between gap-2'>
        <Button
          type='button'
          className='border-none outline-none cursor-pointer text-teal-500 p-1 hover:bg-teal-500 hover:text-white ease-in duration-300 rounded-full'
          btnIcon={<FaEdit />}
          onClick={() => handleEdit(todo, newTitle)}
        />
        <Button
          type='button'
          className='border-none outline-none cursor-pointer text-red-500 p-1 hover:bg-teal-500 hover:text-white ease-in duration-300 rounded-full'
          btnIcon={<FaTrashAlt />}
          onClick={() => handleDelete(todo.id)}
        />
      </div>
    </div>
  )
}

export default TodoItem
