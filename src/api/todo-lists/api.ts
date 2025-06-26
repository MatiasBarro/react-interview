import { instance } from '@/api/axios';
import { CreateTodoListDto, TodoList } from '@/api/todo-lists/dtos';

export async function getTodoLists() {
  const response = await instance.get<TodoList[]>('/todolists');
  return response.data;
}

export async function createTodoList(data: CreateTodoListDto) {
  const response = await instance.post<TodoList>('/todolists', data);
  return response.data;
}
