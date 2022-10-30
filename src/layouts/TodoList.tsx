import React, { useEffect, useState } from 'react';
import TodoItem from '../components/todo/TodoItem';
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';
import { db } from '../firebase';
import { Todo } from '../components/todo/types';

const TodoList = () => {
  const [todos, setTodos] = useState([] as any);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray: any[] = [];

      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });

      setTodos(todosArray);
    })

    return () => unsub();
  }, []);

  const handleEdit = async (todo: Todo, title: Todo['title']) => {
    await updateDoc(doc(db, "todos", todo.id), { title });
  }

  const handleDelete = async (id: Todo['id']) => {
    await deleteDoc(doc(db, "todos", id));
  }

  const toggleComplete = async (todo: Todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed
    });
  }

  return (
    <>
      {todos.map((todo: Todo, i: number) =>
        <TodoItem
          todo={todo}
          key={i}
          toggleComplete={toggleComplete}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default TodoList;
