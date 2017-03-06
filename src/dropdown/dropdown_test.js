import QUnit from 'steal-qunit';
import { ViewModel } from './dropdown';

// ViewModel unit tests
QUnit.module('demo-app/dropdown');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the drop-down component');
});
