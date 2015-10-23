angular.module('Booya')

.controller('MainCtrl', function($scope, $http, Celebs) {

    $scope.allData;
    
    //$http({method:'GET', url:'data/celebs.json'})
    Celebs.getAll()
    .then(function(response){
    //success
        $scope.allData = response.data;
        
    }, function(response){
    //fail
    });

    
});