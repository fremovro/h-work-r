'use strict';

define('h-work-2/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('abilities/book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'abilities/book.js should pass ESLint\n\n');
  });

  QUnit.test('abilities/meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'abilities/meeting.js should pass ESLint\n\n');
  });

  QUnit.test('abilities/speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'abilities/speaker.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass ESLint\n\n22:52 - \'query\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('adapters/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/user.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/book-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/book-item.js should pass ESLint\n\n');
  });

  QUnit.test('components/date-picker.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/date-picker.js should pass ESLint\n\n12:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('components/edit-tags.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/edit-tags.js should pass ESLint\n\n');
  });

  QUnit.test('components/input-file.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/input-file.js should pass ESLint\n\n');
  });

  QUnit.test('components/lecture-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/lecture-item.js should pass ESLint\n\n');
  });

  QUnit.test('components/login-form.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/login-form.js should pass ESLint\n\n2:8 - \'fetch\' is defined but never used. (no-unused-vars)\n4:8 - \'EmberObject\' is defined but never used. (no-unused-vars)\n4:23 - \'get\' is defined but never used. (no-unused-vars)\n5:8 - \'ENV\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/meeting-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/meeting-item.js should pass ESLint\n\n');
  });

  QUnit.test('components/register-form.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/register-form.js should pass ESLint\n\n3:8 - \'EmberObject\' is defined but never used. (no-unused-vars)\n3:23 - \'get\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/speaker-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/speaker-item.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/add-book.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/add-book.js should pass ESLint\n\n58:58 - \'reject\' is defined but never used. (no-unused-vars)\n67:25 - \'tags\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/add-lecture.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/add-lecture.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/add-meeting-lecture.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/add-meeting-lecture.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/add-meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/add-meeting.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/add-speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/add-speaker.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/book.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/edit-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/edit-book.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/edit-lecture.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/edit-lecture.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/edit-meeting-lecture.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/edit-meeting-lecture.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/edit-meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/edit-meeting.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/edit-speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/edit-speaker.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/login.js should pass ESLint\n\n27:18 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/meeting.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/register.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/register.js should pass ESLint\n\n25:18 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/speaker.js should pass ESLint\n\n');
  });

  QUnit.test('initializers/log.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/log.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/config.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/config.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('models/book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/book.js should pass ESLint\n\n');
  });

  QUnit.test('models/lecture.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/lecture.js should pass ESLint\n\n');
  });

  QUnit.test('models/log.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/log.js should pass ESLint\n\n');
  });

  QUnit.test('models/meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/meeting.js should pass ESLint\n\n');
  });

  QUnit.test('models/speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/speaker.js should pass ESLint\n\n');
  });

  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/404.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/404.js should pass ESLint\n\n');
  });

  QUnit.test('routes/add-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/add-book.js should pass ESLint\n\n');
  });

  QUnit.test('routes/add-lecture.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/add-lecture.js should pass ESLint\n\n');
  });

  QUnit.test('routes/add-meeting-lecture.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/add-meeting-lecture.js should pass ESLint\n\n');
  });

  QUnit.test('routes/add-meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/add-meeting.js should pass ESLint\n\n8:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/add-speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/add-speaker.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/book.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-book.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-lecture.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-lecture.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-meeting-lecture.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-meeting-lecture.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-meeting.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-speaker.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/login.js should pass ESLint\n\n12:42 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/meeting.js should pass ESLint\n\n42:33 - \'model\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/register.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/register.js should pass ESLint\n\n12:42 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/speaker.js should pass ESLint\n\n37:33 - \'model\' is defined but never used. (no-unused-vars)\n45:44 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/application.js should pass ESLint\n\n5:22 - \'hash\' is defined but never used. (no-unused-vars)\n9:40 - \'method\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('serializers/book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/book.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/lecture.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/lecture.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/meeting.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/speaker.js should pass ESLint\n\n');
  });

  QUnit.test('services/current-user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/current-user.js should pass ESLint\n\n');
  });

  QUnit.test('services/data.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/data.js should pass ESLint\n\n20:26 - \'uploadData\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('services/log.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/log.js should pass ESLint\n\n2:20 - \'service\' is defined but never used. (no-unused-vars)\n36:10 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n63:32 - Use import { A } from \'@ember/array\'; instead of using Ember.A (ember/new-module-imports)\n96:66 - \'joinArguments\' is not defined. (no-undef)\n108:9 - Use import { isArray } from \'@ember/array\'; instead of using Ember.isArray (ember/new-module-imports)\n110:9 - Use import { set } from \'@ember/object\'; instead of using Ember.set (ember/new-module-imports)\n127:45 - \'formattedMessage\' is defined but never used. (no-unused-vars)\n151:36 - \'reject\' is defined but never used. (no-unused-vars)\n160:15 - \'reason\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('transforms/array.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/array.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/date-string.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/date-string.js should pass ESLint\n\n');
  });
});
define('h-work-2/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('h-work-2/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  exports.default = deprecatedRegisterHelpers;


  function deprecateHelper(fn, name) {
    return function () {
      (true && !(false) && Ember.deprecate('DEPRECATED `import { ' + name + ' } from \'../../tests/helpers/ember-power-select\';` is deprecated. Please, replace it with `import { ' + name + ' } from \'ember-power-select/test-support/helpers\';`', false, { until: '1.11.0', id: 'ember-power-select-test-support-' + name }));

      return fn.apply(undefined, arguments);
    };
  }

  var findContains = deprecateHelper(_helpers.findContains, 'findContains');
  var nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  var nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  var triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  var typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  var clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  var nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  var touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  var selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, { until: '1.11.0', id: 'ember-power-select-test-support-register-helpers' }));

    return (0, _helpers.default)();
  }

  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
});
define('h-work-2/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _test) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;


  var TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _test.default);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return app.testHelpers.wait();
  }

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return app.testHelpers.wait();
  }
});
define('h-work-2/tests/integration/components/book-item-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | book-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "2x52WfKr",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"book-item\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "XOz6EBsH",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"book-item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('h-work-2/tests/integration/components/date-picker-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | date-picker', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "Rwh3Gh3L",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"date-picker\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "m1pki/pE",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"date-picker\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('h-work-2/tests/integration/components/edit-tags-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | edit-tags', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "flA9Davi",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"edit-tags\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "YhTqXCZB",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"edit-tags\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('h-work-2/tests/integration/components/input-file-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | input-file', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "HRHfMtVN",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"input-file\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "PSub7kSw",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"input-file\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('h-work-2/tests/integration/components/lecture-item-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | lecture-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "4Uy8Ldxn",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"lecture-item\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "3aWpNDtV",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"lecture-item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('h-work-2/tests/integration/components/login-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | login-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "WCm5jH4F",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"login-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "QnYGFQE0",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"login-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('h-work-2/tests/integration/components/meeting-item-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | meeting-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "BYXbOdV8",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"meeting-item\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "InWqEAmc",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"meeting-item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('h-work-2/tests/integration/components/register-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | register-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "YtZ5OcI6",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"register-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "0lFi1VJt",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"register-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('h-work-2/tests/integration/components/speaker-item-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | speaker-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "hf2D2UaF",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"speaker-item\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "X4ATFbQC",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"speaker-item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('h-work-2/tests/test-helper', ['h-work-2/app', 'h-work-2/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('h-work-2/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/book-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/book-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/date-picker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/date-picker-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/edit-tags-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/edit-tags-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/input-file-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/input-file-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/lecture-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/lecture-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/login-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/login-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/meeting-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/meeting-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/register-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/register-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/speaker-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/speaker-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/abilities/book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/abilities/book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/abilities/meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/abilities/meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/abilities/speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/abilities/speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/add-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/add-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/add-lecture-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/add-lecture-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/add-meeting-lecture-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/add-meeting-lecture-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/add-meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/add-meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/add-speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/add-speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-lecture-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-lecture-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-meeting-lecture-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-meeting-lecture-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/register-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/register-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/initializers/log-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/log-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/lecture-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/lecture-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/log-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/log-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/404-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/404-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/add-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/add-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/add-lecture-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/add-lecture-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/add-meeting-lecture-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/add-meeting-lecture-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/add-meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/add-meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/add-speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/add-speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-lecture-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-lecture-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-meeting-lecture-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-meeting-lecture-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/register-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/register-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/lecture-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/lecture-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/current-user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/current-user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/data-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/data-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/log-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/log-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/transforms/array-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/transforms/array-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/transforms/date-string-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/transforms/date-string-test.js should pass ESLint\n\n');
  });
});
define('h-work-2/tests/unit/abilities/book-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('ability:book', 'Unit | Ability | book', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var ability = this.subject();
    assert.ok(ability);
  });
});
define('h-work-2/tests/unit/abilities/meeting-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('ability:meeting', 'Unit | Ability | meeting', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var ability = this.subject();
    assert.ok(ability);
  });
});
define('h-work-2/tests/unit/abilities/speaker-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('ability:speaker', 'Unit | Ability | speaker', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var ability = this.subject();
    assert.ok(ability);
  });
});
define('h-work-2/tests/unit/adapters/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define('h-work-2/tests/unit/adapters/user-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var adapter = this.owner.lookup('adapter:user');
      assert.ok(adapter);
    });
  });
});
define('h-work-2/tests/unit/controllers/add-book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | add-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:add-book');
      assert.ok(controller);
    });
  });
});
define('h-work-2/tests/unit/controllers/add-lecture-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | add-lecture', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:add-lecture');
      assert.ok(controller);
    });
  });
});
define('h-work-2/tests/unit/controllers/add-meeting-lecture-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | add-meeting-lecture', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:add-meeting-lecture');
      assert.ok(controller);
    });
  });
});
define('h-work-2/tests/unit/controllers/add-meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | add-meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:add-meeting');
      assert.ok(controller);
    });
  });
});
define('h-work-2/tests/unit/controllers/add-speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | add-speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:add-speaker');
      assert.ok(controller);
    });
  });
});
define('h-work-2/tests/unit/controllers/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define('h-work-2/tests/unit/controllers/book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:book');
      assert.ok(controller);
    });
  });
});
define('h-work-2/tests/unit/controllers/edit-book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:edit-book');
      assert.ok(controller);
    });
  });
});
define('h-work-2/tests/unit/controllers/edit-lecture-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-lecture', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:edit-lecture');
      assert.ok(controller);
    });
  });
});
define('h-work-2/tests/unit/controllers/edit-meeting-lecture-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-meeting-lecture', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:edit-meeting-lecture');
      assert.ok(controller);
    });
  });
});
define('h-work-2/tests/unit/controllers/edit-meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:edit-meeting');
      assert.ok(controller);
    });
  });
});
define('h-work-2/tests/unit/controllers/edit-speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:edit-speaker');
      assert.ok(controller);
    });
  });
});
define('h-work-2/tests/unit/controllers/login-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:login');
      assert.ok(controller);
    });
  });
});
define('h-work-2/tests/unit/controllers/meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:meeting');
      assert.ok(controller);
    });
  });
});
define('h-work-2/tests/unit/controllers/register-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | register', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:register');
      assert.ok(controller);
    });
  });
});
define('h-work-2/tests/unit/controllers/speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:speaker');
      assert.ok(controller);
    });
  });
});
define('h-work-2/tests/unit/initializers/log-test', ['h-work-2/initializers/log', 'qunit', 'ember-qunit'], function (_log, _qunit, _emberQunit) {
  'use strict';

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

  (0, _qunit.module)('Unit | Initializer | log', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    hooks.beforeEach(function () {
      this.TestApplication = Ember.Application.extend();
      this.TestApplication.initializer({
        name: 'initializer under test',
        initialize: _log.initialize
      });

      this.application = this.TestApplication.create({ autoboot: false });
    });

    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    });

    // Replace this with your real tests.
    (0, _qunit.test)('it works', function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.application.boot();

              case 2:

                assert.ok(true);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  });
});
define('h-work-2/tests/unit/models/book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('book', {});
      });
      assert.ok(model);
    });
  });
});
define('h-work-2/tests/unit/models/lecture-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | lecture', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('lecture', {});
      });
      assert.ok(model);
    });
  });
});
define('h-work-2/tests/unit/models/log-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | log', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('log', {});
      });
      assert.ok(model);
    });
  });
});
define('h-work-2/tests/unit/models/meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('meeting', {});
      });
      assert.ok(model);
    });
  });
});
define('h-work-2/tests/unit/models/speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('speaker', {});
      });
      assert.ok(model);
    });
  });
});
define('h-work-2/tests/unit/models/user-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('user', {});
      });
      assert.ok(model);
    });
  });
});
define('h-work-2/tests/unit/routes/404-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | 404', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:404');
      assert.ok(route);
    });
  });
});
define('h-work-2/tests/unit/routes/add-book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | add-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:add-book');
      assert.ok(route);
    });
  });
});
define('h-work-2/tests/unit/routes/add-lecture-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | add-lecture', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:add-lecture');
      assert.ok(route);
    });
  });
});
define('h-work-2/tests/unit/routes/add-meeting-lecture-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | add-meeting-lecture', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:add-meeting-lecture');
      assert.ok(route);
    });
  });
});
define('h-work-2/tests/unit/routes/add-meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | add-meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:add-meeting');
      assert.ok(route);
    });
  });
});
define('h-work-2/tests/unit/routes/add-speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | add-speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:add-speaker');
      assert.ok(route);
    });
  });
});
define('h-work-2/tests/unit/routes/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define('h-work-2/tests/unit/routes/book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:book');
      assert.ok(route);
    });
  });
});
define('h-work-2/tests/unit/routes/edit-book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-book');
      assert.ok(route);
    });
  });
});
define('h-work-2/tests/unit/routes/edit-lecture-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-lecture', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-lecture');
      assert.ok(route);
    });
  });
});
define('h-work-2/tests/unit/routes/edit-meeting-lecture-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-meeting-lecture', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-meeting-lecture');
      assert.ok(route);
    });
  });
});
define('h-work-2/tests/unit/routes/edit-meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-meeting');
      assert.ok(route);
    });
  });
});
define('h-work-2/tests/unit/routes/edit-speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-speaker');
      assert.ok(route);
    });
  });
});
define('h-work-2/tests/unit/routes/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('h-work-2/tests/unit/routes/login-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:login');
      assert.ok(route);
    });
  });
});
define('h-work-2/tests/unit/routes/meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:meeting');
      assert.ok(route);
    });
  });
});
define('h-work-2/tests/unit/routes/register-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | register', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:register');
      assert.ok(route);
    });
  });
});
define('h-work-2/tests/unit/routes/speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speaker');
      assert.ok(route);
    });
  });
});
define('h-work-2/tests/unit/serializers/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('application');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('application', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('h-work-2/tests/unit/serializers/book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('book');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('book', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('h-work-2/tests/unit/serializers/lecture-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | lecture', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('lecture');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('lecture', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('h-work-2/tests/unit/serializers/meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('meeting');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('meeting', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('h-work-2/tests/unit/serializers/speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('speaker');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('speaker', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('h-work-2/tests/unit/services/current-user-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | current-user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var service = this.owner.lookup('service:current-user');
      assert.ok(service);
    });
  });
});
define('h-work-2/tests/unit/services/data-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | data', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var service = this.owner.lookup('service:data');
      assert.ok(service);
    });
  });
});
define('h-work-2/tests/unit/services/log-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | log', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var service = this.owner.lookup('service:log');
      assert.ok(service);
    });
  });
});
define('h-work-2/tests/unit/transforms/array-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('transform:array', 'Unit | Transform | array', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var transform = this.owner.lookup('transform:array');
      assert.ok(transform);
    });
  });
});
define('h-work-2/tests/unit/transforms/date-string-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('transform:date-string', 'Unit | Transform | date string', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var transform = this.owner.lookup('transform:date-string');
      assert.ok(transform);
    });
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

require('h-work-2/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
