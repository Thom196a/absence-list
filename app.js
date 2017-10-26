(function () {

    var app = angular.module('absenceList', []);

    app.controller('absenceController', function ($scope, $http) {
        // Getting the data from the API
var url="https://gist.githubusercontent.com/planetoftheweb/2c2f3b03b72a7f2ae923/raw/d0236fd0a945fdac7acd463f268bd20ebe4d766c/data.json";

        $http.get(url).then(function (response) {
            $scope.dataset = response.data;

        });

    });

})();
