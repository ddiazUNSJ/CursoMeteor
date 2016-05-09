
/*****************************************************************************/
/* Contact: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Contact.events({
});

Template.Contact.helpers({
    
   NoLogeadoyPreinscripto:function(){
      var preOk=Session.get('preinscriOk');
       var usuarioActual=Meteor.user();
       var noEsUsuario=( usuarioActual===null);
       var estaPreins=(preOk==="true");
       var respuesta=(noEsUsuario && estaPreins);
     
    return respuesta;
    },
  NoLogeadoyNoPreinscripto:function(){
       var preOk=Session.get('preinscriOk');
       var usuarioActual=Meteor.user();
       var noEsUsuario=( usuarioActual===null);
       var noEstaPreins=(preOk==="false");
       var respuesta=(noEsUsuario && noEstaPreins);
     
   return  respuesta;
  }
});

/*****************************************************************************/
/* Contact: Lifecycle Hooks */
/*****************************************************************************/
Template.Contact.onCreated = function () {
  //   Session.set('preinscriOk', "false");
};

Template.Contact.onRendered = function () {
};

Template.Contact.onDestroyed = function () {
};


