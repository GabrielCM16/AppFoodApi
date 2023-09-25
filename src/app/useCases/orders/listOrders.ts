import { Request, Response } from 'express';
import { Order } from '../../models/Order';

//metodo para listar os pedidos
export async function listOrders(req: Request, res: Response) {
	try {
		// obtem todos os pedidos do bd com o find()
		const orders = await Order.find()
			.sort({creatAt: 1}) //ordena o array de pedidos
			.populate('products.product'); // "popula" instancia os produtos com seus respectivos paramentros

			// retorna o objeto com todos os produtos encontrados e ordenados
		res.json(orders);
	} catch (error) {
		//erro retorna 500 e a mensagem de erro no console	
		console.log(error);
		res.sendStatus(500);
	}

}
