import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    store: service(),
    actions: {
        async editLecture() {
            try {
                let lectureModel = this.get('model');
                if(this.get('lectureRating')) lectureModel.set('rating', this.get('lectureRating'));
                if(this.get('newBook')) lectureModel.set('book', this.get('newBook'));
                if(this.get('newSpeaker')) lectureModel.set('speaker', this.get('newSpeaker'));
                if(this.get('newPresentURL')) lectureModel.set('presentURL', this.get('newPresentURL'));
                if(this.get('newVideoURL')) lectureModel.set('videoURL', this.get('newVideoURL'));
                if(this.get('newReview')) lectureModel.set('review', this.get('newReview'));

                await lectureModel.save();

                this.setProperties({
                    lectureRating: undefined,
                    newBook: undefined,
                    newSpeaker: undefined,
                    newPresentURL: undefined,
                    newVideoURL: undefined,
                    newReview: undefined
                });
                this.transitionToRoute('edit-meeting', lectureModel.meeting.get('id'));
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
        getBooks() {
            try { return this.get('store').findAll('book'); }
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
        getSpeakers() {
            try { return this.get('store').findAll('speaker'); }
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
