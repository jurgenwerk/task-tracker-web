import Ember from 'ember';

const { service } = Ember.inject;
const { computed } = Ember;

export default Ember.Controller.extend({
  currentUser: service(),
  routing: service('-routing'),
  showNavbar: computed('routing.currentRouteName', function() {
    const routeName = this.get('routing').get('currentRouteName');
    return (routeName.indexOf('login') === -1 && routeName.indexOf('signup')) === -1;
  })
});
