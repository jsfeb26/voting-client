import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

// creates jsdom versions of the document and window objects
// and assigns them to the global object
// so that they will be discovered by React when it accesses document or window
global.document = doc;
global.window = win;

// take all the properties that the jsdom window object cointains
// and hoist them to the Node.js global object
// this allows the properties provided by the window to be used without the window
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);
