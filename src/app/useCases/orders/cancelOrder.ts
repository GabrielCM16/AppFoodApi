import { Request, Response } from 'express';
import { Order } from '../../models/Order';

//metodo para "cancelar pedido" "cancelar order"
export async function cancelOrder(req: Request, res: Response) {
	try {
		//pega o id do produto a ser cancelado
		const { orderId } = req.params;

		//encontra o produto e deleta ele a partir do id do produto encontrado e fornecido
		await Order.findByIdAndDelete(orderId);
		//envia uma resposta 204 caso sucesso
		res.sendStatus(204);

	} catch (error) {
		//caso ocorra algum erro retorna 500 e mostra o erro no console
		console.log(error);
		res.sendStatus(500);
	}
}