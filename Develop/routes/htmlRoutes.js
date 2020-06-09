const router = require('express').Router();
const path = require('path');

router.get('/notes', (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'notes.html');
    res.sendFile(filePath);
})

router.get('*', (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    res.sendFile(filePath);
})

module.exports = router;