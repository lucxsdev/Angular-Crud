const mongoose = require('mongoose');

module.exports = function(){
    const cupomSchema = mongoose.Schema({

        produto:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Produto",
            required: true
        },

        valor_desconto:{
            type: Number,
            required: true
        },

        tipo_cupom:{
            type: String,
            required: true
        }
    });

    return mongoose.model('Cupom', cupomSchema, 'cupons')
};

/*
{
    "produto": "5cb7c56f69fb0b31a0e65454",
    "valor_desconto": "20",
    "tipo_cupom": "Desconto"
}
*/