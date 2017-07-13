(function () {
  angular
    .module('myApp')
    .component('bookGridElementComponent', {
      template: '<div>{{$ctrl.book.title}}</div>',
      controller: function BookGridElementController() {
      },
      bindings: {
        book: '<'
      }
    });
})();
