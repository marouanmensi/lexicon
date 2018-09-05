(function () {
    var name = "myApp", requires = [], myApp = null;
    myApp = angular.module(name, requires);
    myApp.controller("AppCtrl", function ($scope) {
        $scope.classes = [];

        $scope.addNewStudent = false;

        $scope.showNewContactForm = function () {
            $scope.addNewStudent = true;
        }

        $scope.add = function () {
            $scope.classes.push({ 'classname': $scope.classname, 'teacher': $scope.teacher, 'startdate': $scope.startdate, 'enddate': $scope.enddate});
            $scope.classname = '';
            $scope.teacher = '';
            $scope.startdate = '';
            $scope.enddate = '';
           
        
        };

        $scope.removeRow = function ($index) {
            $scope.classes.splice($index, 1);
        }




    });
}());
