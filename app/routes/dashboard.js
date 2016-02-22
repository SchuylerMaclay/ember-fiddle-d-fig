import Ember from 'ember';
// import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend( {
  session: service('session'),

  actions: {
  },
  model(){
    return this.store.findRecord('user');
  }
});
