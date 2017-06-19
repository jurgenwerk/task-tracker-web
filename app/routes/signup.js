import Ember from 'ember';
import ENV from "../config/environment";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  session: Ember.inject.service(),
  actions: {
    signup(email, password) {
      const userParams = {
        data: {
          attributes: {
            email: email,
            password: password
          }
        }
      };

      this.controller.set('isSigningUp', true);

      const url = `${ENV.apiBaseURL}/users`;
      const request = this.get('ajax').request(url, {
        method: 'POST',
        data: userParams
      });

      request
      .then(() => {
        this.get('session').authenticate('authenticator:oauth2', email, password);
        this.transitionTo('index');
      }).catch((response) => {
        const errors = response.errors.map(e => {
          return `${e.source.pointer.split("/").reverse()[0]} ${e.detail}`
        });
        this.controller.set('signupErrors', errors);

      }).finally(() => this.controller.set('isSigningUp', false));
    }
  }
});
