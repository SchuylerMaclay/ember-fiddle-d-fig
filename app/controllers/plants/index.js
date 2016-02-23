import Ember from 'ember';

export default Ember.Controller.extend({

  dragFinishText: false,
  dragStartedText: false,
  dragEndedText: false,
  myObject:{id:1, name:'objectName'},
  applicationController: Ember.inject.controller('application'),

  currentUser: Ember.computed.reads('applicationController.currentUser'),
  reviewFormVisible: false,
  reviewContent: null,
  ratings: ["1","2","3",'4','5','6','7','8','9','10'],
  selectedRating: null,  

// Purple Thing
  actions: {
    dragResultGarden: function(plant) {
      let user = this.controllerFor('application').get('currentUser');
      let userPlant = this.store.createRecord('user-plant', {
        ownership: 'garden',
        user: user,
        plant: plant,
        name: user.get('name') + " " + plant.get('name')
      });
      userPlant.save();
      console.log(userPlant.get('name'));
    },
    dragResultWishlist: function(plant) {
      let user = this.controllerFor('application').get('currentUser');
      let userPlant = this.store.createRecord('user-plant', {
        ownership: 'wishlist',
        user: user,
        plant: plant,
        name: user.get('name') + " " + plant.get('name')
      });
      userPlant.save();
      console.log(userPlant.get('name'));
    },
    dragStart: function() {
      // this.set('dragEndedText', false);
      // this.set('dragStartedText','Drag Has Started');
    },
    dragEnd: function() {
      // this.set('dragStartedText', false);
      // this.set('dragEndedText','Drag Has Ended');
    },
    draggingOverGardenTarget: function() {
      Ember.$('#target-garden').css('border','solid #c59ab9 3px');
    },
    draggingOverWishlistTarget: function() {
      Ember.$('#target-wishlist').css('border','solid #c59ab9 3px');
    },
    gardenDragTarget: function() {
      Ember.$('#target-garden').css('border','solid #fff 3px');
    },
    wishlistDragTarget: function() {
      Ember.$('#target-wishlist').css('border','solid #fff 3px');
    },
    showReview: function(plant){
      this.set('reviewFormVisible', true);
    },
    cancel(){
      this.set('reviewFormVisible', false);
    },
    showReview(){
      this.set('reviewFormVisible', true);
    },
    submitReview(plant){
      // let plant = "this.controllerFor('plants').get('plant')";
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

      // this.transitionToRoute('plants.plant', plant);
    }

  }

});
