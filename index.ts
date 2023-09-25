import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

//configura o servidor express e faz a conexao com o banco de dados

mongoose.connect('mongodb://localhost:27017')
	.then(() => {
		//faz as configurações do servidor
		const app = express();
		const port = 3000; //porta local do servidor

		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
		app.use(express.json());
		app.use(router);

		//teclado de emotion tecla win+.
		//inicia o servidor na porta especificada e as rotas
		app.listen(port, () => {
			//inicialização com sucesso
			//servidor inicializado
			console.log(`🚗Server is runing on http://localhost:${port}`);
		});
	})
	//erro
	.catch(() => console.log('Erro ao conectar no mongoDb'));