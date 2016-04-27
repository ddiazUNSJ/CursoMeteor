if (Meteor.isClient) {

AutoForm.hooks({
    enrollF:
    {
       onSubmit: function(insertDoc, updateDoc, currentDoc) {
               console.log('usuario activado!');
//              var token=Session.get('_resetPasswordToken');
//              Accounts.resetPassword(token, insertDoc.password, function(err){
//              if (err){
//                console.log(err);
//                Session.set('_tokenInvalido',err.reason );
//                Router.go('errorenroll');
//                }
//              else
//               {
//                Accounts.setUsername(Meteor.userId(), inputUserName);   
//                Session.set('_tokenInvalido',"" );
//                console.log('usuario activado!');
//                Router.go('overview') ;
//                }
//              Session.set('userOk', true)
//               });
             this.done();
             return false;
               
       },
      onError: function(normal, error) {
          console.log('error en entrada de password');
 /*     if (typeof error.reason === 'string') {
        if (error.reason.indexOf('passwordMismatch') !== -1) {
          this.addStickyValidationError('GimePassword.confirmPassword', 'passwordMismatch');
          AutoForm.validateField(this.formId, 'GimePassword.confirmPassword');
        }
      }*/
    }
     }
    });

}