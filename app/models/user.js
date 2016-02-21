import DS from 'ember-data';

export default DS.Model.extend({
  userPlants: DS.hasMany('userPlants', { async: true }),
  plants: DS.hasMany('plants', { async: true }),
  reviews: DS.hasMany('reviews', { async: true })
});
