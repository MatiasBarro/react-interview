import { deleteTodoListsItem } from '@/api/todo-lists-items/api';
import { useMutation } from './useMutation';

export function useDeleteTodoListItem(todoListId: number) {
  const { isLoading, mutationRequest: deleteTodoListItem } = useMutation((itemId: number) =>
    deleteTodoListsItem(todoListId, itemId),
  );

  return {
    isLoading,
    deleteTodoListItem,
  };
}
