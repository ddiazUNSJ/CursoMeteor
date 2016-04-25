Meteor.methods({
 

   isEmailExisting: function(emailToCheck) {
     // var count = Meteor.users.find({'email': emailToCheck}).count();
      var count = Meteor.users.find({ emails: { $elemMatch: { address: emailToCheck} } }).count();
      console.log("Encontre " + count+ " emails");
      return count > 0;
   },
    
/*  
Movi este metodo al cliente
// Pregunta si hay tramite de cambio de password para el usuario actual
  isTokenExist:function(tk) {
     // var count = Meteor.users.find({'email': emailToCheck}).count();
     // PARA CONSULTAR CON ROBOMONGO Meteor.users.find({"services.password.reset.token": "s9VsH-T4DHqY5pp_kf4QXS3q4UGEvItQWrK6aKeU6IE"}).count();
      var count =  Meteor.users.find({"services.password.reset.token": tk}).count();
      console.log("Hay  " + count+ " tramites abiertos");
      return count > 0;
   },
*/
 
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
               cupacion:inscriFields.ocupacion }
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
