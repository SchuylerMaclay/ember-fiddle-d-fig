import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  userPlants: DS.hasMany('userPlants', { async: true }),
  reviews: DS.hasMany('reviews', { async: true }),

  garden: Ember.computed.filter('userPlants.@each.ownership', function(userPlant){
      return userPlant.get('ownership') === "garden";
  }),
  wishlist: Ember.computed.filter('userPlants.@each.ownership', function(userPlant){
      return userPlant.get('ownership') === "wishlist";
  }),

});
