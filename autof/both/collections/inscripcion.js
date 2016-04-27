Schema = {};

Schema.contact = new SimpleSchema({
    name: {
        type: String,
        label: "Your name",
        max: 50
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail address"
    },
    message: {
        type: String,
        label: "Message",
        max: 1000
    }
});

Schema.ContactSchema = new SimpleSchema({
  contactName: {
    type: String,
    max: 50,
    min: 3
  }, 
  contactEmail: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  contactMessage: {
    type: String,    
    max: 1000,
    min: 10
  }
});

Schema.GimePassword=new SimpleSchema({
  

   password:{
        label: "Password",
        type: String,
        max: 50,
        min: 3},
  
   confirmPassword: {
       label: "Confirm Password",
       type: String,
       custom: function () {//Another usage of the custom function.
           if (this.value !== this.field('password').value) {
               console.log("password incorrrecto");   
//        Schema.InscriSchema.namedContext("GimePassword").addInvalidKeys([{name: "password", type: "passwordMismatch"}]);
               return "passwordMismatch";
           }
       }
   },
});

Schema.GimePassword.messages({

   passwordMismatch: 'Password no coinciden ingrese nuevamente',
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