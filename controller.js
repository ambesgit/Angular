//CONTROLLERS
weatherApp.controller('homeController',['$scope','cityName',function($scope,cityName){

$scope.city=cityName.city;
$scope.$watch('city',function(){
cityName.city=$scope.city;

});

}]);

weatherApp.controller('forecastController',['$scope','$resource','cityName','$routeParams',function($scope,$resource,cityName,$routeParams){

$scope.city=cityName.city;
$scope.days=$routeParams.days || 1;
$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{callback:"JSON_CALLBACK"},{get:{method:"JSONP"}});
$scope.weatherResult=$scope.weatherAPI.get({q:$scope.city,cnt:$scope.days});
}]);
