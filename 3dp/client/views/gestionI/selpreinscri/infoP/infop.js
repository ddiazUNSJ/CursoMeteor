///////////////////////////////////////////////////////////////////////////////
// User Info Dialog

openInfoUserDialog = function(userid) {
  if (!Roles.userIsInRole(Meteor.user(), ['admin','user-admin'])) {
    return;
  }
   console.log("entrando a openInfoUserDialog");
   Template.infoUserDialog.user = Meteor.users.findOne({ _id: userid });
   if (Template.infoUserDialog.user) {
    Session.set("dlgInfoUserId", userid);
    Session.set("dlgUserName", displayName(Template.infoUserDialog.user));
    Session.set("showInfoUserDialog", true);
    Modal.show('infoUserDialog');

  }
};
Template.infoUserDialog.events({
   'click #save': function(e) {
    e.preventDefault();
    
    var animal = {
      name: $('#animalName').val()
    }

    // Meteor.call('addAnimal', animal, function(error, result) {
    //   if (error) {
    //     alert(error);
    //   }
    // });
    Session.set("showInfoUserDialog", false);
    Modal.hide('animalsModal');
    return false;
  }
  
});
Template.infoUserDialog.helpers({
  user: function() {
    return Template.infoUserDialog.user;
  },
  username: function () {
    return Session.get("dlgUserName");
  }
});