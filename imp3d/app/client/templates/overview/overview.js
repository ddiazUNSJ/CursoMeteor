
/*****************************************************************************/
/* Overview: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Overview.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Overview.helpers({
 
    /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Overview: Lifecycle Hooks */
/*****************************************************************************/
Template.Overview.onCreated = function () {
};

Template.Overview.onRendered = function () {
  $('.waypoint').waypoint(function() {
    $(this).addClass('show');
  }, {offset:'80%'});  
};

Template.Overview.onDestroyed = function () {
};


