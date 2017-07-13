(function () {
  angular
    .module('myApp')
    .component('bookGridComponent', {
      template: '<book-grid-element-component book="book" ng-repeat="book in $ctrl.books"></book-grid-element-component>',
      controller: function BookGridController() {
        this.books = [{
            title: 'Angular',
            isbn: '123456789',
            price: 20
          },
          {
            title: 'Vue.js',
            isbn: '123456798',
            price: 29
          }
        ]
      }
    });
})();
