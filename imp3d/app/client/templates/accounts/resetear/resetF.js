Template.RForm.events()
{};
Template.RForm.helpers({
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
    resetearFormSchema: function() {
    return  Schema.ResetearPassword;//Schema.ResetearPassword;
  }
  ,
    inscriFormSchema: function() {
    return Schema.InscriSchema;
  }
    
    
});

/*****************************************************************************/
/* Contact: Lifecycle Hooks */
/*****************************************************************************/
Template.RForm.onCreated = function () { 
};

Template.RForm.onRendered = function () {
};

Template.RForm.onDestroyed = function () {
};

