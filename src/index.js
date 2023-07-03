const { Pacotes } = require("../configs/Pacotes.js");
const { Server } = require("../configs/Server.js");
const { SSE } = require("../configs/SSE.js")
const { Game } = require("../js/Game.js")
const P = new Pacotes()
const Servidor = new Server()

Servidor.start()
const app = Servidor.app

app.get("/", async function(req, res) {

});

app.get('/sse', (req, res) => {
  SSE(req,res)
});

app.get('/play/:action', (req,res) => {
  let Play = new Game()
  switch (req.params.action) {
    case "D20":
      Play.d20()
    break;
  }
  res.send(true)
})


app.get("/:page", (req, res) => {
  const page = req.params.page;
  const filePath = P.path.join(__dirname, "Pages", page, "index.html");
    
  res.sendFile(filePath);
  });
  
