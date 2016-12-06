Template.Listp.events({
});

Template.Listp.helpers({
  user: function () {

    return Meteor.users.find({}, {sort: [["profile.facultad", "asc"] ,["profile.dni", "asc"] ] });
   // return Meteor.users.find({}, {sort: [["profile.dni", "asc"] , ["createdAt", "asc"] ] });
 //   return Meteor.users.find({}, {sort: [ ["createdAt", "asc"], ["profile.facultad", "asc"] ] });
 
//     return Meteor.users.find({}, {sort: [ ["createdAt", "asc"], ["profile.dni", "asc"] ] });

   //   return Meteor.users.find({}, {sort: {createdAt: -1}, {profile.dni:-1}});
  }


// Template.Listp.helpers({
//   user: function () {
//     return Meteor.users.find({}, {sort: {createdAt: -1}});
//   }



  // Template.Listp.helpers({
  // user: function () {
  //   return Meteor.users.find({}, {
  //       fields: {
  //           profile_name: 1,
  //           emails: 1
            
  //       }
  //   });
  // }

  
    
/*
  dueDateFormatted: function () {
    return moment(this.dueDate).format(“MMM Do YY”);
  },

  priorityHigh: function() {
    if (this.priority === ‘High’)
      return true;
    else
      return false;
  },

  priorityMedium: function() {
    if (this.priority === ‘Medium’)
      return true;
    else
      return false;
  },

  priorityLow: function() {
    if (this.priority === ‘Low’)
      return true;
    else
      return false;
  }*/
});