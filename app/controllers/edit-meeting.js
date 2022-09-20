import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { validator, buildValidations } from 'ember-cp-validations';
import { computed } from '@ember/object';

const Validations = buildValidations({
    meetingEventDate: [
        validator('ds-error'),
        validator('presence', true),
        validator('format', { type: 'date' })
    ]
});

export default Controller.extend(Validations, {
    store: service('store'),
    currentUser: service(),
    i18n: service(),
    isFormValid: computed.alias('validations.isValid'),
    meetingEventDate: ' ',

    init() {
        this._super(...arguments);
    },

    actions: {
        async editMeeting() {
            if (this.get('isFormValid')) {
                try {
                    let meetingModel = this.get('model');
                    if(this.get('meetingEventDate')) {
                        meetingModel.set('eventDate', this.get('meetingEventDate'));
                        meetingModel.lectures.forEach(lecture => {
                            lecture.set('date', this.get('meetingEventDate'));
                            lecture.save();
                        });
                    }
                    await meetingModel.save();

                    this.set('meetingEventDate', undefined);
                    this.transitionToRoute('meeting');
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
        async deleteLecture(lecture) {
            await lecture.destroyRecord();
            this.get('store').unloadRecord(lecture);
        }
    }
});
