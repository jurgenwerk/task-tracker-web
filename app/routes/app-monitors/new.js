import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('app-monitor');
  },
  actions: {
    save(model) {
      const promise = model.save();
      promise.then(() => this.transitionTo('index'));
    }
  }
});
