import { TodoList } from './components/todo-list/todo-list';
import { TopBar } from './components/top-bar';

function App() {
  return (
    <>
      <TopBar />
      <div className='container mx-auto mt-8'>
        <TodoList />
      </div>
    </>
  );
}

export default App;
