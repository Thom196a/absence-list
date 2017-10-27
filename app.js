(function () {

    var app = angular.module('absenceList', []);

    app.controller('absenceController', function ($scope, $http) {
        // Getting the data from the API

        $http.get("data.json")
            .success(function (data) {
                $scope.name = data.array;
            
            console.log($scope.name);
            })
    });
})();
