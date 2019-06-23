const Usuario = require('../models/Usuario')();

const usuarioController = {};

// cria registro
usuarioController.store = function(req, res){
    Usuario.create(req.body).then(
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
usuarioController.show = function(req, res){
    Usuario.find().exec().then(
        function(usuarios){
            res.json(usuarios).end();
        },
        function(erro){
            console.log(erro);

            res.sendStatus(500).end();
        }
    );
}

// mostra apenas um
usuarioController.showId = function(req, res){
    var id = req.params.id

    Usuario.findById(id).exec().then(
        function(usuarios){
            if (usuarios){
                res.json(usuarios).end();
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
usuarioController.update = function(req, res){
    var id = req.body._id

    Usuario.findOneAndUpdate({_id: id }, req.body).exec().then(
        function(usuarios){
            if (usuarios){
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
usuarioController.destroy = function(req, res){
    var id = req.params.id

    Usuario.findOneAndDelete({_id: id }).exec().then(
        function(usuarios){
            if (usuarios){
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
module.exports = usuarioController;