
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


<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
/*
beforeHooks = {
 isLoggedIn: function(){

if (!Meteor.user()  ) 
 {
    if (Meteor.loggingIn()) {
      this.render('Loading');
      } 
    else 
      {
          this.render('Header',{to: 'Header'}); 
          this.render('portal');
       console.log("adentro del else");
        var ver=this.lookupTemplate();
          
//       this.render('HeadLog',{to: 'Header'}); // Muestra encabezado para Login
    
       if (ver=="Errorlog" || ver=="Register" || ver=="Login" )
        {
         this.render('HeadLog',{to: 'Header'}); // Muestra encabezado para Login
         this.render(ver);
     
          }

        else 
          {
           this.render('Header',{to: 'Header'}); 
          this.render('portal');
            
         }
       this.render('Footer',{to: 'Footer'});
       Session.set('firstLogin', true);
      }
   }
else 
  {
    console.log("soy user meteor");
    if(Session.equals('firstLogin', true))
     {
      this.redirect('dashboard1');
      Session.set('firstLogin', false);
      } 
    else
     {
      this.next();
      }
   // this.next();
  }


<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
}

};

<<<<<<< Updated upstream
esUsuarioHook={
 isUser:function(){
     if (!Meter.User())
         
 }
    
};
*/
=======

 */

>>>>>>> Stashed changes

beforeHooks = {
 isLoggedIn: function(){

<<<<<<< Updated upstream
if (!Meteor.user()  ) 
 {
=======
if (!Meteor.user() &&  ) 
 {
     
      var ver=this.lookupTemplate();
>>>>>>> Stashed changes
    if (Meteor.loggingIn()) {
      this.render('Loading');
      } 
    else 
      {
<<<<<<< Updated upstream
          
          this.render('Header',{to: 'Header'}); 
          this.render('portal');
          console.log("adentro del else");
          var ver=this.lookupTemplate();
          this.next();
          
 /*      if (ver=="Errorlog" || ver=="Register" || ver=="Login" )
        {
         this.render('HeadLog',{to: 'Header'}); // Muestra encabezado para Login
         this.render(ver);
     
          }

        else 
          {
           this.render('Header',{to: 'Header'}); 
          this.render('portal');
            
         }
       this.render('Footer',{to: 'Footer'});
       Session.set('firstLogin', true);*/
=======
       console.log("adentro del else");

          this.render('HeadLog',{to: 'Header'}); // Muestra encabezado para Login
      
     
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
>>>>>>> Stashed changes
      }
   }
else 
  {
<<<<<<< Updated upstream
  /*  console.log("soy user meteor");
      this.redirect('clients');
      
    if(Session.equals('firstLogin', true))
     {
      this.redirect('clients');
=======
      console.log("soy user meteor");
    if(Session.equals('firstLogin', true))
     {
      this.redirect('portal');
>>>>>>> Stashed changes
      Session.set('firstLogin', false);
      } 
    else
     {
      this.next();
<<<<<<< Updated upstream
      }*/
    this.next();
  }



=======
      }
   // this.next();
  }


>>>>>>> Stashed changes
}

};



 Router.onBeforeAction(beforeHooks.isLoggedIn);
 //Router.onBeforeAction(beforeHooks.isLoggedIn, {only: ['about']});






Router.map(function () {
  this.route('portal', {path: '/'});
  this.route('register', {path: '/accounts/register'});
  this.route('login', {path: '/accounts/login'});
  this.route('errorlog', {path: '/shared/errorlog'});
  this.route('signout', {path: '/signout'});
 Router.route('/clients', function () {
    this.layout('mainLayout');
    this.render('clients');
});
  
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

/* estaba
Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

*/






























