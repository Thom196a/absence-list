(function () {
    var app = angular.module('absenceList', []);
    
    app.controller('StudentController', function($scope) {
        $scope.studentList = students;
        console.log("inside controlelr " + $scope.studentList);
    });

    var students = [

        {
            name: 'Pipi',
            absence: false
        },
        {
            name: 'Kim',
            absence: true
        },
        {
            name: 'Mads',
            absence: false
        },
        {
            name: 'Jonas',
            absence: false
        },
        {
            name: 'Mona',
            absence: true
        },
];
    console.log(students);

})();
