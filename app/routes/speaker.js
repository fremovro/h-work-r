import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { debounce } from '@ember/runloop';

export default Route.extend(AuthenticatedRouteMixin, {
    queryParams: {
        search: {
            refreshModel: true,
        },
    },

    model({ search }){
        let promise = new Promise((resolve, reject) => {
            debounce(async () => {
                try {
                    let speakers = search ? await this.get('store').query('speaker', { q: search }) : await this.get('store').findAll('speaker');
                    resolve(speakers);
                }
                catch (e) {
                    reject('Connection failed');
                }
            }, 1500);
        }).
        then((speakers) => {
            this.set('controller.model', speakers);
        }).
        finally(() => {
            if (promise === this.get('modelPromise')) {
                this.set('controller.isLoading', false);
            }
        });

        this.set('modelPromise', promise);
        return { isLoading: true };
    },
    
    setupController(controller, model) {
        this._super(...arguments);
        if (this.get('modelPromise')) {
          controller.set('isLoading', true);
        }
    },


    resetController(controller, isExiting, transition) {
      this._super(...arguments);
      if (isExiting) {
        controller.set('isLoading', false);
        this.set('modelPromise', null);
      }
    },

    actions: {
        reloadModel() {
            this.refresh();
        }
    }
});