import Ember from 'ember';

export default Ember.Route.extend( {


  model(){
    let model = this.store.findAll('plant');
    this.controllerFor('application').set('plants', model);
    return model;
  }
});
