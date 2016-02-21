import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('plants', function() {
    this.route('plant', {
      path: ':plant_id'
    });

    this.route('show', {
      path: ':plant_id/show'
    });
    this.route('new');

    this.route('edit', {
      path: ':plant_id/edit'
    });
  });
  this.route('login');
});

export default Router;
