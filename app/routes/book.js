import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    queryParams: {
        search: {
            refreshModel: false,
        },
        tags: {
            refreshModel: false,
        }
    },

    model({ search, tags }) {
        if(search || tags){
            return this.get('store').query('book', { q: search, tags_like: tags });
        }
        else {
            return this.get('store').findAll("book");
        }
    },
    actions: {
        reloadModel() {
            this.refresh();
        },
    }
});
