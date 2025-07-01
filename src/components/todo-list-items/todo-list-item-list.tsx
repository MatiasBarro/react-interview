import { Fragment, useContext, useState } from 'react';
import { TodoListsItemsContext } from '@/contexts/todo-list-items-context';
import { TodoListsContext } from '@/contexts/todo-lists-context';
import { useUpdateTodoListItem } from '@/hooks/useUpdateTodoListItem';
import { TodoListItemDto } from '@/api/todo-lists-items/dtos';
import { Separator } from '@/components/ui/separator';
import { TodoListItem } from '@/components/todo-list-items/todo-list-item';
import { DeleteTodoListItemModal } from '@/components/todo-list-items/delete-todo-list-item-modal';

export function TodoListItemList() {
  const { selectedTodoList } = useContext(TodoListsContext);
  const { todoListItems, fetchTodoListItems } = useContext(TodoListsItemsContext);

  const { isLoading: isUpdating, updateTodoListItem } = useUpdateTodoListItem(selectedTodoList?.id ?? 0);
  const [itemToDelete, setItemToDelete] = useState<TodoListItemDto | null>(null);

  const onCompletedChange = async ({ id, ...itemData }: TodoListItemDto) => {
    if (isUpdating) {
      return;
    }

    // update item
    await updateTodoListItem(id, itemData);
    // refetch items
    await fetchTodoListItems();
  };

  const onDeleteSuccess = async () => {
    // remove item from list
    setItemToDelete(null);
    // refetch items
    await fetchTodoListItems();
  };

  return (
    <>
      {todoListItems.length === 0 ? (
        <h2 className='text-xl text-muted-foreground '>No items in this list</h2>
      ) : (
        todoListItems.map((item, idx) => (
          <Fragment key={item.id}>
            <TodoListItem
              item={item}
              onCompletedChange={onCompletedChange}
              onDelete={(item) => setItemToDelete(item)}
            />
            {idx !== todoListItems.length - 1 && <Separator />}
          </Fragment>
        ))
      )}
      {itemToDelete && (
        <DeleteTodoListItemModal
          isOpen={!!itemToDelete}
          item={itemToDelete}
          onOpenChange={() => setItemToDelete(null)}
          onDeleteSuccess={onDeleteSuccess}
        />
      )}
    </>
  );
}
