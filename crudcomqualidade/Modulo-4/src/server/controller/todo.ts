import { read } from "../../../core/crud";
import { NextApiRequest, NextApiResponse } from "next";

function get(_: NextApiRequest, res: NextApiResponse) {
    const ALL_TODOS = read();
    
    res.status(200).json({
        todos: ALL_TODOS
    });
     console.log( ALL_TODOS)
    return;
};

export const todoController = {
    get,
};
 