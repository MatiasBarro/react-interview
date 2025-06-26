import { getTodoLists } from '@/api/todo-lists/api';
import { TodoList } from '@/api/todo-lists/dtos';
import { useEffect, useState } from 'react';

export const useGetTodoLists = () => {
  const [todoLists, setTodoLists] = useState<TodoList[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodoLists = async () => {
    try {
      setIsLoading(true);
      const todoLists = await getTodoLists();
      setTodoLists(todoLists);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodoLists();
  }, []);

  return {
    todoLists,
    isLoading,
    fetchTodoLists,
  };
};
