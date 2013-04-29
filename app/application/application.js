// define the services module for the application
angular.module('application.services', []);
// define the controllers module for the application
angular.module('application.controllers', ['application.services']);
// define the module for the application
angular.module('application', ['application.controllers', 'application.services']);