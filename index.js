/**
 * Create a Packetier which has success, payload, and meta fields.
 *
 * @param {boolean} success
 * @param {*} payload
 * @param {*} meta
 * @returns {Packetier}
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
 */
function packetier(success, payload, meta) {
  return new Packetier(success, payload, meta);
}

/** Packs the Packet into stringified JSON. */
Packetier.prototype.pack = function() {
  return JSON.stringify(this);
};

module.exports.packetier = packetier;
