import Ember from 'ember';

export default Ember.Component.extend({
  model(){
    return this.controllerFor('application').get('currentUser');
  },
  actions:{
    draggingOverTarget(){
      this.sendAction('draggingOverTarget');
    },
    dragResult(){
      debugger;
      this.sendAction('dragResult', this.get('plant'));
    },
    leftDragTarget(){
      this.sendAction('leftDragTarget');
    }
  }
});
