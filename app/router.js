import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('signup', function(){
    this.route('signup-page');
  });
  this.route('home', function(){
    this.route('home');
    this.route('home',{path:'/:home_username'});
    this.route('edituser',{path:'/edituser'});
  });
  this.route('signin');
});

export default Router;
