/*****************************************************************************/
/* Errorenroll: Event Handlers */
/*****************************************************************************/
Template.Errorenroll.events({
});

/*****************************************************************************/
/* Errorenroll: Helpers */
/*****************************************************************************/
Template.Errorenroll.helpers({

	isTokenInvalido: function() {
      var salida=false;
      if (Session.get('_tokenInvalido')!="") salida=true;
    return salida
  }

});

/*****************************************************************************/
/* Errorenroll: Lifecycle Hooks */
/*****************************************************************************/
Template.Errorenroll.onCreated(function () {
});

Template.Errorenroll.onRendered(function () {
});

Template.Errorenroll.onDestroyed(function () {
});
