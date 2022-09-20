import Controller from "@ember/controller";
import { inject as service } from '@ember/service';
import { get, set, computed } from '@ember/object';
import ENV from 'h-work-2/config/environment';

export default Controller.extend({
  session: service(),
  currentUser: service(),
  i18n: service(),

  currentLocale: ENV.i18n.defaultLocale,
  
  isRussian: computed('currentLocale', function () {
    return get(this, 'currentLocale') === 'ru';
  }),

  isEnglish: computed('currentLocale', function () {
    return get(this, 'currentLocale') === 'en';
  }),

  actions: {
    async logout(e) {
      try {
        e.preventDefault();
        this.get('session').invalidate();
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
    },

    changeLocale(e) {
      try {
        set(this, 'currentLocale', e.target.value);
        set(this, 'i18n.locale', get(this, 'currentLocale'));
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
  },

  init() {
    this._super(...arguments);
    set(this, 'i18n.locale', get(this, 'currentLocale'));
  }
});
