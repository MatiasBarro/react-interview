import { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { FormError } from '@/components/form-error';
import { TodoListDto } from '@/api/todo-lists/dtos';
import { useAddTodoLists } from '@/hooks/useAddTodoLists';
import { Loader2Icon } from 'lucide-react';

interface AddTodoListProps {
  onSuccess: (todoList: TodoListDto) => void;
}

export function AddTodoList({ onSuccess }: AddTodoListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const { addTodoList, isLoading } = useAddTodoLists();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (!formData.get('name') || formData.get('name') === '') {
      setFormErrors({ name: 'Name is required' });
      return;
    }

    const newTodoList = await addTodoList({
      name: formData.get('name') as string,
    });

    if (!newTodoList) {
      return;
    }

    onSuccess(newTodoList);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Add</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add a Todo list</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <Label htmlFor='name'>Name</Label>
          <Input id='name' type='text' name='name' />
          {formErrors.name && <FormError error={formErrors.name} />}
          <DialogFooter className='mt-4'>
            <DialogClose asChild>
              <Button variant='outline' className='w-[100px]'>
                Cancel
              </Button>
            </DialogClose>
            <Button type='submit' disabled={isLoading} className='w-[100px]'>
              {isLoading ? <Loader2Icon className='animate-spin' /> : 'Add'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
