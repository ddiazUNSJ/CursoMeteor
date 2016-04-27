// Template.contactForm.helpers({
//   contactFormSchema: function() {
//     return Schema.contact;
//   }
// });

Template.enrollF.events()
{};
Template.enrollF.helpers({
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
    dame: function() {
    return Schema.GimePassword;
  },
    
    
});

/*****************************************************************************/
/* Contact: Lifecycle Hooks */
/*****************************************************************************/
Template.enrollF.created = function () { 
};

Template.enrollF.rendered = function () {
};

Template.enrollF.destroyed = function () {
};
