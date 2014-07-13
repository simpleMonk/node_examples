if (typeof process !== 'undefined' && process.title === 'node') {
    // We are in node. Require modules.
    expect = require('chai').expect;
    isBrowser = false;
} else {
    // We are in the browser. Set up variables like above using served js files.
    expect = chai.expect;
    // num and sinon already exported globally in the browser.
    isBrowser = true;
}