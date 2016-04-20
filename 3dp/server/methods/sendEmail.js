Meteor.methods({
 

   isEmailExisting: function(emailToCheck) {
      var count = Meteor.users.find({'email': emailToCheck}).count();
      console.log("Found emails-" + count);
      return count > 0;
   },

 
  'registrar': function (inscriFields) {
    check(inscriFields, Schema.InscriSchema);

//    Pinscri.insert({nombre:inscriFields.nombre ,dni:inscriFields.dni,email:inscriFields.email, telefono:inscriFields.telefono,ocupacion:inscriFields.ocupacion })
// 
    this.unblock();
//
    var idUsuario =Accounts.createUser({
                email: inscriFields.email,
                profile.nombre:inscriFields.nombre,
                profile.dni:inscriFields.dni,
                profile.telefono:inscriFields.telefono,
                profile.ocupacion:inscriFields.ocupacion,
                      });

     console.log("Usuario Creado"); 
     if (idUsuario) Accounts.sendEnrollmentEmail (idUsuario); 
     return idUsuario;
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
