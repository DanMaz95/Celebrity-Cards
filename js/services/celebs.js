angular.module('Booya')
.factory('Celebs', function ItemsFactory($http){

   return{ 
       
       getAll: function(){
           
            return $http({method:'GET', url:'data/celebs.json'});
           
       },
       getOne: function(id){
        
            return $http({method:'GET', url:'data/celebs.json'});
           
       }
       
   }

});
         