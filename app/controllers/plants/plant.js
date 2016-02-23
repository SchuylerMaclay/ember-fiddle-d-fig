import Ember from 'ember';

export default Ember.Controller.extend({
  reviewFormVisible: false,
  reviewContent: null,
  ratings: ["1","2","3",'4','5','6','7','8','9','10'],
  selectedRating: null,
  actions: {
    cancel(){
      this.set('reviewFormVisible', false);
      this.set('reviewContent', null);
      this.set('selectedRating', null);
    },
    showReview(){
      this.set('reviewFormVisible', true);
      // let review = this.store.createRecord('review');
      // plant.get('reviews').addObject(review);
    },
    submitReview(){
      let plant = this.get('model');
      let user = this.controllerFor('application').get('currentUser');
      let review = this.store.createRecord('review',{
        content: this.reviewContent,
        rating: parseInt(this.selectedRating),
        user: user,
        plant: plant
      });
      review.save();
      this.set('reviewFormVisible', false);
      this.set('reviewContent', null);
      this.set('selectedRating', null);

      this.transitionToRoute('plants.plant', plant);
    }
  }
});
