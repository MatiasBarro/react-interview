import { useContext, useState } from 'react';
import { Loader2Icon, Trash } from 'lucide-react';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { useBulkDeleteTodoListItems } from '@/hooks/useBulkDeleteTodoListItems';
import { TodoListsContext } from '@/contexts/todo-lists-context';
import { BulkDeleteTodoListItemsTaskDto } from '@/api/todo-lists-items/dtos';

interface BulkDeleteTodoListItemsModalProps {
  onBulkTaskCreated: (todoList: BulkDeleteTodoListItemsTaskDto) => void;
}

export function BulkDeleteTodoListItemsModal({ onBulkTaskCreated }: BulkDeleteTodoListItemsModalProps) {
  const { selectedTodoList } = useContext(TodoListsContext);
  const { isLoading, bulkDeleteTodoListItems } = useBulkDeleteTodoListItems(selectedTodoList?.id ?? 0);
  const [isOpen, setIsOpen] = useState(false);

  const handleBukDelete = async () => {
    const task = await bulkDeleteTodoListItems();

    if (!task) {
      return;
    }

    setIsOpen(false);
    onBulkTaskCreated(task);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className='w-fit' variant='outline' disabled={isLoading}>
          <Trash className='w-4 h-4' /> Delete All
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Bulk Delete items from list</DialogTitle>
        </DialogHeader>
        <p className='text-base'>Are you sure you want to delete all the items from this list?</p>
        <DialogFooter className='mt-4'>
          <DialogClose asChild>
            <Button variant='outline' className='w-[100px]'>
              Cancel
            </Button>
          </DialogClose>
          <Button type='submit' disabled={isLoading} className='w-[100px]' onClick={handleBukDelete}>
            {isLoading ? <Loader2Icon className='animate-spin' /> : 'Confirm'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
