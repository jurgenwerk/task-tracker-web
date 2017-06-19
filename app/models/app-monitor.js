import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  api_key: DS.attr('string', { readOnly: true })
});
