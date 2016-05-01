ResetearController = RouteController.extend({
  yieldTemplates: {
    'HeadLog': {to: 'Header'},
    'Footer': {to: 'Footer'}
  },    
  
  waitOn: function () {
  },

  data: function () {
  },

  action: function () {
    this.render();
  },
  onBeforeAction: function() {
     this.next();
     
  }
});
