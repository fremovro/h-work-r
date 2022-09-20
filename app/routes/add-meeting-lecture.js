import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    model({ id }) {
        return RSVP.hash({
            meeting: this.get('store').findRecord('meeting', id),
            speakers: this.get('store').findAll('speaker'),
            books: this.get('store').findAll('book')
        });
    }
});
