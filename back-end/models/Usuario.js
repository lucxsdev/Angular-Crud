const mongoose = require('mongoose');

module.exports = function(){
    const usuarioSchema = mongoose.Schema({

        usuario: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        senha: {
            type: String,
            required: true
        }
    })

    return mongoose.model('Usuario', usuarioSchema, 'usuarios');
};

/*
{
    "usuario": "5c8f02c42439b410d030e539",
    "email": "lucas@gmail.com",
    "senha": "123456789"
}
*/