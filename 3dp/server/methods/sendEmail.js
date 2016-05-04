Meteor.methods({
 

   isEmailExisting: function(emailToCheck) {
     // var count = Meteor.users.find({'email': emailToCheck}).count();
      var count = Meteor.users.find({ emails: { $elemMatch: { address: emailToCheck} } }).count();
      console.log("Encontre " + count+ " emails");
      return count > 0;
   },

    userByEmail: function(emailToCheck) {
     // var count = Meteor.users.find({'email': emailToCheck}).count();
      var usuario = Meteor.users.find({ emails: { $elemMatch: { address: emailToCheck} } });
     
      return usuario._id;
   },
/*//Movi este metodo al cliente
// Pregunta si hay tramite de cambio de password para el usuario actual
  isTokenExist:function(tk) {
     // var count = Meteor.users.find({'email': emailToCheck}).count();
     // PARA CONSULTAR CON ROBOMONGO Meteor.users.find({"services.password.reset.token": "s9VsH-T4DHqY5pp_kf4QXS3q4UGEvItQWrK6aKeU6IE"}).count();
      var count =  Meteor.users.find({"services.password.reset.token": tk}).count();
      console.log("Hay  " + count+ " tramites abiertos");
      return count > 0;
   },*/
 
  'registrar': function (inscriFields) {
    check(inscriFields, Schema.InscriSchema);

//    Pinscri.insert({nombre:inscriFields.nombre ,dni:inscriFields.dni,email:inscriFields.email, telefono:inscriFields.telefono,ocupacion:inscriFields.ocupacion })
// 
    this.unblock();
//
    var idUsuario =Accounts.createUser({
                email: inscriFields.email,
                   profile: {
                             nombre:inscriFields.nombre,
                             dni:inscriFields.dni,
                             telefono:inscriFields.telefono,
                             ocupacion:inscriFields.ocupacion }
                      });

     console.log("Usuario Creado"); 
    
       // Configurar templates de email
      Accounts.emailTemplates.siteName = "3DPrintingDay";
      
      Accounts.emailTemplates.from = "Inscripciones taller 3D <info@3dprintingday.tk>";
      Accounts.emailTemplates.enrollAccount.subject = function (user) {
          return "Hola "+ user.profile.nombre+ " le damos la bienvenida a nuestro primer taller de impresion  3D " ;
      };
      Accounts.emailTemplates.enrollAccount.text = function (user, url) {
       return "En breve nos estaremos comunicandonos con usted para confirmar su participacion. "
       +"Por motivos administrativos le hemos creado una cuenta en nuestro sitio web. "
       +"Para activar la misma, simplemente haga click en el link que se muestra a continuación "
       + url;
      };
      //enviando email a usuario
     if (idUsuario) Accounts.sendEnrollmentEmail (idUsuario); 
     return idUsuario;
  },

'resetearPass': function (resetPassFields) {
    check(resetPassFields, Schema.ResetearPassword);

 
    this.unblock();
//
      //var username = Meteor.users.findOne(userId).username;
     var usuario = Meteor.users.findOne({ emails: { $elemMatch: { address: resetPassFields.email} } });
     var usuario2 = Meteor.users.findOne({ emails: { $elemMatch: { address: resetPassFields.email} } },{fields:{_id:1}});
    
     var idUsuario =usuario._id;
     // console.log("usuario"); 
     // console.log( usuario);
     //   console.log("usuario2"); 
     //  console.log( usuario2);
     //  console.log ("id de usuario2 ");
      console.log(usuario2._id);
     if (idUsuario !== null)
        {
         // console.log("Usuario Identificado"); 

          // Configurar templates de email
         
          Accounts.emailTemplates.siteName = "3DPrintingDay";
          
          Accounts.emailTemplates.from = "Taller 3D <info@3dprintingday.tk>";
          Accounts.emailTemplates.resetPassword.subject = function (usuario) {
              return "Solicitud de cambio de password ";
           };
          Accounts.emailTemplates.resetPassword.text = function (usuario, url) {
           return "Hola "+ usuario.profile.nombre+ ", muchas gracias por ponerte en contacto con el equipo del taller de impresion  3D. Has solicitado un cambio de password, simplemente "
           +" para efectuar el cambio hace click en el link que se muestra a continuación "
           + url;
           };
          //enviando email a usuario
         if (idUsuario) Accounts.sendResetPasswordEmail(idUsuario); 
         return idUsuario;
       }
     else
       throw new Meteor.Error("No existe usuario",   "No hay usuario con el email" + resetPassFields.email);

  },
    
  'send2Email': function (inscriFields) {
    check(inscriFields, Schema.InscriSchema);

//    Pinscri.insert({nombre:inscriFields.nombre ,dni:inscriFields.dni,email:inscriFields.email, telefono:inscriFields.telefono,ocupacion:inscriFields.ocupacion })
// 
    this.unblock();
//
    Email.send({
      to: EmailConfig.settings.receiver, //Receiver
      from: inscriFields.email, //Sender
      subject: 'Email from ' + inscriFields.email + ' created by simple inscri form', //Subject
      text: inscriFields.nombre //Message
    });    
     Accounts.createUser({
                username :  inscriFields.userN, 
                nombre:inscriFields.nombre,
                dni:inscriFields.dni,
                telefono:inscriFields.telefono,
                ocupacion:inscriFields.ocupacion,
                email: inscriFields.email
                      });
/*

    process.env.MAIL_URL="smtp://tcrearinnovar@gmail.com:taller22y23@smtp.gmail.com:465/"; 
      console.log("configuracion gmail"); 
    Email.send({
      to: "yddiaz@gmail.com", //Receiver
      from: "tuyito@gmail.com", //Sender
      subject: "probando ", //Subject
      text: "mensaje de prueba"
    }); 
      */
      console.log("Enviado"); 
      
  }



});
