import { Request, Response } from 'express';
import { Order } from '../../models/Order';

//metodo assincrono para realizar a alteracao do status de um pedido 
export async function changeOrderStatus(req: Request, res: Response) {
	try {
		//obtem o id do produto com o parametro do metodo
		const { orderId } = req.params;
		//obtem o status do produto com o parametro do metodo
		const { status } = req.body;

		//verifica se o status é alguma das strings da lista
		if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)){
			//caso nao for retorna como resposta 400 e mostra um erro
			return res.status(400).json({
				error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE'
			});
		}
		//com base no id do produto ele localiza o obj no bd e atualiza seu status
		await Order.findByIdAndUpdate(orderId, { status });
		//caso sucesso retorna 204
		res.sendStatus(204);
	} catch (error) {
		//caso ocorra algum erro retorna 500 e a mensagem de erro no console
		console.log(error);
		res.sendStatus(500);
	}
}