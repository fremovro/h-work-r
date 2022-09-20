import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { validator, buildValidations } from 'ember-cp-validations';
import { computed } from '@ember/object';

const Validations = buildValidations({
    newBook: [
        validator('ds-error'),
        validator('presence', true)
    ],
    newSpeaker: [
        validator('ds-error'),
        validator('presence', true)
    ]
});

export default Controller.extend(Validations, {
    store: service(),
    currentUser: service(),
    i18n: service(),
    isFormValid: computed.alias('validations.isValid'),
    
    actions: {
        async addLecture() {
            if (this.get('isFormValid')) {
                try {
                    let meetingModel = this.get('model').meeting;
                    if(this.get('newBook') && this.get('newSpeaker'))
                    {
                        let lectureModel = {
                            date: meetingModel.get('eventDate'),
                            rating: this.get('lectureRating'),
                            presentURL: this.get('newPresentURL'),
                            videoURL: this.get('newVideoURL'),
                            review: this.get('newReview'),
                            book: this.get('newBook'),
                            speaker: this.get('newSpeaker'),
                            meeting: meetingModel,
                            user: this.get('currentUser.user')
                        };
                        let newLecture = this.get('store').createRecord('lecture', lectureModel);
                        newLecture.serialize();
                        await newLecture.save();
                        this.setProperties({
                            lectureRating: undefined,
                            newBook: undefined,
                            newSpeaker: undefined,
                            newPresentURL: undefined,
                            newVideoURL: undefined,
                            newReview: undefined
                        });
                        this.transitionToRoute('add-meeting', meetingModel.get('id'));
                    }
                    else {
                        alert('для создания нового доклада необходимо выбрать книгу и спикера...');
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
    }
});
