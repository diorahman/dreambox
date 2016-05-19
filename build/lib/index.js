var Reflect = require('reflect-r');var regeneratorRuntime = require('babel-regenerator-runtime');'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DreamboxError = undefined;

var _sourceMapSupport = require('source-map-support');

var _dreambox = require('./dreambox');

var _dreambox2 = _interopRequireDefault(_dreambox);

var _error = require('./error.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _sourceMapSupport.install)(); /** @module Index */


// Exposes main entrypoint to the lib.
exports.default = _dreambox2.default;

// Exposes the lib error.

exports.DreamboxError = _error.DreamboxError;
//# sourceMappingURL=index.js.map
