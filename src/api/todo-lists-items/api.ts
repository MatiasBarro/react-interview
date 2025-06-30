import { instance } from '@/api/axios';
import { TodoListItemDto, CreateTodoListItemDto, UpdateTodoListItemDto } from '@/api/todo-lists-items/dtos';

export async function getTodoListsItems(todoListId: number) {
  const response = await instance.get<TodoListItemDto[]>(`/todolists/${todoListId}/items`);
  return response.data;
}

export async function createTodoListsItem(todoListId: number, data: CreateTodoListItemDto) {
  const response = await instance.post<TodoListItemDto>(`/todolists/${todoListId}/items`, data);

  return response.data;
}

export async function updateTodoListsItem(todoListId: number, itemId: number, data: UpdateTodoListItemDto) {
  const response = await instance.patch<TodoListItemDto>(`/todolists/${todoListId}/items/${itemId}`, data);

  return response.data;
}

export async function deleteTodoListsItem(todoListId: number, itemId: number) {
  return instance.delete(`/todolists/${todoListId}/items/${itemId}`);
}
