import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  rating: DS.attr('number'),
  time: DS.attr('date'),
  reviewer: DS.attr('string'),
  plant: DS.belongsTo('plant', { async: true }),
  user: DS.belongsTo('user', { async: true })
});
