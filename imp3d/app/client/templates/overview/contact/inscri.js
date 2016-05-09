Template.InscriForm.events()
{};
Template.InscriForm.helpers({
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
    inscriFormSchema: function() {
    return Schema.InscriSchema;
  }
});

/*****************************************************************************/
/* Contact: Lifecycle Hooks */
/*****************************************************************************/
Template.InscriForm.onCreated = function () { 
};

Template.InscriForm.onRendered = function () {
};

Template.InscriForm.onDestroyed = function () {
};
