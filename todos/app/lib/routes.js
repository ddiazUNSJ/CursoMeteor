Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('/todos/:_id', {
  name: 'todos.detail',
  controller: 'TodosController',
  action: 'detail',
  where: 'client'
});

Router.route('/todos/:_id/edit', {
  name: 'todos.edit',
  controller: 'TodosController',
  action: 'edit',
  where: 'client'
});

Router.route('/users/:_id', {
  name: 'users.detail',
  controller: 'UsersController',
  action: 'detail',
  where: 'client'
});
