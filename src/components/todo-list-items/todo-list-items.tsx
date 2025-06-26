import { TodoListsContext } from '@/contexts/todo-lists-context';
import { useGetTodoListItems } from '@/hooks/useGetTodoListItems';
import { Loader2Icon } from 'lucide-react';
import { useContext } from 'react';

function TodoListItemContainer({ children }: { children: React.ReactNode }) {
  return <div className='flex justify-center w-full pt-10'>{children}</div>;
}

export function TodoListItems() {
  const { selectedTodoList } = useContext(TodoListsContext);
  const { isLoading } = useGetTodoListItems(selectedTodoList?.id ?? 0);

  if (!selectedTodoList) {
    return (
      <TodoListItemContainer>
        <h1 className='text-2xl text-muted-foreground '>No list selected</h1>
      </TodoListItemContainer>
    );
  }

  if (isLoading) {
    return (
      <TodoListItemContainer>
        <Loader2Icon className='animate-spin w-10 h-10' />
      </TodoListItemContainer>
    );
  }

  return <h1 className='text-3xl font-bold'>Todo List Items</h1>;
}
