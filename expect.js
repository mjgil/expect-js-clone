(function (global, module) {

  var exports = module.exports;

  module.exports = expect;
  expect.Assertion = Assertion;

  expect.version = '0.1.2';

  var flags = {
      not: ['to', 'be', 'have', 'include', 'only']
    , to: ['be', 'have', 'include', 'only', 'not']
    , only: ['have']
    , have: ['own']
    , be: ['an']
  };

  function expect(obj) {
    return new Assertion(obj);
  }

  

}) (this, 'undefined' != typeof module ?
                      module : {exports: {}});