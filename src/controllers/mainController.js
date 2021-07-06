const db = require ('../database/models');


let mainController = {
    index: (req, res) => {
        db.Mails.findAll({
            limit: 25,
        }).then(mails => res.render('index', {mails}));
    },
    detail: (req, res) => {
        res.send(`Este es el mail número ${req.params.id}`);
    },
};

module.exports = mainController;