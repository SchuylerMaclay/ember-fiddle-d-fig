import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  actions: {
    delete(plant) {
      plant.destroyRecord();
      this.transitionTo('plants');
    }
  }
});
