import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveUser(user) {
      let newUser;
      try {
        newUser = this.get('store').createRecord('user', user);
        await newUser.save();

        this.transitionToRoute('index');
      }
      catch(e) {
        e.user = newUser;
        let newLog = this.get('store').createRecord('log', 
          {currentDate: new Date().toString(),
          message: e.message,
          currentURL: window.location.href,
          ipAdress: '',})
        newLog.save();
        this.send('error', e);
      }
    },

    error(error, transition) {
      this.set('errors', error.user.errors);
      return false;
    }
  },

  resetErrors() {
    this.set('errors', {});
  }
});
