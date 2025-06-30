export interface TodoListItemDto {
  id: number;
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
