import {model, Schema } from 'mongoose';//importando blibiotecas necessarias

//clase Product
export const Product = model('Product', new Schema({ 
	//campos requiridos do tipo string e requerido
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	imagePath: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	ingredients: { //campo ingredients que é um array requerido, com o typo do igrediente, o nome, e o icone
		required: true,
		type:[{
			name: {
				type: String,
				required: true,
			},
			icon: {
				type: String,
				required: true,
			},
		}],
	},
	category: { //campo category que é a referencia de um objeto da classe Category, requerido
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Category',
	},
}));