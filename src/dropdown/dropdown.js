import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './dropdown.less!';
import template from './dropdown.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the drop-down component'
    }
  }
});

export default Component.extend({
  tag: 'drop-down',
  viewModel: ViewModel,
  template
});