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
Template.Login2Form.created = function () { 
};

Template.Login2Form.rendered = function () {
};

Template.Login2Form.destroyed = function () {
};

