import { Loader2Icon } from 'lucide-react';
import { TodoListItemDto } from '@/api/todo-lists-items/dtos';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useDeleteTodoListItem } from '@/hooks/useDeleteTodoListItem';

interface DeleteTodoListItemModalProps {
  isOpen: boolean;
  item: TodoListItemDto;
  onOpenChange: (isOpen: boolean) => void;
  onDeleteSuccess: (todoList: TodoListItemDto) => void;
}

export function DeleteTodoListItemModal({ isOpen, item, onOpenChange, onDeleteSuccess }: DeleteTodoListItemModalProps) {
  const { isLoading, deleteTodoListItem } = useDeleteTodoListItem(item.todoListId);

  const onDelete = async () => {
    await deleteTodoListItem(item.id);

    onDeleteSuccess(item);
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Delete an item</DialogTitle>
        </DialogHeader>
        <p className='text-base'>Are you sure you want to delete this item?</p>
        <DialogFooter className='mt-4'>
          <DialogClose asChild>
            <Button variant='outline' className='w-[100px]'>
              Cancel
            </Button>
          </DialogClose>
          <Button type='submit' disabled={isLoading} className='w-[100px]' onClick={onDelete}>
            {isLoading ? <Loader2Icon className='animate-spin' /> : 'Delete'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
