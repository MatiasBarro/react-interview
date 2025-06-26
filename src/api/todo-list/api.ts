import { instance } from '@/api/axios';
import { TodoList } from '@/api/todo-list/types';

export const getTodoLists = async () => {
  const response = await instance.get<TodoList[]>('/todo-lists');
  return response.data;
};
