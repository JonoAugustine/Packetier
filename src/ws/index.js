/**
 * Create a Socketier.
 *
 * @param {*} type - The payload type.
 * @param {*} payload - The payload (usually an object)
 * @param {*} meta - Any meta-data (e.g. time, auth, et cetera).
 *
 * @since 2.0.0
 * @author Jonathan Augustine
 */
function Socketier(type, payload, meta) {
  this.type = type;
  this.payload = payload;
  this.meta = meta;
  return this;
}

/**
 * Create a Socketier.
 *
 * @param {*} type - The payload type.
 * @param {*} payload - The payload (usually an object)
 * @param {*} meta - Any meta-data (e.g. time, auth, et cetera).
 * @returns {Socketier}
 *
 * @since 2.0.0
 * @author Jonathan Augustine
 */
function socketier(type, payload, meta) {
  return new Socketier(type, payload, meta);
}

/**
 * Packs the Socketier into a JSON string.
 *
 * @returns {string} This Socketier stringified.
 *
 * @since 2.0.0
 * @author Jonathan Augustine
 */
Socketier.prototype.pack = function() {
  return JSON.stringify(this);
};

module.exports = socketier;
