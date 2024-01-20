import { todoRepository } from "@server/repository/todo";
import { read } from "../../../core/crud";
import { NextApiRequest, NextApiResponse } from "next";

function get(_: NextApiRequest, res: NextApiResponse) {
    const output = todoRepository.get();
    
    res.status(200).json({
        todos: output.todos,
    });
    return;
};

export const todoController = {
    get,
};
 