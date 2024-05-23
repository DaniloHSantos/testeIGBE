const express = require('express');
const app = express();
const port = 3000;

// Servindo arquivos estáticos
app.use(express.static('./src/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/view/index.html");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
