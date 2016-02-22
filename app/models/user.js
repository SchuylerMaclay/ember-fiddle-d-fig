import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  userPlants: DS.hasMany('userPlants', { async: true }),
  reviews: DS.hasMany('reviews', { async: true })
});
