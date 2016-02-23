import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  imageUrl: DS.attr('string'),
  light: DS.attr('string'),
  water: DS.attr('string'),
  description: DS.attr('string'),
  reviews: DS.hasMany('review', {async: true}),
  userPlants: DS.hasMany('userPlants', {async: true}),

  avgRating: Ember.computed('reviews.@each.rating', function(){
    let sum = 0;
    let reviews = this.get('reviews');
    let count = reviews.get('length');
    if(count===0){
      return "No Reviews";
    } else{
      reviews.forEach(function(review){
        sum = sum + review.get('rating');
      });
      return Math.round(sum/count*10)/10;
    }
  })
});
