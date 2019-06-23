const mongoose = require('mongoose');

module.exports = function() {

   const schema = mongoose.Schema({
      categoria: {
         type: mongoose.ObjectId,
         ref: 'Categoria',
         // required: true
      },
      quantidade: {
         type: Number,
         required: true
      },
      titulo: {
         type: String,
         required: true
      },
      valor: {
         type: Number,
         required: true
      },
      descricao: {
         type: String,
         required: true
      }

   });

   return mongoose.model('Produto', schema, 'produtos');

}

/*


{
   "categoria": "5d0ee644ed74b31490f786d0",
   "quantidade": "10",
   "titulo": "Camiseta",
   "valor": "39",
   "descricao": "CAmiseta algodão"
}


*/