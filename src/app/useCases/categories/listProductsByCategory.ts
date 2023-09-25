import { Request, Response } from 'express';
import { Product } from '../../models/Product';

//metodo para listar os produtos por sua categoria
export async function listProductsByCategory(req: Request, res: Response) {
	try {
		//obtem o id da categoria com base na categoria do parametro
		const {categoryId} = req.params;

		//obj com os produtos no banco de dados com o find()
		// separa os produtos onde a categoria for igual a categoria id 
		//categoria a ser listada (categoryId)
		const products = await Product.find().where('category').equals(categoryId);

		//resposta com o obj dos produtos listados e encotrados
		res.json(products);
	} catch (error) {
		//erro
		console.log(error);
		res.sendStatus(500);
	}

}