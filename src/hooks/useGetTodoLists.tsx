import { useEffect } from 'react';
import { getTodoLists } from '@/api/todo-lists/api';
import { useQuery } from './useQuery';

export const useGetTodoLists = () => {
  const { isLoading, data: todoLists, performQuery: fetchTodoLists } = useQuery(getTodoLists, []);

  useEffect(() => {
    fetchTodoLists();
  }, []);

  return {
    todoLists,
    isLoading,
    fetchTodoLists,
  };
};
