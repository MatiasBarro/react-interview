import { useState } from 'react';
import { deleteTodoListsItem } from '@/api/todo-lists-items/api';

export function useDeleteTodoListItem(todoListId: number) {
  const [isLoading, setIsLoading] = useState(false);

  const deleteTodoListItem = async (itemId: number) => {
    try {
      setIsLoading(true);
      await deleteTodoListsItem(todoListId, itemId);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    deleteTodoListItem,
  };
}
