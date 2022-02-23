/**
 * @since 2.1.0
 * @author JonoAugustine
 */
export class Packet<PT = any, MT = any> {
  success: boolean
  payload?: PT
  meta?: MT

  /**
   *
   * @param payload - defaults to undefined
   * @param meta - defaults to undefined
   * @param success - defaults to true
   */
  constructor(payload?: PT, meta?: MT, success: boolean = true) {
    this.success = success
    this.payload = payload
    this.meta = meta
  }

  /**
   * Packs the Packetier into stringified JSON.
   *
   * @returns This Packetier stringified.
   *
   * @since 1.0.0
   */
  pack(): string {
    return JSON.stringify(this)
  }
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
export function packetier<PT = any, MT = any>(
  success: boolean = true,
  payload?: PT,
  meta?: MT,
) {
  return new Packet(payload, meta, success)
}
