import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.name',
    'model.imageUrl',

    function() {
    return !Ember.isEmpty(this.get('model.name')) &&
      !Ember.isEmpty(this.get('model.imageUrl'));
    }
  ),
  actions: {
    save() {
      if (this.get('isValid')) {
        var _this = this; this.get('model').save().then(function(plant) {
              _this.transitionToRoute('plants.show', plant);
            });
    } else {
      this.set('errorMessage', 'You have to fill all the fields');
      }
      return false;
      },
      cancel() {
        this.transitionToRoute('plants.show', this.get('model'));
        return false;
    }
  }
});
