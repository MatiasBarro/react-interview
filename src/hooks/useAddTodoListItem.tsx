import { useState } from 'react';
import { createTodoListsItem } from '@/api/todo-lists-items/api';
import { CreateTodoListItemDto } from '@/api/todo-lists-items/dtos';

export function useAddTodoListItem(todoListId: number) {
  const [isLoading, setIsLoading] = useState(false);

  const addTodoListItem = async (data: CreateTodoListItemDto) => {
    try {
      setIsLoading(true);
      const item = await createTodoListsItem(todoListId, data);
      return item;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    addTodoListItem,
  };
}
