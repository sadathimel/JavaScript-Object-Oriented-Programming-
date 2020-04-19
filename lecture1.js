// var obj = {};
// var obj1 = new Object();
// console.log(obj);
// console.log(obj1);

var book = {
  name: 'Functional JavaScript',
  author : 'Micbae hime',
  publisher: 'o\'Himel',
  page: 250,

  print: function() {
    console.log(this.name, this.author);
  }
};
// console.log('Publish Year: ' +book.publishYear);
book.publishYear = 2020;
// console.log('Publish Year: ' +book.publishYear);
book['price']= 300;
// console.log('Price:' +book.price); 

// console.log(book);

// console.log(book);
// book.print();

// console.log('Book Name:' + book.name);
// console.log('Author Name:' + book['author']);

for(var props in book){
  // console.log(props);
  console.log(props + ' = ' + book[props]);
}

































