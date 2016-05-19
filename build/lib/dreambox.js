var Reflect = require('reflect-r');var regeneratorRuntime = require('babel-regenerator-runtime');'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /** @module Dreambox*/


var _catbox = require('catbox');

var _catbox2 = _interopRequireDefault(_catbox);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _error = require('./error');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Class representing Dreambox */

var Dreambox = function () {
    /**
     * Constructs Dreambox
     *
     * @param {String} type - Catbox type, e.g. memory, redis
     */

    function Dreambox() {
        var type = arguments.length <= 0 || arguments[0] === undefined ? 'memory' : arguments[0];
        var options = arguments.length <= 1 || arguments[1] === undefined ? { segment: 'dreambox', ttl: 5000 } : arguments[1];

        _classCallCheck(this, Dreambox);

        try {
            var Engine = require('catbox-' + type);
            Object.assign(this, options);
            this.client = new _catbox2.default.Client(new Engine(options));
_bluebird2.default.promisifyAll(this.client);
        } catch (error) {
            throw new _error.DreamboxError('Please do npm install catbox-' + type + ' --save');
        }
    }

    /**
     * Starts the dreambox.
     *
     * return {Boolean}
     */


    _createClass(Dreambox, [{
        key: 'start',
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (this.started) {
                                    _context.next = 4;
                                    break;
                                }

                                _context.next = 3;
                                return this.client.startAsync();

                            case 3:
                                this.started = true;

                            case 4:
                                return _context.abrupt('return', this.started);

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function start() {
                return ref.apply(this, arguments);
            }

            return start;
        }()

        /**
         * Stops the dreambox.
         *
         * return {Boolean}
         */

    }, {
        key: 'stop',
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (!this.started) {
                                    _context2.next = 4;
                                    break;
                                }

                                _context2.next = 3;
                                return this.client.stopAsync();

                            case 3:
                                this.started = false;

                            case 4:
                                return _context2.abrupt('return', this.started);

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function stop() {
                return ref.apply(this, arguments);
            }

            return stop;
        }()

        /**
         * Sets a key with val in a segment with specified ttl in milliseconds.
         *
         * @param {String} key
         * @param {Object} val
         * @param {Number} ttl
         */

    }, {
        key: 'set',
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(key, val, ttl) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this.start();

                            case 2:
                                key = {
                                    id: key,
                                    segment: this.segment
                                };
                                _context3.next = 5;
                                return this.client.setAsync(key, val, ttl || this.ttl);

                            case 5:
                                return _context3.abrupt('return', key);

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function set(_x3, _x4, _x5) {
                return ref.apply(this, arguments);
            }

            return set;
        }()

        /**
         * Gets val using key.
         *
         * @param {String} key
         */

    }, {
        key: 'get',
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(key) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return this.start();

                            case 2:
                                key = {
                                    id: key,
                                    segment: this.segment
                                };
                                _context4.next = 5;
                                return this.client.getAsync(key);

                            case 5:
                                return _context4.abrupt('return', _context4.sent);

                            case 6:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function get(_x6) {
                return ref.apply(this, arguments);
            }

            return get;
        }()

        /**
         * Drops a key.
         *
         * @param {String} key
         */

    }, {
        key: 'drop',
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(key) {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return this.start();

                            case 2:
                                key = {
                                    id: key,
                                    segment: this.segment
                                };
                                _context5.next = 5;
                                return this.client.dropAsync(key);

                            case 5:
                                return _context5.abrupt('return', key);

                            case 6:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function drop(_x7) {
                return ref.apply(this, arguments);
            }

            return drop;
        }()
    }]);

    return Dreambox;
}();

exports.default = Dreambox;
//# sourceMappingURL=dreambox.js.map
