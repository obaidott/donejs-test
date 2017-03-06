import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('demo-app functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('demo-app main page shows up', function() {
  F('title').text('demo-app', 'Title is set');
});
