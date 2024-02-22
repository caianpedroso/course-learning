import { HttpNotFoundError } from "@server/infra/errors";
import {
    read,
    create,
    update,
    deleteById as dbDeleteById,
} from "../../../core/crud";

// Supabase
// =========
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SECRET_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey)
// =========
interface TodoRepositoryGetParams {
    page?: number;
    limit?: number;
}

interface TodoRepositoryGetOutput {
    todos: Todo[];
    total: number;
    pages: number;
}

async function get({
    page,
    limit,
}: TodoRepositoryGetParams = {}): Promise<TodoRepositoryGetOutput> {

    const { data, error, count } = await supabase.from("todos").select("*");
    if(error) throw new Error("Failed to fetch data")
    console.log("supabaseOutput ", data)

    const todos = data as Todo[];
    const total = count || todos.length;
    return {
        todos,
        total,
        pages: 1,
    }

    // const currentPage = page || 1;
    // const currentLimit = limit || 10;

    // const ALL_TODOS = read().reverse();

    // const startIndex = (currentPage - 1) * currentLimit;
    // const endIndex = currentPage * currentLimit;
    // const paginatedTodos = ALL_TODOS.slice(startIndex, endIndex);
    // const totalPages = Math.ceil(ALL_TODOS.length / currentLimit);
    // return {
    //     todos: paginatedTodos,
    //     total: ALL_TODOS.length,
    //     pages: totalPages,
    // };
}

async function createByContent(content: string): Promise<Todo> {
    const newTodo = create(content);

    return newTodo;
}

async function toggleDone(id: string): Promise<Todo> {
    const ALL_TODOS = read();
    const todo = ALL_TODOS.find((todo) => todo.id === id);

    if (!todo) throw new Error(`Todo with id "${id}" not found`);

    const updateTodo = update(id, {
        done: !todo.done,
    });
    return updateTodo;
}

async function deleteById(id: string) {
    // TODO call the delete
    const ALL_TODOS = read();
    const todo = ALL_TODOS.find((todo) => todo.id === id);

    if (!todo) throw new HttpNotFoundError(`Todo with id "${id}" not found`);

    dbDeleteById(id);
}

export const todoRepository = {
    get,
    createByContent,
    toggleDone,
    deleteById,
};

// Model/Schema
interface Todo {
    id: string;
    content: string;
    date: string;
    done: boolean;
}
