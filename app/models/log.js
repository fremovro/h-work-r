import DS from 'ember-data';

export default DS.Model.extend({
  currentDate: DS.attr('string'),
  ipAdress: DS.attr('string'),
  currentURL: DS.attr('string'),
  message: DS.attr('string'),
});
