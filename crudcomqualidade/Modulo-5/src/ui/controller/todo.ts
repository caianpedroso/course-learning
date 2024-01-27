import { todoRepository } from "@ui/repository/todo";

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
    onSuccess: (todo: any) => void;
    onError: () => void;
}
function create({content, onSuccess, onError}: TodoControllerCreatetParams) {
    // Fail Fast
    if(!content) {
        onError();
        return;
    }
    const todo = {
        id: "12121",
        content,
        date: new Date(),
        done: false,
    }
    onSuccess(todo)
}

export const todoController = {
    get,
    filterTodosByContent,
    create,
};
