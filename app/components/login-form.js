import Component from '@ember/component';
import fetch from 'fetch';
import { validator, buildValidations } from 'ember-cp-validations';
import EmberObject, { get, computed } from '@ember/object';
import ENV from 'h-work-2/config/environment';
import { inject as service } from '@ember/service';

const Validations = buildValidations({
  email: [
    validator('ds-error'),
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  password: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      // message: computed('model.{i18n.locale}', function () {
      //   return '{description} ' + get(this, 'model.i18n').t('errors.blank');
      // }),
    }),
    validator('length', {
      min: 4,
      max: 8
    })
  ]
});

export default Component.extend(Validations, {
  i18n: service(),
  isFormValid: computed.alias('validations.isValid'),

  actions: {
    login(e) {
      try {
        let remember;
        e.preventDefault();
        this.get('remember') ? remember = true : remember = false;
        if (this.get('isFormValid')) {
          this.get('onSubmit')({
            email: this.email,
            password: this.password,
            remember: remember
          });
        }
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

  didReceiveAttrs() {
    this.setProperties({
      email: this.get('user.email'),
      password: this.get('user.password')
    });
  }
});
