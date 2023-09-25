import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function listProducts(req: Request, res: Response) {
	try {
		const products = await Product.find(); //faz a requisicao de todas as classes Product com o find()

		//envia a resposta com o parametro do objeto products com os produtos encontrados no bd
		res.json(products);
	} catch (error) {
		//caso ocorra algum erro o retorno é 500 e mostra o erro no console
		console.log(error);
		res.sendStatus(500);
	}

}