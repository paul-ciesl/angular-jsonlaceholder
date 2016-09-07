'use strict';

describe('Service: requestFactory', function () {

  // load the service's module
  beforeEach(module('angularZadanieApp'));

  // instantiate service
  var requestFactory;
  beforeEach(inject(function (_requestFactory_) {
    requestFactory = _requestFactory_;
  }));

  it('should do something', function () {
    expect(!!requestFactory).toBe(true);
  });

});
