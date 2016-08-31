angular.module('mySchoolApp')
    .controller("homeworkController", function ($scope) {
        $scope.assignment;
        $scope.class;
        $scope.description;
        $scope.dueDate = new Date();

        $scope.logAllThings = function() {
            console.log($scope.assignment);
            console.log($scope.class);
            console.log($scope.description);
            console.log($scope.dueDate);
        }
    }
    )