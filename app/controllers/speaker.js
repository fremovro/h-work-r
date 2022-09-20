import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    store: service('store'),
    queryParams: ["search"],
    search: '',
    actions: {
        updatePage() {
            this.send("reloadModel");
        },
        async deleteSpeaker(speaker) {
            try{
                await speaker.destroyRecord();
                this.get('store').unloadRecord(speaker);
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
