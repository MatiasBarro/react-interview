import { createTodoList } from '@/api/todo-lists/api';
import { useMutation } from './useMutation';

export function useAddTodoLists() {
  const { isLoading, mutationRequest: addTodoList } = useMutation(createTodoList);

  return {
    isLoading,
    addTodoList,
  };
}
