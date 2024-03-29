import { read } from "../../../core/crud";

interface  TodoRepositoryGetParams {
    page?: number;
    limit?: number;
}

interface TodoRepositoryGetOutput {
   todos: Todo[];
   total: number;
   pages: number; 
}

function get({page, limit}: TodoRepositoryGetParams = {}): TodoRepositoryGetOutput {
    const currentPage = page || 1
    const currentLimit = limit || 10;

    const ALL_TODOS = read();

    const startIndex = (currentPage - 1) * currentLimit;
    const endIndex = currentPage * currentLimit;
    const paginatedTodos = ALL_TODOS.slice(startIndex, endIndex);
    const totalPages = Math.ceil(ALL_TODOS.length / currentLimit);
    return {
        todos: paginatedTodos,
        total: ALL_TODOS.length,
        pages: totalPages,
    }
}

export const todoRepository = {
    get,
};

// Model/Schema
interface Todo {
    id: string;
    content: string;
    date: string;
    done: boolean;
}
