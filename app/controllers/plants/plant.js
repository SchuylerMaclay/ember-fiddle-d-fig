import Ember from 'ember';

export default Ember.Controller.extend({
  reviewFormVisible: false,
  actions: {
    showReview(){
      this.set('reviewFormVisible', true);
      let plant = this.get('model');
      let review = this.store.createRecord('review');
      plant.get('reviews').addObject(review);
    },
    submitReview(){
      let plant = this.get('model');
      let reviews = plant.get('reviews');
      reviews.invoke('save');
      this.set('reviewFormVisible', false);
      this.transitionToRoute('plants.plant', plant);
    }
  }
});
