import { todoRepository } from "@ui/repository/todo";
import { Todo } from "@ui/schema/todo";
import { z as schema } from "zod";

interface TodoControllerGetParams {
    page: number;
}

async function get(params: TodoControllerGetParams) {
    return todoRepository.get({
        page: params.page,
        limit: 1,
    })
}

function filterTodosByContent<Todo>(
    search: string, 
    todos: Array<Todo & { content: string }>
): Todo[] {
    const homeTodos = todos.filter((todo) => {
        const searchNormalized = search.toLocaleLowerCase();
        const contentNormalized = todo.content.toLocaleLowerCase();
        return contentNormalized.includes(searchNormalized);
    });
    return homeTodos;
}


interface TodoControllerCreatetParams {
    content?: string;
    onSuccess: (todo: Todo) => void;
    onError: (customMessage?: string) => void;
}
function create({content, onSuccess, onError}: TodoControllerCreatetParams) {
    // Fail Fast
    const parsedParams = schema.string().nonempty().safeParse(content)
    if(!parsedParams.success) {
        onError();
        return;
    }

    todoRepository.createByContent(parsedParams.data).then((newTodo) => {
        onSuccess(newTodo)
    }).catch(() => {
        onError();
    });
}

export const todoController = {
    get,
    filterTodosByContent,
    create,
};
