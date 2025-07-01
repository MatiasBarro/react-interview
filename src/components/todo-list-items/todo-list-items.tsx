import { useContext } from 'react';
import { Loader2Icon } from 'lucide-react';
import { TodoListsContext } from '@/contexts/todo-lists-context';
import { AddTodoListItem } from '@/components/todo-list-items/add-todo-list-item';
import { useGetTodoListItems } from '@/hooks/useGetTodoListItems';
import { TodoListItemList } from './todo-list-item-list';
import { TodoListsItemsContext } from '@/contexts/todo-list-items-context';

export function TodoListItems() {
  const { selectedTodoList } = useContext(TodoListsContext);
  const { isLoading, todoListItems, fetchTodoListItems } = useGetTodoListItems(selectedTodoList?.id ?? 0);

  if (!selectedTodoList) {
    return (
      <div className='text-center w-full'>
        <h1 className='text-2xl text-muted-foreground '>No list selected</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='flex justify-center w-full'>
        <Loader2Icon className='animate-spin w-10 h-10' />
      </div>
    );
  }

  return (
    <TodoListsItemsContext.Provider value={{ todoListItems, fetchTodoListItems }}>
      <div className='flex flex-col gap-4 max-w-xl'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='text-3xl font-bold'>Items</h1>
          <AddTodoListItem />
        </div>
        <TodoListItemList />
      </div>
    </TodoListsItemsContext.Provider>
  );
}
