const Vendas = require('../models/Vendas')();

const vendasController = {};

// cria registro
vendasController.store = function(req, res){
    Vendas.create(req.body).then(
        function(){
            res.sendStatus(201).end();
        },
        function(erro){
            console.log(erro);

            res.sendStatus(500).end();
        }
    );
}

// mostra todos 
vendasController.show = function(req, res){
    Vendas.find().exec().then(
        function(vendas){
            res.json(vendas).end();
        },
        function(erro){
            console.log(erro);

            res.sendStatus(500).end();
        }
    );
}

// mostra apenas um
vendasController.showId = function(req, res){
    var id = req.params.id

    Vendas.findById(id).exec().then(
        function(vendas){
            if (vendas){
                res.json(vendas).end();
            }else{
                res.sendStatus(404);
            }
        },
        function(erro){
            console.log(erro);

            res.sendStatus(500).end();
        }
    );
}

// mostra apenas um
vendasController.update = function(req, res){
    var id = req.body._id

    Vendas.findOneAndUpdate({_id: id }, req.body).exec().then(
        function(vendas){
            if (vendas){
                res.sendStatus(204);
            }else{
                res.sendStatus(404);
            }
        },
        function(erro){
            console.log(erro);

            res.sendStatus(500).end();
        }
    );
}

// exclui pelo id 
vendasController.destroy = function(req, res){
    var id = req.params.id

    Vendas.findOneAndDelete({_id: id }).exec().then(
        function(vendas){
            if (vendas){
                res.sendStatus(204);
            }else{
                res.sendStatus(404);
            }
        },
        function(erro){
            console.log(erro);

            res.sendStatus(500).end();
        }
    );
}
module.exports = vendasController;