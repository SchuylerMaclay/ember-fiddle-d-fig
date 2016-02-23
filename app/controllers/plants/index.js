import Ember from 'ember';

export default Ember.Controller.extend({

  editGardenPlantName: false,
  currentGardenPlant: null,
  myStickyOptions: {
    wrapperClassName: 'col-xs-3',
    topSpacing: 60 //px, default: 0
  },
  dragFinishText: false,
  dragStartedText: false,
  dragEndedText: false,
  myObject:{id:1, name:'objectName'},
  applicationController: Ember.inject.controller('application'),

  currentUser: Ember.computed.reads('applicationController.currentUser'),

// Purple Thing
  actions: {
    toggleGardenPlantNameEdit: function(gardentPlant){
      this.set('currentGardenPlant', gardentPlant);
      this.set('editGardenPlantName', !this.get('editGardenPlantName'));
    },
    editSubmit: function(){
      this.get('currentGardenPlant').save();
      this.set('currentGardenPlant', null);
      this.set('editGardenPlantName', false);
    },
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
    }

  }

});
