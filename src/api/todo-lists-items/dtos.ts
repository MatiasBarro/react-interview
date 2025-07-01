export interface TodoListItemDto {
  id: number;
  todoListId: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface CreateTodoListItemDto {
  title: string;
  description: string;
  completed: boolean;
}

export type UpdateTodoListItemDto = Partial<CreateTodoListItemDto>;

export interface BulkDeleteTodoListItemsTaskDto {
  id: string;
  todoListId: number;
  status: 'pending' | 'in-progress' | 'success' | 'failed';
}
