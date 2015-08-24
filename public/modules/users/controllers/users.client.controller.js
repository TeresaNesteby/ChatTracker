'use strict';

// Notes controller
angular.module('users').controller('UsersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Users',
  function($scope, $stateParams, $location, Authentication, Users) {
    $scope.authentication = Authentication;

    // Create new User
    $scope.create = function() {
      // Create new User object
      var user = new Users ({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password

      });

  //check the status of the save
  user.$save(function(response) {
    //redirect to user's homepage
    $stateParams.go('homepage');
  }, function(errorResponse){
    $scope.error = errorResponse.data.message;
  });

]);
