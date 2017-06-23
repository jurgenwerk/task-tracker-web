import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('app-monitor', { path: 'apps/:app_monitor_id' }, function() {
    this.route('tasks');
  });
  this.route('app-monitors', { path: 'apps' }, function() {
    this.route('new');
  });
});

export default Router;
