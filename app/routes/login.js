import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
    login(username, password) {
      this.controller.set('isLoggingIn', true);
      this.get('session')
      .authenticate('authenticator:oauth2', username, password)
      .then(() => this.transitionTo('index'))
      .catch(() => this.controller.set('errorMessage', "Invalid login."))
      .finally(() => this.controller.set('isLoggingIn', false));
    }
  }
});
