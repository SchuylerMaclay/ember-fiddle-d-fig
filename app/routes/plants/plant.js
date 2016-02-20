import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete(plant) {
      plant.destroyRecord();
      this.transitionTo('plants');
    }
  }
});
