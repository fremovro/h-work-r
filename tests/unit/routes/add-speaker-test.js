import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | add-speaker', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:add-speaker');
    assert.ok(route);
  });
});
