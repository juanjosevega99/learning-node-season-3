'use strict'

const { EventEmitter } = require('events')

const ee = new EventEmitter()

ee.on('ping', (value) => {
    console.log(`Listener 1, received: ${value}`)
})

ee.emit('ping', 'wake up')