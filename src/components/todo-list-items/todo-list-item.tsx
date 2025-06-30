import { cn } from '@/lib/utils';
import { TodoListItemDto } from '@/api/todo-lists-items/dtos';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';

export interface TodoListItemProps {
  item: TodoListItemDto;
  onCompletedChange: (item: TodoListItemDto) => void;
  onDelete: (item: TodoListItemDto) => void;
}

export function TodoListItem({ item, onCompletedChange, onDelete }: TodoListItemProps) {
  return (
    <div className='flex flex-row items-center justify-between'>
      <div className='flex flex-row items-center gap-4'>
        <Checkbox
          defaultChecked={item.completed}
          onCheckedChange={(checked) =>
            onCompletedChange({
              ...item,
              completed: !!checked,
            })
          }
        />
        <div className='flex flex-col'>
          <h2
            className={cn('text-xl truncate', {
              'line-through text-muted-foreground': item.completed,
            })}
          >
            {item.title}
          </h2>
          <p
            className={cn('text-lg text-muted-foreground', {
              'line-through': item.completed,
            })}
          >
            {item.description}
          </p>
        </div>
      </div>
      <Button variant='ghost' size='icon' onClick={() => onDelete(item)}>
        <Trash className='!w-5 !h-5' />
      </Button>
    </div>
  );
}
