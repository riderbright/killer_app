var Killer = require('../models/Killer');

// GET
function getAll(request, response) {
    Killer.find(function (error, killers) {
        if (error) response.json({
            message: 'CAN NOT FIND KILLERS'
        });

        response.json({
            killers: killers
        });
    });
}

// POST
function createKiller(request, response) {
    console.log('in POST');
    console.log('body:', request.body);

    var killer = new Killer(request.body);

    killer.save(function (error) {
        if (error) response.json({
            messsage: ('CAN NOT FIND KILLERS' + error)
        });

        response.json({
            killer: killer
        });
    });
}

// GET
function getKiller(request, response) {
    var id = request.params.id;

    Killer.findById({
        _id: id
    }, function (error, killer) {
        if (error) response.json({
            message: 'CAN NOT FIND KILLERS' + error
        });

        response.json({
            killer: killer
        });
    });
}

function updateKiller(request, response) {
    var id = request.params.id;

    Killer.findById({
        _id: id
    }, function (error, killer) {
        if (error) response.json({
            message: 'CAN NOT FIND KILLERS' + error
        });

        if (request.body.name) killer.name = request.body.name;
        if (request.body.start) killer.start = request.body.start;
        if (request.body.end) killer.end = request.body.end;
        if (request.body.deathCount) killer.deathCount = request.body.deathCount;
        if (request.body.backStory) killer.backStory = request.body.backstory;
        if (request.body.image) killer.image = request.body.image;


        killer.save(function (error) {
            if (error) response.json({
                messsage: 'CAN NOT FIND KILLERS' + error
            });

            response.json({
                message: 'CAN NOT FIND KILLERS',
                killler: killer
            });
        });
    });
}

function removeKiller(request, response) {
    var id = request.params.id;

    Killer.remove({
        _id: id
    }, function (error) {
        if (error) response.json({
            message: 'CAN NOT FIND KILLERS' + error
        });

        response.json({
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