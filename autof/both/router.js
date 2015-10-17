// both/router.js

Router.configure({
  layoutTemplate: 'main'
});
Router.route('/', 'posts');

//Router.route('/posts/:content', function () {	
Router.route('/posts/:_id', function () {
   var item = Posts.findOne({_id: this.params._id});
   this.render('post', {data: item});
 // this.render('Post'); //Cuidado si ponemos mal el nombre del template a render no hace nada
   // this.render('post'); // Aqui tambien error nombre bien pero no tiene contexto
}, {
  name: 'laposta'
});