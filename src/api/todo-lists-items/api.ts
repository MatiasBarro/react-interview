import { instance } from '@/api/axios';
import { TodoListItemDto, CreateTodoListItemDto } from '@/api/todo-lists-items/dtos';

export async function getTodoListsItems(todoListId: number) {
  const response = await instance.get<TodoListItemDto[]>(`/todolists/${todoListId}/items`);
  return response.data;
}

export async function createTodoListsItem(todoListId: number, data: CreateTodoListItemDto) {
  const response = await instance.post<TodoListItemDto>(`/todolists/${todoListId}/items`, {
    ...data,
    completed: false,
  });

  return response.data;
}
