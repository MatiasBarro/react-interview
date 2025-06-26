import { TodoList } from '@/api/todo-lists/dtos';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

interface TodoListSelectorProps {
  options: TodoList[];
}

export function TodoListSelector({ options }: TodoListSelectorProps) {
  return (
    <Select disabled={options.length === 0}>
      <SelectTrigger className='max-w-[320px]'>
        <SelectValue placeholder='Select a Todo List' />
      </SelectTrigger>
      <SelectContent>
        {options.map((todoList) => (
          <SelectItem key={todoList.id} value={todoList.name}>
            {todoList.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
