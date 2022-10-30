import React from "react";
import { Todo } from "./Todo";

export interface TodoItem {
  todo: Todo,
  toggleComplete: (todo: Todo) => void,
  handleDelete: (todoId: string) => void,
  handleEdit: (todo: Todo, newTitle: string) => void
}
