import { instance } from '@/api/axios';
import { CreateTodoListDto, TodoListDto } from '@/api/todo-lists/dtos';

export async function getTodoLists() {
  const response = await instance.get<TodoListDto[]>('/todolists');
  return response.data;
}

export async function createTodoList(data: CreateTodoListDto) {
  const response = await instance.post<TodoListDto>('/todolists', data);
  return response.data;
}
