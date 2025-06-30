import { useState } from 'react';
import { updateTodoListsItem } from '@/api/todo-lists-items/api';
import { UpdateTodoListItemDto } from '@/api/todo-lists-items/dtos';

export function useUpdateTodoListItem(todoListId: number) {
  const [isLoading, setIsLoading] = useState(false);

  const updateTodoListItem = async (itemId: number, data: UpdateTodoListItemDto) => {
    try {
      setIsLoading(true);
      const item = await updateTodoListsItem(todoListId, itemId, data);
      return item;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    updateTodoListItem,
  };
}
