import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed('model.name', 'model.imageUrl', function() {
    return !Ember.isEmpty(this.get('model.name')) && !Ember.isEmpty(this.get('model.imageUrl'));
    }
  ),
  actions: {
    save() {
      if (this.get('isValid')) {
        this.get('model').save().then((plant) => {
          this.transitionToRoute('plants.plant', plant);
        });
      } else {
        this.set('errorMessage', 'A plant must have a name and an image');
      }
        return false;
      },
      cancel() {
        return true;
      }
    }
});
