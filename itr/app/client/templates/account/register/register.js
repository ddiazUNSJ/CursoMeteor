
/*****************************************************************************/
/* Register: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Register.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  
  
  'submit form': function(event, template) {
    event.preventDefault();
    
    var inputName = $(event.target).find('#inputName').val().trim();
    var inputPassword = $(event.target).find('#inputPassword').val().trim();
    
     Accounts.createUser({username:inputName, password:inputPassword}, function(err){
     if (err)
       console.log(err);
     else
       console.log('success!');
     
    //   var currentRoute = Router.current();
    //     Session.set('errorl', true);
    //    currentRoute.render('Errorlog');
    //    currentRoute.next();
     });
    
  }  

});



Template.Register.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Register: Lifecycle Hooks */
/*****************************************************************************/
Template.Register.created = function () {
};

Template.Register.rendered = function () {
};

Template.Register.destroyed = function () {
};


