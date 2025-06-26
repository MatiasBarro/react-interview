import { createTodoList } from '@/api/todo-lists/api';
import { CreateTodoListDto } from '@/api/todo-lists/dtos';
import { useState } from 'react';

export function useAddTodoLists() {
  const [isLoading, setIsLoading] = useState(false);

  const addTodoList = async (data: CreateTodoListDto) => {
    try {
      setIsLoading(true);
      const todoList = await createTodoList(data);
      return todoList;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    addTodoList,
  };
}
