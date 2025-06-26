import { Loader2Icon } from 'lucide-react';
import { AddTodoList } from './add-todo-list';
import { TodoListSelector } from './todo-list-selector';
import { useGetTodoLists } from '@/hooks/useGetTodoLists';
import { useContext } from 'react';
import { TodoListsContext } from '@/contexts/todo-lists-context';

export function TodoList() {
  const { todoLists, isLoading, fetchTodoLists } = useGetTodoLists();
  const { selectedTodoList, setSelectedTodoList } = useContext(TodoListsContext);

  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl font-bold'>Todo Lists</h1>
      <h2 className='text-xl text-muted-foreground mt-2'>Select or create a list</h2>
      <div className='flex flex-row items-center gap-4 mt-4'>
        <TodoListSelector
          options={isLoading ? [] : todoLists}
          selected={selectedTodoList}
          onChange={setSelectedTodoList}
        />
        <AddTodoList
          onSuccess={(todoList) => {
            // Refresh the list after adding a new todo list
            fetchTodoLists();
            // Set the selected todo list
            setSelectedTodoList(todoList);
          }}
        />
        {isLoading && <Loader2Icon className='animate-spin' />}
      </div>
    </div>
  );
}
