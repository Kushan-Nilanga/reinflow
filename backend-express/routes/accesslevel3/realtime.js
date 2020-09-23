const router = require('express').Router()
const cron = require('node-cron')
const axios = require('axios')

SensorBuffer = {};
LightBuffer = {};

router.get('/sensorbuffer', (res, req) => {
    req.status(200).json(SensorBuffer)
})

router.get('/lightbuffer', (res, req) => {
    req.status(200).json(LightBuffer)
})

router.get('/', (req, res) => { res.status(200).json({ "route-access": true }) })

cron.schedule('*/1 * * * * *', () => {
    axios.get(`${process.env.SOCKET_URL}/devicedata/lights`)
        .then(res => {
            LightBuffer = res.data
        }).catch(err => { console.log(err) })
})

module.exports = router;