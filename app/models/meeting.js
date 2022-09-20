import DS from 'ember-data';

export default DS.Model.extend({
    eventDate: DS.attr('date-string'),

    lectures: DS.hasMany('lecture'),
    user: DS.belongsTo('user')
});
