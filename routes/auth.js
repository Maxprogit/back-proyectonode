const { Router } = require('express')

const router = require('express').Router()

router.post('/register', async(req, res) =>{
    res.json({
        error: null,
        data: 'datos'
    })
})

module.exports = Router