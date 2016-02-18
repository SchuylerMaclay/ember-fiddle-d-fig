import PlantsBaseController from './base';

export default PlantsBaseController.extend({
  actions: {
    cancel() {
      this.transitionToRoute('plants.plant', this.get('model'));
      return false;
    }
  }
});
