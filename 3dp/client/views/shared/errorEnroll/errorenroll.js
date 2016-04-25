Template.Errorenroll.events()
{};
Template.Errorenroll.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  
    isTokenInvalido: function() {
      var salida=false;
      if (Session.get('_tokenInvalido')!="") salida=true;
    return salida
  }
});
