import Ember from 'ember';

const { computed, inject: { service } } = Ember;

export default Ember.Controller.extend({
  currentUser: service(),
  appMonitors: computed.alias('model')
});
