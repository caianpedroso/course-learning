import * as express from "express";
import { Request, Response } from "express";

const app = express();

const PORT =  3000;

app.get("/", (req: Request, res: Response) => {
	res.send({
		message: "Hello World!"
	})
});

app.listen(PORT, () => {
	console.log(`Server started on port: ${PORT}`);
})