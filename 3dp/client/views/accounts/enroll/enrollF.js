Template.EnrollForm.events()
{};
Template.EnrollForm.helpers({
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
    enrollFSchema: function() {
    return Schema.GimePassword;
  },
    
    
});

/*****************************************************************************/
/* Contact: Lifecycle Hooks */
/*****************************************************************************/
Template.EnrollForm.created = function () { 
};

Template.EnrollForm.rendered = function () {
};

Template.EnrollForm.destroyed = function () {
};

