Ideas = new Mongo.Collection("ideas");

var Schemas = {};

Schemas.Ideas = new SimpleSchema({
    idTitulo: {
        type: String,
        label: "Titulo de la Idea",
        max: 200
    },
    autor: {
        type: String,
        label: "Author"
    },
    fechaDeCreacion: {
        type: Date,
        label: "Fecha en la cual fue creada la idea",
        optional: true
    }

});

Ideas.attachSchema(Schemas.Ideas);


Alumnos = new Mongo.Collection("alumnos");


if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.setDefault('sesionC', 0); // Dato donde se carga la sesion de creatividad a la que accede el usuario
  Session.setDefault('idUsuario', 0); 
  Session.setDefault('idGrupo', 0); 

Meteor.subscribe("alumnos");
Meteor.subscribe("ideas");

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


// Template.listalu.helpers({
//  alumnos: function () {
//       return alumnos.find({});
//     }
//  });




Template.listalu.helpers({
 alumnos: function () {
   return Alumnos.find({});
    },
 alumnosSandra:function () {
   return Alumnos.find({nombre:"Sandra"});
    }  

 // alumnos: [
 //    { nombre: "Daniel", apellido: "diaz" },
 //    { nombre: "Sandra", apellido: "oviedo" }
 //    ]

 });

Template.listalu.events({
    'click button': function () {
      // increment the counter when button is clicked
      Ideas.insert( { idTitulo: "nueva Idea", autor: "diaz", fechaDeCreacion:"hoydia"});
    }
  });

}




if (Meteor.isServer) {
  Meteor.startup(function () {

  Meteor.publish("alumnos", function () {
    return Alumnos.find();
  });

Meteor.publish("ideas", function () {
    return Ideas.find();
  });

    // code to run on server at startup

    Alumnos.insert( { nombre: "Daniel", apellido: "diaz" });

    Alumnos.insert( { nombre: "Sandra", apellido: "oviedo" });
  });
}
