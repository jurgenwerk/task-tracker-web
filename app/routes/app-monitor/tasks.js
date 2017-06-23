import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const appMonitor = this.modelFor('app-monitor');
    return this.store.query('task', {
      filter: {
        app_monitor_id: appMonitor.id
      }
    });
  }
});
