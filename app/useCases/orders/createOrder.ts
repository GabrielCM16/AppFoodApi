import { Request, Response } from 'express';
import { Order } from '../../models/Order';

//metodo para criar o pedido no bd 
export async function createOrder(req: Request, res: Response) {
	try {
		//obtem os dados do produto
		//a mesa e os produtos dela
		const {table, products} = req.body;

		//cria o doc pedido no bd e passa como parametro os obj da mesa e os produtos pedidos nela
		const order = await Order.create({ table, products });
		//caso sucesso retorna 201 e retorna o obj do pedido
		res.status(201).json(order);
	} catch (error) {
		//caso erro retorna 500 e a mensagem de erro
		console.log(error);
		res.sendStatus(500);
	}
}