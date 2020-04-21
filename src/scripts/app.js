var module = angular.module('d3-kit',[]);
module.service('$d3', function(){
  var tempD3Object = angular.copy(d3);
  delete window['d3'];
  return tempD3Object;
});
module.service('$lodash', function(){
  var tempLodashObject = angular.copy(_);
  delete window['_'];
  return tempLodashObject;
});
module.run(['$d3', '$lodash', function($d3, $lodash){
  console.log('Lodash version --> ' + $lodash.VERSION);
  console.log('D3 version --> ' + $d3.version);
}]);
module.controller('TestController', [function(){
 var vm = this;
 vm.helloWorldText = 'Welcome to D3JS';
}]);
