/**
 * Create a Packetier which has success, payload, and meta fields.
 *
 * @param {boolean} success
 * @param {*} payload
 * @param {Meta} meta
 *
 * @since 1.0.0
 * @author Jonathan Augustine
 */
function Packetier(success, payload, meta) {
  this.success = success;
  this.payload = payload;
  this.meta = meta;
}

/**
 * Create a Packetier which has success, payload, and meta fields.
 *
 * @param {boolean} success
 * @param {*} payload
 * @param {*} meta
 * @returns {Packetier}
 *
 * @since 1.0.0
 * @author Jonathan Augustine
 */
function packetier(success, payload, meta) {
  return new Packetier(success, payload, meta);
}

/**
 * Packs the Packetier into stringified JSON.
 *
 * @returns {string} This Packetier stringified.
 *
 * @since 1.0.0
 * @author Jonathan Augustine
 */
Packetier.prototype.pack = function() {
  return JSON.stringify(this);
};

module.exports = packetier;
