import Controller from '@ember/controller';
import ENV from 'h-work-2/config/environment';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import { validator, buildValidations } from 'ember-cp-validations';
import { computed } from '@ember/object';

const Validations = buildValidations({
    bookName: [
        validator('ds-error'),
        validator('presence', true)
    ],
    bookAuthor: [
        validator('ds-error'),
        validator('presence', true)
    ],
    bookSize: [
        validator('ds-error'),
        validator('presence', true)
    ],
  });

export default Controller.extend(Validations, {
    dataService: service('data'),
    i18n: service(),
    isFormValid: computed.alias('validations.isValid'),
    bookName: ' ',
    bookAuthor: ' ',
    bookSize: ' ',

    actions: {
        changeUploadData(uploadData) {
            try { set(this, 'uploadData', uploadData); }
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

        changeTags(newTags) {
            try { set(this, 'tags', [...newTags]); }
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

        async editBook() {
            if (this.get('isFormValid')) {
                try {
                    let bookModel = this.get('model');

                    const uploadData = get(this, 'uploadData');
                    if(uploadData) {
                        uploadData.url = `${ENV.backendURL}/FileUpload`;
                        uploadData.submit().done(async (result) => {
                            await bookModel.set('coverURL', `/uploads/${result.filename}`);
                        });
                        await bookModel.save();
                    }

                    if(this.get('bookName')) bookModel.set('name', this.get('bookName'));
                    if(this.get('bookAuthor')) bookModel.set('author', this.get('bookAuthor'));
                    if(this.get('bookSize')) bookModel.set('size', this.get('bookSize'));
                    if(this.get('bookDescription')) bookModel.set('description', this.get('bookDescription'));
                    if(this.get('tags')) bookModel.set('tags', this.get('tags'));

                    await bookModel.save();

                    this.setProperties({
                        bookName: undefined,
                        bookAuthor: undefined,
                        bookSize: undefined,
                        bookDescription: undefined
                    });
                    this.transitionToRoute('book');
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
    },

    reset() {
        set(this, 'uploadData', null);
    }
});
