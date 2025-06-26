import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { useGetTodoLists } from '@/hooks/useGetTodoLists';

export function TodoListSelector() {
  const { todoLists } = useGetTodoLists();
  return (
    <Select>
      <SelectTrigger className='max-w-[320px]'>
        <SelectValue placeholder='Select a Todo List' />
      </SelectTrigger>
      <SelectContent>
        {todoLists.map((todoList) => (
          <SelectItem key={todoList.id} value={todoList.name}>
            {todoList.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
