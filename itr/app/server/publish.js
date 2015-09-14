
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
  var user = Meteor.users.findOne({_id:this.userId});

  if (Roles.userIsInRole(user, ["admin","manage-users"])) {
    console.log('publishing users', this.userId)
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


//}());

