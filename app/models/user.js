import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  userPlants: DS.hasMany('userPlants', { async: true }),
  reviews: DS.hasMany('reviews', { async: true }),


  garden: Ember.computed("userPlants", function(){
  return this.get("userPlants").filter(function(item){
    debugger
    return (item.get('ownership') === "garden");
  }, this);
})
});
