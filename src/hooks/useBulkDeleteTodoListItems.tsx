import { bulkDeleteTodoListsItems } from '@/api/todo-lists-items/api';
import { useMutation } from './useMutation';

export function useBulkDeleteTodoListItems(todoListId: number) {
  const { isLoading, mutationRequest: bulkDeleteTodoListItems } = useMutation(() =>
    bulkDeleteTodoListsItems(todoListId),
  );

  return {
    isLoading,
    bulkDeleteTodoListItems,
  };
}
