Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase',
  trackPageView: true
});

Router._scrollToHash = function(hash) {
  var section = $(hash);
  if (section.length) {
    var sectionTop = section.offset().top;
    $("html, body").animate({
      scrollTop: sectionTop
    }, "slow");
  }
};

beforeHooks = {
 isLoggedIn: function(){

if (! Meteor.user()  ) {
    if (Meteor.loggingIn()) {
      this.render('Loading');
    } else {
      this.render('HeadLog',{to: 'Header'}); // Muestra encabezado para Login
      var ver=this.lookupTemplate();
     
       if (ver=="Errorlog" || ver=="Register" || ver=="Signout" )
        {
         this.render(ver);
          }

       else 
        {
      this.render('Login');
         }
      this.render('Footer',{to: 'Footer'});
      Session.set('firstLogin', true);
    }
  } else {
    if(Session.equals('firstLogin', true)) {
      this.redirect('overview');
      Session.set('firstLogin', false);
    } else {
      this.next();
    }
   // this.next();
  }


}

};


 Router.onBeforeAction(beforeHooks.isLoggedIn);
 //Router.onBeforeAction(beforeHooks.isLoggedIn, {only: ['about']});






Router.map(function () {
  this.route('overview', {path: '/'});
this.route('register', {path: '/accounts/register'});
  this.route('login', {path: '/accounts/login'});
  this.route('errorlog', {path: '/shared/errorlog'});
  this.route('signout', {path: '/signout'});
  
});


// this.route('signout', {
//     path: '/signout',
//     onBeforeAction: Meteor.logout
//   });

// onBeforeAction: function() {
//     //Session.setDefault('contactFormButtonMessage', 'Send Message');
//     Session.setDefault('contactNameError', null);
//     Session.setDefault('contactEmailError', null);
//     Session.setDefault('contactMessageError', null);   
//     this.next();
//   },

/*if (! Meteor.userId()) {
  this.render('HeadLog',{to: 'Header'});
  this.render('Login');
  this.render('Footer',{to: 'Footer'});
 
  } else {
    this.next();
  }
*/


/*var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render('Loading');
    } else {
      this.render('HeadLog',{to: 'Header'});
      this.render('Login');
      this.render('Footer',{to: 'Footer'});
      Session.set('firstLogin', true);
    }
  } else {
    if(Session.equals('firstLogin', true)) {
      this.redirect('register');
      Session.set('firstLogin', false);
    } else {
      this.next();
    }
  }
}*/

/*A route's name is now accessible at route.getName() (previously it was route.name). 
In particular, you'll need to write Router.current().route.getName().*/