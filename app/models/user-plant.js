import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  ownership: DS.attr('string'),
  plant: DS.belongsTo('plant', { async: true }),
  user: DS.belongsTo('user', { async: true })
});
