import Controller from '@ember/controller';
import RSVP from 'rsvp';
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

    init() {
        this._super(...arguments);
    },

    actions: {
        async addMeeting() {
            if (this.get('isFormValid')) {
                try {
                    let meetingModel = this.get('model');
                    if(this.get('meetingEventDate')) {
                        meetingModel.set('eventDate', this.get('meetingEventDate'));
                        meetingModel.set('user', this.get('currentUser.user'));
                        meetingModel.lectures.forEach(lecture => {
                            lecture.set('date', this.get('meetingEventDate'));
                            lecture.save();
                        });
                        await meetingModel.save();
                        this.set('meetingEventDate', undefined);
                        this.transitionToRoute('meeting');
                    }
                    else alert('необходимо указать дату встречи...')
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
        async deleteMeeting(meeting) {
            try {
                let temp = meeting; let temp2 =[], temp3=[];

                temp.get('lectures').toArray().forEach(lecture => {
                    temp2.push(lecture);
                    const promise = lecture.destroyRecord();
                    temp3.push(promise);
                });
                await RSVP.all(temp3);
                temp2.forEach(lecture => {
                    this.get('store').unloadRecord(lecture);
                })
                await meeting.destroyRecord();
                this.get('store').unloadRecord(meeting);
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
        },
        async deleteLecture(lecture) {
            try {
                await lecture.destroyRecord();
                this.get('store').unloadRecord(lecture);
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
