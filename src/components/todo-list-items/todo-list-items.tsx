import { useContext } from 'react';
import { Loader2Icon } from 'lucide-react';
import { useGetTodoListItems } from '@/hooks/useGetTodoListItems';
import { TodoListsContext } from '@/contexts/todo-lists-context';
import { AddTodoListItem } from '@/components/todo-list-items/add-todo-list-item';
import { TodoListItem } from '@/components/todo-list-items/todo-list-item';
import { Separator } from '@/components/ui/separator';

export function TodoListItems() {
  const { selectedTodoList } = useContext(TodoListsContext);
  const { isLoading, todoListsItems, fetchTodoListsItems } = useGetTodoListItems(selectedTodoList?.id ?? 0);

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
    <div className='flex flex-col gap-4 max-w-xl'>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='text-3xl font-bold'>Items</h1>
        <AddTodoListItem onSuccess={fetchTodoListsItems} />
      </div>
      {todoListsItems.map((item, idx) => (
        <>
          <TodoListItem key={item.id} item={item} />
          {idx !== todoListsItems.length - 1 && <Separator />}
        </>
      ))}
    </div>
  );
}
