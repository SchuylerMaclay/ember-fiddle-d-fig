import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  plant: DS.belongsTo('plant', { async: true })
});
