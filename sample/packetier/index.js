const express = require("express");
const { packetier } = require("../../src");

const port = process.env.PORT || 5432;

express()
  .use(express.json())
  .get("/", (req, res) => {
    let sendBack = {
      ...req.params,
      ...req.query,
      ...req.body
    };

    res.json(packetier(true, { youSent: sendBack }, { time: Date.now() }));
  })
  .listen(port, () => console.log(`Listening at http://localhost:${port}`));
