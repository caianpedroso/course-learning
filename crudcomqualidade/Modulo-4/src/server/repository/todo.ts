import { read } from "../../../core/crud";

interface  TodoRepositoryGetParams {
    page?: number;
    limit?: number;
}

function get({page, limit}: TodoRepositoryGetParams = {}) {
    const currentPage = page || 1
    const currentLimit = limit || 2;
    
    const ALL_TODOS = read();
    return {
        todos: ALL_TODOS,
    }
}

export const todoRepository = {
    get,
};
