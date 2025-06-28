import { TodoListItemDto } from "@/api/todo-lists-items/dtos";

export interface TodoListItemProps {
    item: TodoListItemDto;
}

export function TodoListItem({item}: TodoListItemProps) {
    return (
        <div className="flex">
            <div className="flex flex-col">
                <h2 className="text-xl">{item.title}</h2>
                <p className="text-lg text-muted-foreground">{item.description}</p>
            </div>
        </div>
    );
}