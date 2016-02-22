import Ember from 'ember';
// import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;
const { store } = Ember.inject;


export default Ember.Route.extend( {
  session: service('session'),
  store: service('store'),

  actions: {

  },


  model(){
    return this.get('store').findRecord('user', 'me');
    }
});
