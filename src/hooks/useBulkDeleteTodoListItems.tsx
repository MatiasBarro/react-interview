import { bulkDeleteTodoListsItems } from '@/api/todo-lists-items/api';
import { useState } from 'react';

export function useBulkDeleteTodoListItems(todoListId: number) {
  const [isLoading, setIsLoading] = useState(false);

  const bulkDeleteTodoListItems = async () => {
    try {
      setIsLoading(true);
      return await bulkDeleteTodoListsItems(todoListId);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    bulkDeleteTodoListItems,
  };
}
