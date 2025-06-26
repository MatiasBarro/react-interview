import { Select, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SelectContent } from '@radix-ui/react-select';

export function TodoListSelector() {
  return (
    <Select>
      <SelectTrigger className='max-w-[320px]'>
        <SelectValue placeholder='Select a Todo List' />
      </SelectTrigger>
      <SelectContent></SelectContent>
    </Select>
  );
}
