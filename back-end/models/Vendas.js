const mongoose = require('mongoose');

module.exports = function(){
    const vendasSchema = mongoose.Schema({

        usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usuario",
            required: true
        },

        produto:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Produto",
            required: true
        },

        cupom:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cupom",
            required: true
        },

        pedido: {
            type: Number,
            required: true
        },

        valor_desconto: {
            type: Number,
            required: true
        },

        valor_total_pagar: {
            type: Number,
            required: true
        }
    })

    return mongoose.model('Vendas', vendasSchema, 'vendas');
};

/*
    {
        "usuario": "",
        "produto": "",
        "cupom": "",
        "pedido": "01",
        "valor_desconto": "9",
        "valor_total_pagar": "19"
    }
*/