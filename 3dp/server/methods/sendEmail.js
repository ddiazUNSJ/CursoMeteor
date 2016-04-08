Meteor.methods({
  'send2Email': function (inscriFields) {
    check(inscriFields, Schemas.ContactSchema);

    this.unblock();

    Email.send({
      to: EmailConfig.settings.receiver, //Receiver
      from: inscriFields.inscriEmail, //Sender
      subject: 'Email from ' + inscriFields.inscriEmail + ' created by simple inscri form', //Subject
      text: inscriFields.inscriMessage //Message
    });          
  }
});
