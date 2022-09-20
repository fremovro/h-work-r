import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    author: DS.attr('string'),
    size: DS.attr('string'),
    description: DS.attr('string'),
    tags: DS.attr('array'),
    coverURL: DS.attr('string'),

    lectures: DS.hasMany('lecture'),
    user: DS.belongsTo('user')
});
