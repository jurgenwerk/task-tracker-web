import Ember from 'ember';
import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';

const { inject: { service } } = Ember;

export default OAuth2Bearer.extend({
  session: service('session'),
  authorize(data, header) {
    this._super(data, header);
    if (this.get('session.data.accountId')) {
      header('X-AccountId', this.get('session.data.accountId'));
    }
  }
});
