import { Request, Response } from 'express';
import { Product } from '../../models/Product';

//funcao assincrona de requisicao para criar um novo produto no banco de dados
export async function createProduct(req: Request, res: Response) {
	try {
		const imagePath = req.file?.filename; // encontra o caminho da imagem caso nao encotre o caminho é o nome da imagem
		const { name, description, price, category, ingredients } = req.body;

		const product = await Product.create({ //cria o doc product no bd 
			//cria a classe passando os parametros necessarios para a criacao do obj
			name,
			description,
			imagePath,
			price: Number(price),
			category,
			ingredients:ingredients ? JSON.parse(ingredients): [],
		});

		//envia a resposta 201 e passa como parametro o objeto criado 
		res.status(201).json(product);
	} catch (error) {
		//se ocorrer algum erro a resposta é 500 e mostra o erro no console
		console.log(error);
		res.sendStatus(500);
	}
}