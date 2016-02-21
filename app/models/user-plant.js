import DS from 'ember-data';

export default DS.Model.extend({
  plant: DS.belongsTo('plant', { async: true }),
  user: DS.belongsTo('user', { async: true })
});
