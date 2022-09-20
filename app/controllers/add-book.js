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
    i18n: service(),
    isFormValid: computed.alias('validations.isValid'),

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

        async addBook() {
            try {
                if (this.get('isFormValid')) {
                    const uploadData = get(this, 'uploadData');
                    let coverURL = new Promise((resolve, reject) => {
                        if(uploadData) {
                            uploadData.url = `${ENV.backendURL}/FileUpload`;
                            uploadData.submit().done((result) => {
                                resolve(`/uploads/${result.filename}`);
                            });
                        }
                        else resolve("images/book-cover.jpg");
                    });
                    let tags = this.get('tags') ? this.get('tags') : [];
                    let bookModel = {
                        name: this.get('bookName'),
                        author: this.get('bookAuthor'),
                        size: this.get('bookSize'),
                        description: this.get('bookDescription'),
                        coverURL: await coverURL,
                        tags: this.get('tags'),
                    };
                    
                    let newBook = this.get('store').createRecord('book', bookModel);
                    newBook.serialize();
                    await newBook.save();
                    this.setProperties({
                        bookName: undefined,
                        bookAuthor: undefined,
                        bookSize: undefined,
                        bookDescription: undefined
                    });
                    this.transitionToRoute('book');
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

    reset() {
        set(this, 'uploadData', null);
    }
});
