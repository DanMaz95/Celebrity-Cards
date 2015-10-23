angular.module('Booya')


.controller('DetailsCtrl', function($scope, $routeParams, Celebs) {

    //$scope.myVar = "Cheese";
    $scope.itemID = $routeParams.itemID;
    $scope.item = {};
    
    $scope.allData;
    
    //$http({method:'GET', url:'data/celebs.json'})
    Celebs.getOne($scope.itemID)
    .then(function(response){
    //success
        var celebs = response.data.celebs;
        celebs.forEach(function(i){
            if(i.id == $routeParams.itemID){
               $scope.item = i; 
            }
        });
        
        
    }, function(response){
    //fail
    });

    
});