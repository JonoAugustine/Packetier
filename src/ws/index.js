function Socketier(type, payload, meta) {
  this.type = type;
  this.payload = payload;
  this.meta = meta;
}

function socketier(type, payload, meta) {
  return new Socketier(type, payload, meta);
}

module.exports = socketier;
