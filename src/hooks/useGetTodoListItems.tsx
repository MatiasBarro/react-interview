import { useEffect, useState } from 'react';
import { getTodoListsItems } from '@/api/todo-lists-items/api';
import { TodoListItemDto } from '@/api/todo-lists-items/dtos';

export function useGetTodoListItems(todoListId: number) {
  const [todoListItems, setTodoListItems] = useState<TodoListItemDto[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodoListItems = async () => {
    try {
      setIsLoading(true);
      const items = await getTodoListsItems(todoListId);
      setTodoListItems(items);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!todoListId) {
      return;
    }

    fetchTodoListItems();
  }, [todoListId]);

  return {
    todoListItems,
    isLoading,
    fetchTodoListItems,
  };
}
