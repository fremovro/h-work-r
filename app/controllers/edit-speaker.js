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
    dataService: service('data'),
    i18n: service(),
    isFormValid: computed.alias('validations.isValid'),
    speakerPatronymic: ' ',
    speakerSurname: ' ',
    speakerName: ' ',

    actions: {
        async editSpeaker() {
            try {
                if (this.get('isFormValid')) {
                    let speakerModel = this.get('model');
                    if(this.get('speakerName')) speakerModel.set('name', this.get('speakerName'));
                    if(this.get('speakerSurname')) speakerModel.set('surname', this.get('speakerSurname'));
                    if(this.get('speakerPatronymic')) speakerModel.set('patronymic', this.get('speakerPatronymic'));
                    
                    await speakerModel.save();

                    this.setProperties({
                        speakerName: undefined,
                        speakerSurname: undefined,
                        speakerPatronymic: undefined
                    });
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