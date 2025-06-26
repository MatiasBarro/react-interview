import { useEffect, useState } from 'react';
import { getTodoListsItems } from '@/api/todo-lists-items/api';
import { TodoListItemDto } from '@/api/todo-lists-items/dtos';

export function useGetTodoListItems(todoListId: number) {
  const [todoListsItems, setTodoListsItems] = useState<TodoListItemDto[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodoListsItems = async () => {
    try {
      setIsLoading(true);
      const todoListsItems = await getTodoListsItems(todoListId);
      setTodoListsItems(todoListsItems);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodoListsItems();
  }, [todoListId]);

  return {
    todoListsItems,
    isLoading,
    fetchTodoListsItems,
  };
}
