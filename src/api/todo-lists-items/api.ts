import { instance } from '@/api/axios';
import { TodoListItemDto } from '@/api/todo-lists-items/dtos';

export async function getTodoListsItems(todoListId: number) {
  const response = await instance.get<TodoListItemDto[]>(`/todolists/${todoListId}/items`);
  return response.data;
}
