import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    surname: DS.attr('string'),
    patronymic: DS.attr('string'),

    lectures: DS.hasMany('lecture'),
    user: DS.belongsTo('user')
});
