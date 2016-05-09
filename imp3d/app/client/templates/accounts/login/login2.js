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
  },
    
    
});

/*****************************************************************************/
/* Contact: Lifecycle Hooks */
/*****************************************************************************/
Template.Login2Form.onCreated = function () { 
};

Template.Login2Form.onRendered = function () {
};

Template.Login2Form.onDestroyed = function () {
};

