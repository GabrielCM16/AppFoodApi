import {model, Schema } from 'mongoose';//importando blibiotecas necessarias

//arquivo representa uma classe para criar uma "Order" ("Pedido")
//classe na qual pode ser herdada e exportada
export const Order = model('Order', new Schema({
	table: { //campo table tipo string e obrigatoria na instanciacao do objeto
		type: String,
		required: true,
	},
	// campo 'status' do tipo String e aceita apenas as strings 'WAITING', 'IN_PRODUCTION' ou 'DONE'
    // O valor padrão é 'WAITING' 
	status: {
		type: String,
		enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
		default: 'WAITING',
	},
	creatdAt: {
		type: Date,
		default: Date.now,
	},
	products: { //campo "products" requirido
		required: true,
		type:[{
			product: { // campo product que é um objeto da classe Product
				type: Schema.Types.ObjectId,
				required: true,
				ref: 'Product',
			},
			quantity: { //campo quantidade
				type: Number,
				default: 1,
			},
		}],
	},
}));