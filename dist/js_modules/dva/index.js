'use strict';

var _commonjsHelpers = require('../../_virtual/_commonjsHelpers.js');
require('./subscription.js');
var subscription$1 = require('../../_virtual/subscription.js_commonjs-proxy');

var dva = _commonjsHelpers.createCommonjsModule(function (module, exports) {
exports.__esModule = true;
var subscription = subscription$1.default.default;
exports.subscription = subscription;
exports['default'] = subscription;
});

_commonjsHelpers.unwrapExports(dva);
var dva_1 = dva.subscription;

exports.__moduleExports = dva;
exports.subscription = dva_1;
