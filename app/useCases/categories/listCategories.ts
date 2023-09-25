import { Request, Response } from 'express';
import { Category } from '../../models/Category';

//metodos para listyar as categorias 
export async function listCategories(req: Request, res: Response) {
	try {
		//obtem como obj todas as categorias no bd com o find()
		const categories = await Category.find();
		//retorna o obj com as categorias encontradas no bd
		res.json(categories);
	} catch (error) {
		//erro
		console.log(error);
		res.sendStatus(500);
	}
}