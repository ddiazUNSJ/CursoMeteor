Template.DatosForm.events()
{};
Template.DatosForm.helpers({
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
    DatosFormSchema: function() {
    return Schema.User;// Schema.InscriViewSchema;
  },
    
    
});

/*****************************************************************************/
/* Contact: Lifecycle Hooks */
/*****************************************************************************/
Template.DatosForm.onCreated = function () { 
};

Template.DatosForm.onRendered = function () {
};

Template.DatosForm.onDestroyed = function () {
};

