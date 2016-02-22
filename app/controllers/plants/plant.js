import Ember from 'ember';

export default Ember.Controller.extend({
  reviewFormVisible: false,
  reviewContent: null,
  ratings: ["1","2","3",'4','5','6','7','8','9','10'],
  selectedRating: null,
  actions: {
    cancel(){
      this.set('reviewFormVisible', false);
    },
    showReview(){
      this.set('reviewFormVisible', true);
      // let review = this.store.createRecord('review');
      // plant.get('reviews').addObject(review);
    },
    submitReview(){
      let plant = this.get('model');
      let review = this.store.createRecord('review');
      let user = this.controllerFor('application').get('currentUser');
      review.set('content', this.reviewContent);
      review.set('rating', parseInt(this.selectedRating));
      plant.get('reviews').addObject(review);
      user.get('reviews').addObject(review);
      review.save();
      this.set('reviewFormVisible', false);
      this.set('reviewContent', null);
      this.set('selectedRating', null);

      this.transitionToRoute('plants.plant', plant);
    },
    dragResult: function(obj,ops) {
      this.set('dragFinishText', ops.target.resultText);
      console.log('Content of draggable-object :',obj);
    },
    dragStart: function() {
      this.set('dragEndedText', false);
      this.set('dragStartedText','Drag Has Started');
    },
    dragEnd: function() {
      this.set('dragStartedText', false);
      this.set('dragEndedText','Drag Has Ended');
    },
    draggingOverTarget: function() {
      console.log('Over target');
    },
    leftDragTarget: function() {
      console.log('Off target');
    }
  }
});
