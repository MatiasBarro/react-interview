import { TodoListDto } from '@/api/todo-lists/dtos';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

interface TodoListSelectorProps {
  options: TodoListDto[];
  selected?: TodoListDto;
  onChange: (todoList: TodoListDto) => void;
}

export function TodoListSelector({ options, selected, onChange }: TodoListSelectorProps) {
  return (
    <Select
      disabled={options.length === 0}
      defaultValue={selected?.id.toString()}
      onValueChange={(value) => {
        const selectedTodoList = options.find((option) => option.id === Number(value));

        if (!selectedTodoList) {
          return;
        }

        onChange(selectedTodoList);
      }}
    >
      <SelectTrigger className='max-w-[320px]'>
        <SelectValue placeholder='Select a Todo List' />
      </SelectTrigger>
      <SelectContent>
        {options.map((todoList) => (
          <SelectItem key={todoList.id} value={todoList.id.toString()}>
            {todoList.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
