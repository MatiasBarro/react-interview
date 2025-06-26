import { AddTodoList } from './add-todo-list';
import { TodoListSelector } from './todo-list-selector';
import { useGetTodoLists } from '@/hooks/useGetTodoLists';

export function TodoList() {
  const { todoLists, isLoading, fetchTodoLists } = useGetTodoLists();

  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl font-bold'>Todo Lists</h1>
      <h2 className='text-xl text-muted-foreground mt-2'>Select or create a list</h2>
      <div className='flex flex-row gap-4 mt-4'>
        <TodoListSelector options={isLoading ? [] : todoLists} />
        <AddTodoList
          onSuccess={() => {
            // Refresh the list after adding a new todo list
            fetchTodoLists();
          }}
        />
      </div>
    </div>
  );
}
