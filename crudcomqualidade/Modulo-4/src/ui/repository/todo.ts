interface TodoRepositoryGetParams {
    page: number;
    limit: number;
};

interface TodoRepositoryGetOutput {
    todos: Todo[];
    total: number;
    pages: number;
};

function get({ page, limit }: TodoRepositoryGetParams): Promise<TodoRepositoryGetOutput> {
    return fetch("/api/todos").then(async (respostaDoServidor) => {
        const todosString = await respostaDoServidor.text();
        const responseParsed = parseTodosFromServer(JSON.parse(todosString));

        return {
            todos: responseParsed.todos,
            total: responseParsed.total,
            pages: responseParsed.pages,
        }
    });
};

export const todoRepository = {
    get,
};

// Model/Schema
interface Todo {
    id: string;
    content: string;
    date: Date;
    done: boolean;
}

function parseTodosFromServer( responseBody: unknown ): {
    total: number, 
    pages: number, 
    todos: Array<Todo>
} {
    if (
        responseBody !== null && 
        typeof responseBody === "object" && 
        "todos" in responseBody && 
        "total" in responseBody && 
        "pages" in responseBody && 
        Array.isArray(responseBody.todos)
        ) {
        return {
            total: Number(responseBody.total),
            pages: Number(responseBody.pages),
            todos: responseBody.todos.map((todo: unknown) => {
                if(todo == null && typeof todo !== "object"){
                    throw new Error("Invalid todo from API")
                }

                const { id, content, date, done } = todo as {
                   id: string;
                   content: string;
                   date: string;
                   done: string; 
                }
                return {
                    id,
                    content,
                    done: String(done).toLocaleLowerCase() === "true",
                    date: new Date(date)
                }
            })
        }
    };

    return {
        pages: 1,
        total: 0,
        todos: [],
    }
};
