# Packetier

## Installation

`npm i --save packetier`

## Usage

```javascript
const packetier = require("packetier")
// import Packetier from "packetier" // ES6


const success = true;
const payload = { someFancyData: "yeet" }
const meta = { level: 2 }

// Make a new packet
const packet = packetier(success, payload, meta)

// Pack it into a nice JSON String
const packedPacket = packet.pack();
// '{ "success": true, "payload": { "someFancyData": "yeet" }, "meta": { "level": 2 } }'
```

Example: ExpressJS

```javascript
// Imports
const express = require("express")
const packetier = require("packetier")

// Server setup
const server = express()
  // Use JSON bodies
  .use(express.json())
  // setup a POST route
  .post("/", (req, res) => {  

    const payload = { youSent: req.body }
    const meta = { time: Date.now() }

    res.json(packetier(true, payload, meta))
  })
```

## About

I made Packetier because I was constantly copying the *same*
little `makePacket` function to every web project. I hope you
can find it useful!
