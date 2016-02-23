import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get("store").findRecord('user','me');
  },
  dragFinishText: false,
  dragStartedText: false,
  dragEndedText: false,
  myObject:{id:1, name:'objectName'},
  actions: {
    dragResult: function(plant) {
      console.log(plant);
      let user = this.controllerFor('application').get('currentUser');
      let userPlant = this.store.createRecord('user-plant', {
        ownership: 'garden',
        user: user,
        plantId: plant.get('id'),
        name: user.get('name') + " " + plant.get('name')
      });
      userPlant.save();
      // userPlant.set('name', user.name + plant.name);
      // userPlant.save();
      console.log(userPlant.get('name'));

      // this.set('dragFinishText', ops.target.resultText);
      // console.log('Content of draggable-object :',obj);
    },
    dragStart: function() {
      this.set('dragEndedText', false);
      this.set('dragStartedText','Drag Has Started');
    },
    dragEnd: function() {
      this.set('dragStartedText', false);
      this.set('dragEndedText','Drag Has Ended');
      Ember.$('#target').css('border','none');

    },
    draggingOverTarget: function() {
      Ember.$('#target').css('border','solid red 3px');
      // Ember.$('#drag-alert').html(`<div class="alert alert-dismissible alert-danger">
      //     <button type="button" class="close" data-dismiss="alert">&close;</button>
      //     <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
      //   </div>`);
    },
    leftDragTarget: function() {
      Ember.$('#target').css('border','none');
      // Ember.$('#target').css('background-color','purple');
      // Ember.$('#drag-alert').html('');
    }
  }
});
