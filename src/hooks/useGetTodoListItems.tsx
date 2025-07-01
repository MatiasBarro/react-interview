import { useEffect } from 'react';
import { getTodoListsItems } from '@/api/todo-lists-items/api';
import { useQuery } from './useQuery';

export function useGetTodoListItems(todoListId: number) {
  const {
    isLoading,
    data: todoListItems,
    performQuery: fetchTodoListItems,
  } = useQuery(() => getTodoListsItems(todoListId), []);

  useEffect(() => {
    if (!todoListId) {
      return;
    }

    fetchTodoListItems();
  }, [todoListId]);

  return {
    todoListItems,
    isLoading,
    fetchTodoListItems,
  };
}
