 [$interpolate:interr]  [$interpolate:interr]  [$interpolate:interr]  [$interpolate:interr] var app=angular.module("sideWallApp",['ngRoute','stormpath', 'stormpath.templates']);

app.config(

function (STORMPATH_CONFIG,$routeProvider) {
	
	// Automatically add access token to all /api requests

    STORMPATH_CONFIG.AUTO_AUTHORIZED_URIS.push(new RegExp('/api'));

    // Specify your Client API domain here:

    STORMPATH_CONFIG.ENDPOINT_PREFIX = 'https://lunar-general.apps.stormpath.io';
	
	 $routeProvider
    .when("/", {
        templateUrl : "index.html"
    });
  });
  
  
  
  app.run(function($stormpath){
    $stormpath.ngRouter({
      forbiddenRoute: '/forbidden',
      defaultPostLoginRoute: '/',
      loginRoute: '/login'
    });
  });

app.controller("sideWallCtrl",function($scope){
	
	
			  
	$scope.jobs=[
		{
			title:"Seeking SECURITY MGR with 2 years of experience in security",
			address:"123 Weigh Way",
			numRoutes:"12",
			latitude:"42.3314",
			longitude:"-83.0458",
			location:"https://www.google.com/maps/embed/v1/place?key=AIzaSyB9OK1uOWPkJNLZve24Fo6L4qoQwo9KMqY&center=42.3314,-83.0458&zoom=18",
			description:"American Protection Group (APG) a rate A+ Business Member of the Better Business Bureau (BBB) is seeking a manager with a CLASS MB License OR individual that can qualify for a Class MB license for both A and B licenses that we already have. American Protection Group is expanding to the Florida market and is currently licensed in CA, NV, AZ and FL, now in the process of expanding to TX and NM. We are seeking a qualified applicant with a CLASS MB license or someone whom can take the exam and become our manager for the FL market."
			
		},
		{
			title:"Veterinary Technician/Assistant",
			address:"456 Play Place",
			numRoutes:"7",
			latitude:"42.3314",
			longitude:"-83.0458",
			location:"https://www.google.com/maps/embed/v1/place?key=AIzaSyB9OK1uOWPkJNLZve24Fo6L4qoQwo9KMqY&center=42.3314,-83.0458&zoom=18",
			description:"This is a test"
			
		},
		{
			title:"Restaurant Crew Member, Shift Leader",
			address:"123 Weigh Way",
			numRoutes:"12",
			latitude:"42.3314",
			longitude:"-83.0458",
			location:"https://www.google.com/maps/embed/v1/place?key=AIzaSyB9OK1uOWPkJNLZve24Fo6L4qoQwo9KMqY&center=42.3314,-83.0458&zoom=18",
			description:"this is also a test"
			
		}
	];
	
	$scope.makeURL = function(lat, long) {
		return 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB9OK1uOWPkJNLZve24Fo6L4qoQwo9KMqY&center='+lat+','+long+'&zoom=18';
	};
});