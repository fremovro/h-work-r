import Service from '@ember/service';
import { inject as service } from '@ember/service';
import Evented from '@ember/object/evented';
import Ember from 'ember';
import { Promise } from 'rsvp';
import { isNone } from '@ember/utils';
import { assert } from '@ember/debug';
import { on, off } from 'rsvp';

const messageCategory = {
  error: { name: 'ERROR', priority: 1 },
  warn: { name: 'WARN', priority: 2 },
  log: { name: 'LOG', priority: 3 },
  info: { name: 'INFO', priority: 4 },
  debug: { name: 'DEBUG', priority: 5 },
  deprecate: { name: 'DEPRECATION', priority: 6 },
  promise: { name: 'PROMISE', priority: 7 }
};

export default Service.extend(Evented, {
  /**
    Cache containing references to original Logger methods.
    Cache is needed to restore original methods on service destroy.
    @property _originalMethodsCache
    @type Object[]
    @default null
    @private
  */
  _originalMethodsCache: null,

  /**
    Ember data store.
    @property store
    @type <a href="http://emberjs.com/api/data/classes/DS.Store.html">DS.Store</a>
  */
  store: Ember.inject.service('store'),

  /**
    Flag: indicates whether log service is enabled or not (if not, nothing will be stored to application log).
  */
  enabled: true,

  /**
   Flag: indicates whether log service will store errors to application log or not.
  */
  storeErrorMessages: true,    

  /**
    Flag: indicates whether log service will store promise errors to application log or not.
  */
  storePromiseErrors: false,

  applicationLogModel: 'Message',

  /**
    Initializes log service.
    Ember services are singletons, so this code will be executed only once since application initialization.
  */
  init() {
    this._super(...arguments);

    let _this = this;
    let originalMethodsCache = Ember.A();

    let originalEmberLoggerError = Ember.Logger.error;
    originalMethodsCache.pushObject({
      methodOwner: Ember.Logger,
      methodName: 'error',
      methodReference: originalEmberLoggerError
    });

    let onError = function(error) {
      // If `this` is not undefined then assuming this function was called as promise error handler. So we not performing it.
      if (!this) {
        originalEmberLoggerError(error);
        _this._onError(error, false);
      }
    };

    let onPromiseError = function(reason) {
      if (_this.get('showPromiseErrors')) {
        originalEmberLoggerError(reason);
      }

      _this._onError(reason, true);
    };

    // Assign Ember.onerror & Ember.RSVP.on('error', ...) handlers (see http://emberjs.com/api/#event_onerror).
    Ember.onerror = onError;
    on('error', onPromiseError);

    // Extend Ember.Logger.error logic.
    Ember.Logger.error = function() {
      originalEmberLoggerError(...arguments);

      return _this._storeToApplicationLog(messageCategory.error, joinArguments(...arguments), '');
    };  
  },  

  /**
    Destroys log service.
  */
  willDestroy() {
    this._super(...arguments);

    // Restore original Ember.Logger methods.
    let originalMethodsCache = this.get('_originalMethodsCache');
    if (Ember.isArray(originalMethodsCache)) {
      originalMethodsCache.forEach((cacheEntry) => {
        Ember.set(cacheEntry.methodOwner, cacheEntry.methodName, cacheEntry.methodReference);
      });
    }

    // Cleanup Ember.onerror & Ember.RSVP.on('error', ...) handlers (see http://emberjs.com/api/#event_onerror).
    Ember.onerror = null;
    off('error');
  },

  /**
    Stores given message to application log.
    @method _storeToApplicationLog
    @param {String} category Message category: 'ERROR', 'WARN', 'LOG', 'INFO', 'DEBUG', 'DEPRECATION'.
    @param {String} message Message itself.
    @param {String} formattedMessage Full message content in JSON format.
    @private
  */
  _storeToApplicationLog(category, message, formattedMessage) {
    let isSkippedMessage = false;

    if (isSkippedMessage ||
      category.name === messageCategory.error.name && !this.get('storeErrorMessages') ||
      category.name === messageCategory.promise.name && !this.get('storePromiseErrors')) {
      return new Promise((resolve) => {
        this._triggerEvent(category.name);
        resolve();
      });
    }

    let applicationLogProperties = {
      currentDate: new Date().toString(),
      message: message,
      currentURL: window.location.href,
      ipAdress: '',
    };

    let store = this.get('store');

    // Break if message already exists in store (to avoid infinit loop when message is generated while saving itself).
    let applicationLogModel = store.peekAll('log').findBy('message', message);
    if (applicationLogModel !== undefined) {
      return new Promise((resolve, reject) => {
        this._triggerEvent(category.name, applicationLogModel);
        resolve();
      });
    }

    return store.createRecord('log', applicationLogProperties).save().then((applicationLogModel) => {
      this._triggerEvent(category.name, applicationLogModel);
      return applicationLogModel;
    }).catch((reason) => {
      // Switch off remote logging on rejection to avoid infinite loop.
      this.set('enabled', false);
    });
  },

  _triggerEvent(eventName, applicationLogModel) {
    assert('Logger Error: event name should be a string', typeof eventName === 'string');
    let eventNameToTrigger = eventName.toLowerCase();
    this.trigger(eventNameToTrigger, applicationLogModel);
  },

  _onError(error, isPromiseError) {
    if (isNone(error)) {
      return;
    }

    if (typeof error === 'string') {
      error = new Error(error);
    }

    let message = error.message || error.toString();

    let formattedMessageBlank = {
      name: error && error.name ? error.name : null,
      message: error && error.message ? error.message : null,
      fileName: error && error.fileName ? error.fileName : null,
      lineNumber: error && error.lineNumber ? error.lineNumber : null,
      columnNumber: error && error.columnNumber ? error.columnNumber : null,
      stack: error && error.stack ? error.stack : null
    };

    let formattedMessage = JSON.stringify(formattedMessageBlank);

    this._storeToApplicationLog(isPromiseError ? messageCategory.promise : messageCategory.error, message, formattedMessage);
  }
});
