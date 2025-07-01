import { useState } from 'react';
import { TodoList } from '@/components/todo-list/todo-list';
import { TopBar } from '@/components/top-bar';
import { TodoListItems } from '@/components/todo-list-items/todo-list-items';
import { TodoListsContext } from '@/contexts/todo-lists-context';
import { TodoListDto } from '@/api/todo-lists/dtos';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [selectedTodoList, setSelectedTodoList] = useState<TodoListDto>();

  return (
    <>
      <TopBar />
      <TodoListsContext.Provider value={{ selectedTodoList, setSelectedTodoList }}>
        <div className='container mx-auto flex flex-col mt-8 gap-10'>
          <TodoList />
          <TodoListItems />
        </div>
      </TodoListsContext.Provider>
      <Toaster />
    </>
  );
}

export default App;
