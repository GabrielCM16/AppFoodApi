import { Request, Response } from 'express';
import { Category } from '../../models/Category';
//metodo par criar uma categoria no bd
export async function createCategory(req: Request, res: Response) {
	try {
		//res.send('Ok post category');
		//obtem o icone e o nome da categoria passada como parametro
		const {icon, name} = req.body;
		//cria no bd uma nova categoria com o icone e no nome
		const category = await Category.create({icon, name});
		//retorna um obj com a categoria criada e retorna 201 como mensagen 
		res.status(201).json(category);
	} catch (error) {
		//erro retorna a mensagem no console e retorna 500
		console.log(error);
		res.sendStatus(500);
	}
}