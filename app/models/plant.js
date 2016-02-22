import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  imageUrl: DS.attr('string'),
  light: DS.attr('string'),
  water: DS.attr('string'),
  description: DS.attr('string'),
  reviews: DS.hasMany('review', {async: true}),
  userPlants: DS.hasMany('userPlants', {async: true})
});
