Schema = {};


// Adapatdo desde https://github.com/aldeed/meteor-collection2#attach-a-schema-to-meteorusers

Schema.Login=new SimpleSchema({
  
    email: {
          label: "Email",
          type: String,
          regEx: SimpleSchema.RegEx.Email,
          max: 50, //Maximum allowed length of this field.
      }, 
    password:{
        label: "Password",
        type: String,
        max: 50,
        min: 3}
});
    
Schema.InscriSchema = new SimpleSchema({
  
  /*
  userN:{
    type: String,
    max: 50,
    min: 3
  }, 
  */
  nombre: {
    type: String,
    max: 50,
    min: 3
  }, 
  dni: {
    type: String,
    max: 8,
    min: 7
        }, 
 // email: {
 //       type: String,
 //       regEx: SimpleSchema.RegEx.Email,
 //       max: 50
 // },
 email: {
      label: "Email",
      type: String,
      regEx: SimpleSchema.RegEx.Email,
      max: 50, //Maximum allowed length of this field.
      custom: function() { //Custom method could be used to do a server side check, 
 //like below.
//Here we’re making sure that this field is having a value and we want it to be      
//validated on the client side only.
          if (Meteor.isClient && this.isSet) {
              console.log("verifica que el email es unico ");
              console.log(this.value);
              Meteor.call("isEmailExisting", this.value, function (error, result) {
                 if (result) {
                      console.log("Email duplicado, este email ya esta registrado");   
                   //  Meteor.users.simpleSchema().namedContext("inscriForm").addInvalidKeys([{name: "email", type: "notUnique"}]);
   
              //         InscriSchema.simpleSchema().
                       Schema.InscriSchema.namedContext("inscriForm").addInvalidKeys([{name: "email", type: "duplicateEmail"}]);
                   //       Schema.InscriSchema.simpleSchema().namedContext("inscriForm").addInvalidKeys([{name: "email", type: "duplicateEmail"}]);
                       // return "notUnique";
                  }
              });
          }
      }
  },       
 

  telefono: {
    type: String,
    max: 15,
    min: 7
   }, 
  ocupacion: {
       label: "Ocupación/Profesión",
       type: String,
       max: 15,
       min: 7
       }
   
});
Schema.InscriSchema .messages({

   duplicateEmail: 'Este email ya esta registrado',
   notUnique: 'Por favor use otro email, este ya esta registrado',
   
   minString: "[label] debe contener al menos [min] caracteres",
     maxString: "[label] no puede exceder los [max] caracteres",
    regEx: [
    {msg: "[label] failed regular expression validation"},
    {exp: SimpleSchema.RegEx.Email, msg: "[label] debe ser un dirección de email valida"},
    {exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] must be a valid e-mail address"},
    {exp: SimpleSchema.RegEx.Domain, msg: "[label] must be a valid domain"},
    {exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] must be a valid domain"},
    {exp: SimpleSchema.RegEx.IP, msg: "[label] must be a valid IPv4 or IPv6 address"},
    {exp: SimpleSchema.RegEx.IPv4, msg: "[label] must be a valid IPv4 address"},
    {exp: SimpleSchema.RegEx.IPv6, msg: "[label] must be a valid IPv6 address"},
    {exp: SimpleSchema.RegEx.Url, msg: "[label] must be a valid URL"},
    {exp: SimpleSchema.RegEx.Id, msg: "[label] must be a valid alphanumeric ID"}
  ],
     keyNotInSchema: "[key] no esta permitido por el esquema"
 
});


/*
// base de datos para preinscriptos

Pinscri = new Mongo.Collection("pinscri");


Pinscri.attachSchema(Schema.InscriSchema);
//Pinscri.insert({nombre:"prueba",dni:"4958361",email:"any@body.com", telefono:"4234545",ocupacion:"obrero 3D" })

if (Meteor.isClient) {
Meteor.subscribe("pinscri");
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  Meteor.publish("pinscri", function () {
    return Pinscri.find();
   });
  });
 }

*/

if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.publish('enrolledUser', function(token) {
     return Meteor.users.find({"services.password.reset.token": token});
    });
    Accounts.urls.enrollAccount = function (token) {
    return Meteor.absoluteUrl('accounts/enroll/' + token);
    };
       // Configurar templates de email
      Accounts.emailTemplates.siteName = "3DPrintingDay";
      
      Accounts.emailTemplates.from = "Inscripciones taller 3D <info@3dprintingday.tk>";
      Accounts.emailTemplates.enrollAccount.subject = function (user) {
          return "Hola "+ user.profile.name+ " Le damos la bienvenida a nuestro primer taller de impresion  3D " ;
      };
      Accounts.emailTemplates.enrollAccount.text = function (user, url) {
       return "En breve nos estaremos comunicandonos con usted para confirmar su participacion."
       +"Por motivos administrativos le hemos creado una cuenta en nuestro sitio web."
       +"para activar la misma, simplemente haga click en el link que se muestra a continuación"
       + url;
      };
        });
 }

Meteor.methods({
// Pregunta si hay tramite de cambio de password para el usuario actual
  isTokenExist:function(tk) {
     // var count = Meteor.users.find({'email': emailToCheck}).count();
     // PARA CONSULTAR CON ROBOMONGO Meteor.users.find({"services.password.reset.token": "s9VsH-T4DHqY5pp_kf4QXS3q4UGEvItQWrK6aKeU6IE"}).count();
      var count =  Meteor.users.find({"services.password.reset.token": tk}).count();
      console.log("Hay  " + count+ " tramites abiertos");
      return count > 0;
   }
})