Template.Login2Form.events()
{};
Template.Login2Form.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  formCss : function() {
    if(this.class) {
      return this.class
    }else {
      return "";
    }
  },
    Login2FormSchema: function() {
    return Schema.Login;
  }
});

/*****************************************************************************/
/* Contact: Lifecycle Hooks */
/*****************************************************************************/
Template.Login2Form.created = function () { 
};

Template.Login2Form.rendered = function () {
};

Template.Login2Form.destroyed = function () {
};

AutoForm.hooks({
   loginForm: {
       onSubmit: function(insertDoc, updateDoc, currentDoc) {
           
           Meteor.loginWithPassword(insertDoc.email, insertDoc.password, function(err){
            if (err)
             {
               console.log(err);
               Router.go('errorlog');
              }
             else
             {
               console.log('success!');
               Router.go('overview') ;
              }
             Session.set('userOk', true)
           });
             this.done();
             return false;
               
       },
       before: function () {
           //show loader
       },
       after: function() {
           //hide loader
       }
   }
});