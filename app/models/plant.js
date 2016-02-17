import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  imageUrl: DS.attr('string'),
  water: DS.attr('string'),
  light: DS.attr('string'),
  description: DS.attr('string')
});
