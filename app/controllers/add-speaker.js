import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { validator, buildValidations } from 'ember-cp-validations';
import { computed } from '@ember/object';


const Validations = buildValidations({
    speakerSurname: [
        validator('ds-error'),
        validator('presence', true)
    ],
    speakerName: [
        validator('ds-error'),
        validator('presence', true)
    ],
    speakerPatronymic: [
        validator('ds-error'),
        validator('presence', true)
    ],
  });

export default Controller.extend(Validations, {
    currentUser: service(),
    i18n: service(),
    isFormValid: computed.alias('validations.isValid'),

    actions: {
        async addSpeaker() {
            try {
                if (this.get('isFormValid')) {
                    let speakerModel = {
                        name: this.get('speakerName'),
                        surname: this.get('speakerSurname'),
                        patronymic: this.get('speakerPatronymic'),
                        user: this.get('currentUser.user')
                    };
                    let newSpeaker = this.get('store').createRecord('speaker', speakerModel);
                    newSpeaker.serialize();
                    await newSpeaker.save();
                    this.transitionToRoute('speaker');
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
    }
});
