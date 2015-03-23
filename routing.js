//ROUTING
weatherApp.config(function($routeProvider){

$routeProvider
.when('/',{
templateUrl:"view/home.html",
controller:"homeController"
})
.when('/forecast',{
templateUrl:"view/forecast.html",
controller:"forecastController"
})
.when('/forecast/:days',{
templateUrl:"view/forecast.html",
controller:"forecastController"
})

})
