import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service('store'),

    init() {
        this._super(...arguments);
    },

    actions: {
        async deleteBook(book) {
            try {
                this.delBook(book);
            }
            catch(e) {
                let newLog = this.get('store').createRecord('log', 
                  {currentDate: new Date().toString(),
                  message: e.message,
                  currentURL: window.location.href,
                  ipAdress: '',})
                newLog.save();
                this.send('error', e);
            }
        }
    }
});
