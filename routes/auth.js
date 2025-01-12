const express = require('express');
const router = express.Router();
const auth = require('../Middleware/auth');
const data = require('../models/data');

router.delete('/data/:id', auth, (req, res) => {
    const { id } = req.params;
    const index = data.findIndex(item => item.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Data not found.' });
    }

    data.splice(index, 1);
    res.json({ message: `Data with ID ${id} deleted.` });
});

module.exports = router;
