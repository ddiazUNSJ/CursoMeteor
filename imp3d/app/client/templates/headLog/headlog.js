/*****************************************************************************/
/* Headlog: Event Handlers */
/*****************************************************************************/
Template.Headlog.events({
});

/*****************************************************************************/
/* Headlog: Helpers */
/*****************************************************************************/
Template.Headlog.helpers({

	activeIfTemplateIs: function (template) {
    var currentRoute = Router.current();
    return currentRoute && template === currentRoute.lookupTemplate() ? 'active' : '';
  }  
});

/*****************************************************************************/
/* Headlog: Lifecycle Hooks */
/*****************************************************************************/
Template.Headlog.onCreated(function () {
});

Template.Headlog.onRendered(function () {
});

Template.Headlog.onDestroyed(function () {
});
