const Cupom = require('../models/Cupom')();

const cupomController = {};

// cria registro
cupomController.store = function(req, res){
    Cupom.create(req.body).then(
        function(){
            res.send('').sendStatus(201).end();
        },
        function(erro){
            console.log(erro);

            res.sendStatus(500).end();
        }
    );
}

// mostra todos 
cupomController.show = function(req, res){
    Cupom.find().exec().then(
        function(cupons){
            res.json(cupons).end();
        },
        function(erro){
            console.log(erro);

            res.sendStatus(500).end();
        }
    );
}

// mostra apenas um
cupomController.showId = function(req, res){
    var id = req.params.id

    Cupom.findById(id).exec().then(
        function(cupons){
            if (cupons){
                res.json(cupons).end();
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
cupomController.update = function(req, res){
    var id = req.body._id

    Cupom.findOneAndUpdate({_id: id }, req.body).exec().then(
        function(cupons){
            if (cupons){
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
cupomController.destroy = function(req, res){
    var id = req.params.id

    Cupom.findOneAndDelete({_id: id }).exec().then(
        function(cupons){
            if (cupons){
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
module.exports = cupomController;