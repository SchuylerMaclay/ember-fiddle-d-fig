import Ember from 'ember';

export default Ember.Controller.extend({


  dragFinishText: false,
  dragStartedText: false,
  dragEndedText: false,
  myObject:{id:1, name:'objectName'},

  user(){
    return this.controllerFor('application').get('currentUser');
  },
  actions: {
    dragResult: function(plant) {
      let user = this.controllerFor('application').get('currentUser');
      let userPlant = this.store.createRecord('user-plant', {
        ownership: 'garden',
        user: user,
        plant: plant,
        name: user.get('name') + plant.get('name')
      });
      userPlant.save();
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
    },
    draggingOverTarget: function() {
      $('#target').css('background-color','red');
    },
    leftDragTarget: function() {
      $('#target').css('background-color','purple');
    }

  }

});
