import PlantsBaseController from './base';

export default PlantsBaseController.extend({
  actions: {
    cancel() {
      this.transitionToRoute('plants');
      return false;
    }
  }
});
