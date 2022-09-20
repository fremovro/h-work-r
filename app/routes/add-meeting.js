import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    meetingEventDate: "Укажите дату",

    model({ id }) {
        console.log(id);
        if(id == 0) { 
            let newMeeting = this.get('store').createRecord('meeting');
            return newMeeting.save();
        }
        else {
            return this.get('store').findRecord('meeting', id);
        }
    }
});
