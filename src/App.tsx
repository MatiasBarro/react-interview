import { useState } from 'react';
import { TodoList } from '@/components/todo-list/todo-list';
import { TopBar } from '@/components/top-bar';
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
        </TodoListsContext.Provider>
      </div>
    </>
  );
}

export default App;
