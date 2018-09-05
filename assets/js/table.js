(function () {
    var name = "myApp", requires = [], myApp = null;
    myApp = angular.module(name, requires);
    myApp.controller("AppCtrl", function ($scope) {
        $scope.students = [
            { username: "John", password: "Smith", email: "John@", phonenumber: "548542512" },
            { username: "John", password: "Smith", email: "John@", phonenumber: "457867545" },
            { username: "John", password: "Smith", email: "John@", phonenumber: "4o7567867" },
            { username: "John", password: "Smith", email: "John@", phonenumber: "4o7678675" }];

        $scope.addNewStudent = false;

        $scope.showNewContactForm = function () {
            $scope.addNewStudent = true;
        }

        $scope.add = function () {
            $scope.students.push({ 'username': $scope.username, 'password': $scope.password, 'email': $scope.email, 'phonenumber': $scope.phonenumber, 'classname':$scope.classname });
            $scope.username = '';
            $scope.password = '';
            $scope.email = '';
            $scope.phone = '';
            $scope.classname='';
        };

        $scope.removeRow = function ($index) {
            $scope.students.splice($index, 1);
        }




    });
}());


