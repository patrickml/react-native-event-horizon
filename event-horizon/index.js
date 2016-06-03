import EventHorizon from './event-horizon';
import Trackr from 'trackr';

// react komposer need tracker so we need to make it global
global.Tracker = Trackr;

export default new EventHorizon();
