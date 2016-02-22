import PlantsBaseController from './base';

export default PlantsBaseController.extend({
  actions: {
    cancel() {
      this.model.destroyRecord();
      this.transitionToRoute('plants');
      return false;
    }
  }
});
