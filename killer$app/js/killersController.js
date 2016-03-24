angular.module('killers', [])
    .controller('KillersController', KillersController);

KillersController.$inject = ['$http'];

function KillersController($http) {
    var self = this;
    self.all = [];
    self.newKiller = {};
    self.addKiller = addKiller;
    self.getKillers = getKillers;
    self.deleteKiller = deleteKiller;

    
    function getKillers() {
        $http
            .get('http://localhost:3000/killers')
            .then(function (response) {
                self.all = response.data.killers;
            });
    }
    getKillers();
    
    function addKiller() {
        $http
            .post('http://localhost:3000/killers', self.newKiller)
            .then(function (response) {
                getKillers();
            });
        self.newKiller = {};
    }

    function deleteKiller(killer) {
        console.log(killer)
        $http
            .delete("http://localhost:3000/killers/" + killer._id)
            .then(function (response) {
                var index = self.all.indexOf(killer);
                self.all.splice(index, 1);
            });
    }
   
}