import React from 'react';
import { TodoListItemDto } from '@/api/todo-lists-items/dtos';

interface TodoListItemsContextType {
  todoListItems: TodoListItemDto[];
  fetchTodoListItems: () => void;
}

export const TodoListsItemsContext = React.createContext<TodoListItemsContextType>({
  todoListItems: [],
  fetchTodoListItems: () => {},
});
