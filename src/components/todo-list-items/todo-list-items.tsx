import { TodoListsContext } from '@/contexts/todo-lists-context';
import { useGetTodoListItems } from '@/hooks/useGetTodoListItems';
import { Loader2Icon } from 'lucide-react';
import { useContext } from 'react';
import { AddTodoListItem } from './add-todo-list-item';

export function TodoListItems() {
  const { selectedTodoList } = useContext(TodoListsContext);
  const { isLoading, fetchTodoListsItems } = useGetTodoListItems(selectedTodoList?.id ?? 0);

  if (!selectedTodoList) {
    return (
      <div className='text-center w-full pt-10'>
        <h1 className='text-2xl text-muted-foreground '>No list selected</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='flex justify-center w-full pt-10'>
        <Loader2Icon className='animate-spin w-10 h-10' />
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-4 pt-10'>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='text-3xl font-bold'>Items</h1>
        <AddTodoListItem onSuccess={fetchTodoListsItems} />
      </div>
    </div>
  );
}
