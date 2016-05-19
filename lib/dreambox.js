/** @module Dreambox*/
import Catbox from 'catbox';
import Promise from 'bluebird';
import { DreamboxError } from './error';

/** Class representing Dreambox */
export default class Dreambox {
    /**
     * Constructs Dreambox
     *
     * @param {String} type - Catbox type, e.g. memory, redis
     */
    constructor(type = 'memory', options = { segment: 'dreambox', ttl: 5000 }) {
        try {
            const Engine = require(`catbox-${type}`);
            Object.assign(this, options);
            this.client = new Catbox.Client(new Engine(options));
            Promise.promisifyAll(this.client);
        } catch (error) {
            throw new DreamboxError(`Please do npm install catbox-${type} --save`);
        }
    }

    /**
     * Starts the dreambox.
     *
     * return {Boolean}
     */
    async start() {
        if (!this.started) {
            await this.client.startAsync();
            this.started = true;
        }
        return this.started;
    }

    /**
     * Stops the dreambox.
     *
     * return {Boolean}
     */
    async stop() {
        if (this.started) {
            await this.client.stopAsync();
            this.started = false;
        }
        return this.started;
    }

    /**
     * Sets a key with val in a segment with specified ttl in milliseconds.
     *
     * @param {String} key
     * @param {Object} val
     * @param {Number} ttl
     */
    async set(key, val, ttl) {
        await this.start();
        key = {
            id: key,
            segment: this.segment
        };
        await this.client.setAsync(key, val, ttl || this.ttl);
        return key;
    }

    /**
     * Gets val using key.
     *
     * @param {String} key
     */
    async get(key) {
        await this.start();
        key = {
            id: key,
            segment: this.segment
        };
        return await this.client.getAsync(key);
    }

    /**
     * Drops a key.
     *
     * @param {String} key
     */
    async drop(key) {
        await this.start();
        key = {
            id: key,
            segment: this.segment
        };
        await this.client.dropAsync(key);
        return key;
    }
}
