/** @module Index */
import { install } from 'source-map-support'; install();

import Dreambox from './dreambox';
import { DreamboxError } from './error.js';

// Exposes main entrypoint to the lib.
export default Dreambox;

// Exposes the lib error.
export { DreamboxError };
