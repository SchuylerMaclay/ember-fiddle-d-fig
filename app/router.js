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
  });
});

export default Router;
