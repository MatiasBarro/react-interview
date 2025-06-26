import { TodoList } from '@/api/todo-lists/dtos';
import React, { useState } from 'react';

interface TodoListsContextType {
  selectedTodoList: TodoList | undefined;
  setSelectedTodoList: (todoList: TodoList) => void;
}

export const TodoListsContext = React.createContext<TodoListsContextType>({
  selectedTodoList: undefined,
  setSelectedTodoList: () => {},
});
