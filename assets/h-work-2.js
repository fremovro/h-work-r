"use strict";



define('h-work-2/abilities/book', ['exports', 'ember-can'], function (exports, _emberCan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCan.Ability.extend({
    currentUser: Ember.inject.service(),
    session: Ember.inject.service(),

    // only the person who wrote a post can edit it
    canEdit: Ember.computed(function () {
      var _this = this;

      if (!this.get('session.isAuthenticated')) {
        return false;
      }
      return new Ember.RSVP.Promise(function (resolve, reject) {
        _this.get('currentUser.user.email') === 'admin@mail.ru' ? resolve(true) : reject(false);
        //   return this.get('model.user').then((user) => {
        //     resolve(user.get('email') === this.get('currentUser.user.email'));
        //   }).catch(() => {
        //     reject(false);
        //   });
      });
    }).volatile()
  });
});
define('h-work-2/abilities/meeting', ['exports', 'ember-can'], function (exports, _emberCan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCan.Ability.extend({
    currentUser: Ember.inject.service(),
    session: Ember.inject.service(),

    // only the person who wrote a post can edit it
    canEdit: Ember.computed(function () {
      var _this = this;

      if (!this.get('session.isAuthenticated')) {
        return false;
      }
      return new Ember.RSVP.Promise(function (resolve, reject) {
        _this.get('currentUser.user.email') === 'admin@mail.ru' ? resolve(true) : reject(false);
        //   return this.get('model.user').then((user) => {
        //     resolve(user.get('email') === this.get('currentUser.user.email'));
        //   }).catch(() => {
        //     reject(false);
        //   });
      });
    }).volatile()
  });
});
define('h-work-2/abilities/speaker', ['exports', 'ember-can'], function (exports, _emberCan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCan.Ability.extend({
    currentUser: Ember.inject.service(),
    session: Ember.inject.service(),

    // only the person who wrote a post can edit it
    canEdit: Ember.computed(function () {
      var _this = this;

      if (!this.get('session.isAuthenticated')) {
        return false;
      }
      return new Ember.RSVP.Promise(function (resolve, reject) {
        _this.get('currentUser.user.email') === 'admin@mail.ru' ? resolve(true) : reject(false);
        //   return this.get('model.user').then((user) => {
        //     resolve(user.get('email') === this.get('currentUser.user.email'));
        //   }).catch(() => {
        //     reject(false);
        //   });
      });
    }).volatile()
  });
});
define('h-work-2/adapters/application', ['exports', 'ember-data', 'h-work-2/config/environment'], function (exports, _emberData, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.JSONAPIAdapter.extend({
        session: Ember.inject.service(),
        host: _environment.default.backendURL,

        headers: Ember.computed(function () {
            var resultHeaders = {
                'Content-Type': 'application/json'
            };

            if (this.get('session.isAuthenticated')) {
                resultHeaders['Authorization'] = 'Bearer ' + this.session.data.authenticated.token;
            }

            return resultHeaders;
        }).volatile(),

        buildURL: function buildURL(modelName, id, snapshot, requestType, query) {
            var url = this._super.apply(this, arguments);
            if (modelName === 'meeting' && requestType === 'query') {
                url += '?_embed=lectures';
            }

            return url;
        },
        handleResponse: function handleResponse(status, headers, payload) {
            var meta = {
                total: headers['x-total-count']
            };

            payload.meta = meta;

            return this._super(status, headers, payload);
        }
    });
});
define('h-work-2/adapters/user', ['exports', 'h-work-2/adapters/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({
    urlForQueryRecord: function urlForQueryRecord(query) {
      if (query.me) {
        delete query.me;

        return this._super.apply(this, arguments) + '/me';
      }

      return this._super.apply(this, arguments);
    }
  });
});
define('h-work-2/app', ['exports', 'h-work-2/resolver', 'ember-load-initializers', 'h-work-2/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('h-work-2/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _basicDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
define('h-work-2/components/basic-dropdown/content-element', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content-element'], function (exports, _contentElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contentElement.default;
    }
  });
});
define('h-work-2/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('h-work-2/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('h-work-2/components/book-item', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    exports.default = Ember.Component.extend({
        store: Ember.inject.service('store'),

        init: function init() {
            this._super.apply(this, arguments);
        },


        actions: {
            deleteBook: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(book) {
                    var newLog;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    try {
                                        this.delBook(book);
                                    } catch (e) {
                                        newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                                            message: e.message,
                                            currentURL: window.location.href,
                                            ipAdress: '' });

                                        newLog.save();
                                        this.send('error', e);
                                    }

                                case 1:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function deleteBook(_x) {
                    return _ref.apply(this, arguments);
                }

                return deleteBook;
            }()
        }
    });
});
define('h-work-2/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('h-work-2/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('h-work-2/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('h-work-2/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('h-work-2/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('h-work-2/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('h-work-2/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('h-work-2/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('h-work-2/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('h-work-2/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('h-work-2/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('h-work-2/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('h-work-2/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('h-work-2/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('h-work-2/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('h-work-2/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('h-work-2/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('h-work-2/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('h-work-2/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('h-work-2/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('h-work-2/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('h-work-2/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('h-work-2/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('h-work-2/components/bs-form/element/control/radio', ['exports', 'ember-bootstrap/components/bs-form/element/control/radio'], function (exports, _radio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
define('h-work-2/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('h-work-2/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('h-work-2/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('h-work-2/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('h-work-2/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('h-work-2/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('h-work-2/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('h-work-2/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('h-work-2/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('h-work-2/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('h-work-2/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('h-work-2/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('h-work-2/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('h-work-2/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('h-work-2/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('h-work-2/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('h-work-2/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('h-work-2/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('h-work-2/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('h-work-2/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('h-work-2/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('h-work-2/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('h-work-2/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('h-work-2/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('h-work-2/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('h-work-2/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('h-work-2/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('h-work-2/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('h-work-2/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('h-work-2/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('h-work-2/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('h-work-2/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('h-work-2/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('h-work-2/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('h-work-2/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('h-work-2/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('h-work-2/components/date-picker', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Component.extend({
		didInsertElement: function didInsertElement() {
			this._super.apply(this, arguments);
			Ember.$(function () {
				Ember.$('.datepicker').datepicker({
					clearBtn: true,
					format: "yyyy-mm-dd",
					language: "ru",
					autoclose: true
				});
			});
		},


		actions: {
			setNewDate: function setNewDate(newDate) {
				this.setNewDate(newDate);
			}
		}
	});
});
define('h-work-2/components/edit-tags', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  exports.default = Ember.Component.extend({
    didInsertElement: function didInsertElement() {
      var _this = this;

      this._super.apply(this, arguments);

      var el = this.$();

      Ember.set(this, 'addTag', function (e) {
        _this.tagAdded(e.item);
      });

      Ember.set(this, 'removeTag', function (e) {
        _this.tagRemoved(e.item);
      });

      el.on('itemAdded', this.addTag);
      el.on('itemRemoved', this.removeTag);
    },
    didReceiveAttrs: function didReceiveAttrs() {
      var tags = Ember.get(this, 'tags');
      (true && !(Ember.typeOf(tags) === 'array') && Ember.assert('Passed tags must be an array', Ember.typeOf(tags) === 'array'));

      Ember.set(this, '_tags', [].concat(_toConsumableArray(tags)));
    },
    didRender: function didRender() {
      var arraysAreEqual = function arraysAreEqual(arr1, arr2) {
        arr2 = arr2.itemsArray ? arr2.itemsArray : arr2;
        return Ember.$(arr1).not(arr2).length === 0 && Ember.$(arr2).not(arr1).length === 0;
      };

      var el = this.$();

      var currentValues = el.tagsinput('items');
      var tags = Ember.get(this, '_tags');

      if (!arraysAreEqual(tags, currentValues)) {
        el.tagsinput('removeAll');
        tags.forEach(function (tag) {
          el.tagsinput('add', tag);
        });
      }
    },
    tagAdded: function tagAdded(newTag) {
      Ember.get(this, '_tags').push(newTag);
      this.get('onChange')(this._tags);
    },
    tagRemoved: function tagRemoved(tag) {
      var tagIndex = Ember.get(this, '_tags').indexOf(tag);
      if (tagIndex > -1) {
        var part1 = Ember.get(this, '_tags').slice(0, tagIndex);
        var part2 = Ember.get(this, '_tags').slice(tagIndex + 1);
        Ember.set(this, '_tags', [].concat(_toConsumableArray(part1), _toConsumableArray(part2)));
        this.get('onChange')(this._tags);
      }
    },
    willDestroyElement: function willDestroyElement() {
      var el = this.$();
      el.off('itemAdded', this.addTag);
      el.off('itemRemoved', this.removeTag);
    }
  });
});
define('h-work-2/components/ember-popper-targeting-parent', ['exports', 'ember-popper/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('h-work-2/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('h-work-2/components/g-recaptcha-invisible', ['exports', 'ember-cli-google-recaptcha/components/g-recaptcha-invisible'], function (exports, _gRecaptchaInvisible) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gRecaptchaInvisible.default;
    }
  });
});
define('h-work-2/components/g-recaptcha-v2', ['exports', 'ember-cli-google-recaptcha/components/g-recaptcha-v2'], function (exports, _gRecaptchaV) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gRecaptchaV.default;
    }
  });
});
define('h-work-2/components/input-file', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    isFileChoosen: Ember.computed('uploadData', function () {
      return this.get('uploadData') && this.get('uploadData').files.length;
    }),

    ifRemoveButtonDisabled: Ember.computed('isFileChoosen', function () {
      return !this.get('isFileChoosen');
    }),

    fileName: Ember.computed('isFileChoosen', function () {
      return this.get('isFileChoosen') ? this.get('uploadData').files[0].name : "";
    }),

    didInsertElement: function didInsertElement() {
      var _this = this;

      this._super.apply(this, arguments);

      var onFileAdd = function onFileAdd(e, uploadData) {
        // const hasFiles = uploadData.files.length > 0;
        // const fileName = hasFiles ? uploadData.files[0].name : 'Выберите файл';
        // this.set('fileName', fileName);
        _this.get('uploadDataChanged')(uploadData);
      };

      if (!this.$('.custom-file-input').fileupload('instance')) {

        // Initialize jQuery fileupload plugin (https://github.com/blueimp/jQuery-File-Upload/wiki/API).
        this.$('.custom-file-input').fileupload({
          // Disable autoUpload.
          autoUpload: false,

          // Type of data that is expected back from the server.
          dataType: 'json',

          // Maximum number of files to be selected and uploaded.
          maxNumberOfFiles: 1,

          // Enable single file uploads.
          singleFileUploads: true,

          // Disable drag&drop file adding.
          dropZone: null,

          // File add handler.
          add: onFileAdd
        });
      }
    },
    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      if (this.$('.custom-file-input').fileupload('instance')) {
        this.$('.custom-file-input').fileupload('destroy');
      }
    },


    actions: {
      removeFile: function removeFile() {
        Ember.set(this, 'uploadData', null);
      }
    }
  });
});
define('h-work-2/components/lecture-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('h-work-2/components/login-form', ['exports', 'fetch', 'ember-cp-validations', 'h-work-2/config/environment'], function (exports, _fetch, _emberCpValidations, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)({
    email: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true), (0, _emberCpValidations.validator)('format', { type: 'email' })],
    password: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', {
      presence: true
      // message: computed('model.{i18n.locale}', function () {
      //   return '{description} ' + get(this, 'model.i18n').t('errors.blank');
      // }),
    }), (0, _emberCpValidations.validator)('length', {
      min: 4,
      max: 8
    })]
  });

  exports.default = Ember.Component.extend(Validations, {
    i18n: Ember.inject.service(),
    isFormValid: Ember.computed.alias('validations.isValid'),

    actions: {
      login: function login(e) {
        try {
          var remember = void 0;
          e.preventDefault();
          this.get('remember') ? remember = true : remember = false;
          if (this.get('isFormValid')) {
            this.get('onSubmit')({
              email: this.email,
              password: this.password,
              remember: remember
            });
          }
        } catch (e) {
          var newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
            message: e.message,
            currentURL: window.location.href,
            ipAdress: '' });
          newLog.save();
          this.send('error', e);
        }
      }
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this.setProperties({
        email: this.get('user.email'),
        password: this.get('user.password')
      });
    }
  });
});
define('h-work-2/components/meeting-item', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    exports.default = Ember.Component.extend({
        init: function init() {
            this._super.apply(this, arguments);
        },


        actions: {
            deleteMeeting: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(meeting) {
                    var newLog;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    try {
                                        this.delMeeting(meeting);
                                    } catch (e) {
                                        newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                                            message: e.message,
                                            currentURL: window.location.href,
                                            ipAdress: '' });

                                        newLog.save();
                                        this.send('error', e);
                                    }

                                case 1:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function deleteMeeting(_x) {
                    return _ref.apply(this, arguments);
                }

                return deleteMeeting;
            }()
        }
    });
});
define('h-work-2/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _powerSelectMultiple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
define('h-work-2/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('h-work-2/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _powerSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
define('h-work-2/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _beforeOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
define('h-work-2/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _options) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
define('h-work-2/components/power-select/placeholder', ['exports', 'ember-power-select/components/power-select/placeholder'], function (exports, _placeholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
define('h-work-2/components/power-select/power-select-group', ['exports', 'ember-power-select/components/power-select/power-select-group'], function (exports, _powerSelectGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
define('h-work-2/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _searchMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
define('h-work-2/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('h-work-2/components/register-form', ['exports', 'fetch', 'ember-cp-validations', 'h-work-2/config/environment'], function (exports, _fetch, _emberCpValidations, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  var Validations = (0, _emberCpValidations.buildValidations)({
    email: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true), (0, _emberCpValidations.validator)('format', { type: 'email' })],
    password: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', {
      presence: true
      // message: computed('model.{i18n.locale}', function () {
      //   return '{description} ' + get(this, 'model.i18n').t('errors.blank');
      // }),
    }), (0, _emberCpValidations.validator)('length', {
      min: 4,
      max: 8
    })]
  });

  exports.default = Ember.Component.extend(Validations, {
    iAmRobot: true,
    reset: false,
    i18n: Ember.inject.service(),
    isFormValid: Ember.computed.alias('validations.isValid'),

    actions: {
      saveUser: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var newLog;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  try {
                    e.preventDefault();

                    if (this.get('isFormValid')) {
                      this.get('onSubmit')({
                        email: this.email,
                        password: this.password
                      });
                    }
                  } catch (e) {
                    newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                      message: e.message,
                      currentURL: window.location.href,
                      ipAdress: '' });

                    newLog.save();
                    this.send('error', e);
                  }

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function saveUser(_x) {
          return _ref.apply(this, arguments);
        }

        return saveUser;
      }(),
      verified: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(key) {
          var _ref3, success;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return (0, _fetch.default)(_environment.default.backendURL + '/recaptcha?key=' + key);

                case 3:
                  _context2.next = 5;
                  return _context2.sent.json();

                case 5:
                  _ref3 = _context2.sent;
                  success = _ref3.success;


                  this.set('iAmRobot', !success);
                  _context2.next = 13;
                  break;

                case 10:
                  _context2.prev = 10;
                  _context2.t0 = _context2['catch'](0);

                  this.set('reset', true);

                case 13:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[0, 10]]);
        }));

        function verified(_x2) {
          return _ref2.apply(this, arguments);
        }

        return verified;
      }(),
      expired: function expired() {
        this.set('iAmRobot', true);
      }
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this.setProperties({
        email: this.get('user.email'),
        password: this.get('user.password')
      });
    }
  });
});
define('h-work-2/components/speaker-item', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    exports.default = Ember.Component.extend({
        init: function init() {
            this._super.apply(this, arguments);
        },


        actions: {
            deleteSpeaker: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(speaker) {
                    var newLog;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    try {
                                        this.delSpeaker(speaker);
                                    } catch (e) {
                                        newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                                            message: e.message,
                                            currentURL: window.location.href,
                                            ipAdress: '' });

                                        newLog.save();
                                        this.send('error', e);
                                    }

                                case 1:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function deleteSpeaker(_x) {
                    return _ref.apply(this, arguments);
                }

                return deleteSpeaker;
            }()
        }
    });
});
define('h-work-2/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('h-work-2/controllers/add-book', ['exports', 'h-work-2/config/environment', 'ember-cp-validations'], function (exports, _environment, _emberCpValidations) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    var Validations = (0, _emberCpValidations.buildValidations)({
        bookName: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)],
        bookAuthor: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)],
        bookSize: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    });

    exports.default = Ember.Controller.extend(Validations, {
        i18n: Ember.inject.service(),
        isFormValid: Ember.computed.alias('validations.isValid'),

        actions: {
            changeUploadData: function changeUploadData(uploadData) {
                try {
                    Ember.set(this, 'uploadData', uploadData);
                } catch (e) {
                    var newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                        message: e.message,
                        currentURL: window.location.href,
                        ipAdress: '' });
                    newLog.save();
                    this.send('error', e);
                }
            },
            changeTags: function changeTags(newTags) {
                try {
                    Ember.set(this, 'tags', [].concat(_toConsumableArray(newTags)));
                } catch (e) {
                    var newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                        message: e.message,
                        currentURL: window.location.href,
                        ipAdress: '' });
                    newLog.save();
                    this.send('error', e);
                }
            },
            addBook: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var uploadData, coverURL, tags, bookModel, newBook, newLog;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.prev = 0;

                                    if (!this.get('isFormValid')) {
                                        _context.next = 20;
                                        break;
                                    }

                                    uploadData = Ember.get(this, 'uploadData');
                                    coverURL = new Promise(function (resolve, reject) {
                                        if (uploadData) {
                                            uploadData.url = _environment.default.backendURL + '/FileUpload';
                                            uploadData.submit().done(function (result) {
                                                resolve('/uploads/' + result.filename);
                                            });
                                        } else resolve("images/book-cover.jpg");
                                    });
                                    tags = this.get('tags') ? this.get('tags') : [];
                                    _context.t0 = this.get('bookName');
                                    _context.t1 = this.get('bookAuthor');
                                    _context.t2 = this.get('bookSize');
                                    _context.t3 = this.get('bookDescription');
                                    _context.next = 11;
                                    return coverURL;

                                case 11:
                                    _context.t4 = _context.sent;
                                    _context.t5 = this.get('tags');
                                    bookModel = {
                                        name: _context.t0,
                                        author: _context.t1,
                                        size: _context.t2,
                                        description: _context.t3,
                                        coverURL: _context.t4,
                                        tags: _context.t5
                                    };
                                    newBook = this.get('store').createRecord('book', bookModel);

                                    newBook.serialize();
                                    _context.next = 18;
                                    return newBook.save();

                                case 18:
                                    this.setProperties({
                                        bookName: undefined,
                                        bookAuthor: undefined,
                                        bookSize: undefined,
                                        bookDescription: undefined
                                    });
                                    this.transitionToRoute('book');

                                case 20:
                                    _context.next = 27;
                                    break;

                                case 22:
                                    _context.prev = 22;
                                    _context.t6 = _context['catch'](0);
                                    newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                                        message: _context.t6.message,
                                        currentURL: window.location.href,
                                        ipAdress: '' });

                                    newLog.save();
                                    this.send('error', _context.t6);

                                case 27:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[0, 22]]);
                }));

                function addBook() {
                    return _ref.apply(this, arguments);
                }

                return addBook;
            }()
        },

        reset: function reset() {
            Ember.set(this, 'uploadData', null);
        }
    });
});
define('h-work-2/controllers/add-lecture', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    var Validations = (0, _emberCpValidations.buildValidations)({
        newBook: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)],
        newSpeaker: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    });

    exports.default = Ember.Controller.extend(Validations, {
        store: Ember.inject.service(),
        currentUser: Ember.inject.service(),
        i18n: Ember.inject.service(),
        isFormValid: Ember.computed.alias('validations.isValid'),

        actions: {
            addLecture: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var meetingModel, lectureModel, newLecture, newLog;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!this.get('isFormValid')) {
                                        _context.next = 21;
                                        break;
                                    }

                                    _context.prev = 1;
                                    meetingModel = this.get('model').meeting;

                                    if (!(this.get('newBook') && this.get('newSpeaker'))) {
                                        _context.next = 13;
                                        break;
                                    }

                                    lectureModel = {
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
                                    newLecture = this.get('store').createRecord('lecture', lectureModel);

                                    newLecture.serialize();
                                    _context.next = 9;
                                    return newLecture.save();

                                case 9:
                                    this.setProperties({
                                        lectureRating: undefined,
                                        newBook: undefined,
                                        newSpeaker: undefined,
                                        newPresentURL: undefined,
                                        newVideoURL: undefined,
                                        newReview: undefined
                                    });
                                    this.transitionToRoute('edit-meeting', meetingModel.get('id'));
                                    _context.next = 14;
                                    break;

                                case 13:
                                    alert('для создания нового доклада необходимо выбрать книгу и спикера...');

                                case 14:
                                    _context.next = 21;
                                    break;

                                case 16:
                                    _context.prev = 16;
                                    _context.t0 = _context['catch'](1);
                                    newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                                        message: _context.t0.message,
                                        currentURL: window.location.href,
                                        ipAdress: '' });

                                    newLog.save();
                                    this.send('error', _context.t0);

                                case 21:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[1, 16]]);
                }));

                function addLecture() {
                    return _ref.apply(this, arguments);
                }

                return addLecture;
            }()
        }
    });
});
define('h-work-2/controllers/add-meeting-lecture', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    var Validations = (0, _emberCpValidations.buildValidations)({
        newBook: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)],
        newSpeaker: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    });

    exports.default = Ember.Controller.extend(Validations, {
        store: Ember.inject.service(),
        currentUser: Ember.inject.service(),
        i18n: Ember.inject.service(),
        isFormValid: Ember.computed.alias('validations.isValid'),

        actions: {
            addLecture: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var meetingModel, lectureModel, newLecture, newLog;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!this.get('isFormValid')) {
                                        _context.next = 21;
                                        break;
                                    }

                                    _context.prev = 1;
                                    meetingModel = this.get('model').meeting;

                                    if (!(this.get('newBook') && this.get('newSpeaker'))) {
                                        _context.next = 13;
                                        break;
                                    }

                                    lectureModel = {
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
                                    newLecture = this.get('store').createRecord('lecture', lectureModel);

                                    newLecture.serialize();
                                    _context.next = 9;
                                    return newLecture.save();

                                case 9:
                                    this.setProperties({
                                        lectureRating: undefined,
                                        newBook: undefined,
                                        newSpeaker: undefined,
                                        newPresentURL: undefined,
                                        newVideoURL: undefined,
                                        newReview: undefined
                                    });
                                    this.transitionToRoute('add-meeting', meetingModel.get('id'));
                                    _context.next = 14;
                                    break;

                                case 13:
                                    alert('для создания нового доклада необходимо выбрать книгу и спикера...');

                                case 14:
                                    _context.next = 21;
                                    break;

                                case 16:
                                    _context.prev = 16;
                                    _context.t0 = _context['catch'](1);
                                    newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                                        message: _context.t0.message,
                                        currentURL: window.location.href,
                                        ipAdress: '' });

                                    newLog.save();
                                    this.send('error', _context.t0);

                                case 21:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[1, 16]]);
                }));

                function addLecture() {
                    return _ref.apply(this, arguments);
                }

                return addLecture;
            }()
        }
    });
});
define('h-work-2/controllers/add-meeting', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    var Validations = (0, _emberCpValidations.buildValidations)({
        meetingEventDate: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true), (0, _emberCpValidations.validator)('format', { type: 'date' })]
    });

    exports.default = Ember.Controller.extend(Validations, {
        store: Ember.inject.service('store'),
        currentUser: Ember.inject.service(),
        i18n: Ember.inject.service(),
        isFormValid: Ember.computed.alias('validations.isValid'),

        init: function init() {
            this._super.apply(this, arguments);
        },


        actions: {
            addMeeting: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var _this = this;

                    var meetingModel, newLog;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!this.get('isFormValid')) {
                                        _context.next = 21;
                                        break;
                                    }

                                    _context.prev = 1;
                                    meetingModel = this.get('model');

                                    if (!this.get('meetingEventDate')) {
                                        _context.next = 13;
                                        break;
                                    }

                                    meetingModel.set('eventDate', this.get('meetingEventDate'));
                                    meetingModel.set('user', this.get('currentUser.user'));
                                    meetingModel.lectures.forEach(function (lecture) {
                                        lecture.set('date', _this.get('meetingEventDate'));
                                        lecture.save();
                                    });
                                    _context.next = 9;
                                    return meetingModel.save();

                                case 9:
                                    this.set('meetingEventDate', undefined);
                                    this.transitionToRoute('meeting');
                                    _context.next = 14;
                                    break;

                                case 13:
                                    alert('необходимо указать дату встречи...');

                                case 14:
                                    _context.next = 21;
                                    break;

                                case 16:
                                    _context.prev = 16;
                                    _context.t0 = _context['catch'](1);
                                    newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                                        message: _context.t0.message,
                                        currentURL: window.location.href,
                                        ipAdress: '' });

                                    newLog.save();
                                    this.send('error', _context.t0);

                                case 21:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[1, 16]]);
                }));

                function addMeeting() {
                    return _ref.apply(this, arguments);
                }

                return addMeeting;
            }(),
            deleteMeeting: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(meeting) {
                    var _this2 = this;

                    var temp, temp2, temp3, newLog;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.prev = 0;
                                    temp = meeting;
                                    temp2 = [], temp3 = [];


                                    temp.get('lectures').toArray().forEach(function (lecture) {
                                        temp2.push(lecture);
                                        var promise = lecture.destroyRecord();
                                        temp3.push(promise);
                                    });
                                    _context2.next = 6;
                                    return Ember.RSVP.all(temp3);

                                case 6:
                                    temp2.forEach(function (lecture) {
                                        _this2.get('store').unloadRecord(lecture);
                                    });
                                    _context2.next = 9;
                                    return meeting.destroyRecord();

                                case 9:
                                    this.get('store').unloadRecord(meeting);
                                    this.transitionToRoute('meeting');
                                    _context2.next = 18;
                                    break;

                                case 13:
                                    _context2.prev = 13;
                                    _context2.t0 = _context2['catch'](0);
                                    newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                                        message: _context2.t0.message,
                                        currentURL: window.location.href,
                                        ipAdress: '' });

                                    newLog.save();
                                    this.send('error', _context2.t0);

                                case 18:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this, [[0, 13]]);
                }));

                function deleteMeeting(_x) {
                    return _ref2.apply(this, arguments);
                }

                return deleteMeeting;
            }(),
            deleteLecture: function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(lecture) {
                    var newLog;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    _context3.prev = 0;
                                    _context3.next = 3;
                                    return lecture.destroyRecord();

                                case 3:
                                    this.get('store').unloadRecord(lecture);
                                    _context3.next = 11;
                                    break;

                                case 6:
                                    _context3.prev = 6;
                                    _context3.t0 = _context3['catch'](0);
                                    newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                                        message: _context3.t0.message,
                                        currentURL: window.location.href,
                                        ipAdress: '' });

                                    newLog.save();
                                    this.send('error', _context3.t0);

                                case 11:
                                case 'end':
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this, [[0, 6]]);
                }));

                function deleteLecture(_x2) {
                    return _ref3.apply(this, arguments);
                }

                return deleteLecture;
            }()
        }
    });
});
define('h-work-2/controllers/add-speaker', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    var Validations = (0, _emberCpValidations.buildValidations)({
        speakerSurname: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)],
        speakerName: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)],
        speakerPatronymic: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    });

    exports.default = Ember.Controller.extend(Validations, {
        currentUser: Ember.inject.service(),
        i18n: Ember.inject.service(),
        isFormValid: Ember.computed.alias('validations.isValid'),

        actions: {
            addSpeaker: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var speakerModel, newSpeaker, newLog;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.prev = 0;

                                    if (!this.get('isFormValid')) {
                                        _context.next = 8;
                                        break;
                                    }

                                    speakerModel = {
                                        name: this.get('speakerName'),
                                        surname: this.get('speakerSurname'),
                                        patronymic: this.get('speakerPatronymic'),
                                        user: this.get('currentUser.user')
                                    };
                                    newSpeaker = this.get('store').createRecord('speaker', speakerModel);

                                    newSpeaker.serialize();
                                    _context.next = 7;
                                    return newSpeaker.save();

                                case 7:
                                    this.transitionToRoute('speaker');

                                case 8:
                                    _context.next = 15;
                                    break;

                                case 10:
                                    _context.prev = 10;
                                    _context.t0 = _context['catch'](0);
                                    newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                                        message: _context.t0.message,
                                        currentURL: window.location.href,
                                        ipAdress: '' });

                                    newLog.save();
                                    this.send('error', _context.t0);

                                case 15:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[0, 10]]);
                }));

                function addSpeaker() {
                    return _ref.apply(this, arguments);
                }

                return addSpeaker;
            }()
        }
    });
});
define('h-work-2/controllers/application', ['exports', 'h-work-2/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Controller.extend({
    session: Ember.inject.service(),
    currentUser: Ember.inject.service(),
    i18n: Ember.inject.service(),

    currentLocale: _environment.default.i18n.defaultLocale,

    isRussian: Ember.computed('currentLocale', function () {
      return Ember.get(this, 'currentLocale') === 'ru';
    }),

    isEnglish: Ember.computed('currentLocale', function () {
      return Ember.get(this, 'currentLocale') === 'en';
    }),

    actions: {
      logout: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var newLog;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  try {
                    e.preventDefault();
                    this.get('session').invalidate();
                  } catch (e) {
                    newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                      message: e.message,
                      currentURL: window.location.href,
                      ipAdress: '' });

                    newLog.save();
                    this.send('error', e);
                  }

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function logout(_x) {
          return _ref.apply(this, arguments);
        }

        return logout;
      }(),
      changeLocale: function changeLocale(e) {
        try {
          Ember.set(this, 'currentLocale', e.target.value);
          Ember.set(this, 'i18n.locale', Ember.get(this, 'currentLocale'));
        } catch (e) {
          var newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
            message: e.message,
            currentURL: window.location.href,
            ipAdress: '' });
          newLog.save();
          this.send('error', e);
        }
      }
    },

    init: function init() {
      this._super.apply(this, arguments);
      Ember.set(this, 'i18n.locale', Ember.get(this, 'currentLocale'));
    }
  });
});
define('h-work-2/controllers/book', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    exports.default = Ember.Controller.extend({
        store: Ember.inject.service('store'),
        queryParams: ["search", "tags"],
        search: '',
        tags: '',

        actions: {
            updatePage: function updatePage() {
                try {
                    this.send("reloadModel");
                } catch (e) {
                    var newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                        message: e.message,
                        currentURL: window.location.href,
                        ipAdress: '' });
                    newLog.save();
                    this.send('error', e);
                }
            },
            deleteBook: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(book) {
                    var newLog;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.prev = 0;
                                    _context.next = 3;
                                    return book.destroyRecord();

                                case 3:
                                    this.get('store').unloadRecord(book);
                                    _context.next = 11;
                                    break;

                                case 6:
                                    _context.prev = 6;
                                    _context.t0 = _context['catch'](0);
                                    newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                                        message: _context.t0.message,
                                        currentURL: window.location.href,
                                        ipAdress: '' });

                                    newLog.save();
                                    this.send('error', _context.t0);

                                case 11:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[0, 6]]);
                }));

                function deleteBook(_x) {
                    return _ref.apply(this, arguments);
                }

                return deleteBook;
            }()
        }
    });
});
define('h-work-2/controllers/edit-book', ['exports', 'h-work-2/config/environment', 'ember-cp-validations'], function (exports, _environment, _emberCpValidations) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    var Validations = (0, _emberCpValidations.buildValidations)({
        bookName: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)],
        bookAuthor: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)],
        bookSize: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    });

    exports.default = Ember.Controller.extend(Validations, {
        dataService: Ember.inject.service('data'),
        i18n: Ember.inject.service(),
        isFormValid: Ember.computed.alias('validations.isValid'),
        bookName: ' ',
        bookAuthor: ' ',
        bookSize: ' ',

        actions: {
            changeUploadData: function changeUploadData(uploadData) {
                try {
                    Ember.set(this, 'uploadData', uploadData);
                } catch (e) {
                    var newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                        message: e.message,
                        currentURL: window.location.href,
                        ipAdress: '' });
                    newLog.save();
                    this.send('error', e);
                }
            },
            changeTags: function changeTags(newTags) {
                try {
                    Ember.set(this, 'tags', [].concat(_toConsumableArray(newTags)));
                } catch (e) {
                    var newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                        message: e.message,
                        currentURL: window.location.href,
                        ipAdress: '' });
                    newLog.save();
                    this.send('error', e);
                }
            },
            editBook: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    var _this = this;

                    var bookModel, uploadData, newLog;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    if (!this.get('isFormValid')) {
                                        _context2.next = 25;
                                        break;
                                    }

                                    _context2.prev = 1;
                                    bookModel = this.get('model');
                                    uploadData = Ember.get(this, 'uploadData');

                                    if (!uploadData) {
                                        _context2.next = 9;
                                        break;
                                    }

                                    uploadData.url = _environment.default.backendURL + '/FileUpload';
                                    uploadData.submit().done(function () {
                                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(result) {
                                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                                while (1) {
                                                    switch (_context.prev = _context.next) {
                                                        case 0:
                                                            _context.next = 2;
                                                            return bookModel.set('coverURL', '/uploads/' + result.filename);

                                                        case 2:
                                                        case 'end':
                                                            return _context.stop();
                                                    }
                                                }
                                            }, _callee, _this);
                                        }));

                                        return function (_x) {
                                            return _ref2.apply(this, arguments);
                                        };
                                    }());
                                    _context2.next = 9;
                                    return bookModel.save();

                                case 9:

                                    if (this.get('bookName')) bookModel.set('name', this.get('bookName'));
                                    if (this.get('bookAuthor')) bookModel.set('author', this.get('bookAuthor'));
                                    if (this.get('bookSize')) bookModel.set('size', this.get('bookSize'));
                                    if (this.get('bookDescription')) bookModel.set('description', this.get('bookDescription'));
                                    if (this.get('tags')) bookModel.set('tags', this.get('tags'));

                                    _context2.next = 16;
                                    return bookModel.save();

                                case 16:

                                    this.setProperties({
                                        bookName: undefined,
                                        bookAuthor: undefined,
                                        bookSize: undefined,
                                        bookDescription: undefined
                                    });
                                    this.transitionToRoute('book');
                                    _context2.next = 25;
                                    break;

                                case 20:
                                    _context2.prev = 20;
                                    _context2.t0 = _context2['catch'](1);
                                    newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                                        message: _context2.t0.message,
                                        currentURL: window.location.href,
                                        ipAdress: '' });

                                    newLog.save();
                                    this.send('error', _context2.t0);

                                case 25:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this, [[1, 20]]);
                }));

                function editBook() {
                    return _ref.apply(this, arguments);
                }

                return editBook;
            }()
        },

        reset: function reset() {
            Ember.set(this, 'uploadData', null);
        }
    });
});
define('h-work-2/controllers/edit-lecture', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    exports.default = Ember.Controller.extend({
        store: Ember.inject.service(),
        actions: {
            editLecture: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var lectureModel, newLog;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.prev = 0;
                                    lectureModel = this.get('model');

                                    if (this.get('lectureRating')) lectureModel.set('rating', this.get('lectureRating'));
                                    if (this.get('newBook')) lectureModel.set('book', this.get('newBook'));
                                    if (this.get('newSpeaker')) lectureModel.set('speaker', this.get('newSpeaker'));
                                    if (this.get('newPresentURL')) lectureModel.set('presentURL', this.get('newPresentURL'));
                                    if (this.get('newVideoURL')) lectureModel.set('videoURL', this.get('newVideoURL'));
                                    if (this.get('newReview')) lectureModel.set('review', this.get('newReview'));

                                    _context.next = 10;
                                    return lectureModel.save();

                                case 10:

                                    this.setProperties({
                                        lectureRating: undefined,
                                        newBook: undefined,
                                        newSpeaker: undefined,
                                        newPresentURL: undefined,
                                        newVideoURL: undefined,
                                        newReview: undefined
                                    });
                                    this.transitionToRoute('edit-meeting', lectureModel.meeting.get('id'));
                                    _context.next = 19;
                                    break;

                                case 14:
                                    _context.prev = 14;
                                    _context.t0 = _context['catch'](0);
                                    newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                                        message: _context.t0.message,
                                        currentURL: window.location.href,
                                        ipAdress: '' });

                                    newLog.save();
                                    this.send('error', _context.t0);

                                case 19:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[0, 14]]);
                }));

                function editLecture() {
                    return _ref.apply(this, arguments);
                }

                return editLecture;
            }(),
            getBooks: function getBooks() {
                try {
                    return this.get('store').findAll('book');
                } catch (e) {
                    var newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                        message: e.message,
                        currentURL: window.location.href,
                        ipAdress: '' });
                    newLog.save();
                    this.send('error', e);
                }
            },
            getSpeakers: function getSpeakers() {
                try {
                    return this.get('store').findAll('speaker');
                } catch (e) {
                    var newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                        message: e.message,
                        currentURL: window.location.href,
                        ipAdress: '' });
                    newLog.save();
                    this.send('error', e);
                }
            }
        }
    });
});
define('h-work-2/controllers/edit-meeting-lecture', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    exports.default = Ember.Controller.extend({
        store: Ember.inject.service(),
        actions: {
            editLecture: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var lectureModel, newLog;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.prev = 0;
                                    lectureModel = this.get('model');

                                    if (this.get('lectureRating')) lectureModel.set('rating', this.get('lectureRating'));
                                    if (this.get('newBook')) lectureModel.set('book', this.get('newBook'));
                                    if (this.get('newSpeaker')) lectureModel.set('speaker', this.get('newSpeaker'));
                                    if (this.get('newPresentURL')) lectureModel.set('presentURL', this.get('newPresentURL'));
                                    if (this.get('newVideoURL')) lectureModel.set('videoURL', this.get('newVideoURL'));
                                    if (this.get('newReview')) lectureModel.set('review', this.get('newReview'));

                                    _context.next = 10;
                                    return lectureModel.save();

                                case 10:

                                    this.setProperties({
                                        lectureRating: undefined,
                                        newBook: undefined,
                                        newSpeaker: undefined,
                                        newPresentURL: undefined,
                                        newVideoURL: undefined,
                                        newReview: undefined
                                    });
                                    this.transitionToRoute('add-meeting', lectureModel.meeting.get('id'));
                                    _context.next = 19;
                                    break;

                                case 14:
                                    _context.prev = 14;
                                    _context.t0 = _context['catch'](0);
                                    newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                                        message: _context.t0.message,
                                        currentURL: window.location.href,
                                        ipAdress: '' });

                                    newLog.save();
                                    this.send('error', _context.t0);

                                case 19:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[0, 14]]);
                }));

                function editLecture() {
                    return _ref.apply(this, arguments);
                }

                return editLecture;
            }(),
            getBooks: function getBooks() {
                try {
                    return this.get('store').findAll('book');
                } catch (e) {
                    var newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                        message: e.message,
                        currentURL: window.location.href,
                        ipAdress: '' });
                    newLog.save();
                    this.send('error', e);
                }
            },
            getSpeakers: function getSpeakers() {
                try {
                    return this.get('store').findAll('speaker');
                } catch (e) {
                    var newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                        message: e.message,
                        currentURL: window.location.href,
                        ipAdress: '' });
                    newLog.save();
                    this.send('error', e);
                }
            }
        }
    });
});
define('h-work-2/controllers/edit-meeting', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    var Validations = (0, _emberCpValidations.buildValidations)({
        meetingEventDate: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true), (0, _emberCpValidations.validator)('format', { type: 'date' })]
    });

    exports.default = Ember.Controller.extend(Validations, {
        store: Ember.inject.service('store'),
        currentUser: Ember.inject.service(),
        i18n: Ember.inject.service(),
        isFormValid: Ember.computed.alias('validations.isValid'),
        meetingEventDate: ' ',

        init: function init() {
            this._super.apply(this, arguments);
        },


        actions: {
            editMeeting: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var _this = this;

                    var meetingModel, newLog;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!this.get('isFormValid')) {
                                        _context.next = 15;
                                        break;
                                    }

                                    _context.prev = 1;
                                    meetingModel = this.get('model');

                                    if (this.get('meetingEventDate')) {
                                        meetingModel.set('eventDate', this.get('meetingEventDate'));
                                        meetingModel.lectures.forEach(function (lecture) {
                                            lecture.set('date', _this.get('meetingEventDate'));
                                            lecture.save();
                                        });
                                    }
                                    _context.next = 6;
                                    return meetingModel.save();

                                case 6:

                                    this.set('meetingEventDate', undefined);
                                    this.transitionToRoute('meeting');
                                    _context.next = 15;
                                    break;

                                case 10:
                                    _context.prev = 10;
                                    _context.t0 = _context['catch'](1);
                                    newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                                        message: _context.t0.message,
                                        currentURL: window.location.href,
                                        ipAdress: '' });

                                    newLog.save();
                                    this.send('error', _context.t0);

                                case 15:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[1, 10]]);
                }));

                function editMeeting() {
                    return _ref.apply(this, arguments);
                }

                return editMeeting;
            }(),
            deleteLecture: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(lecture) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.next = 2;
                                    return lecture.destroyRecord();

                                case 2:
                                    this.get('store').unloadRecord(lecture);

                                case 3:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                function deleteLecture(_x) {
                    return _ref2.apply(this, arguments);
                }

                return deleteLecture;
            }()
        }
    });
});
define('h-work-2/controllers/edit-speaker', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    var Validations = (0, _emberCpValidations.buildValidations)({
        speakerSurname: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)],
        speakerName: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)],
        speakerPatronymic: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    });

    exports.default = Ember.Controller.extend(Validations, {
        dataService: Ember.inject.service('data'),
        i18n: Ember.inject.service(),
        isFormValid: Ember.computed.alias('validations.isValid'),
        speakerPatronymic: ' ',
        speakerSurname: ' ',
        speakerName: ' ',

        actions: {
            editSpeaker: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var speakerModel, newLog;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.prev = 0;

                                    if (!this.get('isFormValid')) {
                                        _context.next = 10;
                                        break;
                                    }

                                    speakerModel = this.get('model');

                                    if (this.get('speakerName')) speakerModel.set('name', this.get('speakerName'));
                                    if (this.get('speakerSurname')) speakerModel.set('surname', this.get('speakerSurname'));
                                    if (this.get('speakerPatronymic')) speakerModel.set('patronymic', this.get('speakerPatronymic'));

                                    _context.next = 8;
                                    return speakerModel.save();

                                case 8:

                                    this.setProperties({
                                        speakerName: undefined,
                                        speakerSurname: undefined,
                                        speakerPatronymic: undefined
                                    });
                                    this.transitionToRoute('speaker');

                                case 10:
                                    _context.next = 17;
                                    break;

                                case 12:
                                    _context.prev = 12;
                                    _context.t0 = _context['catch'](0);
                                    newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                                        message: _context.t0.message,
                                        currentURL: window.location.href,
                                        ipAdress: '' });

                                    newLog.save();
                                    this.send('error', _context.t0);

                                case 17:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[0, 12]]);
                }));

                function editSpeaker() {
                    return _ref.apply(this, arguments);
                }

                return editSpeaker;
            }()
        }
    });
});
define('h-work-2/controllers/login', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Controller.extend({
    session: Ember.inject.service(),

    actions: {
      login: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user) {
          var newLog;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return this.get('session').authenticate('authenticator:jwt', {
                    email: user.email,
                    password: user.password,
                    remember: user.remember
                  });

                case 3:
                  _context.next = 10;
                  break;

                case 5:
                  _context.prev = 5;
                  _context.t0 = _context['catch'](0);
                  newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                    message: _context.t0.message,
                    currentURL: window.location.href,
                    ipAdress: '' });

                  newLog.save();
                  this.send('error', _context.t0);

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 5]]);
        }));

        function login(_x) {
          return _ref.apply(this, arguments);
        }

        return login;
      }(),
      error: function error(_error, transition) {
        if (_error instanceof Error) {
          return true;
        }

        this.set('errors', _error.json.errors);
        return false;
      }
    },

    resetErrors: function resetErrors() {
      this.set('errors', {});
    }
  });
});
define('h-work-2/controllers/meeting', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    exports.default = Ember.Controller.extend({
        store: Ember.inject.service('store'),

        queryParams: ['page', 'book', 'speaker', 'date'],
        page: 1,
        book: '',
        speaker: '',
        date: '',

        pages: Ember.computed('model.meetings.meta.total', function () {
            var total = Number(this.get('model.meetings.meta.total'));
            if (Number.isNaN(total) || total <= 0) {
                return [];
            }

            return new Array(Math.ceil(total / 2)).fill().map(function (value, index) {
                return index + 1;
            });
        }),

        selectedSpeaker: Ember.computed('speaker', function () {
            var speaker = this.get('speaker');
            return speaker ? this.get('model.speakers').findBy('id', speaker) : null;
        }),

        selectedBook: Ember.computed('book', function () {
            var book = this.get('book');
            return book ? this.get('model.books').findBy('id', book) : null;
        }),

        actions: {
            setDate: function setDate(val) {
                this.set('date', val);
            },
            deleteMeeting: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(meeting) {
                    var _this = this;

                    var temp, temp2, temp3, newLog;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.prev = 0;
                                    temp = meeting;
                                    temp2 = [], temp3 = [];


                                    temp.get('lectures').toArray().forEach(function (lecture) {
                                        temp2.push(lecture);
                                        var promise = lecture.destroyRecord();
                                        temp3.push(promise);
                                    });
                                    _context.next = 6;
                                    return Ember.RSVP.all(temp3);

                                case 6:
                                    temp2.forEach(function (lecture) {
                                        _this.get('store').unloadRecord(lecture);
                                    });
                                    _context.next = 9;
                                    return meeting.destroyRecord();

                                case 9:
                                    this.get('store').unloadRecord(meeting);
                                    _context.next = 17;
                                    break;

                                case 12:
                                    _context.prev = 12;
                                    _context.t0 = _context['catch'](0);
                                    newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                                        message: _context.t0.message,
                                        currentURL: window.location.href,
                                        ipAdress: '' });

                                    newLog.save();
                                    this.send('error', _context.t0);

                                case 17:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[0, 12]]);
                }));

                function deleteMeeting(_x) {
                    return _ref.apply(this, arguments);
                }

                return deleteMeeting;
            }(),
            changeSpeaker: function changeSpeaker(speaker) {
                try {
                    this.set('speaker', speaker ? speaker.get('id') : '');
                } catch (e) {
                    var newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                        message: e.message,
                        currentURL: window.location.href,
                        ipAdress: '' });
                    newLog.save();
                    this.send('error', e);
                }
            },
            changeBook: function changeBook(book) {
                try {
                    this.set('book', book ? book.get('id') : '');
                } catch (e) {
                    var newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                        message: e.message,
                        currentURL: window.location.href,
                        ipAdress: '' });
                    newLog.save();
                    this.send('error', e);
                }
            },
            changeDate: function changeDate(date) {
                try {
                    this.set('date', date ? date.get('id') : '');
                } catch (e) {
                    var newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                        message: e.message,
                        currentURL: window.location.href,
                        ipAdress: '' });
                    newLog.save();
                    this.send('error', e);
                }
            },
            updatePage: function updatePage() {
                this.send("reloadModel");
            },
            cleanSearchParam: function cleanSearchParam() {
                this.set('book', '');
                this.set('speaker', '');
                this.set('date', '');
                this.send("reloadModel");
            }
        }
    });
});
define('h-work-2/controllers/register', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Controller.extend({
    actions: {
      saveUser: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user) {
          var newUser, newLog;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  newUser = void 0;
                  _context.prev = 1;

                  newUser = this.get('store').createRecord('user', user);
                  _context.next = 5;
                  return newUser.save();

                case 5:

                  this.transitionToRoute('index');
                  _context.next = 14;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context['catch'](1);

                  _context.t0.user = newUser;
                  newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                    message: _context.t0.message,
                    currentURL: window.location.href,
                    ipAdress: '' });

                  newLog.save();
                  this.send('error', _context.t0);

                case 14:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[1, 8]]);
        }));

        function saveUser(_x) {
          return _ref.apply(this, arguments);
        }

        return saveUser;
      }(),
      error: function error(_error, transition) {
        this.set('errors', _error.user.errors);
        return false;
      }
    },

    resetErrors: function resetErrors() {
      this.set('errors', {});
    }
  });
});
define('h-work-2/controllers/speaker', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    exports.default = Ember.Controller.extend({
        store: Ember.inject.service('store'),
        queryParams: ["search"],
        search: '',
        actions: {
            updatePage: function updatePage() {
                this.send("reloadModel");
            },
            deleteSpeaker: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(speaker) {
                    var newLog;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.prev = 0;
                                    _context.next = 3;
                                    return speaker.destroyRecord();

                                case 3:
                                    this.get('store').unloadRecord(speaker);
                                    _context.next = 11;
                                    break;

                                case 6:
                                    _context.prev = 6;
                                    _context.t0 = _context['catch'](0);
                                    newLog = this.get('store').createRecord('log', { currentDate: new Date().toString(),
                                        message: _context.t0.message,
                                        currentURL: window.location.href,
                                        ipAdress: '' });

                                    newLog.save();
                                    this.send('error', _context.t0);

                                case 11:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[0, 6]]);
                }));

                function deleteSpeaker(_x) {
                    return _ref.apply(this, arguments);
                }

                return deleteSpeaker;
            }()
        }
    });
});
define('h-work-2/helpers/-link-to-params', ['exports', 'ember-angle-bracket-invocation-polyfill/helpers/-link-to-params'], function (exports, _linkToParams) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkToParams.default;
    }
  });
});
define('h-work-2/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('h-work-2/helpers/app-version', ['exports', 'h-work-2/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('h-work-2/helpers/await', ['exports', 'ember-promise-helpers/helpers/await'], function (exports, _await) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _await.default;
    }
  });
});
define('h-work-2/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('h-work-2/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('h-work-2/helpers/can', ['exports', 'ember-can/helpers/can'], function (exports, _can) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _can.default;
    }
  });
});
define('h-work-2/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
define('h-work-2/helpers/cannot', ['exports', 'ember-can/helpers/cannot'], function (exports, _cannot) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cannot.default;
    }
  });
});
define('h-work-2/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectIsGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
define('h-work-2/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectIsSelected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
define('h-work-2/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectTrueStringIfPresent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
define('h-work-2/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('h-work-2/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('h-work-2/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('h-work-2/helpers/is-after', ['exports', 'ember-moment/helpers/is-after'], function (exports, _isAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
define('h-work-2/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('h-work-2/helpers/is-before', ['exports', 'ember-moment/helpers/is-before'], function (exports, _isBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
define('h-work-2/helpers/is-between', ['exports', 'ember-moment/helpers/is-between'], function (exports, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
define('h-work-2/helpers/is-empty', ['exports', 'ember-truth-helpers/helpers/is-empty'], function (exports, _isEmpty) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
define('h-work-2/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('h-work-2/helpers/is-fulfilled', ['exports', 'ember-promise-helpers/helpers/is-fulfilled'], function (exports, _isFulfilled) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isFulfilled.default;
    }
  });
  Object.defineProperty(exports, 'isFulfilled', {
    enumerable: true,
    get: function () {
      return _isFulfilled.isFulfilled;
    }
  });
});
define('h-work-2/helpers/is-pending', ['exports', 'ember-promise-helpers/helpers/is-pending'], function (exports, _isPending) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isPending.default;
    }
  });
  Object.defineProperty(exports, 'isPending', {
    enumerable: true,
    get: function () {
      return _isPending.isPending;
    }
  });
});
define('h-work-2/helpers/is-rejected', ['exports', 'ember-promise-helpers/helpers/is-rejected'], function (exports, _isRejected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isRejected.default;
    }
  });
  Object.defineProperty(exports, 'isRejected', {
    enumerable: true,
    get: function () {
      return _isRejected.isRejected;
    }
  });
});
define('h-work-2/helpers/is-same-or-after', ['exports', 'ember-moment/helpers/is-same-or-after'], function (exports, _isSameOrAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
define('h-work-2/helpers/is-same-or-before', ['exports', 'ember-moment/helpers/is-same-or-before'], function (exports, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
define('h-work-2/helpers/is-same', ['exports', 'ember-moment/helpers/is-same'], function (exports, _isSame) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
define('h-work-2/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('h-work-2/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('h-work-2/helpers/moment-add', ['exports', 'ember-moment/helpers/moment-add'], function (exports, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
define('h-work-2/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _momentCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
define('h-work-2/helpers/moment-diff', ['exports', 'ember-moment/helpers/moment-diff'], function (exports, _momentDiff) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
define('h-work-2/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _momentDuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
define('h-work-2/helpers/moment-format', ['exports', 'ember-moment/helpers/moment-format'], function (exports, _momentFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
define('h-work-2/helpers/moment-from-now', ['exports', 'ember-moment/helpers/moment-from-now'], function (exports, _momentFromNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
define('h-work-2/helpers/moment-from', ['exports', 'ember-moment/helpers/moment-from'], function (exports, _momentFrom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
define('h-work-2/helpers/moment-subtract', ['exports', 'ember-moment/helpers/moment-subtract'], function (exports, _momentSubtract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
define('h-work-2/helpers/moment-to-date', ['exports', 'ember-moment/helpers/moment-to-date'], function (exports, _momentToDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
define('h-work-2/helpers/moment-to-now', ['exports', 'ember-moment/helpers/moment-to-now'], function (exports, _momentToNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
define('h-work-2/helpers/moment-to', ['exports', 'ember-moment/helpers/moment-to'], function (exports, _momentTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
define('h-work-2/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('h-work-2/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
define('h-work-2/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('h-work-2/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('h-work-2/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _now) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
define('h-work-2/helpers/on-document', ['exports', 'ember-on-helper/helpers/on-document'], function (exports, _onDocument) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
});
define('h-work-2/helpers/on-window', ['exports', 'ember-on-helper/helpers/on-window'], function (exports, _onWindow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
});
define('h-work-2/helpers/on', ['exports', 'ember-on-helper/helpers/on'], function (exports, _on) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
});
define('h-work-2/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('h-work-2/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
define('h-work-2/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('h-work-2/helpers/promise-all', ['exports', 'ember-promise-helpers/helpers/promise-all'], function (exports, _promiseAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _promiseAll.default;
    }
  });
  Object.defineProperty(exports, 'promiseAll', {
    enumerable: true,
    get: function () {
      return _promiseAll.promiseAll;
    }
  });
});
define('h-work-2/helpers/promise-hash', ['exports', 'ember-promise-helpers/helpers/promise-hash'], function (exports, _promiseHash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _promiseHash.default;
    }
  });
  Object.defineProperty(exports, 'promiseHash', {
    enumerable: true,
    get: function () {
      return _promiseHash.promiseHash;
    }
  });
});
define('h-work-2/helpers/promise-rejected-reason', ['exports', 'ember-promise-helpers/helpers/promise-rejected-reason'], function (exports, _promiseRejectedReason) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _promiseRejectedReason.default;
    }
  });
});
define('h-work-2/helpers/service', ['exports', 'ember-service-helper/helpers/service'], function (exports, _service) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _service.default;
    }
  });
});
define('h-work-2/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('h-work-2/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, _helper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helper.default;
    }
  });
});
define('h-work-2/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
define('h-work-2/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('h-work-2/helpers/utc', ['exports', 'ember-moment/helpers/utc'], function (exports, _utc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _utc.default;
    }
  });
  Object.defineProperty(exports, 'utc', {
    enumerable: true,
    get: function () {
      return _utc.utc;
    }
  });
});
define('h-work-2/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('h-work-2/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'h-work-2/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('h-work-2/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('h-work-2/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
define('h-work-2/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('h-work-2/initializers/ember-i18n-cp-validations', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    // intentionally left blank to not break upgrade path
  }

  exports.default = {
    name: 'ember-i18n-cp-validations',
    initialize: initialize
  };
});
define('h-work-2/initializers/ember-i18n', ['exports', 'ember-i18n/initializers/ember-i18n'], function (exports, _emberI18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberI18n.default;
});
define('h-work-2/initializers/ember-simple-auth', ['exports', 'h-work-2/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service', 'ember-simple-auth/initializers/setup-session-restoration'], function (exports, _environment, _configuration, _setupSession, _setupSessionService, _setupSessionRestoration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize: function initialize(registry) {
      var config = _environment.default['ember-simple-auth'] || {};
      config.rootURL = _environment.default.rootURL || _environment.default.baseURL;
      _configuration.default.load(config);

      (0, _setupSession.default)(registry);
      (0, _setupSessionService.default)(registry);
      (0, _setupSessionRestoration.default)(registry);
    }
  };
});
define('h-work-2/initializers/export-application-global', ['exports', 'h-work-2/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('h-work-2/initializers/load-bootstrap-config', ['exports', 'h-work-2/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('h-work-2/initializers/log', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize(application) {
    ['component', 'controller', 'route', 'view'].forEach(function (type) {
      application.inject(type, 'logService', 'service:log');
    });
  }

  exports.default = {
    name: 'log',
    initialize: initialize
  };
});
define('h-work-2/initializers/setup-ember-can', ['exports', 'ember-can/initializers/setup-ember-can'], function (exports, _setupEmberCan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _setupEmberCan.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _setupEmberCan.initialize;
    }
  });
});
define('h-work-2/initializers/simple-auth-token', ['exports', 'ember-simple-auth-token/authenticators/token', 'ember-simple-auth-token/authenticators/jwt'], function (exports, _token, _jwt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth-token',
    before: 'ember-simple-auth',
    initialize: function initialize(container) {
      container.register('authenticator:token', _token.default);
      container.register('authenticator:jwt', _jwt.default);
    }
  };
});
define("h-work-2/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('h-work-2/instance-initializers/ember-i18n', ['exports', 'ember-i18n/instance-initializers/ember-i18n'], function (exports, _emberI18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberI18n.default;
});
define('h-work-2/instance-initializers/ember-simple-auth', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize: function initialize() {}
  };
});
define("h-work-2/locales/en/config", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };
});
define("h-work-2/locales/en/translations", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    errors: {
      description: "This field",
      inclusion: "{{description}} is not included in the list",
      exclusion: "{{description}} is reserved",
      invalid: "{{description}} is invalid",
      confirmation: "{{description}} doesn't match {{on}}",
      accepted: "{{description}} must be accepted",
      empty: "{{description}} can't be empty",
      blank: "{{description}} can't be blank",
      present: "{{description}} must be blank",
      collection: "{{description}} must be a collection",
      singular: "{{description}} can't be a collection",
      tooLong: "{{description}} is too long (maximum is {{max}} characters)",
      tooShort: "{{description}} is too short (minimum is {{min}} characters)",
      before: "{{description}} must be before {{before}}",
      after: "{{description}} must be after {{after}}",
      wrongDateFormat: "{{description}} must be in the format of {{format}}",
      wrongLength: "{{description}} is the wrong length (should be {{is}} characters)",
      notANumber: "{{description}} must be a number",
      notAnInteger: "{{description}} must be an integer",
      greaterThan: "{{description}} must be greater than {{gt}}",
      greaterThanOrEqualTo: "{{description}} must be greater than or equal to {{gte}}",
      equalTo: "{{description}} must be equal to {{is}}",
      lessThan: "{{description}} must be less than {{lt}}",
      lessThanOrEqualTo: "{{description}} must be less than or equal to {{lte}}",
      otherThan: "{{description}} must be other than {{value}}",
      odd: "{{description}} must be odd",
      even: "{{description}} must be even",
      positive: "{{description}} must be positive",
      date: "{{description}} must be a valid date",
      onOrAfter: '{{description}} must be on or after {{onOrAfter}}',
      onOrBefore: '{{description}} must be on or before {{onOrBefore}}',
      email: "{{description}} must be a valid email address",
      phone: "{{description}} must be a valid phone number",
      url: "{{description}} must be a valid url",
      passwordDescription: 'Password and password confirmation',
      passwordDontMatch: 'do not match'
    },
    menu: {
      logo: 'Books club',
      speakers: 'Speakers',
      workTable: 'Work table',
      clubsMeetings: 'Club`s meetings',
      books: 'Books',
      registration: 'Registration',
      register: 'Register',
      login: 'Login',
      entry: 'Entry',
      remember: 'Remember',
      logout: 'Logout',
      email: 'Email',
      password: 'Password',

      find: 'Find',
      search: 'Search',
      addBook: 'Add book',
      addSpeaker: 'Add speaker',

      author: 'Author',
      numberOfPages: 'Number of pages',
      tags: 'Tags',
      rating: 'Rating:',

      addingBook: 'Adding book',
      addingSpeaker: 'Adding speaker',
      name: 'Name',
      name_2: 'Name',
      description: 'Description',
      cover: 'Cover',
      add: 'Add',
      edit: 'Edit',
      save: 'Save',
      cancel: 'Cancel',
      select: 'Select',

      editBook: 'Edit book:',
      editSpeaker: 'Edit speaker:',
      family: 'Surname',
      patronymic: 'Patronymic',

      speaker: 'Speaker',
      book: 'Book',
      addMeeting: 'Add meeting',
      meetingDate: 'Meeting date',
      review: 'Review',
      links: 'Links',
      listOfReports: 'List of reports',
      viewReport: 'View the recording of the report',
      downloadPresentation: 'Download presentation',
      date: 'Date...',

      addReport: 'Add report',
      reportAddition: 'Report addition',
      reportDate: 'Report date',
      bookRating: 'Book rating',
      presentationURL: 'Presentation URL',
      videoURL: 'Video URL',
      inputPURL: 'Input URL of presentation',
      inputVURL: 'Input URL of video',
      inputRating: 'Input rating',
      inputReview: 'Input review',

      editMeeting: 'Meeting edditing',
      editReport: 'Report edditing'
    }
  };
});
define("h-work-2/locales/ru/config", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };
});
define("h-work-2/locales/ru/translations", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {

    errors: {
      description: "Это поле",
      inclusion: "{{description}} is not included in the list",
      exclusion: "{{description}} is reserved",
      invalid: "{{description}} is invalid",
      confirmation: "{{description}} не совпадает с {{on}}",
      accepted: "{{description}} must be accepted",
      empty: "{{description}} не может быть пустым",
      blank: "{{description}} должно быть заполнено",
      present: "{{description}} must be blank",
      collection: "{{description}} must be a collection",
      singular: "{{description}} can't be a collection",
      tooLong: "{{description}} is too long (maximum is {{max}} characters)",
      tooShort: "{{description}} is too short (minimum is {{min}} characters)",
      before: "{{description}} must be before {{before}}",
      after: "{{description}} must be after {{after}}",
      wrongDateFormat: "{{description}} must be in the format of {{format}}",
      wrongLength: "{{description}} is the wrong length (should be {{is}} characters)",
      notANumber: "{{description}} must be a number",
      notAnInteger: "{{description}} must be an integer",
      greaterThan: "{{description}} must be greater than {{gt}}",
      greaterThanOrEqualTo: "{{description}} must be greater than or equal to {{gte}}",
      equalTo: "{{description}} must be equal to {{is}}",
      lessThan: "{{description}} must be less than {{lt}}",
      lessThanOrEqualTo: "{{description}} must be less than or equal to {{lte}}",
      otherThan: "{{description}} должен отличаться от {{value}}",
      odd: "{{description}} must be odd",
      even: "{{description}} must be even",
      positive: "{{description}} must be positive",
      date: "{{description}} must be a valid date",
      onOrAfter: '{{description}} must be on or after {{onOrAfter}}',
      onOrBefore: '{{description}} must be on or before {{onOrBefore}}',
      email: "{{description}} должно иметь корректный формат e-mail адреса",
      phone: "{{description}} must be a valid phone number",
      url: "{{description}} must be a valid url",
      passwordDescription: 'Пароль и подтверждение пароля',
      passwordDontMatch: 'не совпадают'
    },
    menu: {
      logo: 'Книжный клуб',
      speakers: 'Спикеры',
      workTable: 'Рабочий стол',
      clubsMeetings: 'Встречи клуба',
      books: 'Книги',
      registration: 'Регистрация',
      register: 'Зарегестрироваться',
      login: 'Войти',
      entry: 'Вход',
      remember: 'Запомнить',
      logout: 'Выйти',
      email: 'Почта',
      password: 'Пароль',

      find: 'Найти',
      search: 'Поиск',
      addBook: 'Добавить книгу',
      addSpeaker: 'Добавить спикера',

      author: 'Автор',
      numberOfPages: 'Количество страниц',
      tags: 'Теги',
      rating: 'Рейтинг:',

      addingBook: 'Добавление книги',
      addingSpeaker: 'Добавление спикера',
      name: 'Название',
      name_2: 'Имя',
      description: 'Описание',
      cover: 'Обложка',
      add: 'Добавить',
      edit: 'Редактировать',
      save: 'Сохрнаить',
      cancel: 'Отмена',
      select: 'Выбрать',

      editBook: 'Редактировать книгу:',
      editSpeaker: 'Редактировать спикера:',
      family: 'Фамилия',
      patronymic: 'Отчество',

      speaker: 'Спикер',
      book: 'Книга',
      addMeeting: 'Добавить встречу',
      meetingDate: 'Дата встречи',
      review: 'Отзыв',
      links: 'Ссылки',
      listOfReports: 'Список докладов',
      viewReport: 'Посмотреть запись доклада',
      downloadPresentation: 'Скачать презентацию',
      date: 'Дата...',

      addReport: 'Добавить доклад',
      reportAddition: 'Добавление доклада',
      reportDate: 'Дата доклада',
      bookRating: 'Оценка книги',
      presentationURL: 'URL презентации',
      videoURL: 'URL видео',
      inputPURL: 'Input URL of presentation',
      inputVURL: 'Input URL of video',
      inputRating: 'Input rating',
      inputReview: 'Input review',

      editMeeting: 'Редактирование встречи',
      editReport: 'Редактирование доклада'
    }
  };
});
define('h-work-2/models/book', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        name: _emberData.default.attr('string'),
        author: _emberData.default.attr('string'),
        size: _emberData.default.attr('string'),
        description: _emberData.default.attr('string'),
        tags: _emberData.default.attr('array'),
        coverURL: _emberData.default.attr('string'),

        lectures: _emberData.default.hasMany('lecture'),
        user: _emberData.default.belongsTo('user')
    });
});
define('h-work-2/models/lecture', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        date: _emberData.default.attr('date-string'),
        rating: _emberData.default.attr('string'),
        presentURL: _emberData.default.attr('string'),
        videoURL: _emberData.default.attr('string'),
        review: _emberData.default.attr('string'),

        book: _emberData.default.belongsTo('book'),
        speaker: _emberData.default.belongsTo('speaker'),
        meeting: _emberData.default.belongsTo('meeting'),
        user: _emberData.default.belongsTo('user')
    });
});
define('h-work-2/models/log', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    currentDate: _emberData.default.attr('string'),
    ipAdress: _emberData.default.attr('string'),
    currentURL: _emberData.default.attr('string'),
    message: _emberData.default.attr('string')
  });
});
define('h-work-2/models/meeting', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        eventDate: _emberData.default.attr('date-string'),

        lectures: _emberData.default.hasMany('lecture'),
        user: _emberData.default.belongsTo('user')
    });
});
define('h-work-2/models/speaker', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        name: _emberData.default.attr('string'),
        surname: _emberData.default.attr('string'),
        patronymic: _emberData.default.attr('string'),

        lectures: _emberData.default.hasMany('lecture'),
        user: _emberData.default.belongsTo('user')
    });
});
define('h-work-2/models/user', ['exports', 'ember-data', 'ember-cp-validations'], function (exports, _emberData, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)({
    email: [(0, _emberCpValidations.validator)('presence', true), (0, _emberCpValidations.validator)('format', { type: 'email' })],
    password: [(0, _emberCpValidations.validator)('presence', true), (0, _emberCpValidations.validator)('length', {
      min: 4,
      max: 8
    })]
  });

  exports.default = _emberData.default.Model.extend(Validations, {
    email: _emberData.default.attr('string'),
    password: _emberData.default.attr()
  });
});
define('h-work-2/modifiers/focus-trap', ['exports', 'ember-focus-trap/modifiers/focus-trap'], function (exports, _focusTrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
});
define('h-work-2/modifiers/ref', ['exports', 'ember-ref-modifier/modifiers/ref'], function (exports, _ref) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ref.default;
    }
  });
});
define('h-work-2/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('h-work-2/router', ['exports', 'h-work-2/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('index', { path: '/' });
    this.route('book', { path: '/books' });
    this.route('edit-book', { path: '/edit-book/:id' });
    this.route('add-book', { path: '/add-book' });
    this.route('speaker', { path: '/speakers' });
    this.route('add-speaker', { path: '/add-speaker' });
    this.route('edit-speaker', { path: '/edit-speaker/:id' });
    this.route('404', { path: '*path' });
    this.route('meeting', { path: '/meetings' });
    this.route('edit-meeting', { path: '/edit-meeting/:id' });
    this.route('edit-lecture', { path: '/edit-lecture/:id' });
    this.route('add-lecture', { path: '/add-lecture/:id' });
    this.route('add-meeting', { path: '/add-meeting/:id' });
    this.route('add-meeting-lecture', { path: '/add-meeting-lecture/:id' });
    this.route('register', { path: '/register' });
    this.route('login', { path: '/login' });
    this.route('edit-meeting-lecture', { path: '/edit-meeting-lecture/:id' });
  });

  exports.default = Router;
});
define('h-work-2/routes/404', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('h-work-2/routes/add-book', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
        setupController: function setupController(controller) {
            this._super.apply(this, arguments);
            Ember.set(controller, 'uploadData', null);
        },
        model: function model() {
            return [];
        }
    });
});
define('h-work-2/routes/add-lecture', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
        model: function model(_ref) {
            var id = _ref.id;

            return Ember.RSVP.hash({
                meeting: this.get('store').findRecord('meeting', id),
                speakers: this.get('store').findAll('speaker'),
                books: this.get('store').findAll('book')
            });
        }
    });
});
define('h-work-2/routes/add-meeting-lecture', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
        model: function model(_ref) {
            var id = _ref.id;

            return Ember.RSVP.hash({
                meeting: this.get('store').findRecord('meeting', id),
                speakers: this.get('store').findAll('speaker'),
                books: this.get('store').findAll('book')
            });
        }
    });
});
define('h-work-2/routes/add-meeting', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
        meetingEventDate: "Укажите дату",

        model: function model(_ref) {
            var id = _ref.id;

            console.log(id);
            if (id == 0) {
                var newMeeting = this.get('store').createRecord('meeting');
                return newMeeting.save();
            } else {
                return this.get('store').findRecord('meeting', id);
            }
        }
    });
});
define('h-work-2/routes/add-speaker', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {});
});
define('h-work-2/routes/application', ['exports', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _applicationRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_applicationRouteMixin.default, {
    session: Ember.inject.service(),
    currentUser: Ember.inject.service(),

    beforeModel: function beforeModel() {
      this._super.apply(this, arguments);

      this.loadUser();
    },
    sessionAuthenticated: function sessionAuthenticated() {
      this._super.apply(this, arguments);

      this.loadUser();
    },
    sessionInvalidated: function sessionInvalidated() {
      this.get('currentUser').resetCurrentUser();
      window.location.replace('/login');
    },
    loadUser: function loadUser() {
      if (this.get('session.isAuthenticated')) {
        this.get('currentUser').load();
      }
    },


    actions: {
      error: function error(_error, transition) {
        if (transition) {
          transition.abort();
        }
        this.intermediateTransitionTo('error', { error: _error.message });
        return true;
      }
    }
  });
});
define('h-work-2/routes/book', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
        queryParams: {
            search: {
                refreshModel: false
            },
            tags: {
                refreshModel: false
            }
        },

        model: function model(_ref) {
            var search = _ref.search,
                tags = _ref.tags;

            if (search || tags) {
                return this.get('store').query('book', { q: search, tags_like: tags });
            } else {
                return this.get('store').findAll("book");
            }
        },

        actions: {
            reloadModel: function reloadModel() {
                this.refresh();
            }
        }
    });
});
define('h-work-2/routes/edit-book', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
        setupController: function setupController(controller) {
            this._super.apply(this, arguments);
            Ember.set(controller, 'uploadData', null);
        },
        model: function model(_ref) {
            var id = _ref.id;

            return this.get('store').findRecord('book', id);
        }
    });
});
define('h-work-2/routes/edit-lecture', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
        model: function model(_ref) {
            var id = _ref.id;

            return this.get('store').findRecord('lecture', id);
        }
    });
});
define('h-work-2/routes/edit-meeting-lecture', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
        model: function model(_ref) {
            var id = _ref.id;

            return this.get('store').findRecord('lecture', id);
        }
    });
});
define('h-work-2/routes/edit-meeting', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
        model: function model(_ref) {
            var id = _ref.id;

            return this.get('store').findRecord('meeting', id);
        }
    });
});
define('h-work-2/routes/edit-speaker', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
        model: function model(_ref) {
            var id = _ref.id;

            return this.get('store').findRecord('speaker', id);
        }
    });
});
define('h-work-2/routes/index', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {});
});
define('h-work-2/routes/login', ['exports', 'ember-simple-auth/mixins/unauthenticated-route-mixin'], function (exports, _unauthenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_unauthenticatedRouteMixin.default, {
    model: function model() {
      return {
        email: '',
        password: ''
      };
    },
    resetController: function resetController(controller, isExiting, transition) {
      this._super.apply(this, arguments);
      if (isExiting) {
        controller.resetErrors();
      }
    }
  });
});
define('h-work-2/routes/meeting', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
        queryParams: {
            page: {
                refreshModel: true
            },
            speaker: {
                refreshModel: false
            },
            book: {
                refreshModel: false
            },
            date: {
                refreshModel: false
            }
        },

        model: function model(_ref) {
            var page = _ref.page,
                speaker = _ref.speaker,
                book = _ref.book,
                date = _ref.date;

            var query = {
                _page: page,
                _limit: 2
            };
            if (speaker) query.speaker = speaker;
            if (book) query.book = book;
            if (date) query.date = date;
            return Ember.RSVP.hash({
                meetings: this.get('store').query('meeting', query),
                speakers: this.get('store').findAll('speaker'),
                books: this.get('store').findAll('book')
            });
        },


        actions: {
            reloadModel: function reloadModel() {
                this.refresh();
            }
        },

        setupController: function setupController(controller, model) {
            this._super.apply(this, arguments);
        }
    });
});
define('h-work-2/routes/register', ['exports', 'ember-simple-auth/mixins/unauthenticated-route-mixin'], function (exports, _unauthenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_unauthenticatedRouteMixin.default, {
    model: function model() {
      return {
        email: '',
        password: ''
      };
    },
    resetController: function resetController(controller, isExiting, transition) {
      this._super.apply(this, arguments);
      if (isExiting) {
        controller.resetErrors();
      }
    }
  });
});
define('h-work-2/routes/speaker', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {
        queryParams: {
            search: {
                refreshModel: true
            }
        },

        model: function model(_ref) {
            var _this = this;

            var search = _ref.search;

            var promise = new Promise(function (resolve, reject) {
                Ember.run.debounce(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var speakers;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.prev = 0;

                                    if (!search) {
                                        _context.next = 7;
                                        break;
                                    }

                                    _context.next = 4;
                                    return _this.get('store').query('speaker', { q: search });

                                case 4:
                                    _context.t0 = _context.sent;
                                    _context.next = 10;
                                    break;

                                case 7:
                                    _context.next = 9;
                                    return _this.get('store').findAll('speaker');

                                case 9:
                                    _context.t0 = _context.sent;

                                case 10:
                                    speakers = _context.t0;

                                    resolve(speakers);
                                    _context.next = 17;
                                    break;

                                case 14:
                                    _context.prev = 14;
                                    _context.t1 = _context['catch'](0);

                                    reject('Connection failed');

                                case 17:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this, [[0, 14]]);
                })), 1500);
            }).then(function (speakers) {
                _this.set('controller.model', speakers);
            }).finally(function () {
                if (promise === _this.get('modelPromise')) {
                    _this.set('controller.isLoading', false);
                }
            });

            this.set('modelPromise', promise);
            return { isLoading: true };
        },
        setupController: function setupController(controller, model) {
            this._super.apply(this, arguments);
            if (this.get('modelPromise')) {
                controller.set('isLoading', true);
            }
        },
        resetController: function resetController(controller, isExiting, transition) {
            this._super.apply(this, arguments);
            if (isExiting) {
                controller.set('isLoading', false);
                this.set('modelPromise', null);
            }
        },


        actions: {
            reloadModel: function reloadModel() {
                this.refresh();
            }
        }
    });
});
define('h-work-2/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.JSONSerializer.extend({
        normalize: function normalize(model, hash) {
            return this._super.apply(this, arguments);
        },
        keyForRelationship: function keyForRelationship(key, typeClass, method) {
            if (typeClass === 'belongsTo') {
                return key + 'Id';
            }
            return this._super.apply(this, arguments);
        },
        extractRelationship: function extractRelationship(relationshipModelName, relationshipHash) {
            var hash = relationshipHash.id ? relationshipHash.id : relationshipHash;
            return this._super.call(this, relationshipModelName, hash);
            // return this._super(...arguments);
        },
        serializeBelongsTo: function serializeBelongsTo(snapshot, json, relationship) {
            // this._super(...arguments);
            var key = relationship.key;
            var belongsTo = snapshot.belongsTo(key);

            key = this.keyForRelationship ? this.keyForRelationship(key, "belongsTo", "serialize") : key;
            json[key] = Ember.isNone(belongsTo) ? belongsTo : parseInt(belongsTo.record.get('id'));
        }
    });
});
define('h-work-2/serializers/book', ['exports', 'h-work-2/serializers/application'], function (exports, _application) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _application.default.extend({
        normalize: function normalize(model, hash) {
            hash = this._super.apply(this, arguments);
            return hash;
        }
    });
});
define('h-work-2/serializers/lecture', ['exports', 'h-work-2/serializers/application'], function (exports, _application) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _application.default.extend({
        normalize: function normalize(model, hash) {
            hash = this._super.apply(this, arguments);
            return hash;
        }
    });
});
define('h-work-2/serializers/meeting', ['exports', 'h-work-2/serializers/application'], function (exports, _application) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _application.default.extend({
        normalize: function normalize(model, hash) {
            hash = this._super.apply(this, arguments);
            return hash;
        }
    });
});
define('h-work-2/serializers/speaker', ['exports', 'h-work-2/serializers/application'], function (exports, _application) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _application.default.extend({
        normalize: function normalize(model, hash) {
            hash = this._super.apply(this, arguments);
            return hash;
        }
    });
});
define('h-work-2/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('h-work-2/services/can', ['exports', 'ember-can/services/can'], function (exports, _can) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _can.default;
    }
  });
});
define('h-work-2/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _cookies) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _cookies.default;
});
define('h-work-2/services/current-user', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Service.extend({
    store: Ember.inject.service(),
    user: null,

    load: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.get('store').queryRecord('user', { me: true });

              case 2:
                user = _context.sent;

                this.set('user', user);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load() {
        return _ref.apply(this, arguments);
      }

      return load;
    }(),
    resetCurrentUser: function resetCurrentUser() {
      this.set('user', null);
    }
  });
});
define('h-work-2/services/data', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    exports.default = Ember.Service.extend({
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
        addPhoto: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(book, uploadData) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function addPhoto(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return addPhoto;
        }()
    }
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
    );
});
define('h-work-2/services/g-recaptcha-v3', ['exports', 'ember-cli-google-recaptcha/services/g-recaptcha-v3'], function (exports, _gRecaptchaV) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gRecaptchaV.default;
    }
  });
});
define('h-work-2/services/g-recaptcha', ['exports', 'ember-cli-google-recaptcha/services/g-recaptcha'], function (exports, _gRecaptcha) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gRecaptcha.default;
    }
  });
});
define('h-work-2/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, _i18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _i18n.default;
    }
  });
});
define('h-work-2/services/log', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var messageCategory = {
    error: { name: 'ERROR', priority: 1 },
    warn: { name: 'WARN', priority: 2 },
    log: { name: 'LOG', priority: 3 },
    info: { name: 'INFO', priority: 4 },
    debug: { name: 'DEBUG', priority: 5 },
    deprecate: { name: 'DEPRECATION', priority: 6 },
    promise: { name: 'PROMISE', priority: 7 }
  };

  exports.default = Ember.Service.extend(Ember.Evented, {
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
    init: function init() {
      this._super.apply(this, arguments);

      var _this = this;
      var originalMethodsCache = Ember.A();

      var originalEmberLoggerError = Ember.Logger.error;
      originalMethodsCache.pushObject({
        methodOwner: Ember.Logger,
        methodName: 'error',
        methodReference: originalEmberLoggerError
      });

      var onError = function onError(error) {
        // If `this` is not undefined then assuming this function was called as promise error handler. So we not performing it.
        if (!this) {
          originalEmberLoggerError(error);
          _this._onError(error, false);
        }
      };

      var onPromiseError = function onPromiseError(reason) {
        if (_this.get('showPromiseErrors')) {
          originalEmberLoggerError(reason);
        }

        _this._onError(reason, true);
      };

      // Assign Ember.onerror & Ember.RSVP.on('error', ...) handlers (see http://emberjs.com/api/#event_onerror).
      Ember.onerror = onError;
      Ember.RSVP.on('error', onPromiseError);

      // Extend Ember.Logger.error logic.
      Ember.Logger.error = function () {
        originalEmberLoggerError.apply(undefined, arguments);

        return _this._storeToApplicationLog(messageCategory.error, joinArguments.apply(undefined, arguments), '');
      };
    },


    /**
      Destroys log service.
    */
    willDestroy: function willDestroy() {
      this._super.apply(this, arguments);

      // Restore original Ember.Logger methods.
      var originalMethodsCache = this.get('_originalMethodsCache');
      if (Ember.isArray(originalMethodsCache)) {
        originalMethodsCache.forEach(function (cacheEntry) {
          Ember.set(cacheEntry.methodOwner, cacheEntry.methodName, cacheEntry.methodReference);
        });
      }

      // Cleanup Ember.onerror & Ember.RSVP.on('error', ...) handlers (see http://emberjs.com/api/#event_onerror).
      Ember.onerror = null;
      Ember.RSVP.off('error');
    },


    /**
      Stores given message to application log.
      @method _storeToApplicationLog
      @param {String} category Message category: 'ERROR', 'WARN', 'LOG', 'INFO', 'DEBUG', 'DEPRECATION'.
      @param {String} message Message itself.
      @param {String} formattedMessage Full message content in JSON format.
      @private
    */
    _storeToApplicationLog: function _storeToApplicationLog(category, message, formattedMessage) {
      var _this2 = this;

      var isSkippedMessage = false;

      if (isSkippedMessage || category.name === messageCategory.error.name && !this.get('storeErrorMessages') || category.name === messageCategory.promise.name && !this.get('storePromiseErrors')) {
        return new Ember.RSVP.Promise(function (resolve) {
          _this2._triggerEvent(category.name);
          resolve();
        });
      }

      var applicationLogProperties = {
        currentDate: new Date().toString(),
        message: message,
        currentURL: window.location.href,
        ipAdress: ''
      };

      var store = this.get('store');

      // Break if message already exists in store (to avoid infinit loop when message is generated while saving itself).
      var applicationLogModel = store.peekAll('log').findBy('message', message);
      if (applicationLogModel !== undefined) {
        return new Ember.RSVP.Promise(function (resolve, reject) {
          _this2._triggerEvent(category.name, applicationLogModel);
          resolve();
        });
      }

      return store.createRecord('log', applicationLogProperties).save().then(function (applicationLogModel) {
        _this2._triggerEvent(category.name, applicationLogModel);
        return applicationLogModel;
      }).catch(function (reason) {
        // Switch off remote logging on rejection to avoid infinite loop.
        _this2.set('enabled', false);
      });
    },
    _triggerEvent: function _triggerEvent(eventName, applicationLogModel) {
      (true && !(typeof eventName === 'string') && Ember.assert('Logger Error: event name should be a string', typeof eventName === 'string'));

      var eventNameToTrigger = eventName.toLowerCase();
      this.trigger(eventNameToTrigger, applicationLogModel);
    },
    _onError: function _onError(error, isPromiseError) {
      if (Ember.isNone(error)) {
        return;
      }

      if (typeof error === 'string') {
        error = new Error(error);
      }

      var message = error.message || error.toString();

      var formattedMessageBlank = {
        name: error && error.name ? error.name : null,
        message: error && error.message ? error.message : null,
        fileName: error && error.fileName ? error.fileName : null,
        lineNumber: error && error.lineNumber ? error.lineNumber : null,
        columnNumber: error && error.columnNumber ? error.columnNumber : null,
        stack: error && error.stack ? error.stack : null
      };

      var formattedMessage = JSON.stringify(formattedMessageBlank);

      this._storeToApplicationLog(isPromiseError ? messageCategory.promise : messageCategory.error, message, formattedMessage);
    }
  });
});
define('h-work-2/services/moment', ['exports', 'ember-moment/services/moment', 'h-work-2/config/environment'], function (exports, _moment, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var get = Ember.get;
  exports.default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });
});
define('h-work-2/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _session) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _session.default;
});
define('h-work-2/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _textMeasurer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
define('h-work-2/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _adaptive) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _adaptive.default.extend();
});
define("h-work-2/templates/404", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rFXcifiv", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"welcome-page row justify-content-center h-100\"],[8],[0,\"\\n    \"],[6,\"img\"],[10,\"class\",\"align-self-center\"],[10,\"src\",\"http://localhost:4200/images/404.png\"],[10,\"alt\",\"Welcome\"],[8],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/404.hbs" } });
});
define("h-work-2/templates/add-book", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6jxd2IFY", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[1,[26,\"t\",[\"menu.addingBook\"],null],false],[9],[0,\"\\n    \"],[6,\"form\"],[10,\"class\",\"edit-form\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputTitle\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.name\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputTitle\"],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"bookName\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"text\"],[8],[9],[0,\"\\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"bookName\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n                        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"bookName\"],null],\"message\"],null],false],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputAuthor\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.author\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputAuthor\"],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"bookAuthor\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"text\"],[8],[9],[0,\"\\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"bookAuthor\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n                        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"bookAuthor\"],null],\"message\"],null],false],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputPagesCount\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.numberOfPages\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputPagesCount\"],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"bookSize\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"number\"],[8],[9],[0,\"\\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"bookSize\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n                        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"bookSize\"],null],\"message\"],null],false],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputDescriptionURL\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.description\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputDescriptionURL\"],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"bookDescription\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"url\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"customFile\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.cover\"],null],false],[9],[0,\"\\n            \"],[1,[26,\"input-file\",null,[[\"class\",\"uploadData\",\"uploadDataChanged\"],[\"input-group input-group-lg col-sm-10\",[22,[\"uploadData\"]],[26,\"action\",[[21,0,[]],\"changeUploadData\"],null]]]],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputTags\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.tags\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[1,[26,\"edit-tags\",null,[[\"tags\",\"onChange\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"changeTags\"],null]]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"addBook\"],null],null],[10,\"type\",\"button\"],[8],[1,[26,\"t\",[\"menu.add\"],null],false],[9],[0,\"\\n                \"],[4,\"link-to\",[\"book\"],[[\"class\"],[\"btn btn-outline-secondary btn-lg\"]],{\"statements\":[[1,[26,\"t\",[\"menu.cancel\"],null],false]],\"parameters\":[]},null],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/add-book.hbs" } });
});
define("h-work-2/templates/add-lecture", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "D0iynnOA", "block": "{\"symbols\":[\"speaker\",\"book\"],\"statements\":[[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[1,[26,\"t\",[\"menu.reportAddition\"],null],false],[9],[0,\"\\n    \"],[6,\"form\"],[10,\"class\",\"edit-form\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"reportDate\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.reportDate\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"datepicker datepicker-meeting date input-group p-0\"],[8],[0,\"\\n                    \"],[6,\"input\"],[11,\"placeholder\",[26,\"t\",[\"menu.date\"],null],null],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"reportDate\"],[11,\"value\",[27,[[22,[\"model\",\"meeting\",\"eventDate\"]]]]],[10,\"disabled\",\"disabled\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n                        \"],[6,\"span\"],[10,\"class\",\"input-group-text px-4\"],[8],[0,\"\\n                            \"],[6,\"svg\"],[10,\"width\",\"1em\"],[10,\"height\",\"1em\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-clock\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z\"],[8],[9],[0,\"\\n                                \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputMark\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.bookRating\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"min\",\"1\"],[10,\"max\",\"5\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputMark\"],[11,\"placeholder\",[26,\"t\",[\"menu.inputRating\"],null],null],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"lectureRating\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"number\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputPresentation\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.presentationURL\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputPresentation\"],[11,\"placeholder\",[26,\"t\",[\"menu.inputPURL\"],null],null],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newPresentURL\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"url\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputVideo\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.videoURL\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputVideo\"],[11,\"placeholder\",[26,\"t\",[\"menu.inputVURL\"],null],null],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newVideoURL\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"url\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputBook\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.book\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n\"],[4,\"power-select\",null,[[\"id\",\"triggerClass\",\"onchange\",\"selected\",\"options\"],[\"inputBook\",\"selectpicker form-control form-control-lg\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newBook\"]]],null]],null],[22,[\"newBook\"]],[22,[\"model\",\"books\"]]]],{\"statements\":[[0,\"                    \"],[1,[21,2,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"newBook\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n                        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"newBook\"],null],\"message\"],null],false],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\t\\t\\t\\t\\t\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputSpeaker\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.speaker\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n\"],[4,\"power-select\",null,[[\"id\",\"triggerClass\",\"onchange\",\"selected\",\"options\"],[\"inputSpeaker\",\"selectpicker form-control form-control-lg\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newSpeaker\"]]],null]],null],[22,[\"newSpeaker\"]],[22,[\"model\",\"speakers\"]]]],{\"statements\":[[0,\"                    \"],[1,[21,1,[\"name\"]],false],[0,\" \"],[1,[21,1,[\"surname\"]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"newSpeaker\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n                        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"newSpeaker\"],null],\"message\"],null],false],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\t\\t\\t\\t\\t\\t\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputReview\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.review\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"textarea\"],[10,\"id\",\"inputReview\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputPatronymic\"],[11,\"placeholder\",[26,\"t\",[\"menu.inputReview\"],null],null],[10,\"rows\",\"4\"],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newReview\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"addLecture\"],null],null],[10,\"type\",\"button\"],[8],[1,[26,\"t\",[\"menu.save\"],null],false],[9],[0,\"\\n\"],[4,\"link-to\",[\"edit-meeting\",[22,[\"model\",\"meeting\",\"id\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-secondary btn-lg\"],[10,\"type\",\"button\"],[8],[1,[26,\"t\",[\"menu.cancel\"],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/add-lecture.hbs" } });
});
define("h-work-2/templates/add-meeting-lecture", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "338evFI5", "block": "{\"symbols\":[\"speaker\",\"book\"],\"statements\":[[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[1,[26,\"t\",[\"menu.reportAddition\"],null],false],[9],[0,\"\\n    \"],[6,\"form\"],[10,\"class\",\"edit-form\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"reportDate\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.reportDate\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"datepicker datepicker-meeting date input-group p-0\"],[8],[0,\"\\n                    \"],[6,\"input\"],[11,\"placeholder\",[26,\"t\",[\"menu.date\"],null],null],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"reportDate\"],[11,\"value\",[27,[[22,[\"model\",\"meeting\",\"eventDate\"]]]]],[10,\"disabled\",\"disabled\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n                        \"],[6,\"span\"],[10,\"class\",\"input-group-text px-4\"],[8],[0,\"\\n                            \"],[6,\"svg\"],[10,\"width\",\"1em\"],[10,\"height\",\"1em\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-clock\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z\"],[8],[9],[0,\"\\n                                \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputMark\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.bookRating\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"min\",\"1\"],[10,\"max\",\"5\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputMark\"],[11,\"placeholder\",[26,\"t\",[\"menu.inputRating\"],null],null],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"lectureRating\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"number\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputPresentation\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.presentationURL\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputPresentation\"],[11,\"placeholder\",[26,\"t\",[\"menu.inputPURL\"],null],null],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newPresentURL\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"url\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputVideo\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.videoURL\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputVideo\"],[11,\"placeholder\",[26,\"t\",[\"menu.inputVURL\"],null],null],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newVideoURL\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"url\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputBook\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.book\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n\"],[4,\"power-select\",null,[[\"id\",\"triggerClass\",\"onchange\",\"selected\",\"options\"],[\"inputBook\",\"selectpicker form-control form-control-lg\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newBook\"]]],null]],null],[22,[\"newBook\"]],[22,[\"model\",\"books\"]]]],{\"statements\":[[0,\"                    \"],[1,[21,2,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"newBook\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n                        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"newBook\"],null],\"message\"],null],false],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\t\\t\\t\\t\\t\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputSpeaker\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.speaker\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n\"],[4,\"power-select\",null,[[\"id\",\"triggerClass\",\"onchange\",\"selected\",\"options\"],[\"inputSpeaker\",\"selectpicker form-control form-control-lg\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newSpeaker\"]]],null]],null],[22,[\"newSpeaker\"]],[22,[\"model\",\"speakers\"]]]],{\"statements\":[[0,\"                    \"],[1,[21,1,[\"name\"]],false],[0,\" \"],[1,[21,1,[\"surname\"]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"newSpeaker\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n                        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"newSpeaker\"],null],\"message\"],null],false],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\t\\t\\t\\t\\t\\t\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputReview\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.review\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"textarea\"],[10,\"id\",\"inputReview\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputPatronymic\"],[11,\"placeholder\",[26,\"t\",[\"menu.inputReview\"],null],null],[10,\"rows\",\"4\"],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newReview\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"addLecture\"],null],null],[10,\"type\",\"button\"],[8],[1,[26,\"t\",[\"menu.save\"],null],false],[9],[0,\"\\n\"],[4,\"link-to\",[\"edit-meeting\",[22,[\"model\",\"meeting\",\"id\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-secondary btn-lg\"],[10,\"type\",\"button\"],[8],[1,[26,\"t\",[\"menu.cancel\"],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/add-meeting-lecture.hbs" } });
});
define("h-work-2/templates/add-meeting", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gRJDpL1k", "block": "{\"symbols\":[\"lecture\"],\"statements\":[[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[1,[26,\"t\",[\"menu.addMeeting\"],null],false],[9],[0,\"\\n    \"],[6,\"form\"],[10,\"class\",\"edit-form\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"border border-dark rounded p-4 mb-4\"],[8],[0,\"\\n            \"],[6,\"h4\"],[8],[1,[26,\"t\",[\"menu.meetingDate\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between mb-4\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"datepicker datepicker-meeting date input-group p-0\"],[8],[0,\"\\n                        \"],[6,\"input\"],[11,\"placeholder\",[26,\"t\",[\"menu.date\"],null],null],[10,\"class\",\"form-control\"],[10,\"id\",\"meetingDate\"],[11,\"value\",[27,[[20,\"meetingEventDate\"]]]],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"meetingEventDate\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n                            \"],[6,\"span\"],[10,\"class\",\"input-group-text px-4\"],[8],[0,\"\\n                                \"],[6,\"svg\"],[10,\"width\",\"1em\"],[10,\"height\",\"1em\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-clock\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z\"],[8],[9],[0,\"\\n                                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"meetingEventDate\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"                        \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n                            \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"meetingEventDate\"],null],\"message\"],null],false],[0,\"\\n                        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n                    \"],[6,\"h4\"],[8],[1,[26,\"t\",[\"menu.listOfReports\"],null],false],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"add-meeting-lecture\",[22,[\"model\",\"id\"]]],null,{\"statements\":[[0,\"                        \"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[10,\"type\",\"button\"],[8],[0,\"\\n                            \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus-square card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                \"],[6,\"path\"],[10,\"d\",\"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z\"],[8],[9],[0,\"\\n                                \"],[6,\"path\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n                            \"],[9],[0,\"\\t\\t\\t\\t\\t\\t\\n                        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"ul\"],[10,\"class\",\"list-group\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\",\"lectures\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center d-inline-block align-middle\"],[8],[0,\"\\n                                \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[1,[26,\"t\",[\"menu.speaker\"],null],false],[9],[0,\"\\n                                \"],[6,\"img\"],[10,\"src\",\"http://localhost:4200/images/speaker.jpg\"],[10,\"class\",\"rounded w-100\"],[10,\"alt\",\"Спикер\"],[8],[9],[0,\"\\n                                \"],[6,\"p\"],[8],[1,[21,1,[\"speaker\",\"name\"]],false],[0,\" \"],[1,[21,1,[\"speaker\",\"surname\"]],false],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center d-inline-block align-middle\"],[8],[0,\"\\n                                \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[1,[26,\"t\",[\"menu.book\"],null],false],[9],[0,\"\\n                                \"],[6,\"p\"],[8],[1,[21,1,[\"book\",\"name\"]],false],[9],[0,\"\\n                                \"],[6,\"p\"],[8],[1,[21,1,[\"book\",\"author\"]],false],[9],[0,\"\\n                                \"],[6,\"div\"],[10,\"class\",\"row align-items-center m-0\"],[8],[0,\"\\n                                    \"],[6,\"div\"],[10,\"class\",\"col-md-auto pl-0\"],[8],[0,\"\\n                                        \"],[1,[26,\"t\",[\"menu.rating\"],null],false],[0,\"\\n                                    \"],[9],[0,\"\\n                                    \"],[6,\"div\"],[10,\"class\",\"col p-0\"],[8],[0,\"\\n                                        \"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n                                            \"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[11,\"style\",[27,[\"width: \",[21,1,[\"rating\"]],\"%;\"]]],[11,\"aria-valuenow\",[27,[[21,1,[\"rating\"]]]]],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[1,[21,1,[\"rating\"]],false],[0,\"%\"],[9],[0,\"\\n                                        \"],[9],[0,\"\\n                                    \"],[9],[0,\"\\n                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"col-md-4 d-inline-block align-middle\"],[8],[0,\"\\n                                \"],[6,\"h5\"],[10,\"class\",\"text-center py-2\"],[8],[1,[26,\"t\",[\"menu.review\"],null],false],[9],[0,\"\\n                                \"],[6,\"p\"],[8],[1,[21,1,[\"review\"]],false],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center col-filter d-inline-block align-middle\"],[8],[0,\"\\n                                \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[1,[26,\"t\",[\"menu.links\"],null],false],[9],[0,\"\\n                                \"],[6,\"a\"],[11,\"href\",[27,[[21,1,[\"videoURL\"]]]]],[10,\"class\",\"btn btn-video\"],[11,\"title\",[26,\"t\",[\"menu.viewReport\"],null],null],[8],[0,\"\\n                                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-camera-reels card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n                                    \"],[9],[0,\"\\n                                \"],[9],[0,\"\\n                                \"],[6,\"a\"],[11,\"href\",[27,[[21,1,[\"presentationURL\"]]]]],[10,\"class\",\"btn btn-present\"],[11,\"title\",[26,\"t\",[\"menu.downloadPresentation\"],null],null],[8],[0,\"\\n                                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-file-ppt card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M6 4a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 6 4z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z\"],[8],[9],[0,\"\\n                                    \"],[9],[0,\"\\n                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"row align-items-center col-md-2\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"edit-meeting-lecture\",[21,1,[\"id\"]]],null,{\"statements\":[[0,\"                                    \"],[6,\"button\"],[10,\"class\",\"btn pl-2 pr-2 col-md-6 text-right\"],[10,\"type\",\"button\"],[8],[0,\"\\n                                        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                            \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n                                        \"],[9],[0,\"\\n                                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                                \"],[6,\"button\"],[10,\"class\",\"btn pl-2 pr-2 col-md-6 text-left\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"deleteLecture\",[21,1,[]]],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n                                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                        \"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n                                    \"],[9],[0,\"\\n                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"addMeeting\"],null],null],[10,\"type\",\"button\"],[8],[1,[26,\"t\",[\"menu.save\"],null],false],[9],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-secondary btn-lg\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"deleteMeeting\",[22,[\"model\"]]],null],null],[10,\"type\",\"button\"],[8],[1,[26,\"t\",[\"menu.cancel\"],null],false],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/add-meeting.hbs" } });
});
define("h-work-2/templates/add-speaker", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xh3blF/P", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[1,[26,\"t\",[\"menu.addingSpeaker\"],null],false],[0,\" \"],[1,[22,[\"model\",\"name\"]],false],[0,\" \"],[1,[22,[\"model\",\"surname\"]],false],[9],[0,\"\\n    \"],[6,\"form\"],[10,\"class\",\"edit-form\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputSurname\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.family\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"id\",\"inputSurname\"],[10,\"class\",\"form-control form-control-lg\"],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"speakerSurname\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"text\"],[8],[9],[0,\"\\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"speakerSurname\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n                        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"speakerSurname\"],null],\"message\"],null],false],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputName\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.name_2\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputName\"],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"speakerName\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"text\"],[8],[9],[0,\"\\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"speakerName\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n                        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"speakerName\"],null],\"message\"],null],false],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputName\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.patronymic\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputPatronymic\"],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"speakerPatronymic\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"text\"],[8],[9],[0,\"\\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"speakerPatronymic\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n                        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"speakerPatronymic\"],null],\"message\"],null],false],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"addSpeaker\"],null],null],[10,\"type\",\"button\"],[8],[1,[26,\"t\",[\"menu.add\"],null],false],[9],[0,\"\\n                \"],[4,\"link-to\",[\"speaker\"],[[\"class\"],[\"btn btn-outline-secondary btn-lg\"]],{\"statements\":[[1,[26,\"t\",[\"menu.cancel\"],null],false]],\"parameters\":[]},null],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/add-speaker.hbs" } });
});
define("h-work-2/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rwQUe4fr", "block": "{\"symbols\":[],\"statements\":[[6,\"header\"],[10,\"class\",\"navbar fixed-top navbar-expand-lg navbar-light bg-light\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"class\",\"navbar-brand\"],[8],[0,\"\\n        \"],[6,\"img\"],[10,\"src\",\"images/logo-dark.png\"],[10,\"width\",\"30\"],[10,\"height\",\"30\"],[10,\"class\",\"d-inline-block align-top\"],[10,\"alt\",\"\"],[10,\"loading\",\"lazy\"],[8],[9],[0,\"\\n        \"],[1,[26,\"t\",[\"menu.logo\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"button\"],[10,\"class\",\"navbar-toggler\"],[10,\"data-toggle\",\"collapse\"],[10,\"data-target\",\"#navbarContent\"],[10,\"aria-controls\",\"navbarSupportedContent\"],[10,\"aria-expanded\",\"false\"],[10,\"aria-label\",\"Открыть меню\"],[10,\"type\",\"button\"],[8],[0,\"\\n        \"],[6,\"span\"],[10,\"class\",\"navbar-toggler-icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"collapse navbar-collapse\"],[10,\"id\",\"navbarContent\"],[8],[0,\"\\n        \"],[6,\"ul\"],[10,\"class\",\"nav navbar-nav navigation-main\"],[8],[0,\"\\n            \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n                \"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[1,[26,\"t\",[\"menu.workTable\"],null],false]],\"parameters\":[]},null],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n                \"],[4,\"link-to\",[\"meeting\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[1,[26,\"t\",[\"menu.clubsMeetings\"],null],false]],\"parameters\":[]},null],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n                \"],[4,\"link-to\",[\"book\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[1,[26,\"t\",[\"menu.books\"],null],false]],\"parameters\":[]},null],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n                \"],[4,\"link-to\",[\"speaker\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[1,[26,\"t\",[\"menu.speakers\"],null],false]],\"parameters\":[]},null],[0,\"\\n            \"],[9],[0,\"\\n\"],[0,\"        \"],[9],[0,\"\\n\\n        \"],[6,\"ul\"],[10,\"class\",\"nav navbar-nav\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"                \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n                    \"],[6,\"a\"],[10,\"class\",\"nav-link\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"logout\"],null],null],[8],[1,[26,\"t\",[\"menu.logout\"],null],false],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n                    \"],[4,\"link-to\",[\"register\"],[[\"class\"],[\"nav-link text-info\"]],{\"statements\":[[1,[26,\"t\",[\"menu.registration\"],null],false]],\"parameters\":[]},null],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n                    \"],[4,\"link-to\",[\"login\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[1,[26,\"t\",[\"menu.login\"],null],false]],\"parameters\":[]},null],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"current-user\"],[8],[0,\"\\n            \"],[6,\"select\"],[10,\"id\",\"languageSelect\"],[11,\"onchange\",[26,\"action\",[[21,0,[]],\"changeLocale\"],null],null],[8],[0,\"\\n                \"],[6,\"option\"],[10,\"value\",\"ru\"],[11,\"selected\",[20,\"isRussian\"],null],[8],[0,\"ru\"],[9],[0,\"\\n                \"],[6,\"option\"],[10,\"value\",\"en\"],[11,\"selected\",[20,\"isEnglish\"],null],[8],[0,\"en\"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n    \"],[1,[20,\"outlet\"],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"footer\"],[10,\"class\",\"footer\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n        \"],[6,\"span\"],[8],[0,\"© New Platform Ltd., 2022\"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/application.hbs" } });
});
define("h-work-2/templates/book", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BCCDE138", "block": "{\"symbols\":[\"book\"],\"statements\":[[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[1,[26,\"t\",[\"menu.books\"],null],false],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"await\",[[26,\"can\",[\"edit book\"],null]],null]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"add-book\"],[[\"class\",\"title\"],[\"btn btn-outline-primary my-2\",[26,\"t\",[\"menu.addBook\"],null]]],{\"statements\":[[0,\"                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-inline\"],[8],[0,\"\\n            \"],[1,[26,\"input\",null,[[\"class\",\"type\",\"aria-label\",\"value\"],[\"form-control mr-2 search-long\",\"search\",\"Найти по полям\",[22,[\"search\"]]]]],false],[0,\"\\n            \"],[6,\"button\"],[10,\"class\",\"btn btn-primary my-2\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"updatePage\"],null],null],[8],[1,[26,\"t\",[\"menu.find\"],null],false],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-inline\"],[8],[0,\"\\n            \"],[1,[26,\"input\",null,[[\"class\",\"type\",\"aria-label\",\"value\"],[\"form-control mr-2\",\"search\",\"Найти по тегам\",[22,[\"tags\"]]]]],false],[0,\"   \\n            \"],[6,\"button\"],[10,\"class\",\"btn btn-primary my-2\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"updatePage\"],null],null],[8],[1,[26,\"t\",[\"menu.search\"],null],false],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row row-cols-1 row-cols-md-3 fix-margin\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"            \"],[1,[26,\"book-item\",null,[[\"delBook\",\"book\"],[[26,\"action\",[[21,0,[]],\"deleteBook\"],null],[21,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/book.hbs" } });
});
define("h-work-2/templates/components/book-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ceJ4fpAu", "block": "{\"symbols\":[\"tag\"],\"statements\":[[6,\"div\"],[10,\"class\",\"col mb-4\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"card\"],[8],[0,\"\\n        \"],[6,\"img\"],[11,\"src\",[27,[[22,[\"book\",\"coverURL\"]]]]],[10,\"class\",\"card-img-top\"],[10,\"alt\",\"Обложка книги\"],[8],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"card-header\"],[8],[0,\"\\n            \"],[6,\"h5\"],[10,\"class\",\"card-title\"],[8],[1,[22,[\"book\",\"name\"]],false],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"ul\"],[10,\"class\",\"list-group list-group-flush\"],[8],[0,\"\\n            \"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n                \"],[6,\"div\"],[8],[6,\"strong\"],[8],[1,[26,\"t\",[\"menu.author\"],null],false],[9],[0,\": \"],[1,[22,[\"book\",\"author\"]],false],[9],[0,\"\\n                \"],[6,\"div\"],[8],[6,\"strong\"],[8],[1,[26,\"t\",[\"menu.numberOfPages\"],null],false],[9],[0,\": \"],[1,[22,[\"book\",\"size\"]],false],[9],[0,\"\\n                \"],[6,\"div\"],[8],[6,\"strong\"],[8],[1,[26,\"t\",[\"menu.tags\"],null],false],[9],[0,\": \\n\"],[4,\"each\",[[22,[\"book\",\"tags\"]]],null,{\"statements\":[[0,\"                        \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"tag-link\"],[8],[6,\"span\"],[10,\"class\",\"small\"],[8],[0,\"#\"],[1,[21,1,[]],false],[9],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n                        \"],[1,[26,\"t\",[\"menu.rating\"],null],false],[0,\"\\n                    \"],[9],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[10,\"style\",\"width: 25%;\"],[10,\"aria-valuenow\",\"25\"],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[0,\"25%\"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"card-footer\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n                    \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"card-link line-offset\"],[8],[1,[22,[\"book\",\"description\"]],false],[9],[0,\"\\n                \"],[9],[0,\"\\n\"],[4,\"if\",[[26,\"await\",[[26,\"can\",[\"edit book\"],null]],null]],null,{\"statements\":[[0,\"                    \"],[6,\"div\"],[10,\"class\",\"col text-right\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"edit-book\",[22,[\"book\",\"id\"]]],[[\"class\"],[\"btn btn-edit\"]],{\"statements\":[[0,\"                            \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n                            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                        \"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"deleteBook\",[22,[\"book\"]]],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n                            \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                \"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n                                \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/components/book-item.hbs" } });
});
define("h-work-2/templates/components/date-picker", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qixa5DMa", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"form-group py-2 my-0\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"datepicker date input-group p-0 w-100\"],[8],[0,\"\\n        \"],[6,\"input\"],[10,\"id\",\"meetingDateFilter\"],[10,\"class\",\"form-control\"],[10,\"aria-label\",\"Дата\"],[11,\"onchange\",[26,\"action\",[[21,0,[]],\"setNewDate\"],[[\"value\"],[\"target.value\"]]],null],[11,\"value\",[20,\"date\"],null],[10,\"type\",\"search\"],[8],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n            \"],[6,\"span\"],[10,\"class\",\"input-group-text px-4\"],[8],[0,\"\\n                \"],[6,\"svg\"],[10,\"width\",\"1em\"],[10,\"height\",\"1em\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-clock\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z\"],[8],[9],[0,\"\\n                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/components/date-picker.hbs" } });
});
define("h-work-2/templates/components/edit-tags", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FydsZwbD", "block": "{\"symbols\":[\"tag\"],\"statements\":[[6,\"select\"],[10,\"multiple\",\"multiple\"],[10,\"data-role\",\"tagsinput\"],[10,\"id\",\"inputTags\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"tags\"]]],null,{\"statements\":[[0,\"    \"],[6,\"option\"],[11,\"value\",[27,[[21,1,[]]]]],[10,\"selected\",\"selected\"],[8],[1,[21,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/components/edit-tags.hbs" } });
});
define('h-work-2/templates/components/ember-popper-targeting-parent', ['exports', 'ember-popper/templates/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('h-work-2/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("h-work-2/templates/components/input-file", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fIGGNwaT", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"custom-file\"],[8],[0,\"\\n  \"],[6,\"input\"],[10,\"class\",\"custom-file-input\"],[10,\"id\",\"customFile\"],[10,\"lang\",\"ru\"],[10,\"type\",\"file\"],[8],[9],[0,\"\\n  \"],[6,\"label\"],[11,\"class\",[27,[\"custom-file-label form-control-lg \",[26,\"if\",[[22,[\"isFileChoosen\"]],\"\",\"placeholder-color\"],null]]]],[10,\"for\",\"customFile\"],[11,\"data-browse\",[26,\"t\",[\"menu.select\"],null],null],[8],[1,[20,\"fileName\"],false],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n  \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-secondary custom-file-clear\"],[11,\"disabled\",[20,\"ifRemoveButtonDisabled\"],null],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"removeFile\"],null],null],[10,\"type\",\"button\"],[8],[0,\"X\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/components/input-file.hbs" } });
});
define("h-work-2/templates/components/lecture-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FD61880p", "block": "{\"symbols\":[],\"statements\":[[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n            \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[1,[26,\"t\",[\"menu.speaker\"],null],false],[9],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"images/speaker.jpg\"],[10,\"class\",\"rounded w-100\"],[11,\"alt\",[26,\"t\",[\"menu.speaker\"],null],null],[8],[9],[0,\"\\n            \"],[6,\"p\"],[8],[1,[22,[\"lecture\",\"speaker\",\"name\"]],false],[0,\" \"],[1,[22,[\"lecture\",\"speaker\",\"surname\"]],false],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n            \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[1,[26,\"t\",[\"menu.book\"],null],false],[9],[0,\"\\n            \"],[6,\"p\"],[8],[1,[22,[\"lecture\",\"book\",\"name\"]],false],[9],[0,\"\\n            \"],[6,\"p\"],[8],[1,[22,[\"lecture\",\"book\",\"author\"]],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"row align-items-center m-0\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-md-auto pl-0\"],[8],[0,\"\\n                    \"],[1,[26,\"t\",[\"menu.rating\"],null],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col p-0\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[11,\"style\",[27,[\"width: \",[22,[\"lecture\",\"rating\"]],\"%;\"]]],[11,\"aria-valuenow\",[27,[[22,[\"lecture\",\"rating\"]]]]],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[1,[22,[\"lecture\",\"rating\"]],false],[0,\"%\"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-6\"],[8],[0,\"\\n            \"],[6,\"h5\"],[10,\"class\",\"text-center py-2\"],[8],[1,[26,\"t\",[\"menu.review\"],null],false],[9],[0,\"\\n            \"],[6,\"p\"],[8],[1,[22,[\"lecture\",\"review\"]],false],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center col-filter\"],[8],[0,\"\\n            \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[1,[26,\"t\",[\"menu.links\"],null],false],[9],[0,\"\\n            \"],[6,\"a\"],[11,\"href\",[27,[[22,[\"lecture\",\"videoURL\"]]]]],[10,\"class\",\"btn btn-video\"],[11,\"title\",[26,\"t\",[\"menu.viewReport\"],null],null],[8],[0,\"\\n                \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-camera-reels card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z\"],[8],[9],[0,\"\\n                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"a\"],[11,\"href\",[27,[[22,[\"lecture\",\"presentURL\"]]]]],[10,\"class\",\"btn btn-present\"],[11,\"title\",[26,\"t\",[\"menu.downloadPresentation\"],null],null],[8],[0,\"\\n                \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-file-ppt card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z\"],[8],[9],[0,\"\\n                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M6 4a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 6 4z\"],[8],[9],[0,\"\\n                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/components/lecture-item.hbs" } });
});
define("h-work-2/templates/components/login-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pa8Cag9t", "block": "{\"symbols\":[],\"statements\":[[6,\"form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"login\"],null],null],[8],[0,\"\\n  \"],[6,\"img\"],[10,\"class\",\"mb-4\"],[10,\"src\",\"images/logo-dark.png\"],[10,\"alt\",\"\"],[10,\"height\",\"57\"],[8],[9],[0,\"\\n  \"],[6,\"h1\"],[10,\"class\",\"h3 mb-3 fw-normal\"],[8],[1,[26,\"t\",[\"menu.entry\"],null],false],[9],[0,\"\\n\\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"email\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n      \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"email\"],null],\"message\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[6,\"div\"],[10,\"class\",\"form-floating\"],[8],[0,\"\\n    \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\"],[\"text\",[26,\"t\",[\"menu.email\"],null],[22,[\"email\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"password\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n      \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"password\"],null],\"message\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[6,\"div\"],[10,\"class\",\"form-floating\"],[8],[0,\"\\n    \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\"],[\"password\",[26,\"t\",[\"menu.password\"],null],[22,[\"password\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[6,\"div\"],[10,\"class\",\"checkbox mb-3\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[0,\"\\n      \"],[6,\"input\"],[10,\"value\",\"remember-me\"],[11,\"onchange\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"remember\"]]],null]],null],null],[10,\"type\",\"checkbox\"],[8],[9],[1,[26,\"t\",[\"menu.remember\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[0,\"  \"],[6,\"button\"],[10,\"class\",\"w-100 btn btn-lg btn-primary mb-3\"],[10,\"type\",\"submit\"],[8],[1,[26,\"t\",[\"menu.login\"],null],false],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/components/login-form.hbs" } });
});
define("h-work-2/templates/components/meeting-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "T3U3P/cp", "block": "{\"symbols\":[\"lecture\"],\"statements\":[[6,\"div\"],[10,\"class\",\"border border-dark rounded p-4 mb-4\"],[8],[0,\"\\n    \"],[6,\"h4\"],[8],[1,[26,\"t\",[\"menu.meetingDate\"],null],false],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between mb-4\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"datepicker datepicker-meeting date input-group p-0\"],[8],[0,\"\\n                \"],[6,\"input\"],[11,\"placeholder\",[26,\"t\",[\"menu.meetingDate\"],null],null],[10,\"class\",\"form-control meeting-date\"],[11,\"value\",[27,[[22,[\"meeting\",\"eventDate\"]]]]],[10,\"disabled\",\"disabled\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n                    \"],[6,\"span\"],[10,\"class\",\"input-group-text px-4\"],[8],[0,\"\\n                        \"],[6,\"svg\"],[10,\"width\",\"1em\"],[10,\"height\",\"1em\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-clock\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                            \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z\"],[8],[9],[0,\"\\n                            \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"await\",[[26,\"can\",[\"edit book\"],null]],null]],null,{\"statements\":[[4,\"link-to\",[\"edit-meeting\",[22,[\"meeting\",\"id\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[10,\"type\",\"button\"],[8],[0,\"\\n                        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                            \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"deleteMeeting\",[22,[\"meeting\"]]],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                        \"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"h4\"],[8],[1,[26,\"t\",[\"menu.listOfReports\"],null],false],[9],[0,\"\\n    \"],[6,\"ul\"],[10,\"class\",\"list-group\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"lectures\"]]],null,{\"statements\":[[0,\"            \"],[1,[26,\"lecture-item\",null,[[\"lecture\"],[[21,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/components/meeting-item.hbs" } });
});
define("h-work-2/templates/components/register-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4Od5QmP1", "block": "{\"symbols\":[],\"statements\":[[6,\"form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"saveUser\"],null],null],[8],[0,\"\\n  \"],[6,\"img\"],[10,\"class\",\"mb-4\"],[10,\"src\",\"images/logo-dark.png\"],[10,\"alt\",\"\"],[10,\"height\",\"57\"],[8],[9],[0,\"\\n  \"],[6,\"h1\"],[10,\"class\",\"h3 mb-3 fw-normal\"],[8],[1,[26,\"t\",[\"menu.registration\"],null],false],[9],[0,\"\\n\\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"email\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n      \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"email\"],null],\"message\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[6,\"div\"],[10,\"class\",\"form-floating\"],[8],[0,\"\\n    \"],[1,[26,\"input\",null,[[\"class\",\"type\",\"placeholder\",\"value\"],[\"form-control\",\"text\",[26,\"t\",[\"menu.email\"],null],[22,[\"email\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"password\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n      \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"password\"],null],\"message\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[6,\"div\"],[10,\"class\",\"form-floating\"],[8],[0,\"\\n    \"],[1,[26,\"input\",null,[[\"class\",\"type\",\"placeholder\",\"value\"],[\"form-control\",\"password\",[26,\"t\",[\"menu.password\"],null],[22,[\"password\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"g-recaptcha-v2\",null,[[\"verified\",\"expired\",\"reset\"],[[26,\"action\",[[21,0,[]],\"verified\"],null],[26,\"action\",[[21,0,[]],\"expired\"],null],[22,[\"reset\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[6,\"button\"],[10,\"class\",\"w-100 btn btn-lg btn-primary mb-3\"],[11,\"disabled\",[20,\"iAmRobot\"],null],[10,\"type\",\"submit\"],[8],[1,[26,\"t\",[\"menu.register\"],null],false],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/components/register-form.hbs" } });
});
define("h-work-2/templates/components/speaker-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "IQHKpbGb", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"col mb-4\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"card\"],[8],[0,\"\\n        \"],[6,\"img\"],[10,\"src\",\"images/speaker.jpg\"],[10,\"class\",\"card-img-top\"],[10,\"alt\",\"Фото спикера\"],[8],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n            \"],[6,\"h5\"],[10,\"class\",\"card-title\"],[8],[1,[22,[\"speaker\",\"surname\"]],false],[0,\" \"],[1,[22,[\"speaker\",\"name\"]],false],[0,\" \"],[1,[22,[\"speaker\",\"patronymic\"]],false],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"card-footer\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n                \"],[9],[0,\"\\n\"],[4,\"if\",[[26,\"await\",[[26,\"can\",[\"edit book\"],null]],null]],null,{\"statements\":[[0,\"                    \"],[6,\"div\"],[10,\"class\",\"col text-right\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"edit-speaker\",[22,[\"speaker\",\"id\"]]],null,{\"statements\":[[0,\"                        \"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[10,\"type\",\"button\"],[8],[0,\"\\n                            \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                        \"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"deleteSpeaker\",[22,[\"speaker\"]]],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n                            \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                \"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n                                \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/components/speaker-item.hbs" } });
});
define("h-work-2/templates/edit-book", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fHrebOuj", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[1,[26,\"t\",[\"menu.editBook\"],null],false],[0,\" \"],[1,[22,[\"model\",\"name\"]],false],[9],[0,\"\\n    \"],[6,\"form\"],[10,\"class\",\"edit-form\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputTitle\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.name\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputTitle\"],[11,\"value\",[22,[\"model\",\"name\"]],null],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"bookName\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"text\"],[8],[9],[0,\"\\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"bookName\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n                        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"bookName\"],null],\"message\"],null],false],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputAuthor\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.author\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputAuthor\"],[11,\"value\",[22,[\"model\",\"author\"]],null],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"bookAuthor\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"text\"],[8],[9],[0,\"\\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"bookName\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n                        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"bookAuthor\"],null],\"message\"],null],false],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputPagesCount\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.numberOfPages\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputPagesCount\"],[11,\"value\",[22,[\"model\",\"size\"]],null],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"bookSize\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"number\"],[8],[9],[0,\"\\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"bookName\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n                        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"bookSize\"],null],\"message\"],null],false],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputDescriptionURL\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.description\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputDescriptionURL\"],[11,\"value\",[22,[\"model\",\"description\"]],null],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"bookDescription\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"url\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"customFile\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.cover\"],null],false],[9],[0,\"\\n            \"],[1,[26,\"input-file\",null,[[\"class\",\"uploadData\",\"uploadDataChanged\"],[\"input-group input-group-lg col-sm-10\",[22,[\"uploadData\"]],[26,\"action\",[[21,0,[]],\"changeUploadData\"],null]]]],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputTags\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.tags\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[1,[26,\"edit-tags\",null,[[\"tags\",\"onChange\"],[[22,[\"model\",\"tags\"]],[26,\"action\",[[21,0,[]],\"changeTags\"],null]]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"editBook\",[22,[\"model\",\"id\"]]],null],null],[10,\"type\",\"button\"],[8],[1,[26,\"t\",[\"menu.save\"],null],false],[9],[0,\"\\n                \"],[4,\"link-to\",[\"book\"],[[\"class\"],[\"btn btn-outline-secondary btn-lg\"]],{\"statements\":[[1,[26,\"t\",[\"menu.cancel\"],null],false]],\"parameters\":[]},null],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/edit-book.hbs" } });
});
define("h-work-2/templates/edit-lecture", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7C4nZxzA", "block": "{\"symbols\":[\"speaker\",\"book\"],\"statements\":[[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[1,[26,\"t\",[\"menu.editReport\"],null],false],[9],[0,\"\\n    \"],[6,\"form\"],[10,\"class\",\"edit-form\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"reportDate\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.reportDate\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"datepicker datepicker-meeting date input-group p-0\"],[8],[0,\"\\n                    \"],[6,\"input\"],[11,\"placeholder\",[26,\"t\",[\"menu.date\"],null],null],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"reportDate\"],[11,\"value\",[27,[[22,[\"model\",\"date\"]]]]],[10,\"disabled\",\"disabled\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n                        \"],[6,\"span\"],[10,\"class\",\"input-group-text px-4\"],[8],[0,\"\\n                            \"],[6,\"svg\"],[10,\"width\",\"1em\"],[10,\"height\",\"1em\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-clock\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z\"],[8],[9],[0,\"\\n                                \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputMark\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.bookRating\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"min\",\"1\"],[10,\"max\",\"5\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputMark\"],[11,\"placeholder\",[26,\"t\",[\"menu.inputRating\"],null],null],[11,\"value\",[27,[[22,[\"model\",\"rating\"]]]]],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"lectureRating\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"number\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputPresentation\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.presentationURL\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputPresentation\"],[11,\"placeholder\",[26,\"t\",[\"menu.inputPURL\"],null],null],[11,\"value\",[27,[[22,[\"model\",\"presentURL\"]]]]],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newPresentURL\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"url\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputVideo\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.videoURL\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputVideo\"],[11,\"placeholder\",[26,\"t\",[\"menu.inputVURL\"],null],null],[11,\"value\",[27,[[22,[\"model\",\"videoURL\"]]]]],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newVideoURL\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"url\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputBook\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.book\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n\"],[4,\"power-select\",null,[[\"id\",\"triggerClass\",\"searchEnabled\",\"onchange\",\"selected\",\"search\"],[\"inputBook\",\"selectpicker form-control form-control-lg\",true,[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newBook\"]]],null]],null],[22,[\"newBook\"]],[26,\"action\",[[21,0,[]],\"getBooks\"],null]]],{\"statements\":[[0,\"                    \"],[1,[21,2,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"            \"],[9],[0,\"\\t\\t\\t\\t\\t\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputSpeaker\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.speaker\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n\"],[4,\"power-select\",null,[[\"id\",\"triggerClass\",\"searchEnabled\",\"onchange\",\"selected\",\"search\"],[\"inputSpeaker\",\"selectpicker form-control form-control-lg\",true,[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newSpeaker\"]]],null]],null],[22,[\"newSpeaker\"]],[26,\"action\",[[21,0,[]],\"getSpeakers\"],null]]],{\"statements\":[[0,\"                    \"],[1,[21,1,[\"name\"]],false],[0,\" \"],[1,[21,1,[\"surname\"]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"            \"],[9],[0,\"\\t\\t\\t\\t\\t\\t\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputReview\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.review\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"textarea\"],[10,\"id\",\"inputReview\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputPatronymic\"],[11,\"placeholder\",[26,\"t\",[\"menu.inputReview\"],null],null],[10,\"rows\",\"4\"],[11,\"value\",[27,[[22,[\"model\",\"review\"]]]]],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newReview\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"editLecture\"],null],null],[10,\"type\",\"button\"],[8],[1,[26,\"t\",[\"menu.save\"],null],false],[9],[0,\"\\n\"],[4,\"link-to\",[\"edit-meeting\",[22,[\"model\",\"meeting\",\"id\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-secondary btn-lg\"],[10,\"type\",\"button\"],[8],[1,[26,\"t\",[\"menu.cancel\"],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/edit-lecture.hbs" } });
});
define("h-work-2/templates/edit-meeting-lecture", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6HDdLUC7", "block": "{\"symbols\":[\"speaker\",\"book\"],\"statements\":[[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[1,[26,\"t\",[\"menu.editReport\"],null],false],[9],[0,\"\\n    \"],[6,\"form\"],[10,\"class\",\"edit-form\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"reportDate\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.reportDate\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"datepicker datepicker-meeting date input-group p-0\"],[8],[0,\"\\n                    \"],[6,\"input\"],[11,\"placeholder\",[26,\"t\",[\"menu.date\"],null],null],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"reportDate\"],[11,\"value\",[27,[[22,[\"model\",\"date\"]]]]],[10,\"disabled\",\"disabled\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n                        \"],[6,\"span\"],[10,\"class\",\"input-group-text px-4\"],[8],[0,\"\\n                            \"],[6,\"svg\"],[10,\"width\",\"1em\"],[10,\"height\",\"1em\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-clock\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z\"],[8],[9],[0,\"\\n                                \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputMark\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.bookRating\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"min\",\"1\"],[10,\"max\",\"5\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputMark\"],[11,\"placeholder\",[26,\"t\",[\"menu.inputRating\"],null],null],[11,\"value\",[27,[[22,[\"model\",\"rating\"]]]]],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"lectureRating\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"number\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputPresentation\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.presentationURL\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputPresentation\"],[11,\"placeholder\",[26,\"t\",[\"menu.inputPURL\"],null],null],[11,\"value\",[27,[[22,[\"model\",\"presentURL\"]]]]],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newPresentURL\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"url\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputVideo\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.videoURL\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputVideo\"],[11,\"placeholder\",[26,\"t\",[\"menu.inputVURL\"],null],null],[11,\"value\",[27,[[22,[\"model\",\"videoURL\"]]]]],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newVideoURL\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"url\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputBook\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.book\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n\"],[4,\"power-select\",null,[[\"id\",\"triggerClass\",\"searchEnabled\",\"onchange\",\"selected\",\"search\"],[\"inputBook\",\"selectpicker form-control form-control-lg\",true,[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newBook\"]]],null]],null],[22,[\"newBook\"]],[26,\"action\",[[21,0,[]],\"getBooks\"],null]]],{\"statements\":[[0,\"                    \"],[1,[21,2,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"            \"],[9],[0,\"\\t\\t\\t\\t\\t\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputSpeaker\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.speaker\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n\"],[4,\"power-select\",null,[[\"id\",\"triggerClass\",\"searchEnabled\",\"onchange\",\"selected\",\"search\"],[\"inputSpeaker\",\"selectpicker form-control form-control-lg\",true,[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newSpeaker\"]]],null]],null],[22,[\"newSpeaker\"]],[26,\"action\",[[21,0,[]],\"getSpeakers\"],null]]],{\"statements\":[[0,\"                    \"],[1,[21,1,[\"name\"]],false],[0,\" \"],[1,[21,1,[\"surname\"]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"            \"],[9],[0,\"\\t\\t\\t\\t\\t\\t\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputReview\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.review\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"textarea\"],[10,\"id\",\"inputReview\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputPatronymic\"],[11,\"placeholder\",[26,\"t\",[\"menu.inputReview\"],null],null],[10,\"rows\",\"4\"],[11,\"value\",[27,[[22,[\"model\",\"review\"]]]]],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"newReview\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"editLecture\"],null],null],[10,\"type\",\"button\"],[8],[1,[26,\"t\",[\"menu.save\"],null],false],[9],[0,\"\\n\"],[4,\"link-to\",[\"add-meeting\",[22,[\"model\",\"meeting\",\"id\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-secondary btn-lg\"],[10,\"type\",\"button\"],[8],[1,[26,\"t\",[\"menu.cancel\"],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/edit-meeting-lecture.hbs" } });
});
define("h-work-2/templates/edit-meeting", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BjOF41O8", "block": "{\"symbols\":[\"lecture\"],\"statements\":[[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[1,[26,\"t\",[\"menu.editMeeting\"],null],false],[9],[0,\"\\n    \"],[6,\"form\"],[10,\"class\",\"edit-form\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"border border-dark rounded p-4 mb-4\"],[8],[0,\"\\n            \"],[6,\"h4\"],[8],[1,[26,\"t\",[\"menu.meetingDate\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between mb-4\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"datepicker datepicker-meeting date input-group p-0\"],[8],[0,\"\\n                        \"],[6,\"input\"],[11,\"placeholder\",[26,\"t\",[\"menu.date\"],null],null],[10,\"class\",\"form-control\"],[10,\"id\",\"meetingDate\"],[11,\"value\",[27,[[22,[\"model\",\"eventDate\"]]]]],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"meetingEventDate\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n                            \"],[6,\"span\"],[10,\"class\",\"input-group-text px-4\"],[8],[0,\"\\n                                \"],[6,\"svg\"],[10,\"width\",\"1em\"],[10,\"height\",\"1em\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-clock\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z\"],[8],[9],[0,\"\\n                                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"meetingEventDate\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"                        \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n                            \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"meetingEventDate\"],null],\"message\"],null],false],[0,\"\\n                        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n                    \"],[6,\"h4\"],[8],[1,[26,\"t\",[\"menu.listOfReports\"],null],false],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"add-lecture\",[22,[\"model\",\"id\"]]],null,{\"statements\":[[0,\"                        \"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[10,\"type\",\"button\"],[8],[0,\"\\n                            \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus-square card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                \"],[6,\"path\"],[10,\"d\",\"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z\"],[8],[9],[0,\"\\n                                \"],[6,\"path\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n                            \"],[9],[0,\"\\t\\t\\t\\t\\t\\t\\n                        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"ul\"],[10,\"class\",\"list-group\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\",\"lectures\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center d-inline-block align-middle\"],[8],[0,\"\\n                                \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[1,[26,\"t\",[\"menu.speaker\"],null],false],[9],[0,\"\\n                                \"],[6,\"img\"],[10,\"src\",\"http://localhost:4200/images/speaker.jpg\"],[10,\"class\",\"rounded w-100\"],[10,\"alt\",\"Спикер\"],[8],[9],[0,\"\\n                                \"],[6,\"p\"],[8],[1,[21,1,[\"speaker\",\"name\"]],false],[0,\" \"],[1,[21,1,[\"speaker\",\"surname\"]],false],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center d-inline-block align-middle\"],[8],[0,\"\\n                                \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[1,[26,\"t\",[\"menu.book\"],null],false],[9],[0,\"\\n                                \"],[6,\"p\"],[8],[1,[21,1,[\"book\",\"name\"]],false],[9],[0,\"\\n                                \"],[6,\"p\"],[8],[1,[21,1,[\"book\",\"author\"]],false],[9],[0,\"\\n                                \"],[6,\"div\"],[10,\"class\",\"row align-items-center m-0\"],[8],[0,\"\\n                                    \"],[6,\"div\"],[10,\"class\",\"col-md-auto pl-0\"],[8],[0,\"\\n                                        \"],[1,[26,\"t\",[\"menu.rating\"],null],false],[0,\"\\n                                    \"],[9],[0,\"\\n                                    \"],[6,\"div\"],[10,\"class\",\"col p-0\"],[8],[0,\"\\n                                        \"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n                                            \"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[11,\"style\",[27,[\"width: \",[21,1,[\"rating\"]],\"%;\"]]],[11,\"aria-valuenow\",[27,[[21,1,[\"rating\"]]]]],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[1,[21,1,[\"rating\"]],false],[0,\"%\"],[9],[0,\"\\n                                        \"],[9],[0,\"\\n                                    \"],[9],[0,\"\\n                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"col-md-4 d-inline-block align-middle\"],[8],[0,\"\\n                                \"],[6,\"h5\"],[10,\"class\",\"text-center py-2\"],[8],[1,[26,\"t\",[\"menu.review\"],null],false],[9],[0,\"\\n                                \"],[6,\"p\"],[8],[1,[21,1,[\"review\"]],false],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center col-filter d-inline-block align-middle\"],[8],[0,\"\\n                                \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[1,[26,\"t\",[\"menu.links\"],null],false],[9],[0,\"\\n                                \"],[6,\"a\"],[11,\"href\",[27,[[21,1,[\"videoURL\"]]]]],[10,\"class\",\"btn btn-video\"],[11,\"title\",[26,\"t\",[\"menu.viewReport\"],null],null],[8],[0,\"\\n                                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-camera-reels card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n                                    \"],[9],[0,\"\\n                                \"],[9],[0,\"\\n                                \"],[6,\"a\"],[11,\"href\",[27,[[21,1,[\"presentationURL\"]]]]],[10,\"class\",\"btn btn-present\"],[11,\"title\",[26,\"t\",[\"menu.downloadPresentation\"],null],null],[8],[0,\"\\n                                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-file-ppt card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M6 4a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 6 4z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z\"],[8],[9],[0,\"\\n                                    \"],[9],[0,\"\\n                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"row align-items-center col-md-2\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"edit-lecture\",[21,1,[\"id\"]]],null,{\"statements\":[[0,\"                                    \"],[6,\"button\"],[10,\"class\",\"btn pl-2 pr-2 col-md-6 text-right\"],[10,\"type\",\"button\"],[8],[0,\"\\n                                        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                            \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n                                        \"],[9],[0,\"\\n                                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                                \"],[6,\"button\"],[10,\"class\",\"btn pl-2 pr-2 col-md-6 text-left\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"deleteLecture\",[21,1,[]]],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n                                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                        \"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n                                    \"],[9],[0,\"\\n                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"editMeeting\"],null],null],[10,\"type\",\"button\"],[8],[1,[26,\"t\",[\"menu.save\"],null],false],[9],[0,\"\\n                \"],[4,\"link-to\",[\"meeting\"],null,{\"statements\":[[6,\"button\"],[10,\"class\",\"btn btn-outline-secondary btn-lg\"],[10,\"type\",\"submit\"],[8],[1,[26,\"t\",[\"menu.cancel\"],null],false],[9]],\"parameters\":[]},null],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/edit-meeting.hbs" } });
});
define("h-work-2/templates/edit-speaker", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "aiKKbymT", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[1,[26,\"t\",[\"menu.editSpeaker\"],null],false],[0,\" \"],[1,[22,[\"model\",\"name\"]],false],[0,\" \"],[1,[22,[\"model\",\"surname\"]],false],[9],[0,\"\\n    \"],[6,\"form\"],[10,\"class\",\"edit-form\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputSurname\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.family\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputSurname\"],[11,\"value\",[22,[\"model\",\"surname\"]],null],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"speakerSurname\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"text\"],[8],[9],[0,\"\\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"speakerSurname\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n                        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"speakerSurname\"],null],\"message\"],null],false],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputName\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[1,[26,\"t\",[\"menu.name_2\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputName\"],[11,\"value\",[22,[\"model\",\"name\"]],null],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"speakerName\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"text\"],[8],[9],[0,\"\\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"speakerName\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n                        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"speakerName\"],null],\"message\"],null],false],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputPatronymic\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[1,[26,\"t\",[\"menu.patronymic\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputPatronymic\"],[11,\"value\",[22,[\"model\",\"patronymic\"]],null],[11,\"oninput\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"speakerPatronymic\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"type\",\"text\"],[8],[9],[0,\"\\n\"],[4,\"if\",[[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"speakerPatronymic\"],null],\"isInvalid\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"span\"],[10,\"class\",\"error-message\"],[8],[0,\"\\n                        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"speakerPatronymic\"],null],\"message\"],null],false],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"editSpeaker\"],null],null],[10,\"type\",\"button\"],[8],[1,[26,\"t\",[\"menu.save\"],null],false],[9],[0,\"\\n                \"],[4,\"link-to\",[\"speaker\"],[[\"class\"],[\"btn btn-outline-secondary btn-lg\"]],{\"statements\":[[1,[26,\"t\",[\"menu.cancel\"],null],false]],\"parameters\":[]},null],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/edit-speaker.hbs" } });
});
define("h-work-2/templates/error", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "i/nDmkc6", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"welcome-page row justify-content-center h-100\"],[8],[0,\"\\n    \"],[6,\"img\"],[10,\"class\",\"align-self-center\"],[10,\"src\",\"http://localhost:4200/gif/error.gif\"],[10,\"alt\",\"Welcome\"],[8],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/error.hbs" } });
});
define("h-work-2/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MWXrm7BJ", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"row align-items-center h-100 home-page-nav\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"meeting\"],[[\"class\"],[\"card text-center\"]],{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n                \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-people desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"h3\"],[8],[1,[26,\"t\",[\"menu.clubsMeetings\"],null],false],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"book\"],[[\"class\"],[\"card text-center\"]],{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n                \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-book desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"h3\"],[8],[1,[26,\"t\",[\"menu.books\"],null],false],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"speaker\"],[[\"class\"],[\"card text-center\"]],{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n                \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-mic desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M10 8V3a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"h3\"],[8],[1,[26,\"t\",[\"menu.speakers\"],null],false],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/index.hbs" } });
});
define("h-work-2/templates/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mbKnw+1u", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"welcome-page row justify-content-center h-100\"],[8],[0,\"\\n    \"],[6,\"img\"],[10,\"class\",\"align-self-center\"],[10,\"src\",\"http://localhost:4200/gif/loading.png!bw340\"],[10,\"alt\",\"Welcome\"],[8],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/loading.hbs" } });
});
define("h-work-2/templates/login", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7idONmQb", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"form-signin-wrapper\"],[8],[0,\"\\n  \"],[6,\"main\"],[10,\"class\",\"form-signin text-center\"],[8],[0,\"\\n    \"],[1,[26,\"login-form\",null,[[\"user\",\"errors\",\"onSubmit\"],[[22,[\"model\"]],[22,[\"errors\"]],[26,\"action\",[[21,0,[]],\"login\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/login.hbs" } });
});
define("h-work-2/templates/meeting", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "74RXGBGA", "block": "{\"symbols\":[\"page\",\"meeting\",\"book\",\"speaker\"],\"statements\":[[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[1,[26,\"t\",[\"menu.clubsMeetings\"],null],false],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between align-items-end\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-1\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"await\",[[26,\"can\",[\"edit book\"],null]],null]],null,{\"statements\":[[4,\"link-to\",[\"add-meeting\",\"0\"],null,{\"statements\":[[0,\"                    \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary my-2\"],[11,\"title\",[26,\"t\",[\"menu.addMeeting\"],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n                        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                            \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-3 align-top\"],[8],[0,\"\\n            \"],[6,\"h5\"],[8],[1,[26,\"t\",[\"menu.speaker\"],null],false],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"id\",\"triggerClass\",\"onchange\",\"selected\",\"options\"],[\"inputSpeaker\",\"selectpicker form-control dropdown-filter-control\",[26,\"action\",[[21,0,[]],\"changeSpeaker\"],null],[22,[\"selectedSpeaker\"]],[22,[\"model\",\"speakers\"]]]],{\"statements\":[[0,\"                \"],[1,[21,4,[\"name\"]],false],[0,\" \"],[1,[21,4,[\"surname\"]],false],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-3\"],[8],[0,\"\\n            \"],[6,\"h5\"],[8],[1,[26,\"t\",[\"menu.book\"],null],false],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"id\",\"triggerClass\",\"onchange\",\"selected\",\"options\"],[\"inputBook\",\"selectpicker form-control dropdown-filter-control\",[26,\"action\",[[21,0,[]],\"changeBook\"],null],[22,[\"selectedBook\"]],[22,[\"model\",\"books\"]]]],{\"statements\":[[0,\"                \"],[1,[21,3,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-3\"],[8],[0,\"\\n            \"],[6,\"h5\"],[8],[1,[26,\"t\",[\"menu.meetingDate\"],null],false],[9],[0,\"\\n            \"],[1,[26,\"date-picker\",null,[[\"date\",\"setNewDate\"],[[22,[\"date\"]],[26,\"action\",[[21,0,[]],\"setDate\"],null]]]],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-auto text-right col-filter\"],[8],[0,\"\\n            \"],[6,\"button\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"updatePage\"],null],null],[10,\"class\",\"btn btn-outline-primary my-2\"],[10,\"type\",\"button\"],[8],[0,\"\\n                \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-funnel card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"button\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"cleanSearchParam\"],null],null],[10,\"class\",\"btn btn-outline-secondary my-2\"],[10,\"type\",\"button\"],[8],[0,\"\\n                \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-x card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"model\",\"meetings\"]]],null,{\"statements\":[[0,\"            \"],[1,[26,\"meeting-item\",null,[[\"delMeeting\",\"meeting\",\"lectures\"],[[26,\"action\",[[21,0,[]],\"deleteMeeting\"],null],[21,2,[]],[21,2,[\"lectures\"]]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"    \"],[6,\"nav\"],[10,\"aria-label\",\"Page navigation example\"],[8],[0,\"\\n        \"],[6,\"ul\"],[10,\"class\",\"pagination justify-content-end\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"pages\"]]],null,{\"statements\":[[4,\"link-to\",[\"meeting\",[26,\"query-params\",null,[[\"page\"],[[21,1,[]]]]]],null,{\"statements\":[[0,\"                    \"],[6,\"li\"],[10,\"class\",\"page-item\"],[8],[6,\"a\"],[10,\"class\",\"page-link\"],[8],[1,[21,1,[]],false],[9],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/meeting.hbs" } });
});
define("h-work-2/templates/register", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "K80UAhZx", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"form-signin-wrapper\"],[8],[0,\"\\n    \"],[6,\"main\"],[10,\"class\",\"form-signin text-center\"],[8],[0,\"\\n      \"],[1,[26,\"register-form\",null,[[\"user\",\"errors\",\"onSubmit\"],[[22,[\"model\"]],[22,[\"errors\"]],[26,\"action\",[[21,0,[]],\"saveUser\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/register.hbs" } });
});
define("h-work-2/templates/speaker", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RwM506yl", "block": "{\"symbols\":[\"speaker\"],\"statements\":[[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[1,[26,\"t\",[\"menu.speakers\"],null],false],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"await\",[[26,\"can\",[\"edit book\"],null]],null]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"add-speaker\"],[[\"class\",\"title\"],[\"btn btn-outline-primary my-2\",[26,\"t\",[\"menu.addSpeaker\"],null]]],{\"statements\":[[0,\"                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-inline\"],[8],[0,\"\\n                \"],[1,[26,\"input\",null,[[\"class\",\"type\",\"aria-label\",\"value\"],[\"form-control mr-2 search-long search-only\",\"search\",\"Спикер\",[22,[\"search\"]]]]],false],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"btn btn-primary my-2\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"updatePage\"],null],null],[8],[1,[26,\"t\",[\"menu.find\"],null],false],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row row-cols-1 row-cols-md-3\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"            \"],[1,[26,\"speaker-item\",null,[[\"delSpeaker\",\"speaker\"],[[26,\"action\",[[21,0,[]],\"deleteSpeaker\"],null],[21,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "h-work-2/templates/speaker.hbs" } });
});
define('h-work-2/transforms/array', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Transform.extend({
    deserialize: function deserialize(serialized) {
      return serialized || [];
    },
    serialize: function serialize(deserialized) {
      return deserialized;
    }
  });
});
define('h-work-2/transforms/date-string', ['exports', 'ember-data/transforms/date'], function (exports, _date) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _date.default.extend({
    moment: Ember.inject.service(),

    deserialize: function deserialize(serialized) {
      var date = this._super(serialized);
      if (date instanceof Date && !isNaN(date)) {
        var formattedDate = this.get('moment').moment(date).format('YYYY-MM-DD');
        return formattedDate;
      }
      return null;
      // return serialized;
    },
    serialize: function serialize(deserialized) {
      var deserializedDate = deserialized ? this.get('moment').moment(deserialized).toDate() : null;
      return this._super(deserializedDate);
      // return deserialized;
    }
  });
});
define('h-work-2/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, _compileTemplate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compileTemplate.default;
    }
  });
});
define('h-work-2/utils/i18n/missing-message', ['exports', 'ember-i18n/utils/i18n/missing-message'], function (exports, _missingMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _missingMessage.default;
    }
  });
});
define('h-work-2/validators/alias', ['exports', 'ember-cp-validations/validators/alias'], function (exports, _alias) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _alias.default;
    }
  });
});
define('h-work-2/validators/belongs-to', ['exports', 'ember-cp-validations/validators/belongs-to'], function (exports, _belongsTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _belongsTo.default;
    }
  });
});
define('h-work-2/validators/collection', ['exports', 'ember-cp-validations/validators/collection'], function (exports, _collection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _collection.default;
    }
  });
});
define('h-work-2/validators/confirmation', ['exports', 'ember-cp-validations/validators/confirmation'], function (exports, _confirmation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _confirmation.default;
    }
  });
});
define('h-work-2/validators/date', ['exports', 'ember-cp-validations/validators/date'], function (exports, _date) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _date.default;
    }
  });
});
define('h-work-2/validators/dependent', ['exports', 'ember-cp-validations/validators/dependent'], function (exports, _dependent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dependent.default;
    }
  });
});
define('h-work-2/validators/ds-error', ['exports', 'ember-cp-validations/validators/ds-error'], function (exports, _dsError) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dsError.default;
    }
  });
});
define('h-work-2/validators/exclusion', ['exports', 'ember-cp-validations/validators/exclusion'], function (exports, _exclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _exclusion.default;
    }
  });
});
define('h-work-2/validators/format', ['exports', 'ember-cp-validations/validators/format'], function (exports, _format) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _format.default;
    }
  });
});
define('h-work-2/validators/has-many', ['exports', 'ember-cp-validations/validators/has-many'], function (exports, _hasMany) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasMany.default;
    }
  });
});
define('h-work-2/validators/inclusion', ['exports', 'ember-cp-validations/validators/inclusion'], function (exports, _inclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inclusion.default;
    }
  });
});
define('h-work-2/validators/length', ['exports', 'ember-cp-validations/validators/length'], function (exports, _length) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _length.default;
    }
  });
});
define('h-work-2/validators/messages', ['exports', 'ember-i18n-cp-validations/validators/messages'], function (exports, _messages) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _messages.default;
    }
  });
});
define('h-work-2/validators/number', ['exports', 'ember-cp-validations/validators/number'], function (exports, _number) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _number.default;
    }
  });
});
define('h-work-2/validators/presence', ['exports', 'ember-cp-validations/validators/presence'], function (exports, _presence) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _presence.default;
    }
  });
});


define('h-work-2/config/environment', [], function() {
  var prefix = 'h-work-2';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("h-work-2/app")["default"].create({"name":"h-work-2","version":"0.0.0+4829da0a"});
}
//# sourceMappingURL=h-work-2.map
