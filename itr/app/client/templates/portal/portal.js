
/*****************************************************************************/
/* Portal: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Portal.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Portal.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Portal: Lifecycle Hooks */
/*****************************************************************************/
Template.Portal.created = function () {
};

Template.Portal.rendered = function () {
  $('.waypoint').waypoint(function() {
    $(this).addClass('show');
  }, {offset:'80%'});  
};

Template.Portal.destroyed = function () {
};


