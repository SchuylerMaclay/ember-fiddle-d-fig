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
      this.sendAction('dragResult');
    },
    leftDragTarget(){
      this.sendAction('leftDragTarget');
    }
  }
});
