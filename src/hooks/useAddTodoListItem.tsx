import { createTodoListsItem } from '@/api/todo-lists-items/api';
import { useMutation } from './useMutation';

export function useAddTodoListItem(todoListId: number) {
  const { isLoading, mutationRequest: addTodoListItem } = useMutation((data) => createTodoListsItem(todoListId, data));

  return {
    isLoading,
    addTodoListItem,
  };
}
