// both/router.js

Router.configure({
  layoutTemplate: 'main'
});
/*Router.route('/', 'posts');

//Router.route('/posts/:content', function () {	
Router.route('/posts/:_id', function () {
   
   var item = Posts.findOne({_id: this.params._id});

   this.render('post', {data: item});
 }, {
  name: 'laposta'
});*/

Router.map(function () {
	 this.route('posts', {path: '/'});
	 this.route ('post',{
	 	          name: 'laposta',
	 	         path:'/post/:_id',
                 data: function () {
                   return Posts.findOne({_id: this.params._id});
                   },
                 action: function () {
                 // render all templates and regions for this route
                  this.render('post');
                 
                 }
                     
	            });
});
