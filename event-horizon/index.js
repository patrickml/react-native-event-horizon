import EventHorizon from './event-horizon';
import Trackr from 'trackr';

if(global) {
  // react komposer need tracker on native so we need to make it global
  console.log(global);
  global.Tracker = Trackr;
} else if(window) {
  // react komposer need tracker on browser so we need to assign it to the window
  console.log(window);
  window.Tracker = Trackr;
}

export default new EventHorizon();
