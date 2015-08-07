
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
    menos1:function () {
      return (Session.get('counter')-1);
    }
    });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });


Template.cuenta.helpers({
 cuentaMenos1: function () {
      return( -1 * Session.get('counter'));
    }
 });


Template.listalu.helpers({
 alumnos: [
    { nombre: "Daniel", apellido: "diaz" },
    { nombre: "Sandra", apellido: "oviedo" }
    ]
 });

}




if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
