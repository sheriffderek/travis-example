import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | welcome', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /welcome', async function(assert) {
    await visit('/welcome');

    assert.equal(currentURL(), '/welcome');
  });

  test('has welcome message', async function(assert) {
    await visit('/welcome');

    const message = this.element.querySelector('.page-title').textContent.trim();
    assert.equal(message, `Not Welcome!`);
  });
});
