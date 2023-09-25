import {model, Schema } from 'mongoose'; //importando blibiotecas necessarias

//arquivo representa uma classe para criar uma "categoria"
//classe na qual pode ser herdada e exportada
export const Category = model('Category', new Schema({
	name: { //campo name do tipo string requerido obrigatoriamente
		type: String,
		required: true,
	},
	icon: {//campo icone do tipo string requerido obrigatoriamente
		type: String,
		required: true,
	}
}));
//classe que quando usada tenha objeto do tipo categoria, com os campos "name" e "icon"