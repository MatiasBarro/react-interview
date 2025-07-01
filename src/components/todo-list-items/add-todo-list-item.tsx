import { useContext, useState } from 'react';
import { Loader2Icon } from 'lucide-react';
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
import { useAddTodoListItem } from '@/hooks/useAddTodoListItem';
import { TodoListsContext } from '@/contexts/todo-lists-context';
import { TodoListsItemsContext } from '@/contexts/todo-list-items-context';

export function AddTodoListItem() {
  const { selectedTodoList } = useContext(TodoListsContext);
  const { fetchTodoListItems } = useContext(TodoListsItemsContext);
  const { addTodoListItem, isLoading } = useAddTodoListItem(selectedTodoList?.id ?? 0);

  const [isOpen, setIsOpen] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const errors: Record<string, string> = {};

    if (!formData.get('title') || formData.get('title') === '') {
      errors.title = 'Title is required';
    }

    if (!formData.get('description') || formData.get('description') === '') {
      errors.description = 'Description is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const newTodoListItem = await addTodoListItem({
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      completed: false,
    });

    if (!newTodoListItem) {
      return;
    }

    fetchTodoListItems();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className='w-fit' disabled={isLoading}>
          Add Item
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add an item</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <Label htmlFor='title'>Title</Label>
          <Input id='title' type='text' name='title' />
          {formErrors.title && <FormError error={formErrors.title} />}
          <Label htmlFor='description'>Description</Label>
          <Input id='description' type='text' name='description' />
          {formErrors.description && <FormError error={formErrors.description} />}
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
