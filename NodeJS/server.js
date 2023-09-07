const express = require('express');
const app = express();

const PORT = 5000;

app.get("/" , (re,res) => {
    res.send("Hello")
})

app.listen(PORT, () => console.log('Server Corriendo en puerto ${PORT}'));