(function() {
  var app = angular.module('gemStore', ['ngResource','store-directives']);

  app.controller('StoreController', ['$http','$resource', function($http,$resource){
    var store = this;
    store.products = [];
    $http.get('./store-products.json').success(function(data){
        store.products = data;
    });

    $http.post('http://localhost:60525/vproyectos/Usuario/Login').success(function(data){
        console.log(data);
    });

    var test = $resource('http://localhost:60525/vproyectos/Usuario/Login');
    test.save(function(data){
      console.log('Hola',data.respuesta);
    });

  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });

})();
