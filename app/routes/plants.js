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
      // debugger;
      let userPlant = this.store.createRecord('user-plant', {
        ownership: 'garden',
        user: user,
        plant: plant,
        name: `${user.get('name')} ${plant.get('name')}`
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
      $('#target').css('border','none');

    },
    draggingOverTarget: function() {
      $('#target').css('border','solid red 3px');
      // $('#drag-alert').html(`<div class="alert alert-dismissible alert-danger">
      //     <button type="button" class="close" data-dismiss="alert">&close;</button>
      //     <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
      //   </div>`);
    },
    leftDragTarget: function() {
      $('#target').css('border','none');
      // $('#target').css('background-color','purple');
      // $('#drag-alert').html('');
    }
  }
});
