import { useState } from 'react';
import { TodoList } from '@/components/todo-list/todo-list';
import { TopBar } from '@/components/top-bar';
import { TodoListItems } from '@/components/todo-list-items/todo-list-items';
import { TodoListsContext } from '@/contexts/todo-lists-context';
import { TodoListDto } from '@/api/todo-lists/dtos';

function App() {
  const [selectedTodoList, setSelectedTodoList] = useState<TodoListDto>();

  return (
    <>
      <TopBar />
      <div className='container mx-auto mt-8'>
        <TodoListsContext.Provider value={{ selectedTodoList, setSelectedTodoList }}>
          <TodoList />
          <TodoListItems />
        </TodoListsContext.Provider>
      </div>
    </>
  );
}

export default App;
