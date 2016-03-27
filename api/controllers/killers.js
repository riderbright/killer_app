var Killer = require('../models/Killer');

// GET
function getAll(req, res) {
    Killer.find(function (error, killers) {
        if (error) res.json({
            message: 'CAN NOT FIND KILLERS'
        });

        res.json({
            killers: killers
        });
    });
}

// POST
function createKiller(req, res) {
    console.log('in POST');
    console.log('body:', req.body);

    var killer = new Killer(req.body);

    killer.save(function (error) {
        if (error) res.json({
            messsage: ('CAN NOT FIND KILLERS' + error)
        });

        res.json({
            killer: killer
        });
    });
}

// GET
function getKiller(req, res) {
    var id = req.params.id;

    Killer.findById({
        _id: id
    }, function (error, killer) {
        if (error) res.json({
            message: 'CAN NOT FIND KILLERS' + error
        });

        res.json({
            killer: killer
        });
    });
}

function updateKiller(req, res) {
    var id = req.params.id;

    Killer.findById({
        _id: id
    }, function (error, killer) {
        if (error) res.json({
            message: 'CAN NOT FIND KILLERS' + error
        });

        if (req.body.name) killer.name = req.body.name;
        if (req.body.start) killer.start = req.body.start;
        if (req.body.end) killer.end = req.body.end;
        if (req.body.deathCount) killer.deathCount = req.body.deathCount;
        if (req.body.backStory) killer.backStory = req.body.backstory;
        if (req.body.image) killer.image = req.body.image;


        killer.save(function (error) {
            if (error) res.json({
                messsage: 'CAN NOT FIND KILLERS' + error
            });

            res.json({
                message: 'CAN NOT FIND KILLERS',
                killler: killer
            });
        });
    });
}

function removeKiller(req, res) {
    var id = req.params.id;

    Killer.remove({
        _id: id
    }, function (error) {
        if (error) res.json({
            message: 'CAN NOT FIND KILLERS' + error
        });

        res.json({
            message: 'Killer deleted'
        });
    });
}

module.exports = {
    getAll: getAll,
    createKiller: createKiller,
    getKiller: getKiller,
    updateKiller: updateKiller,
    removeKiller: removeKiller
}