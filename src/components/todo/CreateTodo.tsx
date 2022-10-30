import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Button } from '../common/button';
import { Input } from '../common/input';

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        id: +new Date(),
        title,
        completed: false
      });

      setTitle("");
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <form className='flex justify-around' onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder='Title'
        value={title}
        className={`break-words mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-sm
        text-sm shadow-sm placeholder-slate-400
        focus:outline-none ${error ? 'border-red-400 ring-red-400 ring-1' : 'focus:border-teal-500 focus:ring-teal-500 focus:ring-1'}  `}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button
        type='submit'
        btnText='ADD'
        className='bg-teal-500 block mt-1 py-2 px-4 text-white ml-2 rounded-sm'
      />
    </form>
  );
};

export default CreateTodo;
