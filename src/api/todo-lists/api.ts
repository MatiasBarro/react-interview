import { instance } from '@/api/axios';
import { TodoList } from '@/api/todo-lists/dtos';

export async function getTodoLists() {
  const response = await instance.get<TodoList[]>('/todolists');
  return response.data;
}
