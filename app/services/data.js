import Service from '@ember/service';
// import ENV from 'h-work-2/config/environment';

export default Service.extend({
    // init() {
    //     this._super(...arguments);
    // },
    // async createBook(book) {
    //     this.get('books').pushObject(book);
    //     let response = await fetch(`${ENV.backendURL}/books`, {
    //         method: 'POST',
    //         body: JSON.stringify(book),
    //         headers: {
    //         'Content-Type': 'application/json'
    //         }
    //     });
    //     // let response = await fetch(`${ENV.backendURL}/books/?name_like=${book.name}&author_like=${book.author}`);
    //     return await response.json();
    // },
    async addPhoto(book, uploadData) {
        // this.get('books').removeObject(this.get('books').find((temp) => temp.id === parseInt(book.id)));
        // this.get('books').pushObject(book);
        // if(uploadData) {
        //     console.log(book.id);
        //     uploadData.url = `${ENV.backendURL}/FileUpload`;
        //     uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
        //         console.log(result);
        //         const dataToUpload = {
        //             entityName: 'books',
        //             id: book.id,
        //             fileName: result.filename
        //         };
                
        //         await fetch(`${ENV.backendURL}/saveURL`, {
        //             method: 'POST',
        //             body: JSON.stringify(dataToUpload),
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             }
        //         });
        //     });
        // }
        // return await fetch(`${ENV.backendURL}/books/${book.id}`, {
        //     method: 'PATCH',
        //     body: JSON.stringify(book),
        //     headers: {
        //     'Content-Type': 'application/json'
        //     }
        // });
    },
    // async getBooks(search, tagsSearch) {
    //     var query = '';
    //     if(search || tagsSearch){
    //         if(search && tagsSearch){
    //             query = `?q=${search}&tags_like=${tagsSearch}`;
    //         }
    //         else{
    //             if(search) query = `?q=${search}`;
    //             else query = `?tags_like=${tagsSearch}`;
    //         }
    //     }
    //     else query = '';
    //     let response = await fetch(`${ENV.backendURL}/books${query}`);
    //     let books = await response.json();
    //     this.get('books').clear();
    //     this.get('books').pushObjects(books);
    //     return this.get('books');
    // },

    // async getSpeakers(search) {
    //     var query = '';
    //     if(search) query = `?q=${search}`;
    //     let response = await fetch(`${ENV.backendURL}/speakers${query}`);
    //     let speakers = await response.json();
    //     this.get('speakers').clear();
    //     this.get('speakers').pushObjects(speakers);
    //     return this.get('speakers');
    // },

    // getBook(id) {
    //     return this.get('books').find((book) => book.id === parseInt(id));
    // },

    // getSpeaker(id) {
    //     return this.get('speakers').find((speaker) => speaker.id === parseInt(id));
    // },
    
    // deleteBook(book) {
    //     this.get('books').removeObject(book);
    //     return fetch(`${ENV.backendURL}/books/${book.id}`, { method: 'DELETE'});
    // },

    // deleteSpeaker(speaker) {
    //     this.get('speakers').removeObject(speaker);
    //     return fetch(`${ENV.backendURL}/speakers/${speaker.id}`, { method: 'DELETE'});
    // },

    // async createSpeaker(speaker) {
    //     this.get('speakers').pushObject(speaker);
    //     return await fetch(`${ENV.backendURL}/speakers`, {
    //         method: 'POST',
    //         body: JSON.stringify(speaker),
    //         headers: {
    //         'Content-Type': 'application/json'
    //         }
    //     });
    // },

    // editSpeaker(speaker) {
    //     this.get('speakers').removeObject(this.get('speakers').find((temp) => temp.id === parseInt(speaker.id)));
    //     this.get('speakers').pushObject(speaker);
    //     return fetch(`${ENV.backendURL}/speakers/${speaker.id}`, {
    //         method: 'PATCH',
    //         body: JSON.stringify(speaker),
    //         headers: {
    //         'Content-Type': 'application/json'
    //         }
    //     });
    // },
});
