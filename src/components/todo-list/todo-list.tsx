import { AddTodoList } from './add-todo-list';
import { TodoListSelector } from './todo-list-selector';

export function TodoList() {
  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl font-bold'>Todo Lists</h1>
      <h2 className='text-xl text-muted-foreground mt-2'>Select or create a list</h2>
      <div className='flex flex-row gap-4 mt-4'>
        <TodoListSelector />
        <AddTodoList />
      </div>
    </div>
  );
}
