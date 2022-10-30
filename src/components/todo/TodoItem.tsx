import React, { useRef, useState } from 'react'
import { Input } from '../common/input';
import { Button } from '../common/button';
import { TodoItem as TodoItemProps } from './types/TodoItem';
import { FaEdit, FaTrashAlt, FaRegSquare, FaCheckSquare, FaSave } from 'react-icons/fa';

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, handleDelete, handleEdit }) => {
  const [newTitle, setNewTitle] = useState(todo.title);
  const [isEdit, setIsEdit] = useState(false);
  const innerRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();


    if (todo.completed) {
      setNewTitle(todo.title)
    } else {
      todo.title = e.target.value;
      setNewTitle(e.target.value);
    }
  }

  const onHandleEdit = () => {
    innerRef?.current?.focus();
    setIsEdit(true)
  }

  const onHandleSave = () => {
    handleEdit(todo, newTitle);
    setIsEdit(false);
  }

  const handlerToggleComplete = () => {
    toggleComplete(todo);
    setIsEdit(false);
  }

  const editSaveClass = () => {
    return `${todo.completed ? 'text-gray-500' : 'hover:bg-teal-500 hover:text-white'}
            border-none outline-none cursor-pointer p-1 ease-in duration-300 rounded-full`;
  }

  return (
    <div className={`flex justify-between mt-2 p-2 ${isEdit ? 'bg-gray-100' : 'bg-white hover:bg-gray-100'}`}>
      <Button
        type='button'
        className='border-none outline-none cursor-pointer text-teal-500 p-1 mr-2 ease-in duration-400'
        btnIcon={todo.completed ? <FaCheckSquare /> : <FaRegSquare />}
        onClick={handlerToggleComplete}
      />
      { isEdit ?
        <Input
          type='text'
          innerRef={innerRef}
          autoFocus
          id={todo.id}
          value={todo.title === '' ? newTitle : todo.title}
          className={`${todo.completed ? 'line-through text-teal-500': ''} w-full outline-none bg-gray-100`}
          onChange={handleChange}
        />
        :
        <label
          className={`${todo.completed ? 'line-through text-teal-500': ''} w-full cursor-pointer outline-none`}
          onClick={() => setIsEdit(todo.completed ? false : true)}
        >
          {todo.title === '' ? newTitle : todo.title}
        </label>
      }
      <div className='flex justify-between gap-2 ml-2'>
        { isEdit ?
          <Button
            type='button'
            isDisabled={todo.completed}
            className={editSaveClass() + ' text-teal-500'}
            btnIcon={<FaSave />}
            onClick={onHandleSave}
          />
          :
          <Button
            type='button'
            isDisabled={todo.completed}
            className={editSaveClass() + ` ${todo.completed ? 'text-gray-500' : 'text-blue-500'}`}
            btnIcon={<FaEdit />}
            onClick={onHandleEdit}
          /> }
        <Button
          type='button'
          className='border-none outline-none cursor-pointer text-red-500 p-1 hover:bg-teal-500
          hover:text-white ease-in duration-300 rounded-full'
          btnIcon={<FaTrashAlt />}
          onClick={() => handleDelete(todo.id)}
        />
      </div>
    </div>
  )
}

export default TodoItem
