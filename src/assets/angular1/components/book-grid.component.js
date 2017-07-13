angular
  .module('myApp')
  .component('bookGridComponent', {
      template: './book-grid.tmpl.html',
      controller: function BookGridController(){
        console.log('bookgridController');
          this.books = [{title: 'Angular', isbn: '123456789', price: 20},
                        {title: 'Vue.js', isbn: '123456798', price: 29}  ]
      }
  });
