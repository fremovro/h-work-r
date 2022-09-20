import Route from '@ember/routing/route';
import { set } from '@ember/object';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    setupController(controller) {
        this._super(...arguments);
        set(controller, 'uploadData', null);
    },
    model() {
        return [];
    },
});
