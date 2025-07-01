import { useContext, useState } from 'react';
import { Loader2Icon } from 'lucide-react';
import { TodoListsContext } from '@/contexts/todo-lists-context';
import { AddTodoListItem } from '@/components/todo-list-items/add-todo-list-item';
import { useGetTodoListItems } from '@/hooks/useGetTodoListItems';
import { TodoListItemList } from './todo-list-item-list';
import { TodoListsItemsContext } from '@/contexts/todo-list-items-context';
import { BulkDeleteTodoListItemsModal } from '@/components/todo-list-items/bulk-delete-todo-list-items-modal';
import { BulkDeleteTodoListItemsTaskDto } from '@/api/todo-lists-items/dtos';
import { pollApi } from '@/lib/polling';
import { getBulkDeleteTodoListsItemsTask } from '@/api/todo-lists-items/api';

export function TodoListItems() {
  const { selectedTodoList } = useContext(TodoListsContext);
  const { isLoading, todoListItems, fetchTodoListItems } = useGetTodoListItems(selectedTodoList?.id ?? 0);
  const [isDeletingItems, setIsDeletingItems] = useState(false);

  const onBulkTaskCreated = async (task: BulkDeleteTodoListItemsTaskDto) => {
    setIsDeletingItems(true);

    //create api poller
    const poller = pollApi(
      () => getBulkDeleteTodoListsItemsTask(selectedTodoList?.id ?? 0, task.id),
      (task) => task.status === 'success' || task.status === 'failed',
      30000,
    );

    for await (const result of poller) {
      if (result.done) {
        setIsDeletingItems(false);
        break;
      }
    }

    fetchTodoListItems();
  };

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
      <div className='flex flex-col gap-4 max-w-2xl'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='text-3xl font-bold'>Items</h1>
          <div className='flex gap-4'>
            <AddTodoListItem />
            {todoListItems.length > 0 && <BulkDeleteTodoListItemsModal onBulkTaskCreated={onBulkTaskCreated} />}
          </div>
        </div>
        {isDeletingItems ? (
          <div className='flex items-center gap-2 w-full'>
            <Loader2Icon className='animate-spin w-6 h-6' />
            <p className='text-xl'>Deleting items, please wait...</p>
          </div>
        ) : (
          <TodoListItemList />
        )}
      </div>
    </TodoListsItemsContext.Provider>
  );
}
