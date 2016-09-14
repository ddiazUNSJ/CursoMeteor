;(function () {

  "use strict";


////////////////////////////////////////////////////////////////////
// Startup
//

Meteor.startup(function () {

  ////////////////////////////////////////////////////////////////////
  // Create Test Secrets
  //
    
  if (Meteor.secrets.find().fetch().length === 0) {
    Meteor.secrets.insert({secret:"ec2 password: apple2"});
    Meteor.secrets.insert({secret:"domain registration pw: apple3"});
  }


  ////////////////////////////////////////////////////////////////////
  // Create Test Users
  //
   if (Meteor.users.find().fetch().length >1){
      Meteor.users.remove(); 
       console.log('removing userse: ');
   }
  

  if (Meteor.users.find().fetch().length === 0) {

    console.log('Creating users: ');

    var users = [
        {name:"Normal User",email:"normal@example.com",roles:[]},
        {name:"View-Secrets User",email:"view@example.com",roles:['view-secrets']},
        {name:"Manage-Users User",email:"manage@example.com",roles:['user-admin','manage-users']},
        {name:"Admin User",email:"admin@example.com",roles:['admin']},
        {name:"yddiaz",email:"yddiaz@gmail.com",roles:['admin','manage-users']}

      ];

    _.each(users, function (userData) {
      var id,
          user;
      
      console.log(userData);

      id = Accounts.createUser({
        email: userData.email,
        password: "1234",
        profile: { name: userData.name }
      });

      // email verification
      Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true}});

      Roles.addUsersToRoles(id, userData.roles);
    
    });
  }



  ////////////////////////////////////////////////////////////////////
  // Prevent non-authorized users from creating new users
  //

  Accounts.validateNewUser(function (user) {
    var loggedInUser = Meteor.user();

    if (Roles.userIsInRole(loggedInUser, ['admin','manage-users'])) {
      return true;
    }

    throw new Meteor.Error(403, "Not authorized to create new users");
  });

});


////////////////////////////////////////////////////////////////////
// Publish
//


// Authorized users can view secrets
Meteor.publish("secrets", function () {
  var user = Meteor.users.findOne({_id:this.userId});

  if (Roles.userIsInRole(user, ["admin","view-secrets"])) {
    console.log('publishing secrets', this.userId)
    return Meteor.secrets.find();
  }

  this.stop();
  return;
});

// Authorized users can manage user accounts


 // Meteor.publish("users", function () {
 //    return Users.find();
 //  });


Meteor.publish("users", function () {
    console.log('entrando en publicacion de  usuarios ', this.userId);
  var user = Meteor.users.findOne({_id:this.userId});

  if (Roles.userIsInRole(user, ['admin','manage-users'])) {
    console.log('publicando usuarios ', this.userId)
    return Meteor.users.find({}, {fields: {emails: 1, profile: 1, roles: 1}});
  } 


  this.stop();
  return;
});

// publica todos los roles disponibles
  Meteor.publish("allRoles", function() {
    console.log('publishing roles', this.userId)
  return Meteor.roles.find({}, {sort: {'profile.name': 1}});
   });


}());
