const { Banco } = require("../js/JSONManger.js");
const Dados = new Banco();

async function SSE(req, res) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');

    const data = await Dados.Buscar("data/game.json");
    const intervalId = setInterval(() => {
      res.write(`data: ${JSON.stringify(data)}\n\n`);
    }, 100);
    req.on('close', () => {
        res.end();
    });
}

module.exports = {
  SSE
}
