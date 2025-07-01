import { updateTodoListsItem } from '@/api/todo-lists-items/api';
import { UpdateTodoListItemDto } from '@/api/todo-lists-items/dtos';
import { useMutation } from './useMutation';

export function useUpdateTodoListItem(todoListId: number) {
  const { isLoading, mutationRequest: updateTodoListItem } = useMutation(
    (itemId: number, data: UpdateTodoListItemDto) => updateTodoListsItem(todoListId, itemId, data),
  );

  return {
    isLoading,
    updateTodoListItem,
  };
}
