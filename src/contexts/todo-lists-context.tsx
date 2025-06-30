import { TodoListDto } from '@/api/todo-lists/dtos';
import React from 'react';

interface TodoListsContextType {
  selectedTodoList: TodoListDto | undefined;
  setSelectedTodoList: (todoList: TodoListDto) => void;
}

export const TodoListsContext = React.createContext<TodoListsContextType>({
  selectedTodoList: undefined,
  setSelectedTodoList: () => {},
});
